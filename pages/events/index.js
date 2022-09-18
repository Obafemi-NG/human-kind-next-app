import Navbar from "../../components/Navbar";
import Footer from "../../sections/Footer";
import styles from "../../styles/events.module.css";
import rafiki from "../../public/rafiki.webp";
import Image from "next/image";
import ScrollUp from "../../components/scrollUp";

const Events = () => {
  return (
    <>
      <Navbar />
      <div className={styles["page-content"]}>
        <div className={styles["image-container"]}>
          <Image src={rafiki} alt="coming-soon-image" />
        </div>
        <p className={styles.title}>
          {" "}
          <span className={styles["event-span"]}>Events</span> are coming soon.{" "}
        </p>
        <p className={styles["sub-title"]}>
          Be the first to hear about our upcoming programs, events and
          developments.
        </p>
        <form className={styles["form-container"]}>
          <input
            type="email"
            name="email"
            placeholder="email"
            className={styles.input}
          />
          <button className={styles["subscribe-btn"]}> Subscribe </button>
        </form>
      </div>
      <ScrollUp />
      <Footer />
    </>
  );
};

export default Events;
