"use client";

import Button from "@/app/components/Button";
import styles from "./HeroImage.module.css";

export default function HeroImage() {
  return (
    <div className={styles.hero}>
      <div className="container">
        <div className={styles["hero-items"]}>
          <h1 className={styles["hero-heading"]}>
            Explore a world of style and comfort
          </h1>
          <p>
            Explore our handpicked selection of the latest men&apos;s fashion
            trends. From classic suits to casual essentials, we have you
            covered.
          </p>
          <Button variant="tertiary" label="SHOP NOW" size="large" />
        </div>
      </div>
    </div>
  );
}
