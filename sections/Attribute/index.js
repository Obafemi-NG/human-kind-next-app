import styles from "./attribute.module.css";

import hashtagImage from "../../public/hashtag_image.webp";
import Image from "next/image";

const Attribute = () => {
  const leftHashtags = [
    {
      id: 1,
      hashtag: "#Plantatree",
      content:
        "Let us remember to plant a tree today and keep our communities alive.",
    },
    {
      id: 2,
      hashtag: "#Payaschoolfee",
      content:
        "An empowerment project like this is intended to empower parents to be able to pay for their children’s school fees as they become more economically viable. A support from people for this project will help make this a reality.",
    },
    {
      id: 3,
      hashtag: "#Savealife",
      content:
        "Our every act of kindness helps to save a community of people from oppression and poverty.",
    },
    {
      id: 4,
      hashtag: "#Feedamouth",
      content:
        "Let us join hands to chase hunger and lack from our global community.",
    },
  ];
  const rightHashtags = [
    {
      id: 1,
      hashtag: "#Lightahousehold",
      content:
        "How sweet it is for us to know that we can be a source of light for others.",
    },
    {
      id: 2,
      hashtag: "#Supportabusiness",
      content:
        "Let us rally round to eliminate poverty from poor communities by supporting an enterprise, today.",
    },
    {
      id: 3,
      hashtag: "#Lightupacommunity",
      content:
        "Together we can chase away poverty, violence, diseases, and hopelessness from our global communities through collaboration. Come, lets light up a community together.",
    },
    {
      id: 4,
      hashtag: "#Quenchathirst",
      content:
        "Shallow streams, long walk, water borne diseases, children, and families. Together we can change this narrative.",
    },
  ];
  return (
    <div className={styles["attribute-section-container"]}>
      <div className={styles["top"]}>
        <p className={styles.title}>
          {" "}
          Our attribute <span className={styles["title-span"]}>
            hashtags
          </span>{" "}
        </p>
        <div className={styles["hashtag-container"]}>
          <Image src="/hashtag.svg" alt="hashtag_icon" width={76} height={76} />
        </div>
      </div>
      <div className={styles["attribute-content"]}>
        <div className={styles["hashtags-section"]}>
          <div className={styles["left-section"]}>
            {leftHashtags.map((hashtag) => (
              <div key={hashtag.id} className={styles["hashtag-card"]}>
                <p className={styles.hashtag}> {hashtag.hashtag} </p>
                <p className={styles.content}> {hashtag.content} </p>
              </div>
            ))}
          </div>
          <div className={styles["right-section"]}>
            {rightHashtags.map((hashtag) => (
              <div key={hashtag.id} className={styles["hashtag-card"]}>
                <p className={styles.hashtag}> {hashtag.hashtag} </p>
                <p className={styles.content}> {hashtag.content} </p>
              </div>
            ))}
          </div>
        </div>
        <div className={styles["right-image-container"]}>
          <Image src={hashtagImage} alt="hashtag_image" />
        </div>
      </div>
    </div>
  );
};

export default Attribute;
