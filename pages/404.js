import Navbar from "../components/Navbar";
import Footer from "../sections/Footer";
import styles from "../styles/404.module.css";
import notFound from "../public/not-found.png";
import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <>
      <Navbar />
      <div className={styles["page-content"]}>
        <div className={styles["image-container"]}>
          <Image src={notFound} alt="not_found_img" />
        </div>
        <p className={styles.title}>
          <span className={styles.oops}>Oops...</span> Something’s missing
        </p>
        <p className={styles["sub-title"]}>
          {" "}
          <Link href="/contact-us">
            <a className={styles.link}>Contact us</a>
          </Link>{" "}
          or go to{" "}
          <Link href="/">
            <a className={styles.link}>homepage</a>
          </Link>{" "}
        </p>
      </div>
      <Footer />
    </>
  );
};
export default NotFound;
