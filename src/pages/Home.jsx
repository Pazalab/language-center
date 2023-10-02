import AboutSection from "../components/AboutSection"
import HeroSection from "../components/HeroSection"
import Nav from "../components/Navbar/Nav"
import WhySection from "../components/WhySection"
import "../css/home.css"
const Home = () => {
  return (
    <>
           <Nav />
           <HeroSection />
           <WhySection />
           <AboutSection />
    </>
  )
}

export default Home