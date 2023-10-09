import { NavLink } from "react-router-dom"
import { course_excerpt } from "../../data/courses"
const CourseHero = () => {
  return (
    <div className="course-hero-section">
                <div className="inner-row">
                            <div className="course-hero-content">
                                        <div className="course-hero-texts">
                                                  <h3>Our Courses</h3>
                                                  <h1>A Wide Variety of Languages For you to Learn</h1>
                                                  <p>Our language courses range from beginner to advanced levels and are relevant to the needs of students, whether they are learning for work, travel or personal enrichment. We also include opportunities for students to practice their language skills in real world settings.</p>
                                        </div>


                                        <div className="courses-themselves-row">
                                                { course_excerpt.map(item => 
                                                         <NavLink to={item.url} className="course-moja" key={item.id}>
                                                                   <div className="course-image">
                                                                                <img src={`../${item.image}`} alt="" />
                                                                   </div>
                                                                   <h2>{item.title}</h2>
                                                                   <p>{item.description}</p>
                                                      </NavLink>
                                                    )}
                                        </div>
                            </div>
                </div>
    </div>
  )
}

export default CourseHero