import Image from "next/image";
import Link from "next/link";
import styles from "./navbar.module.css";
import { useState } from "react";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
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
              <a
                className={
                  router.pathname == "/about-us" ? `${styles["active"]}` : ""
                }
              >
                {" "}
                About Us
              </a>
            </Link>{" "}
          </li>
          <li className={styles["nav-link"]}>
            {" "}
            <Link href="/volunteer">
              <a
                className={
                  router.pathname == "/volunteer" ? `${styles["active"]}` : ""
                }
              >
                Volunteer
              </a>
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
              <a
                className={
                  router.pathname == "/contact-us" ? `${styles["active"]}` : ""
                }
              >
                Contact Us
              </a>
            </Link>{" "}
          </li>
          <li className={styles["nav-link"]}> Events </li>
          <li className={styles["nav-link"]}> Blog </li>
        </ul>
        <Link href="donate">
          <a>
            <button className={styles["nav-btn"]}>Donate now</button>{" "}
          </a>
        </Link>
        <div className={styles["hamburger-btn"]}>
          <Image
            src="/hamburger-btn.svg"
            alt="hamburger-btn"
            width={32}
            height={32}
          />
        </div>
      </div>
      {/* <div className={styles["navbar-dropDown"]}>
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
        <Link href="donate">
          <a>
            <button className={styles["nav-btn"]}>Donate now</button>{" "}
          </a>
        </Link>
      </div> */}
    </>
  );
};

export default Navbar;
