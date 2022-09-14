import Image from "next/image";
import Navbar from "../../components/Navbar";
import ScrollUp from "../../components/scrollUp";
import solar from "../../public/solar-page.png";
import Footer from "../../sections/Footer";
import styles from "../../styles/solar-borehole.module.css";

const SolarBorehole = () => {
  return (
    <>
      <Navbar />
      <div className={styles["page-content"]}>
        <p className={styles.project}> Project </p>
        <h3 className={styles.title}> Solar Boreholes </h3>
        <div className={styles["image-container"]}>
          <Image src={solar} alt="solar-borehole" />
        </div>
        <div className={styles["text"]}>
          <p className={styles["remark-span"]}>
            We aim to provide access to water in communities where drinking
            water is not readily available to the people. This project is
            intended to help communities, especially in the rural areas, to
            overcome challenges relating to water. Through our solar powered
            boreholes, we plan to eliminate limitations caused by inadequate
            power supply, a trigger to many other problems social problems. We
            would also be working to eradicate water borne diseases like
            cholera, typhoid, hepatitis, scabies, amoebiasis, giardiasis and
            diarrhea.
          </p>
          <p className={styles["remark-span"]}>
            A report from UNICEF states that one third of children in Nigeria;
            do not have access to water. It further states that one out of five
            children in the world have access to clean water. There are some
            communities in Nigeria that mostly depend on surface water that may
            be miles to fetch.
          </p>
          <p className={styles["remark-span"]}>
            Peter Hawkins, UNICEF Representative in Nigeria, retorted &ldquo;The
            world&apos;s water crisis is not coming - it is here, and children
            are its biggest victims&rdquo; When wells dry up, children are the
            ones missing school to fetch water. When droughts diminish food
            supplies, children suffer from malnutrition and stunting. When
            floods hit, children fall ill from waterborne illnesses. And when
            water is not available in Nigerian communities, children cannot wash
            their hands to fight off diseases.
          </p>
          <p className={styles["remark-span"]}>
            An insight from the UNICEF data states how children in more than 80
            countries are vulnerable to challenges associated with water in
            Eastern and Southern Africa as the most affected, followed by West
            and Central Africa; South Africa and the Middle East. This list has
            countries like Afghanistan, Burkina Faso, Kenya, Niger, Nigeria,
            Ethiopia, Kenya, Haiti, Pakistan, Sudan, Papua New Guinea, Tanzania,
            Yemen and so on.
          </p>{" "}
          <p className={styles["remark-span"]}>
            Like in some other parts of the world, Nigeria has a huge challenge
            with predictable access to clean water. Also of great concern is the
            quality and equitable access to drinking water as most of these
            water sources are contaminated. Nigerians have had to endure the
            pains of coping with these challenges.
          </p>
          <p className={styles["remark-span"]}>
            &ldquo;We have to act now both to address the water crisis in
            Nigeria to prevent it from getting worse and if we want to meet the
            SDGs,&rdquo; said Peter Hawkins. “We can only achieve water security
            for every Nigerian – including the Nigerian child - through
            innovation, investment and collaboration, and by ensuring services
            are sustainable and well-managed. We must act - for the sake of our
            children and our planet.”
          </p>
          <p className={styles["remark-span"]}>
            This is one of the driving force behind the formation of The
            HumanKind Foundation. To support in the global drive to eliminate
            challenges associated with shortages of drinking water in our
            communities. Our children and families should not be subjected to a
            life of pains and denials due to challenges with water supply in our
            communities. A solar panel borehole will help to bring stability to
            the communities and restore normalcy as people will then have the
            privilege to access clean water at anytime.
          </p>
        </div>
      </div>
      <ScrollUp />
      <Footer />
    </>
  );
};

export default SolarBorehole;
