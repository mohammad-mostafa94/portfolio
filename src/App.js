import './App.css';
import Banner from './components/Banner/Banner';
// import TitleMessage from './components/MyTitleMessage/TitleMessage';
import MyNavbar from './components/Navbar/Navbar.js'
import Container from "react-bootstrap/Container";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import { Parallax } from "react-parallax";
import AboutMyself from './pages/AboutMyself/AboutMyself';
import Projects from './components/Projects/Projects';
import ContactForm from './pages/Contact/ContactForm';
import FooterPanel from './components/Footer/Footer';
// import Contact from './pages/Contact/ContactForm';
import ContactLink from './pages/Contact/Contact';
import Blogs from './pages/Blogs/Blogs';
import Skills from './pages/SkillsInfo/SkillsValue';
// import { skills } from './pages/SkillsInfo/SkillsInfo';

// import StarfieldAnimation from "react-starfield-animation";

function App() {
  return (
    <div
      className=" bg-success" >
      <MyNavbar />
      {/* <TitleMessage></TitleMessage> */}

      <Banner></Banner>

      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <Skills />
        </Slide>
      </Container>
      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <Projects />
        </Slide>
      </Container>
      <Container className="container-box rounded">
        <Fade duration={500}>
          <hr />
          <Blogs />
        </Fade>
      </Container>

      <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./assets/img/parallex/background.webp")}
          bgImageAlt=""
          strength={-200}
        >
          <div>
            <Container className="container-box rounded">
              <Fade duration={500}>
                <hr />
                <AboutMyself />
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>

      <div>
        <Container className="container-box rounded">
          <Fade duration={500}>
            <hr />
            <ContactForm />
          </Fade>
        </Container>
      </div>
      <hr />
      <Container className="container-box rounded">
        <Fade duration={500}>
          <hr />
          <ContactLink />
        </Fade>
      </Container>
      <hr />
      <FooterPanel />
    </div>
  );
}

export default App;
