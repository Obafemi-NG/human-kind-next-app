import Image from "next/image";

import styles from "./quotes.module.css";

import QuoteCard from "../../components/QuoteCard";

const Quotes = () => {
  return (
    <div className={styles["quotes-section-container"]}>
      <div className={styles["quotes-title"]}>
        <p>
          Famous <span className={styles["quote-text"]}> quotes</span> we
          believe in
        </p>
        <div className={styles["circular-icon"]}>
          <Image
            src="/circular.svg"
            alt="circular-icon"
            width={80}
            height={40}
          />
        </div>
      </div>
      <div className={styles["quote-section-icon"]}>
        <Image
          src="/loveOutline.svg"
          alt="love-outline"
          width={95}
          height={87}
        />
      </div>
      <div className={styles["quotes-container"]}>
        <QuoteCard />
      </div>
    </div>
  );
};

export default Quotes;
