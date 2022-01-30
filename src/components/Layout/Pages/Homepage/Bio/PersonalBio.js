import Article from "./Article";
import portrait from "../../../../../assets/portrait.jpg";
const PersonalBio = () => {
  return (
    <Article imagePos="left" imgSrc={portrait}>
      <h1>Kristopher Johnson</h1>
      <h3>Software Engineer</h3>
      <br />
      <h2>Hey im Kris, an aspiring software engineer from Yorkshire, UK.</h2>
      <br />
      <h2>
        I graduated from Newcastle University with a degree in computer science,
        I love working on all kind of programming projects from web development
        to mobile application.
      </h2>
      <br />
      <h2>
        I primarily use Java, JavaScrript and React but have knowledge in a
        multitude of languages including C, C++, PHP, SQL, ASM
      </h2>
    </Article>
  );
};
export default PersonalBio;
