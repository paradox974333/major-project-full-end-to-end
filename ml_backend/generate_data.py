"""
Synthetic data generator for the solar-flare and cable-risk models.

The generated data is an educational proxy. It is designed to keep feature
ranges realistic enough for demos while making the scoring math explicit and
reproducible.
"""

import os

import numpy as np
import pandas as pd

from risk_math import cable_risk_score, risk_category_from_score

np.random.seed(42)


def generate_solar_flare_data(n_samples=3000):
    """
    Generate synthetic GOES-like solar flare records.

    Flare tiers are defined by log10 peak X-ray flux:
    - C: [-6, -5)
    - M: [-5, -4)
    - X: >= -4
    """
    n_c = int(n_samples * 0.60)
    n_m = int(n_samples * 0.30)
    n_x = n_samples - n_c - n_m

    data = []

    for cls, n, flux_range in [
        ("C", n_c, (-6.0, -5.0)),
        ("M", n_m, (-5.0, -4.0)),
        ("X", n_x, (-4.0, -3.0)),
    ]:
        fpeak = np.random.uniform(flux_range[0], flux_range[1], n)
        fsoft = fpeak + np.random.normal(-0.3, 0.15, n)
        fhard = fpeak + np.random.normal(0.2, 0.2, n)

        base_duration = {"C": 300, "M": 600, "X": 1200}[cls]
        duration = np.abs(np.random.normal(base_duration, base_duration * 0.3, n))

        # Ratio of hard to soft flux in linear space.
        hardness_ratio = (10**fhard / 10**fsoft) * np.random.normal(1.0, 0.1, n)

        for i in range(n):
            data.append(
                {
                    "Fpeak": fpeak[i],
                    "Fsoft": fsoft[i],
                    "Fhard": fhard[i],
                    "Dflare": duration[i],
                    "Hratio": max(hardness_ratio[i], 0.01),
                    "flare_class": cls,
                }
            )

    return pd.DataFrame(data).sample(frac=1, random_state=42).reset_index(drop=True)


def generate_cable_risk_data(n_samples=5000):
    """
    Generate synthetic cable-risk records.

    Features:
    - Sf: flare severity score, where C=1, M=2, X=3
    - VCME: CME speed in km/s
    - Bz: IMF Bz in nT, where negative/southward is higher risk
    - Vsw: solar-wind speed in km/s
    - Kp: geomagnetic storm index
    - Lat: cable segment mean latitude
    - Lcable: cable segment length in km
    """
    sf = np.random.choice([1, 2, 3], n_samples, p=[0.5, 0.35, 0.15])

    vcme = np.zeros(n_samples)
    for i in range(n_samples):
        base = {1: 500, 2: 1000, 3: 2000}[sf[i]]
        vcme[i] = np.clip(np.random.normal(base, base * 0.3), 300, 3000)

    bz = np.clip(np.random.normal(-5, 8, n_samples), -30, 10)
    vsw = np.clip(np.random.normal(450, 150, n_samples), 300, 800)

    kp = np.zeros(n_samples)
    for i in range(n_samples):
        base_kp = 1.5 + 2.5 * ((vcme[i] - 300) / 2700) + (max(0, -bz[i]) / 30) * 3
        kp[i] = np.clip(base_kp + np.random.normal(0, 1), 0, 9)

    lat = np.random.uniform(-70, 70, n_samples)
    lcable = np.random.uniform(100, 10000, n_samples)

    risk_scores = np.array([
        cable_risk_score(sf[i], vcme[i], bz[i], vsw[i], kp[i], lat[i], lcable[i])
        for i in range(n_samples)
    ])
    risk_category = np.array([risk_category_from_score(score) for score in risk_scores])

    return pd.DataFrame(
        {
            "Sf": sf,
            "VCME": vcme,
            "Bz": bz,
            "Vsw": vsw,
            "Kp": kp,
            "Lat": lat,
            "Lcable": lcable,
            "risk_score": risk_scores,
            "risk_category": risk_category,
        }
    )


if __name__ == "__main__":
    os.makedirs("data", exist_ok=True)

    print("Generating solar flare classification data...")
    flare_df = generate_solar_flare_data(3000)
    flare_df.to_csv("data/solar_flare_data.csv", index=False)
    print(f"  -> {len(flare_df)} samples, class distribution:")
    print(f"    {flare_df['flare_class'].value_counts().to_dict()}")

    print("\nGenerating cable risk prediction data...")
    cable_df = generate_cable_risk_data(5000)
    cable_df.to_csv("data/cable_risk_data.csv", index=False)
    print(f"  -> {len(cable_df)} samples, risk distribution:")
    print(f"    {cable_df['risk_category'].value_counts().to_dict()}")

    print("\n[OK] Data generation complete. Files saved to data/")
