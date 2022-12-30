import styles from "./newsletter.module.css";
import { useState } from "react";

import newsletterImage from "../../public/newsletter_image.webp";
import mobileNewsletterImage from "../../public/mobile-newsletter-img.webp";
import Image from "next/image";
import MailchimpSubscribe from "react-mailchimp-subscribe";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const postUrl = `https://humankindorg.us21.list-manage.com/subscribe?u=${process.env.MAILCHIMP_U}&id=${process.env.MAILCHIMP_ID}`;
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(email);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmail({
      [name]: value,
    });
  };
  return (
    <div className={styles["newsletter-section-container"]}>
      <div className={styles["left-section"]}>
        <p className={styles.title}>
          Subscribe to our{" "}
          <span className={styles["title-span"]}>newsletter</span>{" "}
        </p>
        <p className={styles.subtitle}>
          {" "}
          Be the first to hear about our upcoming programs, events and
          developments.{" "}
        </p>
        <div className={styles["mobile-newsletter-image"]}>
          <Image src={mobileNewsletterImage} alt="mobile-newsletter-image" />
        </div>
        <div>
          <MailchimpSubscribe
            url={postUrl}
            render={(subscribe, status, message) => (
              <div className={styles["input-section"]} onSubmit={handleSubmit}>
                <label className={styles.label}>Email</label>
                <input
                  className={styles.input}
                  type="email"
                  name="email"
                  onChange={handleChange}
                  value={email}
                  placeholder="youremailaddress@yahoomail.com"
                />
                <button className={styles["newsletter-btn"]}>
                  {" "}
                  Subscribe{" "}
                </button>
              </div>
            )}
          />
        </div>
        {/* <form className={styles["input-section"]} onSubmit={handleSubmit}>
          <label className={styles.label}>Email</label>
          <input
            className={styles.input}
            type="email"
            name="email"
            onChange={handleChange}
            placeholder="youremailaddress@yahoomail.com"
          />
          <button
            // onClick={() =>
            //   console.log(process.env.MAILCHIMP_U, process.env.MAILCHIMP_ID)
            // }
            className={styles["newsletter-btn"]}
          >
            {" "}
            Subscribe{" "}
          </button>
        </form> */}
      </div>
      <div className={styles["right-section"]}>
        <Image src={newsletterImage} alt="newsletter_img" />
      </div>
    </div>
  );
};

export default Newsletter;
