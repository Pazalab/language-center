import { NavLink } from "react-router-dom"
import heroImg from "../assets/hero2.jpg"
import { LiaArrowRightSolid } from "react-icons/lia"
import leftchat from "../assets/left-chat.png"
import rightchat from "../assets/right-chat.png"
import trustee1 from '../assets/trustee1.jpg'
import trustee2 from '../assets/trustee2.jpg'
import trustee3 from "../assets/trustee3.jpg"
import trustee4 from "../assets/trustee5.jpg"
const HeroSection = () => {

  return (
    <section id="hero">
           <div className="inner-row">
                      <div className="hero-content">
                                 <div className="hero-texts-column">
                                               <div className="inner-texts">
                                                          <h1>Transforming Language.</h1>
                                                        <p>With a legacy of excellence, The Language Center (TLC) has consistently provided quality services at accessible rates. Our relentless curiosity drives us to explore new frontiers and opportunities. Join us at TLC for an immersive experience in our mission.</p>
                                                        <div className="action-part">
                                                                   <NavLink to={'/courses/'}>Explore Courses <span><LiaArrowRightSolid /></span></NavLink>
                                                                   <div className="trust-box">
                                                                            <div className="trust-students">
                                                                                    <img src={trustee1} alt="" />
                                                                                    <img src={trustee2} alt="" />
                                                                                    <img src={trustee3} alt="" />
                                                                                    <img src={trustee4} alt="" />
                                                                            </div>
                                                                             <h3>Trusted by over 3000+ Students</h3>
                                                                   </div>
                                                        </div>
                                               </div>
                                 </div>
                                 <div className="hero-image-column">
                                             <div className="bubble-text spanish">
                                                        <div className="bubble-text-content">
                                                                  <img src={leftchat} alt="" />
                                                                  <p>Hola!</p>
                                                        </div>
                                             </div>
                                             <div className="bubble-text english">
                                                        <div className="bubble-text-content">
                                                                  <img src={rightchat} alt="" />
                                                                  <p>Hello!</p>
                                                        </div>
                                             </div>
                                             <div className="bubble-text french">
                                                        <div className="bubble-text-content">
                                                                  <img src={leftchat} alt="" />
                                                                  <p>Bonjour!</p>
                                                        </div>
                                             </div>
                                             <div className="bubble-text chinese">
                                                        <div className="bubble-text-content">
                                                                  <img src={rightchat} alt="" />
                                                                  <p>Nǐ hǎo!</p>
                                                        </div>
                                             </div>
                                              <div className="hero-image">
                                                        <img src={heroImg} alt="" />
                                              </div>
                                 </div>
                      </div>
           </div>
    </section>
  )
}

export default HeroSection