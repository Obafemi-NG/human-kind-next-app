import Head from "next/head";
import Navbar from "../components/Navbar";
import ScrollUp from "../components/scrollUp";
import Aim from "../sections/Aim";
import Attribute from "../sections/Attribute";
import CarouselSection from "../sections/Carousel";
import Footer from "../sections/Footer";
import Hero from "../sections/Hero";
import Newsletter from "../sections/Newsletter";
import Quotes from "../sections/Quotes";
import Volunteer from "../sections/volunteer";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>HumanKind Foundation Global</title>
        <meta
          name="description"
          content="Humankind foundation global is a non governmental organization focused on providing developmental solutions to individuals and communities through green energy"
        />
      </Head>

      <Navbar />

      <Hero />
      <Quotes />
      <CarouselSection />
      <Aim />
      <Attribute />
      <Volunteer />
      <Newsletter />
      <Footer />
      <ScrollUp />
    </div>
  );
}
