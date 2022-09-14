import Image from "next/image";
import styles from "../styles/scroll-up.module.css";
import { useState, useEffect } from "react";

const ScrollUp = () => {
  const [showScrollBtn, setShowScrollBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 700) {
        setShowScrollBtn(true);
      } else {
        setShowScrollBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {showScrollBtn && (
        <div onClick={goToTop} className={styles["scroll-btn"]}>
          <Image
            src="/scroll-up-btn.svg"
            alt="scroll-up btn"
            height={44}
            width={44}
          />
        </div>
      )}
    </>
  );
};

export default ScrollUp;
