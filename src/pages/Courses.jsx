import CourseHero from "../components/CoursesPage/CourseHero"
import Faqs from "../components/CoursesPage/Faqs"
import LearnReasons from "../components/CoursesPage/LearnReasons"
import Nav from "../components/Navbar/Nav"
import "../css/courses.css"
import Footer from "../components/Footer"

const Courses = () => {
  return (
    <>
         <Nav />
         <CourseHero />
         <LearnReasons />
         <Faqs />
         <Footer />
    </>
  )
}

export default Courses