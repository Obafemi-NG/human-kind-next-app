import Navbar from "../../components/Navbar";
import styles from "../../styles/contact-us.module.css";
import Image from "next/image";
import Footer from "../../sections/Footer";
import contactUsImage from "../../public/contact-us.png";
import mobileContactUsImage from "../../public/mobile-contact-us.png";
import ScrollUp from "../../components/scrollUp";

const ContactUs = () => {
  return (
    <div className={styles["contact-us-container"]}>
      <Navbar />
      <div className={styles["page-container"]}>
        <div className={styles["left-section"]}>
          <p className={styles["contact-us"]}>Contact us</p>
          <div className={styles["contact-us-image"]}>
            <Image src={contactUsImage} alt="contact-us-image" />
          </div>
          <div className={styles["mobile-contact-us-image"]}>
            <Image src={mobileContactUsImage} alt="contact-us-image" />
          </div>
        </div>
        <div className={styles["right-section"]}>
          <div className={styles["icon-container"]}>
            <Image src="/dialog.png" alt="dialog-icon" width={80} height={80} />
          </div>
          <p className={styles["form-title"]}>
            We&rsquo;d love to hear from{" "}
            <span className={styles["contact-us-span"]}>you</span>
          </p>
          <p className={styles["tell-us"]}>
            Tell us what&rsquo;s on your mind. 👇
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
                placeholder="Tell us why you are interested in being a volunteer..."
                className={styles["text-area"]}
                rows={7}
              />
            </div>
            <button className={styles["volunteer-btn"]}> Submit </button>
          </form>
        </div>
      </div>
      <div className={styles["bottom-left"]}>
        <p className={styles["location"]}>
          {" "}
          Our <span className={styles["location-span"]}>Location</span>{" "}
        </p>
        <p className={styles["find-us"]}>Find us at: </p>
        <p className={styles.address}>
          {" "}
          4, Community Close, Odukoya Estate, Akowonjo, Alimosho, Lagos.{" "}
        </p>
        <p className={styles.tel}> +2348112001648 </p>
        <p className={styles.msg}>
          {" "}
          Give us a call - or better still - come around to say hi.{" "}
        </p>
        <p className={styles.email}> hfglobal@humankindorg.com </p>
      </div>
      <ScrollUp />
      <Footer />
    </div>
  );
};
export default ContactUs;
