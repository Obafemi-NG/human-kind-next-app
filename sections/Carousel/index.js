import styles from "./carousel.module.css";

import CarouselCard from "../../components/CarouselCard";

// Image import
import beneficiary from "../../public/beneficiary.png";
import sme from "../../public/sme.png";
import solar from "../../public/solar-borehole.png";
import CarouselScroll from "../../components/CarouselScroll";
import Image from "next/image";

const CarouselSection = () => {
  const carouselData = [
    {
      id: "1",
      title: "Solar Boreholes",
      subTitle: "",
      content:
        "We aim to provide access to water in communities where drinking water is not readily available to the people. This project is intended to help communities, especially in the rural areas, to overcome challenges relating to water. ",
      imgUrl: solar,
      learnMore: true,
    },
    {
      id: "2",
      title: "Empowerment Projects",
      subTitle: "(SME’s and Skill Acquisitions)",
      content:
        "The Humankind Foundation empowerment projects are designed to empower people to acquire the required skill set needed to learn enterprise in the areas of building of solar panels, fashion and design, cosmetics and soap making, and many other crafts for sustainability. ",
      imgUrl: sme,
      learnMore: true,
    },
    {
      id: "3",
      title: "Beneficiaries Experience",
      subTitle: "",
      content:
        "We intend to mentor and monitor the progress of beneficiaries of this project. We would be visiting communities and people to know what progress they have made and to know what challenges they may be facing. People will be expected to share their experiences as well.",
      imgUrl: beneficiary,
      learnMore: false,
    },
  ];
  const mappedItem = carouselData.map((data, index) => (
    <CarouselCard
      key={index}
      title={data.title}
      subTitle={data.subTitle}
      content={data.content}
      imgLink={data.imgUrl}
      learnMore={data.learnMore}
    />
  ));
  return (
    <div className={styles["carousel-section-container"]}>
      <div className={styles["top-container"]}>
        <div className={styles.title}>
          <p>
            {" "}
            How we are{" "}
            <span className={styles["title-span"]}>changing lives</span>{" "}
          </p>
        </div>
        <div className={styles.subtitle}>
          <p>
            At Humankind, our efforts are channeled towards improving living
            conditions through community based projects and skills empowerment
            programs.
          </p>
        </div>
      </div>
      <div className={styles["carousel-cards-container"]}>
        <CarouselScroll>{mappedItem}</CarouselScroll>
      </div>
      <div className={styles["mobile-carousel-cards-container"]}>
        {mappedItem}
      </div>
    </div>
  );
};

export default CarouselSection;
