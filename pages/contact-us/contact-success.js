import Navbar from "../../components/Navbar";
import styles from "../../styles/contact-success.module.css";
import Footer from "../../sections/Footer";
import SuccessImage from "../../public/amico.webp";
import Image from "next/image";
import ScrollUp from "../../components/scrollUp";
import { useRouter } from "next/router";

const ContactSuccess = () => {
  const router = useRouter();
  return (
    <div className={styles["contact-success-container"]}>
      <Navbar />
      <ScrollUp />
      <div className={styles["page-content"]}>
        <p className={styles["page-title"]}>
          {" "}
          Thank you{" "}
          <span className={styles["title-span"]}>for reaching out</span>{" "}
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
          onClick={() => router.push("/blog-posts")}
          className={styles["event-btn"]}
        >
          {" "}
          blog{" "}
        </span>{" "}
      </p>
      <Footer />
    </div>
  );
};

export default ContactSuccess;
