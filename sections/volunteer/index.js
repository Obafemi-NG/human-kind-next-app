import Image from "next/image";
import styles from "./volunteer.module.css";

import volunteerImage from "../../public/volunteer.webp";
import mobileVolunteerImage from "../../public/mobile-volunteer-img.webp";

const Volunteer = () => {
  return (
    <div className={styles["volunteer-section-container"]}>
      <div className={styles["right-section"]}>
        <Image src={volunteerImage} alt="volunteer_section_img" />
      </div>
      <div className={styles["left-section"]}>
        <div className={styles["icon-container"]}>
          <Image
            src="/volunteer_icon.svg"
            alt="volunteer_icon"
            width={80}
            height={80}
          />
        </div>
        <p className={styles.title}>
          {" "}
          Become a <span className={styles["volunteer-span"]}>
            volunteer
          </span>{" "}
          and be the <span className={styles["volunteer-span"]}>change</span>{" "}
          humanity needs.{" "}
        </p>
        <p className={styles.subtitle}>
          We will always appreciate volunteers who choose to work with us on
          this great mission to help improve the terrible living condition of
          people in our communities.
        </p>
        <button className={styles["volunteer-btn"]}>
          {" "}
          Volunteer{" "}
          <span className={styles["btn-span"]}>
            {" "}
            <Image
              src="/love_white.svg"
              alt="love_icon"
              width={20}
              height={20}
            />{" "}
          </span>{" "}
        </button>
      </div>

      <div className={styles["mobile-volunteer-image"]}>
        <Image src={mobileVolunteerImage} alt="volunteer-image" />
      </div>
    </div>
  );
};

export default Volunteer;
