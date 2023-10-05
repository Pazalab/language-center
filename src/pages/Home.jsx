import AboutSection from "../components/AboutSection"
import CoursesSection from "../components/CoursesSection"
import Footer from "../components/Footer"
import HeroSection from "../components/HeroSection"
import Nav from "../components/Navbar/Nav"
import Testimonials from "../components/Testimonials"
import WhySection from "../components/WhySection"
import "../css/home.css"
const Home = () => {
  return (
    <>
           <Nav />
           <HeroSection />
           <WhySection />
           <AboutSection />
           <CoursesSection />
           <Testimonials />
           <Footer />
    </>
  )
}

export default Home