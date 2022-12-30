import styles from "../../styles/donate.module.css";
import Footer from "../../sections/Footer";
import Image from "next/image";
import donateImage from "../../public/donate_image.webp";
import DonateNavbar from "../../components/Navbar/donate-navbar";
import mobileDonateImage from "../../public/mobile-donate-image.webp";
import ScrollUp from "../../components/scrollUp";
import { useState } from "react";
import { PaystackButton } from "react-paystack";
import { useRouter } from "next/router";
import CurrencyInput from "react-currency-input-field";

const Donate = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    reason: "",
    donatorEmail: "",
  });
  const [displayEmail, setDisplayEmail] = useState(false);
  const [amountInput, setAmountInput] = useState("");

  const handleAmountChange = (newValue) => {
    if (newValue === undefined) {
      setAmountInput("0");
    } else {
      setAmountInput(newValue);
    }
  };

  // Paystack Configuration and Logic.
  const config = {
    reference: new Date().getTime().toString(),
    email: formData.donatorEmail,
    amount: amountInput * 100,
    publicKey: "pk_live_70d9c3a2e100ef2889050ea0f32bc796641aa758",
  };
  const handlePaystackSuccessAction = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    router.push("/donate/donation-successful");
    console.log(reference);
  };
  // you can call this function anything
  const handlePaystackCloseAction = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
  };
  const componentProps = {
    ...config,
    text: "Donate to HumanKind Foundation",
    onSuccess: (reference) => handlePaystackSuccessAction(reference),
    onClose: handlePaystackCloseAction,
  };

  // Logic to handle input values and submission.
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      reason: "",
      donatorEmail: "",
      amount: "",
    });
    console.log(formData);
  };
  return (
    <div className={styles["donate-page-container"]}>
      <DonateNavbar />
      <div className={styles["donate-page-content"]}>
        <div className={styles["left-section"]}>
          <p className={styles["left-section-title"]}> Donate </p>
          <div className={styles["donate-image"]}>
            <Image src={donateImage} alt="donate_page_image" />
          </div>
          <div className={styles["mobile-donate-image"]}>
            <Image src={mobileDonateImage} alt="donate_page_image" />
          </div>
        </div>
        <div className={styles["right-section"]}>
          <div className={styles["right-section"]}>
            <div className={styles["icon-container"]}>
              <Image
                src="/donate_icon.svg"
                alt="dialog-icon"
                width={80}
                height={80}
              />
            </div>
            <p className={styles["form-title"]}>
              Help make the world a{" "}
              <span className={styles["contact-us-span"]}>better</span> place
            </p>

            {!displayEmail && (
              <button
                onClick={() => setDisplayEmail(!displayEmail)}
                className={styles["monetary-btn"]}
              >
                {" "}
                Monetary donation{" "}
              </button>
            )}
            {displayEmail && (
              <div className={styles["paystack-input"]}>
                <p className={styles.instruction}>
                  Fields with asterisks are required
                </p>
                <div className={styles["input-label-container"]}>
                  <label className={styles.label}>
                    Email <span className={styles.asterisk}>*</span>
                  </label>
                  <input
                    className={styles.input}
                    type="email"
                    onChange={handleChange}
                    name="donatorEmail"
                    placeholder="donator@gmail.com"
                    value={formData.donatorEmail}
                    required
                  />
                </div>
                <div className={styles["input-label-container"]}>
                  <label className={styles.label}>
                    Amount <span className={styles.asterisk}>*</span>{" "}
                  </label>
                  <CurrencyInput
                    className={styles.input}
                    id="input-currency-field"
                    name="amount"
                    prefix="₦"
                    decimalsLimit={2}
                    value={amountInput}
                    placeholder="₦10,000,000.00"
                    onValueChange={handleAmountChange}
                  />
                </div>
                <PaystackButton
                  className={styles["paystack-btn"]}
                  {...componentProps}
                />
                <h4
                  onClick={() => setDisplayEmail(!displayEmail)}
                  className={styles["other-donation"]}
                >
                  {" "}
                  Make other donations.{" "}
                </h4>
              </div>
            )}
            {!displayEmail && (
              <>
                <p className={styles["tell-us"]}>
                  Other kinds of donations? kindly fill in the details. 👇
                </p>
                <form className={styles["form-container"]}>
                  <p className={styles.instruction}>
                    Fields with asterisks are required
                  </p>
                  <div className={styles["input-label-container"]}>
                    <label className={styles.label}>
                      Name <span className={styles.asterisk}>*</span>
                    </label>
                    <input
                      className={styles.input}
                      type="text"
                      onChange={handleChange}
                      name="fullName"
                      placeholder="John Doe"
                      value={formData.fullName}
                      required
                    />
                  </div>

                  <div className={styles["input-label-container"]}>
                    <label className={styles.label}>
                      Phone <span className={styles.asterisk}>*</span>
                    </label>
                    <input
                      className={styles.input}
                      type="tel"
                      onChange={handleChange}
                      name="phone"
                      placeholder="+2348080045167"
                      value={formData.phone}
                      required
                    />
                  </div>

                  <div className={styles["input-label-container"]}>
                    <label className={styles.label}>
                      Email <span className={styles.asterisk}>*</span>
                    </label>
                    <input
                      className={styles.input}
                      type="email"
                      onChange={handleChange}
                      name="email"
                      placeholder="john_doe@gmail.com"
                      value={formData.email}
                      required
                    />
                  </div>

                  <div className={styles["input-label-container"]}>
                    <label className={styles.label}>
                      Message <span className={styles.asterisk}>*</span>
                    </label>
                    <textarea
                      type="text"
                      name="reason"
                      onChange={handleChange}
                      placeholder="Tell us what you would like to donate..."
                      className={styles["text-area"]}
                      rows={7}
                      value={formData.reason}
                    />
                  </div>
                  <button
                    onClick={handleSubmit}
                    className={styles["volunteer-btn"]}
                  >
                    {" "}
                    Donate{" "}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
      <ScrollUp />
      <Footer />
    </div>
  );
};

export default Donate;
