import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../sections/Footer";
import styles from "../../styles/volunteer.module.css";
import volunteerImage from "../../public/volunteer.webp";
import mobileVolunteerImage from "../../public/mobile-volunteer-image.webp";
import ScrollUp from "../../components/scrollUp";

import { useState } from "react";

const Volunteer = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
    location: "",
  });
  const handleChange = (e) => {
    const [name, value] = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
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
            We will appreciate volunteers who choose to go with us on this
            mission to help improve the terrible living condition of people in
            our communities.{" "}
          </p>
          <p className={styles["fill-form"]}>
            Kindly fill this form to become a volunteer. ????
          </p>
          <form className={styles["form-container"]} onSubmit={handleSubmit}>
            <div className={styles["input-label-container"]}>
              <label className={styles.label}>Fullname</label>
              <input
                className={styles.input}
                type="text"
                name="fullName"
                placeholder="John Doe"
                onChange={handleChange}
                value={formData.fullName}
              />
            </div>
            <div className={styles["input-label-container"]}>
              <label className={styles.label}>Email</label>
              <input
                className={styles.input}
                type="email"
                name="email"
                onChange={handleChange}
                placeholder="john_doe@gmail.com"
                value={formData.email}
              />
            </div>
            <div className={styles["input-label-container"]}>
              <label className={styles.label}>Location</label>
              <input
                className={styles.input}
                type="text"
                name="location"
                onChange={handleChange}
                placeholder="Lagos, Nigeria"
                value={formData.location}
              />
            </div>
            <div className={styles["input-label-container"]}>
              <label className={styles.label}>Reason</label>
              <textarea
                type="text"
                value={formData.message}
                name="reason"
                onChange={handleChange}
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
