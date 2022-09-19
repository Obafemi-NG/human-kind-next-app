import Image from "next/image";
import styles from "./navbar.module.css";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import logo from "../../public/logo.webp";

const DonateNavbar = () => {
  const [navMenu, setNavMenu] = useState(false);
  const [projectDisplay, setProjectDisplay] = useState(false);
  const router = useRouter();
  const toggleNavMenu = () => {
    setNavMenu(!navMenu);
  };
  const toggleProject = () => {
    setProjectDisplay(!projectDisplay);
  };
  return (
    <>
      <div className={styles["navbar-container"]}>
        <Link href="/">
          <a>
            <div className={styles["logo-container"]}>
              <Image src={logo} alt="Humankind_logo" />
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
          <li onClick={toggleProject} className={styles["nav-link"]}>
            {" "}
            <span
              className={
                projectDisplay == true ? `${styles["project-active"]}` : ""
              }
            >
              Projects
            </span>
            {projectDisplay ? (
              <Image
                src="/dropup_btn.svg"
                alt="dropdown_icon"
                width={20}
                height={20}
              />
            ) : (
              <Image
                src="/dropdown_btn.svg"
                alt="dropdown_icon"
                width={20}
                height={20}
              />
            )}
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
          <li className={styles["nav-link"]}>
            {" "}
            <Link href="/events">
              <a
                className={
                  router.pathname == "/events" ? `${styles["active"]}` : ""
                }
              >
                Events
              </a>
            </Link>{" "}
          </li>
          <li className={styles["nav-link"]}>
            {" "}
            <Link href="/blog-posts">
              <a
                className={
                  router.pathname == "/blog-posts" ? `${styles["active"]}` : ""
                }
              >
                Blog
              </a>
            </Link>{" "}
          </li>
        </ul>
        <div className={styles["hamburger-btn"]}>
          {navMenu ? (
            <div className={styles["toggle-btn"]} onClick={toggleNavMenu}>
              <Image
                src="/close.svg"
                alt="hamburger-btn"
                width={32}
                height={32}
              />
            </div>
          ) : (
            <div className={styles["toggle-btn"]} onClick={toggleNavMenu}>
              <Image
                src="/hamburger-btn.svg"
                alt="hamburger-btn"
                width={32}
                height={32}
              />
            </div>
          )}{" "}
        </div>
      </div>
      {projectDisplay && (
        <div className={styles["projects-container"]}>
          <ul>
            <li className={styles["project-list"]}>
              {" "}
              <Link href="/projects/solar-borehole">
                <a>Solar Boreholes</a>
              </Link>{" "}
            </li>
            <li className={styles["project-list"]}>
              {" "}
              <Link href="/projects/empowerment-project">
                <a>Empowerment Projects</a>
              </Link>{" "}
            </li>
          </ul>
        </div>
      )}

      {navMenu && (
        <div className={styles["navbar-dropDown"]}>
          <ul className={styles["mobile-nav-links"]}>
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
                    router.pathname == "/contact-us"
                      ? `${styles["active"]}`
                      : ""
                  }
                >
                  Contact Us
                </a>
              </Link>{" "}
            </li>
            <li className={styles["nav-link"]}> Events </li>
            <li className={styles["nav-link"]}> Blog </li>
          </ul>
          <div>
            <Link href="donate">
              <a>
                <button className={styles["mobile-nav-btn"]}>
                  {" "}
                  Monetary donation{" "}
                  <span>
                    {" "}
                    <Image
                      src="/monetary_icon.svg"
                      alt="monetary_icon"
                      width={24}
                      height={24}
                    />{" "}
                  </span>
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
