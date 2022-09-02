import Image from "next/image";
import styles from "./navbar.module.css";

const DonateNavbar = () => {
  return (
    <div className={styles["navbar-container"]}>
      <div className={styles["logo-container"]}>
        <div className={styles["logo-text"]}>
          <h3 className={styles["logo-text-title"]}>HumanKind</h3>
          <p className={styles["logo-text-subtitle"]}>Foundation</p>
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
      <ul className={styles["nav-links"]}>
        <li className={styles["nav-link"]}> About Us </li>
        <li className={styles["nav-link"]}> Volunteer </li>
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
        <li className={styles["nav-link"]}> Contact Us </li>
        <li className={styles["nav-link"]}> Events </li>
        <li className={styles["nav-link"]}> Blog </li>
      </ul>
    </div>
  );
};

export default DonateNavbar;
