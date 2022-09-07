import Image from "next/image";
import styles from "./navbar.module.css";
import Link from "next/link";
import { useState } from "react";

const DonateNavbar = () => {
  const [navMenu, setNavMenu] = useState(false);
  return (
    <>
      <div className={styles["navbar-container"]}>
        <Link href="/">
          <a>
            <div className={styles["logo-container"]}>
              <div className={styles["logo-text"]}>
                <h3 className={styles["logo-text-title"]}>HumanKind</h3>
                <p className={styles["logo-text-subtitle"]}>
                  Foundation Global
                </p>
              </div>
              <div className={styles["logo-icon"]}>
                <Image
                  src="/humanKindLogo.svg"
                  alt="logo-icon"
                  width={32}
                  height={32}
                />
              </div>
            </div>
          </a>
        </Link>
        <ul className={styles["nav-links"]}>
          <li className={styles["nav-link"]}>
            {" "}
            <Link href="/about-us">
              <a> About Us</a>
            </Link>{" "}
          </li>
          <li className={styles["nav-link"]}>
            {" "}
            <Link href="/volunteer">
              <a>Volunteer</a>
            </Link>{" "}
          </li>
          <li className={styles["nav-link"]}>
            {" "}
            Projects{" "}
            <span>
              {" "}
              <Image
                src="/dropdown_btn.svg"
                alt="dropdown_icon"
                width={20}
                height={20}
              />{" "}
            </span>{" "}
          </li>
          <li className={styles["nav-link"]}>
            {" "}
            <Link href="/contact-us">
              <a>Contact Us</a>
            </Link>{" "}
          </li>
          <li className={styles["nav-link"]}> Events </li>
          <li className={styles["nav-link"]}> Blog </li>
        </ul>
        <div className={styles["hamburger-btn"]}>
          <Image
            src="/hamburger-btn.svg"
            alt="hamburger-btn"
            width={32}
            height={32}
          />
        </div>
      </div>

      {navMenu && (
        <div className={styles["navbar-dropDown"]}>
          <ul className={styles["mobile-nav-links"]}>
            <li className={styles["nav-link"]}>
              {" "}
              <Link href="/about-us">
                <a> About Us</a>
              </Link>{" "}
            </li>
            <li className={styles["nav-link"]}>
              {" "}
              <Link href="/volunteer">
                <a>Volunteer</a>
              </Link>{" "}
            </li>
            <li className={styles["nav-link"]}>
              {" "}
              Projects{" "}
              <span>
                {" "}
                <Image
                  src="/dropdown_btn.svg"
                  alt="dropdown_icon"
                  width={20}
                  height={20}
                />{" "}
              </span>{" "}
            </li>
            <li className={styles["nav-link"]}>
              {" "}
              <Link href="/contact-us">
                <a>Contact Us</a>
              </Link>{" "}
            </li>
            <li className={styles["nav-link"]}> Events </li>
            <li className={styles["nav-link"]}> Blog </li>
          </ul>
          <div>
            <Link href="donate">
              <a>
                <button className={styles["mobile-nav-btn"]}>
                  Monetary Donation
                </button>{" "}
              </a>
            </Link>
          </div>
          <div className={styles["socials-container"]}>
            <div className={styles.social}>
              <Image src="/facebook.svg" alt="fb_icon" width={24} height={24} />
            </div>
            <div className={styles.social}>
              <Image
                src="/instagram.svg"
                alt="ig_icon"
                width={24}
                height={24}
              />
            </div>
            <div className={styles.social}>
              <Image
                src="/linkedin_icon.svg"
                alt="linkedin_icon"
                width={24}
                height={24}
              />
            </div>
            <div className={styles.social}>
              <Image src="/twitter.svg" alt="tw_icon" width={24} height={24} />
            </div>
            <div className={styles.social}>
              <Image
                src="/whatsapp.svg"
                alt="whatsapp_icon"
                width={24}
                height={24}
              />
            </div>
          </div>
          <p className={styles["mobile-navbar-text"]}>
            At Humankind, our efforts are channeled towards improving living
            conditions through community based projects and skills empowerment
            programs.
          </p>
        </div>
      )}
    </>
  );
};

export default DonateNavbar;
