import Image from "next/image";
import Link from "next/link";

// imported CSS
import styles from "./CarouselScroll.module.css";

const CarouselScroll = ({ children }) => {
  return (
    <div className={styles["carouselContainer"]}>
      <div className={styles["carouselContainerInner"]}>{children}</div>
      <div className={styles["control-container"]}>
        <a href="#1" className={styles["left-scroll"]}>
          <Image
            src="/scroll_left.svg"
            alt="scroll_icon"
            width={40}
            height={40}
          />
        </a>
        <Link href="#3" scroll={false} className={styles["right-scroll"]}>
          <a>
            <Image
              src="/scroll_right.svg"
              alt="scroll_icon"
              width={40}
              height={40}
            />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default CarouselScroll;
