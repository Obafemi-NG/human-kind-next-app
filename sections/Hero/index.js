import Image from "next/image";

// style Module
import styles from "./hero.module.css";

// imported Images
import topLeftImage from "../../public/left_1.png";
import bottomLeftImage from "../../public/left_2.png";
import topRightImage from "../../public/right_1.png";
import bottomRightImage from "../../public/right_2.png";
import centerImage from "../../public/display.png";
import Link from "next/link";
import leftIllustration from "../../public/left-illustration.png";
import rightIllustration from "../../public/right-illustration.png";

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
          Humankind foundation is a non governmental organization that is
          focused on providing developmental solutions to individuals and
          communities through green energy. We build strength, stability and
          self sufficiency to both individuals and under developed or developing
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
                    width={32}
                    height={32}
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
