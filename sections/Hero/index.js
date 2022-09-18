// import image-tag for images and svg.
import Image from "next/image";

// style Module
import styles from "./hero.module.css";

// imported Images
import centerImage from "../../public/display.webp";
import leftIllustration from "../../public/left-illustration.webp";
import rightIllustration from "../../public/right-illustration.webp";

// imported link for routing
import Link from "next/link";

const Hero = () => {
  return (
    <div className={styles["hero-container"]}>
      <div className={styles["left-illus"]}>
        <Image src={leftIllustration} alt="left-illustration" />
      </div>
      <div className={styles["center-illus"]}>
        <h1 className={styles["hero-title"]}>
          <span className={styles.highlight}>HumanKind</span>
          <span className={styles.global}>Foundation Global</span>
        </h1>
        <div className={styles["icon-container"]}>
          <Image src="/curved.svg" alt="curved-svg" width={208} height={31} />
        </div>
        <p className={styles["hero-subtitle"]}>
          Humankind foundation global is a non governmental organization focused
          on providing developmental solutions to individuals and communities
          through green energy. We bring strength, stability and self
          sufficiency to both individuals and under developed or developing
          communities.
        </p>
        <div className={styles["hero-btn"]}>
          <Link href="/donate">
            <a passHref>
              <button className={styles["hero-donate-btn"]}>Donate now</button>
            </a>
          </Link>
          <Link href="/volunteer">
            <a passHref>
              <div className={styles["hero-volunteer-btn"]}>
                <p className={styles.volunteer}>Volunteer</p>
                <span className={styles["volunteer-icon"]}>
                  <Image
                    src="/volunteerIcon.svg"
                    alt="volunteer-btn"
                    width={24}
                    height={24}
                  />
                </span>
              </div>
            </a>
          </Link>
        </div>
        <div className={styles["center-image"]}>
          <Image src={centerImage} alt="display-center" />
        </div>
      </div>
      <div className={styles["right-illus"]}>
        <Image src={rightIllustration} alt="right-illustration" />
      </div>
    </div>
  );
};

export default Hero;
