import styles from "../../styles/donate.module.css";
import Footer from "../../sections/Footer";
import Image from "next/image";
import donateImage from "../../public/donate_image.webp";
import DonateNavbar from "../../components/Navbar/donate-navbar";
import mobileDonateImage from "../../public/mobile-donate-image.webp";
import ScrollUp from "../../components/scrollUp";
import { useState } from "react";

const Donate = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    const [value, name] = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className={styles["donate-page-container"]}>
      <DonateNavbar />
      <div className={styles["donate-page-content"]}>
        <div className={styles["left-section"]}>
          <p className={styles["left-section-title"]}> Donate </p>
          <div className={styles["donate-image"]}>
            <Image src={donateImage} alt="donate_page_image" />
          </div>
          <div className={styles["mobile-donate-image"]}>
            <Image src={mobileDonateImage} alt="donate_page_image" />
          </div>
        </div>
        <div className={styles["right-section"]}>
          <div className={styles["right-section"]}>
            <div className={styles["icon-container"]}>
              <Image
                src="/donate_icon.svg"
                alt="dialog-icon"
                width={80}
                height={80}
              />
            </div>
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
                  onChange={handleChange}
                  name="fullName"
                  placeholder="John Doe"
                />
              </div>

              <div className={styles["input-label-container"]}>
                <label className={styles.label}>Phone</label>
                <input
                  className={styles.input}
                  type="tel"
                  onChange={handleChange}
                  name="phone"
                  placeholder="+2348080045167"
                />
              </div>

              <div className={styles["input-label-container"]}>
                <label className={styles.label}>Email</label>
                <input
                  className={styles.input}
                  type="email"
                  onChange={handleChange}
                  name="email"
                  placeholder="john_doe@gmail.com"
                />
              </div>

              <div className={styles["input-label-container"]}>
                <label className={styles.label}>Message</label>
                <textarea
                  type="text"
                  name="reason"
                  onChange={handleChange}
                  placeholder="Tell us what you would like to donate..."
                  className={styles["text-area"]}
                  rows={7}
                />
              </div>
              <button
                onClick={handleSubmit}
                className={styles["volunteer-btn"]}
              >
                {" "}
                Donate{" "}
              </button>
            </form>
          </div>
        </div>
      </div>
      <ScrollUp />
      <Footer />
    </div>
  );
};

export default Donate;
