import Image from "next/image";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles["footer-container"]}>
      <div className={styles["about-section"]}>
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
        <div className={styles["descriptive-text"]}>
          At humankind our efforts are channeled towards improving living
          conditions through community based projects and skills empowerment
          programs.
        </div>
      </div>
      <div className={styles["links-section"]}>
        <div className={styles["left-links"]}>
          <p className={styles["link-title"]}>Quick links</p>
          <ul className={styles["footer-links"]}>
            <li className={styles.link}> About us </li>
            <li className={styles.link}>Volunteer</li>
            <li className={styles.link}>Events</li>
            <li className={styles.link}> Blog </li>
            <li className={styles.link}> Contact us </li>
          </ul>
        </div>
        <div className={styles["right-links"]}>
          <p className={styles["link-title"]}> Projects</p>
          <ul className={styles["footer-projects"]}>
            <li className={styles.project}> Solar borehole </li>
            <li className={styles.project}> Empowerment projects </li>
          </ul>
        </div>
      </div>
      <div className={styles["contact-section"]}>
        <div className={styles["socials-container"]}>
          <div className={styles.social}>
            <Image src="/facebook.svg" alt="fb_icon" width={24} height={24} />
          </div>
          <div className={styles.social}>
            <Image src="/instagram.svg" alt="ig_icon" width={24} height={24} />
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
        <p className={styles.address}>
          4, Community Close, Odukoya Estate, Akowonjo, Alimosho, Lagos.
        </p>
        <p className={styles.tel}>
          {" "}
          <span className={styles["call-icon"]}>
            {" "}
            {
              <Image src="/call.svg" alt="call_icon" width={18} height={18} />
            }{" "}
          </span>{" "}
          +234 811 200 1648
        </p>
        <p className={styles.email}>email@example.com</p>
      </div>
    </div>
  );
};

export default Footer;
