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
        <section id="section01" className={classes.scroll}>
          <PersonalBio />
          {/* <a className={classes.link} href="#section02">
            <span></span>Scroll
          </a> */}
        </section>

        <section id="section02" className={classes.scroll}>
          <Technologies />
          {/* <a className={classes.link} href="#section03">
            <span></span>Scroll
          </a> */}
        </section>

        <section id="section03" className={classes.scroll}>
          <BookSection />
          {/* <a className={classes.link} href="#section04">
            <span></span>Scroll
          </a> */}
        </section>

        {/* <section>
          <BlogSection />
        </section> */}

        <Footer />
      </div>
    </div>
  );
};
export default HomePage;
