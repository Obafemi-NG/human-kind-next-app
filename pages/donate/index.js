import Navbar from "../../components/Navbar";
import styles from "../../styles/donate.module.css";
import Footer from "../../sections/Footer";
import Image from "next/image";
import donateImage from "../../public/donate_image.png";

const Donate = () => {
  return (
    <div className={styles["donate-page-container"]}>
      <Navbar />
      <div className={styles["donate-page-content"]}>
        <div className={styles["left-section"]}>
          <p className={styles["left-section-title"]}> Donate </p>
          <Image src={donateImage} alt="donate_page_image" />
        </div>
        <div className={styles["right-section"]}>
          <div className={styles["right-section"]}>
            <Image src="/dialog.png" alt="dialog-icon" width={80} height={80} />
            <p className={styles["form-title"]}>
              Help make the world a{" "}
              <span className={styles["contact-us-span"]}>better</span> place
            </p>
            <button className={styles["monetary-btn"]}>
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
            </button>
            <p className={styles["tell-us"]}>
              Other kinds of donations? kindly fill in the details. 👇
            </p>
            <form className={styles["form-container"]}>
              <div className={styles["input-label-container"]}>
                <label className={styles.label}>Name</label>
                <input
                  className={styles.input}
                  type="text"
                  name="fullName"
                  placeholder="John Doe"
                />
              </div>

              <div className={styles["input-label-container"]}>
                <label className={styles.label}>Phone</label>
                <input
                  className={styles.input}
                  type="tel"
                  name="phone"
                  placeholder="+2348080045167"
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
                <label className={styles.label}>Message</label>
                <textarea
                  type="text"
                  name="reason"
                  placeholder="Tell us what you would like to donate..."
                  className={styles["text-area"]}
                  rows={7}
                />
              </div>
              <button className={styles["volunteer-btn"]}> Submit </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Donate;
