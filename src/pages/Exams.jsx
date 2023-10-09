import Examinations from "../components/Exams/Examinations"
import ExamsHero from "../components/Exams/ExamsHero"
import Nav from "../components/Navbar/Nav"
import "../css/exams.css"
import Nudge from "../components/Nudge"
import Footer from "../components/Footer"
const Exams = () => {
  return (
    <>
            <Nav />
            <ExamsHero />
            <Examinations />
            <div className="inner-row" style={{ 'padding-bottom': '100px'}}>
                    <Nudge />
            </div>
            <Footer />
    </>
  )
}

export default Exams