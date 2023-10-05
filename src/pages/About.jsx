import "../css/about.css"
import Nav from "../components/Navbar/Nav"
import AboutHero from "../components/AboutPage/AboutHero"
import AboutBody from "../components/AboutPage/AboutBody"
import Values from "../components/AboutPage/Values"
import Testimonials from "../components/Testimonials"
import Footer from "../components/Footer"
const About = () => {
  return (
    <>
          <Nav />
          <AboutHero />
          <AboutBody />
          <Values />
          <Testimonials />
          <Footer />
    </>
  )
}

export default About