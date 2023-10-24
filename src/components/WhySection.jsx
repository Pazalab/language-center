import trustees from "../assets/trustees.png"
import certificate from "../assets/certificate.png"
import support from "../assets/support.png"
import professionals from "../assets/professionals.png"
import serene from "../assets/serene.png"
import diversity from "../assets/diversity.png"

const WhySection = () => {
  return (
    <div className="why-section">
               <div className="inner-row">
                     <div className="why-section-content">
                                   <div className="why-section-content-texts">
                                             <h3>Why Us</h3>
                                             <h1>Learn Languages the Effective Way</h1>
                                   </div>
                                   <div className="reasons-wrapper">
                                               <div className="reason-moja">
                                                          <img src={trustees} alt="" />
                                                          <div className="reason-text">
                                                                   <h4>Trusted By So Many</h4>
                                                                   <p>We&apos;ve earned the confidence of countless learners through our quality education and commitment to their success.</p>
                                                          </div>
                                               </div>
                                               <div className="reason-moja">
                                                          <img src={certificate} alt="" />
                                                          <div className="reason-text">
                                                                   <h4>Certificates Awarded</h4>
                                                                   <p>Achieve recognized certifications upon completing our programs, enhancing your credentials and opportunities.</p>
                                                          </div>
                                               </div>
                                               <div className="reason-moja">
                                                          <img src={support} alt="" />
                                                          <div className="reason-text">
                                                                   <h4>Reliable Support</h4>
                                                                   <p>Our dedicated team is here to guide and assist you at every step of your language journey.</p>
                                                          </div>
                                               </div>
                                               <div className="reason-moja">
                                                          <img src={professionals} alt="" />
                                                          <div className="reason-text">
                                                                   <h4>Made By Professionals</h4>
                                                                   <p>Benefit from expertly crafted courses designed by experienced educators.</p>
                                                          </div>
                                               </div>
                                               <div className="reason-moja">
                                                          <img src={serene} alt="" />
                                                          <div className="reason-text">
                                                                   <h4>Serene Environment</h4>
                                                                   <p>Experience a peaceful and conducive atmosphere for focused learning and personal growth.</p>
                                                          </div>
                                               </div>
                                               <div className="reason-moja">
                                                          <img src={diversity} alt="" />
                                                          <div className="reason-text">
                                                                   <h4>Diverse Cultural Backgrounds</h4>
                                                                   <p>Immerse yourself in a rich tapestry of cultures, fostering a global perspective and cross-cultural friendships.</p>
                                                          </div>
                                               </div>
                                   </div>
                     </div>
               </div>
    </div>
  )
}

export default WhySection