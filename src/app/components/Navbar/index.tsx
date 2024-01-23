"use client";

import styles from "./Navbar.module.css";
import IconButton from "../IconButton";
import NotificationIcon from "../IconButton/icons/Notification";
import LikeIcon from "../IconButton/icons/Like";
import ShopIcon from "../IconButton/icons/Shop";
import Divider from "../Divider";
import Button from "../Button";

export default function Navbar() {
  return (
    <div className={`${styles["navbar-wrapper"]} container`}>
      <div className={styles.navbar}>
        <a href="localhost:3000">
          <img src="logo.svg" alt="Logo" width={94} height={35} />
        </a>

        <div className={styles["navbar-items"]}>
          <div className={styles["navbar-icons"]}>
            <IconButton>
              <NotificationIcon />
            </IconButton>

            <IconButton>
              <LikeIcon />
            </IconButton>

            <IconButton variant="secondary">
              <ShopIcon />
            </IconButton>
          </div>

          <Divider />

          <div className={styles["navbar-buttons"]}>
            <Button variant="secondary" label="Sign in" />
            <Button label="Register" />
          </div>
        </div>
      </div>
    </div>
  );
}
