import Navbar from "../../components/Navbar";
import styles from "../../styles/volunteer-success.module.css";
import SuccessImage from "../../public/amico.png";
import Image from "next/image";
import Footer from "../../sections/Footer";

const VolunteerSuccess = () => {
  return (
    <div className={styles["volunteer-success-container"]}>
      <Navbar />
      <div className={styles["page-content"]}>
        <p className={styles["page-title"]}>
          {" "}
          Thank you{" "}
          <span className={styles["title-span"]}>for your interest</span>{" "}
        </p>
        <p className={styles["page-subtitle"]}>
          You will hear from us via e-mail{" "}
        </p>
        <div className={styles["image-container"]}>
          <Image src={SuccessImage} alt="success_image" />
        </div>
      </div>
      <p className={styles["anything-else"]}>
        {" "}
        Anything else? View our{" "}
        <span className={styles["event-btn"]}> events </span>{" "}
      </p>
      <Footer />
    </div>
  );
};

export default VolunteerSuccess;
