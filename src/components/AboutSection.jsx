import { NavLink } from "react-router-dom"
import about1 from "../assets/about1.jpg"
import about2 from "../assets/about2.jpg"
import { LiaArrowRightSolid } from "react-icons/lia"
const AboutSection = () => {
  return (
    <div className="about-section">
             <div className="inner-row">
                         <div className="about-section-content">
                                   <div className="about-section-images">
                                             <img src={about1} alt="" />
                                             <img src={about2} alt="" />
                                   </div>
                                   <div className="about-section-texts">
                                                 <h3>Who We Are</h3>
                                                 <h1>The Best Language School in Kenya.</h1>
                                                 <p>The Language Center is a leading language school in Nairobi, Kenya. It offers a wide range of language courses for all ages and levels, including English, French, Spanish, German, Italian, Chinese and Swahili. The school also offers courses in business English, academic English and IELTS preparation.</p>
                                                 <p>The School has a team of experienced and qualified native-speaking teachers who are passionate about teaching languages. The school uses a variety of teaching methods, including communicative language teaching (CLT) and task-based learning (TBL), to help students learning and practice their language skills in a real-world context.</p>
                                                 <NavLink to={'/about-us/'}>Read More <span><LiaArrowRightSolid /></span></NavLink>
                                   </div>
                         </div>
             </div>
    </div>
  )
}

export default AboutSection