"""Shared risk scoring helpers for training and inference."""

import math

LOW_MEDIUM_THRESHOLD = 0.25
MEDIUM_HIGH_THRESHOLD = 0.45


def clamp(value, min_value=0.0, max_value=1.0):
    return min(max(float(value), min_value), max_value)


def flare_class_from_peak_log_flux(fpeak):
    """Return the GOES flare tier from log10 peak X-ray flux."""
    if fpeak >= -4.0:
        return "X"
    if fpeak >= -5.0:
        return "M"
    return "C"


def severity_from_flare_class(flare_class):
    return {"C": 1, "M": 2, "X": 3}.get(str(flare_class).upper(), 1)


def risk_category_from_score(score):
    if score >= MEDIUM_HIGH_THRESHOLD:
        return "High"
    if score >= LOW_MEDIUM_THRESHOLD:
        return "Medium"
    return "Low"


def cable_risk_score(sf, vcme, bz, vsw, kp, lat, lcable):
    """
    Deterministic target used to train the cable-risk ML models.

    It combines storm intensity, CME speed, southward Bz coupling, flare
    severity, auroral-latitude exposure, and cable length. The constants are
    calibrated for a stable educational 0..1 score, not operational forecasting.
    """
    sf = clamp(sf, 1.0, 3.0)
    vcme = clamp(vcme, 300.0, 3000.0)
    bz = float(bz)
    vsw = clamp(vsw, 300.0, 900.0)
    kp = clamp(kp, 0.0, 9.0)
    lat = clamp(lat, -90.0, 90.0)
    lcable = clamp(lcable, 50.0, 15000.0)

    storm_factor = kp / 9.0
    cme_factor = (vcme - 300.0) / 2700.0
    southward_bz = max(0.0, -bz)
    bz_factor = clamp(southward_bz / 30.0)
    wind_factor = clamp((vsw - 300.0) / 600.0)
    flare_factor = sf / 3.0

    # Coupling proxy: southward Bz matters most, with solar-wind speed and
    # flare severity modulating the stress.
    coupling_factor = clamp(flare_factor * bz_factor * (0.65 + 0.35 * wind_factor))

    # GIC exposure is largest near auroral electrojet latitudes rather than
    # increasing forever toward the poles.
    auroral_factor = math.exp(-((abs(lat) - 60.0) ** 2) / (2.0 * 20.0**2))

    # Longer conductive paths accumulate more induced voltage, with saturation.
    length_factor = clamp(lcable / 5000.0)

    base_risk = (
        0.30 * storm_factor
        + 0.22 * cme_factor
        + 0.25 * coupling_factor
        + 0.18 * flare_factor
    )
    geography_multiplier = 0.70 + 0.25 * auroral_factor + 0.25 * length_factor

    score = (
        base_risk * geography_multiplier
        + 0.08 * auroral_factor * storm_factor
        + 0.05 * length_factor * coupling_factor
    )
    return round(clamp(score), 4)


def cable_score_from_probabilities(probabilities):
    """Fallback continuous score from class probabilities."""
    return clamp(
        probabilities.get("Low", 0.0) * (LOW_MEDIUM_THRESHOLD / 2.0)
        + probabilities.get("Medium", 0.0) * ((LOW_MEDIUM_THRESHOLD + MEDIUM_HIGH_THRESHOLD) / 2.0)
        + probabilities.get("High", 0.0) * ((1.0 + MEDIUM_HIGH_THRESHOLD) / 2.0)
    )
