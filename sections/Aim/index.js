import Image from "next/image";

import styles from "./aim.module.css";

import aimImage from "../../public/aim-image.png";

const Aim = () => {
  const aimPoints = [
    {
      id: 1,
      iconLink: "/aim_icon_1.svg",
      point:
        "To provide developmental projects to communities through green energy e.g solar borehole projects",
    },
    {
      id: 2,
      iconLink: "/aim_icon_2.svg",
      point:
        "To equip and give support to individuals to help facilitate empowerment programs.",
    },
    {
      id: 3,
      iconLink: "/aim_icon_3.svg",
      point: "Impact developmental projects across communities in Africa.",
    },
    {
      id: 4,
      iconLink: "/aim_icon_4.svg",
      point:
        "To expose people to workshops and help them to develop the expertises required in building technological solutions.",
    },
    {
      id: 5,
      iconLink: "/aim_icon_5.svg",
      point:
        "To expose people to information technology by organizing boot camps across communities.",
    },
  ];
  return (
    <div className={styles["aim-container"]}>
      <p className={styles.title}>
        {" "}
        Our <span className={styles["title-span"]}>aims & objectives</span>{" "}
      </p>
      <div className={styles.content}>
        <div className={styles["left-section"]}>
          {aimPoints.map((point) => {
            return (
              <div key={point.id} className={styles["aim-card"]}>
                <Image
                  src={point.iconLink}
                  alt="icon_"
                  width={48}
                  height={48}
                />
                <p className={styles.point}> {point.point} </p>
              </div>
            );
          })}
        </div>
        <div className={styles["right-section"]}>
          <div className={styles["aims-image-container"]}>
            <Image src={aimImage} alt="aim_image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aim;
