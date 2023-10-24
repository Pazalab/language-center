import { NavLink } from "react-router-dom"
import { LiaArrowRightSolid } from "react-icons/lia"
import exam1 from "../assets/exam1.jpg"
import exam2 from "../assets/exam2.jpg"

const ExaminationStrip = () => {
  return (
    <div className="examination-strip">
                <div className="examination-strip-content">
                           <h3>Our Exams</h3>
                           <div className="strip-intro">
                                     <h1>Standardized Examination Tests</h1>
                                      <p>Looking to study at a university locally or abroad? At TLC, we have a wide variety of exams that students can choose from and prepare in order to attain the required scores to gain entrance to these schools.</p>
                           </div>
                           <div className="examination-strips-wrapper">
                                        <div className="exam-strip-row">
                                                   <div className="strip-moja">
                                                               <span>1</span>
                                                                <div className="strip-moja-texts">
                                                                         <h4> Test of English as a Foreign Language (TOEFL)</h4>
                                                                         <p>TOEFL is an internationally recognized exam that assesses non-native English speakers&apos; proficiency in English language skills, including reading, writing, speaking and listening.</p>
                                                                </div>
                                                   </div>
                                                   <div className="strip-moja">
                                                               <span>2</span>
                                                                <div className="strip-moja-texts">
                                                                         <h4> International English Language Testing System (IELTS)</h4>
                                                                         <p>IELTS is a widely accepted examination designed to evaluate the English language proficiency of non-native English speakers. It measures 4 language skills: listening, reading, writing and speaking. </p>
                                                                </div>
                                                   </div>
                                        
                                                   <div className="strip-moja">
                                                               <span>3</span>
                                                                <div className="strip-moja-texts">
                                                                         <h4>Scholastic Aptitude Test (SAT I & SAT II)</h4>
                                                                         <p>The SAT is a standardized test used for college admissions in the United States. SAT I, often referred to as SAT Reasoning Test, evaluates student&apos;s skills in critical reading, writing and mathematics, serving as a general assessment of their readiness for college. </p>
                                                                </div>
                                                   </div>

                                                   <div className="courses-btn">
                                                          <NavLink to={'/exams/'}>Explore All Exams<span><LiaArrowRightSolid /></span></NavLink>
                                                  </div>
                                        </div>
                                        <div className="exam-pictures-column">
                                                   <div className="exam-pictures">
                                                               <img src={exam1} alt="" />
                                                               <img src={exam2} alt="" />
                                                   </div>
                                        </div>
                           </div>
                </div>
    </div>
  )
}

export default ExaminationStrip