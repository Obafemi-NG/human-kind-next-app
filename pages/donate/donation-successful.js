import Navbar from "../../components/Navbar";
import Footer from "../../sections/Footer";
import styles from "../../styles/donation-successful.module.css";
import Image from "next/image";
import SuccessImage from "../../public/amico.webp";
import ScrollUp from "../../components/scrollUp";
import { useRouter } from "next/router";

const DonationSuccessful = () => {
  const router = useRouter();
  return (
    <div className={styles["donation-success-container"]}>
      <Navbar />
      <div className={styles["page-content"]}>
        <p className={styles["page-title"]}>
          {" "}
          Thank you{" "}
          <span className={styles["title-span"]}>
            for your interest in donating
          </span>{" "}
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
        Anything else? Read from our{" "}
        <span
          onClick={() => {
            router.push("/blog-posts");
          }}
          className={styles["event-btn"]}
        >
          {" "}
          blog{" "}
        </span>{" "}
      </p>
      <ScrollUp />
      <Footer />
    </div>
  );
};

export default DonationSuccessful;
