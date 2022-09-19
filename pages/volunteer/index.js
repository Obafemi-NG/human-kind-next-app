import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../sections/Footer";
import styles from "../../styles/volunteer.module.css";
import volunteerImage from "../../public/volunteer.webp";
import mobileVolunteerImage from "../../public/mobile-volunteer-image.webp";
import ScrollUp from "../../components/scrollUp";

const Volunteer = () => {
  return (
    <div className={styles["volunteer-page-container"]}>
      <Navbar />
      <div className={styles["volunteer-page-content"]}>
        <div className={styles["left-section"]}>
          <p className={styles.volunteer}> Volunteer </p>
          <div className={styles["volunteer-image"]}>
            <Image src={volunteerImage} alt="volunteer_image" />
          </div>
          <div className={styles["mobile-volunteer-image"]}>
            <Image src={mobileVolunteerImage} alt="volunteer_image" />
          </div>
        </div>
        <div className={styles["right-section"]}>
          <div className={styles["icon-container"]}>
            <Image
              src="/loveOutline.svg"
              alt="love_outline_icon"
              width={95}
              height={87}
            />
          </div>
          <p className={styles["form-title"]}>
            {" "}
            Be the change{" "}
            <span className={styles["volunteer-span"]}>
              humanity
            </span> needs{" "}
          </p>
          <p className={styles["form-subtitle"]}>
            {" "}
            We always appreciate volunteers who choose decide to work with us on
            this great mission to help improve the terrible living condition of
            people in our communities.{" "}
          </p>
          <p className={styles["fill-form"]}>
            Fill this form to become a volunteer. 👇
          </p>
          <form className={styles["form-container"]}>
            <div className={styles["input-label-container"]}>
              <label className={styles.label}>Fullname</label>
              <input
                className={styles.input}
                type="text"
                name="fullName"
                placeholder="John Doe"
              />
            </div>
            <div className={styles["input-label-container"]}>
              <label className={styles.label}>Email</label>
              <input
                className={styles.input}
                type="email"
                name="email"
                placeholder="john_doe@gmail.com"
              />
            </div>
            <div className={styles["input-label-container"]}>
              <label className={styles.label}>Location</label>
              <input
                className={styles.input}
                type="text"
                name="location"
                placeholder="Lagos, Nigeria"
              />
            </div>
            <div className={styles["input-label-container"]}>
              <label className={styles.label}>Reason</label>
              <textarea
                type="text"
                name="reason"
                placeholder="Tell us why you are interested in being a volunteer..."
                className={styles["text-area"]}
                rows={7}
              />
            </div>
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
          </form>
        </div>
      </div>
      <ScrollUp />
      <Footer />
    </div>
  );
};

export default Volunteer;
