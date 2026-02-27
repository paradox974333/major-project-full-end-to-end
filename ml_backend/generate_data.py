"""
Synthetic Data Generator for Solar Flare & Cable Risk Prediction
================================================================
Generates realistic training data matching the statistical properties
described in the research paper. Two datasets are created:

1. Solar Flare Dataset: Features = {Fpeak, Fsoft, Fhard, Dflare, Hratio}
   Labels = {C, M, X} based on X-ray flux intensity
   
2. Cable Risk Dataset: Features = {Sf, VCME, Bz, Vsw, Kp, Lat, Lcable}
   Labels = continuous risk score [0, 1]
"""

import numpy as np
import pandas as pd
import os

np.random.seed(42)


def generate_solar_flare_data(n_samples=3000):
    """
    Generate synthetic solar flare data based on RHESSI/GOES characteristics.
    
    Solar flare classes:
    - C-class: X-ray flux 1e-6 to 1e-5 W/m² (log10: -6 to -5)
    - M-class: X-ray flux 1e-5 to 1e-4 W/m² (log10: -5 to -4)
    - X-class: X-ray flux > 1e-4 W/m²       (log10: > -4)
    
    Follows Eq. 2: Flog = log10(Fxray)
    """
    # Class distribution (C: 60%, M: 30%, X: 10% - realistic imbalance)
    n_c = int(n_samples * 0.60)
    n_m = int(n_samples * 0.30)
    n_x = n_samples - n_c - n_m

    data = []

    for cls, n, flux_range in [
        ("C", n_c, (-6.5, -5.0)),
        ("M", n_m, (-5.0, -4.0)),
        ("X", n_x, (-4.0, -3.0)),
    ]:
        # Peak X-ray flux (log scale) - Eq. 2
        Fpeak = np.random.uniform(flux_range[0], flux_range[1], n)

        # Soft X-ray flux (1-8 Angstrom)
        Fsoft = Fpeak + np.random.normal(-0.3, 0.15, n)

        # Hard X-ray flux (0.5-4 Angstrom)
        Fhard = Fpeak + np.random.normal(0.2, 0.2, n)

        # Flare duration in seconds (C: shorter, X: longer)
        base_dur = {"C": 300, "M": 600, "X": 1200}[cls]
        Dflare = np.abs(np.random.normal(base_dur, base_dur * 0.3, n))

        # Hardness ratio - Eq: Hratio = Fhard / Fsoft (in linear space)
        Hratio = 10 ** Fhard / 10 ** Fsoft
        # Add some noise
        Hratio = Hratio * np.random.normal(1.0, 0.1, n)

        for i in range(n):
            data.append({
                "Fpeak": Fpeak[i],
                "Fsoft": Fsoft[i],
                "Fhard": Fhard[i],
                "Dflare": Dflare[i],
                "Hratio": Hratio[i],
                "flare_class": cls,
            })

    df = pd.DataFrame(data)
    # Min-Max normalization (Eq. 1) will be applied during training
    return df.sample(frac=1, random_state=42).reset_index(drop=True)


def generate_cable_risk_data(n_samples=5000):
    """
    Generate synthetic cable risk data combining solar, geomagnetic,
    and geo-spatial features.
    
    Features (Eq. Xc):
    - Sf: Flare severity score (1=C, 2=M, 3=X) - Eq. 6
    - VCME: CME speed (km/s), 300-3000
    - Bz: Southward magnetic field component (nT), -30 to +10
    - Vsw: Solar wind speed (km/s), 300-800
    - Kp: Geomagnetic Kp index, 0-9
    - Lat: Cable latitude (degrees), -70 to 70
    - Lcable: Cable length (km), 100-10000
    
    Risk computed using paper equations 7-14.
    """
    # Flare severity
    Sf = np.random.choice([1, 2, 3], n_samples, p=[0.5, 0.35, 0.15])

    # CME speed correlates with flare severity
    VCME = np.zeros(n_samples)
    for i in range(n_samples):
        base = {1: 500, 2: 1000, 3: 2000}[Sf[i]]
        VCME[i] = np.clip(np.random.normal(base, base * 0.3), 300, 3000)

    # Bz component (negative = southward = more dangerous)
    Bz = np.random.normal(-5, 8, n_samples)
    Bz = np.clip(Bz, -30, 10)

    # Solar wind speed
    Vsw = np.clip(np.random.normal(450, 150, n_samples), 300, 800)

    # Kp index correlates with storm conditions
    Kp = np.zeros(n_samples)
    for i in range(n_samples):
        base_kp = 1.5 + 2.5 * ((VCME[i] - 300) / 2700) + (-Bz[i] / 30) * 3
        Kp[i] = np.clip(base_kp + np.random.normal(0, 1), 0, 9)

    # Geo-spatial features
    Lat = np.random.uniform(-70, 70, n_samples)
    Lcable = np.random.uniform(100, 10000, n_samples)

    # Compute risk score using paper equations
    risk_scores = np.zeros(n_samples)
    for i in range(n_samples):
        # Interaction term (Eq. 8): I = Sf × |Bz|
        I_interaction = Sf[i] * abs(min(Bz[i], 0))

        # Induced electric field proxy (Eq. 7)
        E_induced = I_interaction * Vsw[i] / 1000.0

        # Storm factor from Kp
        storm_factor = Kp[i] / 9.0

        # CME contribution
        cme_factor = (VCME[i] - 300) / 2700.0

        # Base risk
        base_risk = 0.3 * storm_factor + 0.25 * cme_factor + 0.25 * (E_induced / 50.0) + 0.2 * (Sf[i] / 3.0)

        # Latitude amplification (Eq. 14): R_final = R × (1 + α|Lat|)
        alpha = 0.008
        lat_amplified = base_risk * (1 + alpha * abs(Lat[i]))

        # Normalize to [0, 1]
        risk_scores[i] = np.clip(lat_amplified, 0, 1)

    # Risk categories (Eq. 13)
    risk_category = np.where(
        risk_scores >= 0.66, "High",
        np.where(risk_scores >= 0.33, "Medium", "Low")
    )

    df = pd.DataFrame({
        "Sf": Sf,
        "VCME": VCME,
        "Bz": Bz,
        "Vsw": Vsw,
        "Kp": Kp,
        "Lat": Lat,
        "Lcable": Lcable,
        "risk_score": risk_scores,
        "risk_category": risk_category,
    })

    return df


if __name__ == "__main__":
    os.makedirs("data", exist_ok=True)

    print("Generating solar flare classification data...")
    flare_df = generate_solar_flare_data(3000)
    flare_df.to_csv("data/solar_flare_data.csv", index=False)
    print(f"  → {len(flare_df)} samples, class distribution:")
    print(f"    {flare_df['flare_class'].value_counts().to_dict()}")

    print("\nGenerating cable risk prediction data...")
    cable_df = generate_cable_risk_data(5000)
    cable_df.to_csv("data/cable_risk_data.csv", index=False)
    print(f"  → {len(cable_df)} samples, risk distribution:")
    print(f"    {cable_df['risk_category'].value_counts().to_dict()}")

    print("\n✓ Data generation complete! Files saved to data/")
