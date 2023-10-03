import { NavLink } from "react-router-dom"
import { LiaArrowRightSolid } from "react-icons/lia"
import { course_excerpt } from "../data/courses"
import ExaminationStrip from "./ExaminationStrip"

const CoursesSection = () => {
  return (
    <div className="courses-section">
               <div className="inner-row">
                          <div className="courses-section-content">
                                     <div className="courses-intro">
                                                <div className="intro-texts">
                                                          <h3>Our Courses</h3>
                                                          <h1>Our Most Popular Courses</h1>
                                                          <p>We help students to learn and improve their language skills in a way that is both challenging and rewarding.</p>
                                                </div>
                                                <div className="courses-btn">
                                                          <NavLink to={'/'}>Explore All Courses <span><LiaArrowRightSolid /></span></NavLink>
                                                </div>
                                     </div>
                                     <div className="course-types-row">
                                                  { course_excerpt.map(item => 
                                                         <NavLink to={'/'} className="course-moja" key={item.id}>
                                                                   <div className="course-image">
                                                                                <img src={item.image} alt="" />
                                                                   </div>
                                                                   <h2>{item.title}</h2>
                                                                   <p>{item.description}</p>
                                                      </NavLink>
                                                    )}
                                     </div>
                                     <ExaminationStrip />
                          </div>
               </div>
    </div>
  )
}

export default CoursesSection