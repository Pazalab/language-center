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
                                     <h1>Standardized Admission Tests</h1>
                                      <p>Looking to study at a university locally or abroad? At TLC, we have a wide variety of exams that students can choose from and prepare in order to attain the required scores to gain entrance to these schools.</p>
                           </div>
                           <div className="examination-strips-wrapper">
                                        <div className="exam-strip-row">
                                                   <div className="strip-moja">
                                                               <span>1</span>
                                                                <div className="strip-moja-texts">
                                                                         <h4> Test of English as a Foreign Language (TOEFL)</h4>
                                                                         <p>A standardized test to measure the English language ability of non-native speakers wishing to enroll in English-speaking universities.</p>
                                                                </div>
                                                   </div>
                                                   <div className="strip-moja">
                                                               <span>2</span>
                                                                <div className="strip-moja-texts">
                                                                         <h4> International English Language Testing System (IELTS)</h4>
                                                                         <p>A standardized test to measure the English language ability of non-native speakers wishing to enroll in English-speaking universities.</p>
                                                                </div>
                                                   </div>
                                        
                                                   <div className="strip-moja">
                                                               <span>3</span>
                                                                <div className="strip-moja-texts">
                                                                         <h4>Scholastic Aptitude Test (SAT I & SAT II)</h4>
                                                                         <p>A standardized test to measure the English language ability of non-native speakers wishing to enroll in English-speaking universities.</p>
                                                                </div>
                                                   </div>

                                                   <div className="courses-btn">
                                                          <NavLink to={'/'}>Explore All Exams<span><LiaArrowRightSolid /></span></NavLink>
                                                  </div>
                                        </div>
                                        <div className="exam-pictures">
                                                    <img src={exam1} alt="" />
                                                    <img src={exam2} alt="" />
                                        </div>
                           </div>
                </div>
    </div>
  )
}

export default ExaminationStrip