import trustees from "../../assets/trustees.png"
import certificate from "../../assets/certificate.png"
import support from "../../assets/support.png"
import professionals from "../../assets/professionals.png"
import serene from "../../assets/serene.png"
import diversity from "../../assets/diversity.png"

const LearnReasons = () => {
  return (
    <div className="reasons-section">
              <div className="inner-row">
                          <div className="reasons-section-content">
                                      <div className="reasons-intro">
                                                 <h3>Why Learn With Us</h3>
                                                 <h1>Upgrade Your Language Skills</h1>
                                      </div>
                                      <div className="reasons-wrapper">
                                               <div className="reason-moja">
                                                          <img src={trustees} alt="" />
                                                          <div className="reason-text">
                                                                   <h4>Trusted By Millions</h4>
                                                                   <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit obcaecati unde rem omnis, numquam dolor</p>
                                                          </div>
                                               </div>
                                               <div className="reason-moja">
                                                          <img src={certificate} alt="" />
                                                          <div className="reason-text">
                                                                   <h4>Certificates Awarded</h4>
                                                                   <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit obcaecati unde rem omnis, numquam dolor</p>
                                                          </div>
                                               </div>
                                               <div className="reason-moja">
                                                          <img src={support} alt="" />
                                                          <div className="reason-text">
                                                                   <h4>Reliable Support</h4>
                                                                   <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit obcaecati unde rem omnis, numquam dolor</p>
                                                          </div>
                                               </div>
                                               <div className="reason-moja">
                                                          <img src={professionals} alt="" />
                                                          <div className="reason-text">
                                                                   <h4>Made By Professionals</h4>
                                                                   <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit obcaecati unde rem omnis, numquam dolor</p>
                                                          </div>
                                               </div>
                                               <div className="reason-moja">
                                                          <img src={serene} alt="" />
                                                          <div className="reason-text">
                                                                   <h4>Serene Environment</h4>
                                                                   <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit obcaecati unde rem omnis, numquam dolor</p>
                                                          </div>
                                               </div>
                                               <div className="reason-moja">
                                                          <img src={diversity} alt="" />
                                                          <div className="reason-text">
                                                                   <h4>Diverse Cultural Backgrounds</h4>
                                                                   <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit obcaecati unde rem omnis, numquam dolor</p>
                                                          </div>
                                               </div>
                                   </div>
                          </div>
              </div>
    </div>
  )
}

export default LearnReasons