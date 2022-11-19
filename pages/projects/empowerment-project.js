import Navbar from "../../components/Navbar";
import Footer from "../../sections/Footer";
import Image from "next/image";
import styles from "../../styles/empowerment-project.module.css";
import empowerment from "../../public/empowerment.webp";
import ScrollUp from "../../components/scrollUp";

const EmpowermentProject = () => {
  return (
    <>
      <Navbar />
      <div className={styles["page-content"]}>
        <p className={styles.project}> Project </p>
        <h3 className={styles.title}> EMPOWERMENT PROJECTS: </h3>
        <p className={styles["sub-title"]}> SMEs and Skills Acquisition </p>
        <div className={styles["image-container"]}>
          <Image src={empowerment} alt="solar-borehole" />
        </div>
        <div className={styles["text"]}>
          <p className={styles["remark-span"]}>
            The Humankind Foundation empowerment projects are designed to
            empower people to acquire the required skill set needed to learn
            enterprise in the areas of building of solar panels, fashion and
            design, cosmetics and soap making, bead making, cake making,
            hairdressing and cosmetics, cream making, professional photography
            and many other crafts for sustainability. This will help to reduce
            poverty and encourage enterprise. Our plan is to play an important
            role in the collective drive to eradicate starvation and poverty
            caused by environmental factors through our empowerment projects.
          </p>
          <p className={styles["remark-span"]}>
            There is a huge increase in poverty in our communities as many could
            barely eat two times a day. It has become imperative for the
            international community to know that our communities are in dire
            need of support through empowerment programs. This will be directed
            towards addressing the root problems of poverty and bring our people
            back to economic and social stability.
          </p>
          <p className={styles["remark-span"]}>
            Population growth, unemployment and sociopolitical instability are
            serious threats to economic stability in Nigeria and some parts of
            Africa and beyond. Many of these countries are not living up to the
            UN goals of eradicating poverty from the world by 2050.
          </p>
          <p className={styles["remark-span"]}>
            The HumanKind Foundation is formed and driven with the intent to
            support the global vision of helping to eradicate poverty in our
            world through a conscious and collective effort. Our empowerment
            Projects are designed to help develop the skill set required as a
            basis for people to launch their enterprise and economic viability.
          </p>{" "}
          <p className={styles["remark-span"]}>
            After exposing people to these skills, we would be empowering them
            with tools in form of machines: (sewing machines, vulcanizing
            machines, solar power electric outputs, and other support needed to
            startup on their own).
          </p>
          <p className={styles["remark-span"]}>
            Like we mentioned earlier on, we would be counting on your support
            as volunteers on a mission to impact our world in a unique way. We
            would also be counting on your financial support in form of
            donations to help make this project a success as there is nothing we
            can achieve without your support. We are opened to partnership as we
            will count on you to go on with us on this promising mission.
          </p>
          <p className={styles["remark-span"]}>Thank you.</p>
        </div>
      </div>
      <ScrollUp />
      <Footer />
    </>
  );
};

export default EmpowermentProject;
