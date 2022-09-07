import Head from "next/head";
import Navbar from "../components/Navbar";
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
        <meta name="description" content="Generated by create next app" />
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
    </div>
  );
}
