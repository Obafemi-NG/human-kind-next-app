import Navbar from "../components/Navbar";
import styles from "../styles/about-us.module.css";
import aboutUsImage from "../public/about-us-image.png";
import founderImage from "../public/founder.png";
import Image from "next/image";
import Footer from "../sections/Footer";

const AboutUs = () => {
  return (
    <div className={styles["about-us-container"]}>
      <Navbar />
      <div className={styles["page-content"]}>
        <p className={styles["header"]}> About us </p>
        <div className={styles["top-section"]}>
          <Image src={aboutUsImage} alt="about_us_image" />
          <p className={styles["top-text"]}>
            &ldquo; Giving a{" "}
            <span className={styles["top-text-span"]}>helping hand</span> to
            those that need it &rdquo;
          </p>
        </div>
        <hr className={styles["horizontal-line"]} />
        <div className={styles["about-us-text"]}>
          <p className={styles["remark-span"]}>
            HumanKind Foundation is an NGO that was established in August 2022
            with the following aims and objectives:
          </p>
          <ul className={styles["remark-span"]}>
            <li>
              To help provide developmental projects to communities through
              green energy e.g solar borehole projects, solar paneled lamps etc
            </li>
            <li>
              {" "}
              To equip and give support to individuals to help facilitate
              empowerment programs.
            </li>
            <li>
              {" "}
              To expose people to workshops and help to develop the skills set
              and expertise required in building technological solutions from
              enterprise.{" "}
            </li>
            <li>
              {" "}
              To impact developmental projects across communities in Africa and
              beyond.
            </li>
            <li>
              {" "}
              To expose people to information technology by organizing boot
              camps across communities.{" "}
            </li>
          </ul>
          <p className={styles["remark-span"]}>
            The driving force behind this mission is to help create awareness on
            the plight of the people in communities across Africa and beyond and
            to solicit for support from the global community to help alleviate
            the suffering of people in these communities and bring smile to
            their faces.
          </p>
          <p className={styles["remark-span"]}>
            Our world is getting smaller by the day as we are now become a
            global village. The implication of this is that events and
            happenings in a small community can directly have a serious effect
            on other parts of the world. The developed countries of the world,
            especially the UK, Europe and United States of America have recently
            been under immense pressure as refugees from many parts of the world
            flocked towards these directions. The general observation is that
            this problem might persist incrementally in few years to come if we
            do not address the root causes.
          </p>
          <p className={styles["remark-span"]}>
            The HumanKind Foundation is positioned to support global efforts to
            address the immediate problems which trigger instability and force
            people to seek for ways to survive the terrible ordeals of life.
            Through your support, we would be working earnestly with people to
            turnaround the horrible experiences our people pass through in their
            communities and help to restore hope back to the people.
          </p>
          <p className={styles["remark-span"]}>
            We are all about the people. We hope to bring solace to the people
            and to make communities more habitable and address the pressure
            created by the urge to move to other locations where there is more
            stability. Our actions are directed towards attending to the
            different challenges that make people to seek solace in other
            locations.
          </p>
          <p className={styles["remark-span"]}>
            We are a voice for our people bringing your attention to the plight
            of the people in our communities. Poverty is a trigger for a lot of
            society ills which today embattle our commities. Unemployment is
            today on the rise as people struggle to eat a meal a day. The
            consequence of which is, crime and insecurity. Through our
            intervention, we hope to address the root causes of these problems.
            It is important that we note that we all have a role to play in this
            as we look forward to you to go on this mission with us.
          </p>
          Thank you.
        </div>
        <div className={styles["bottom-section"]}>
          <p className={styles.founder}> The Founder </p>
          <div className={styles["about-founder"]}>
            <div className={styles["founder-image"]}>
              <Image src={founderImage} alt="founder_image" />
            </div>
            <div className={styles["chairman"]}>
              <p className={styles.name}> Femi Okikiola </p>
              <p className={styles.position}> Chairman, Board of Trustees </p>
              <p className={styles.firm}> HumanKind Foundation Africa </p>
            </div>
          </div>
          <hr className={styles["horizontal-line"]} />
          <div className={styles["founder-remark"]}>
            <p className={styles["remark-span"]}>
              The founder of the Humankind Foundation is Femi Okikiola, a
              graduate of B.A History, University of Ilorin (1998). He also had
              an MBA in Human Relations Management from the Lagos State
              University (2008). Mr. Femi Okikiola had experience that spanned
              over 15 years, working experience in administration and learning
              from expatriates who were managers and colleagues on his team. In
              2016, he set up his first company, MPC Innovation, designed to
              connect idea owners to investors from parts of the world, online.
              He also started an HR Consultancy outfit. He presently (2022)
              consults for Uridium Technologies, an IT company located in Lekki,
              Lagos.
            </p>
            <p className={styles["remark-span"]}>
              His passion for people was developed in his early days as a young
              man. Mr. Femi feels moved by the lack in his community. He
              sometimes questions the system on why many people lived a life of
              scarcity, while some lived in abundance. For instance, he started
              using an inverter system in year 2001. He was so excited about
              this as this will help to backup the electric system at home and
              cut cost on fuel. He indeed was able to save a lot of money from
              this as his expenses on fuel cut down drastically. However, his
              perception on this completely changed on one occasion. During this
              period, the electric power authority has been erratic with power.
              He was happy that he had backup power and was yet spending less on
              fuel. However, the moment he looked through the window and saw the
              darkness in the whole community, his countenance changed. He felt
              the inadequacy of others living in the dark and questioned the
              conscience of those who think otherwise. He is fond of approaching
              people that he felt needed support and giving out a token, every
              time he is on the streets. He had mentored people who have risen
              to build great careers in life. One of them was Samuel, a steward
              whom he encouraged to continue his education. Samuel is today a
              lawyer registered with the Nigerian Bar Association.
            </p>
            <p className={styles["remark-span"]}>
              The humankind Foundation was formed because of his passion for
              people. As a change agent, Mr. Femi Okikiola has written a lot of
              contents that cut across people, leadership, followership,
              mentorship, integrity, stewardship, management, team work etc. He
              has learnt to be a voice for his people reaching out to a global
              audience on his LinkedIn platform. He has written to address world
              leaders on the refugee crisis, their ordeal and on the steps to
              take.
            </p>
            <p className={styles["remark-span"]}>
              Mr. Femi has so much passion for people and “he believes that he
              can change the world” by changing people’s perception about
              things. He believes that most of the perceptions of old may not be
              able to withstand the challenges of the 21st century as we must do
              away with some of the old ways of thinking and embrace the new
              order rooted in getting the process right and taking people as a
              priority in our plans.
            </p>
            <p className={styles["remark-span"]}>
              This foundation intends to support the UN plan to eradicate
              poverty from our world by the year 2050. This as we should note is
              not a one organization agenda as we seek collaboration with people
              and organizations in the drive to make our world more habitable
              for our people. We at Humankind Foundation are very excited about
              this project and hope that you are, too. We would be looking
              forward to volunteers as we travel together on this great journey
              of change.{" "}
            </p>
            Thank you.
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
