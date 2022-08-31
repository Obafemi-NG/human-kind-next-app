import Image from "next/image";
import styles from "./CarouselCard.module.css";

const CarouselCard = ({ id, title, subTitle, imgLink, content, learnMore }) => {
  return (
    <div className={styles["carousel-card-container"]}>
      <div className={styles["carousel-item"]} id={id}>
        <div className={styles["image-container"]}>
          <Image src={imgLink} alt={`${title}_img`} />
        </div>
        <div className={styles["card-details"]}>
          <p className={styles.title}>{title}</p>
          <p className={styles.subtitle}> {subTitle} </p>
          <p className={styles.content}> {content} </p>
          {learnMore && (
            <button className={styles["learn-btn"]}>
              {" "}
              Learn more{" "}
              <span className={styles["learn-more-icon"]}>
                {" "}
                <Image
                  src="/learn_more_icon.svg"
                  alt="learnMoreIcon"
                  width={12}
                  height={12}
                />{" "}
              </span>{" "}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;
