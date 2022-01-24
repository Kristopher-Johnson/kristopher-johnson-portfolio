import Article from "./Bio/Article";
import classes from "./HomePage.module.css";
import Technologies from "./Technologies/Technologies";
import PersonalBio from "./Bio/PersonalBio";
import BookSection from "./Book/BookSection";
import BlogSection from "./Blog/BlogSection";
import Footer from "./Footer/Footer";

const HomePage = (props) => {
  return (
    <div className={classes.outer}>
      <div className={classes.content}>
        <section className={classes.section}>
          <PersonalBio />
        </section>

        <section className={classes.section}>
          <Technologies />
        </section>

        <section className={classes.section}>
          <BookSection />
        </section>

        {/* <section>
          <BlogSection />
        </section> */}

        <section className={classes.section}>
          <Footer />
        </section>
      </div>
    </div>
  );
};
export default HomePage;
