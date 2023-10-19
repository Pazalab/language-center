import { NavLink } from "react-router-dom"
import classroom from "../assets/classroom.jpg"
import { LiaArrowRightSolid } from "react-icons/lia"

const Nudge = () => {
  return (
    <div className="nudge-section">
            <div className="nudge-section-content">
                          <div className="nudge-section-texts">
                                    <h1>Why Don&apos;t you Start Today?</h1>
                                    <p>If you are looking for a way to  enhance your travel experiences, gain a deeper understanding of other cultures, and enrich your personal life, then begin your learning journey with us today.</p>
                                    <NavLink to={'/contact-us/'}>Enroll Now <span><LiaArrowRightSolid /></span></NavLink>
                          </div>
                          <div className="nudge-section-image">
                                    <img src={classroom} alt="" />
                          </div>
            </div>
    </div>
  )
}

export default Nudge