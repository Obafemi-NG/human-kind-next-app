import Navbar from "../../components/Navbar";
import Footer from "../../sections/Footer";
import styles from "../../styles/blog-posts.module.css";
import rafiki from "../../public/rafiki.webp";
import Image from "next/image";

const BlogPosts = () => {
  return (
    <>
      <Navbar />
      <div className={styles["page-content"]}>
        <div className={styles["image-container"]}>
          <Image src={rafiki} alt="coming-soon-image" />
        </div>
        <p className={styles.title}>
          {" "}
          <span className={styles["event-span"]}>Blog posts</span> are coming
          soon.{" "}
        </p>
        <p className={styles["sub-title"]}>
          Be the first to read our blog posts.
        </p>
        <form className={styles["form-container"]}>
          <input
            type="email"
            name="email"
            placeholder="email"
            className={styles.input}
          />
          <button className={styles["subscribe-btn"]}> Subscribe </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default BlogPosts;
