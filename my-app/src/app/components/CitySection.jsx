"use client";
import React from "react";
import styles from "./CitySection.module.css";

const CitySection = () => {
  return (
    <section className={styles.citySection}>
      <div className={styles.cityCard}>
        <div className={styles.videoWrapper}>
          <video
            className={styles.video}
            src="/videos/andaz_delhi_401_reasons_mast.webm"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
        <h2 className={styles.cityName}>Delhi</h2>
        <img
          src="/images/brush.png"
          alt="underline"
          className={styles.brushStroke}
        />
      </div>
    </section>
  );
};

export default CitySection;
