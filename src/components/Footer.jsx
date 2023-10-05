import { NavLink } from "react-router-dom"
import { BsEnvelope } from "react-icons/bs"
import { FiPhoneCall } from "react-icons/fi"
import { CgFacebook } from "react-icons/cg"
import { ImTwitter } from "react-icons/im"
import { AiOutlineInstagram } from "react-icons/ai"
const Footer = () => {
  return (
    <footer>
                 <div className="inner-row">
                           <div className="footer-content">
                                      <div className="footer-column">
                                                <div className="footer-logo">
                                                            <h2>Lang Center</h2>
                                                </div>
                                                <p>Address: Ndemi Close / Ndemi Road off Ngong Road</p>
                                                <p>P.O Box 4661 - 00100</p>
                                                <p>Nairobi, Kenya</p>

                                                <div className="footer-social-links">
                                                            <ul>
                                                                     <li><NavLink to={'/'}><CgFacebook /></NavLink></li>
                                                                     <li><NavLink to={'/'}><AiOutlineInstagram/></NavLink></li>
                                                                     <li><NavLink to={'/'}><ImTwitter /></NavLink></li>
                                                            </ul>
                                                </div>
                                      </div>
                                      <div className="footer-column">
                                                  <h2 className="footer-title">Courses</h2>
                                                  <ul>
                                                             <li><NavLink to={'/'}>English</NavLink></li>
                                                             <li><NavLink to={'/'}>Spanish</NavLink></li>
                                                             <li><NavLink to={'/'}>French</NavLink></li>
                                                             <li><NavLink to={'/'}>Kiswahili</NavLink></li>
                                                             <li><NavLink to={'/'}>Chinese</NavLink></li>
                                                             <li><NavLink to={'/'}>Italian</NavLink></li>
                                                  </ul>
                                      </div>
                                      <div className="footer-column">
                                                 <h2 className="footer-title">Resources</h2>
                                                 <ul>
                                                           <li><NavLink to={'/'}>Admissions</NavLink></li>
                                                           <li><NavLink to={'/'}>Application Forms</NavLink></li>
                                                           <li><NavLink to={'/'}>Careers</NavLink></li>
                                                           <li><NavLink to={'/'}>Teachers</NavLink></li>
                                                 </ul>
                                      </div>
                                      <div className="footer-column">
                                               <h2 className="footer-title">Contact Us</h2>
                                                <h3><span><BsEnvelope /></span>support@language-cntr.com</h3>
                                                <h3><span><FiPhoneCall /></span> +254 7214 95774</h3>
                                                <h3><span><FiPhoneCall /></span> +254 2038 70610</h3>
                                      </div>
                           </div>

                           <div className="copyright-section">
                                      <p> The Language Center &copy; { new Date().getFullYear() } All rights reserved </p>
                           </div>
                 </div>
    </footer>
  )
}

export default Footer