import styles from "./newsletter.module.css";

import newsletterImage from "../../public/newsletter_image.png";
import Image from "next/image";

const Newsletter = () => {
  return (
    <div className={styles["newsletter-section-container"]}>
      <div className={styles["left-section"]}>
        <p className={styles.title}>
          Subscribe to our{" "}
          <span className={styles["title-span"]}>newsletter</span>{" "}
        </p>
        <p className={styles.subtitle}>
          {" "}
          Be the first to hear about our upcoming programs, events and
          developments.{" "}
        </p>
        <form className={styles["input-section"]}>
          <label className={styles.label}>Email</label>
          <input
            className={styles.input}
            type="email"
            name="email"
            placeholder="john_doe@yahoomail.com"
          />
          <button className={styles["newsletter-btn"]}> Subscribe </button>
        </form>
      </div>
      <div className={styles["right-section"]}>
        <Image src={newsletterImage} alt="newsletter_img" />
      </div>
    </div>
  );
};

export default Newsletter;
