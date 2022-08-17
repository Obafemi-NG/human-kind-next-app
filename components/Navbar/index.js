import Image from "next/image";
import styles from "./navbar.module.css";

const Navbar = () => {
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
        <li className={styles["nav-link"]}> Projects </li>
        <li className={styles["nav-link"]}> Contact Us </li>
        <li className={styles["nav-link"]}> Events </li>
        <li className={styles["nav-link"]}> Blog </li>
      </ul>
      <button className={styles["nav-btn"]}>Donate now</button>
    </div>
  );
};

export default Navbar;
