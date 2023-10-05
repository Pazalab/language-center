import { NavLink } from "react-router-dom"
import { PiPhoneCall } from "react-icons/pi"
import { CgMenu } from "react-icons/cg"
import { useContext } from "react"
import { menuContext } from "./menucontext"
const Header = () => {
  const [ sidebarStatus, setSidebarStatus] = useContext(menuContext)

  const openSidebar = () => setSidebarStatus(!sidebarStatus)
  return (
    <header>
              <div className="inner-row">
                        <div className="header-content">
                                    <NavLink to={'/'} className='logo'>
                                               <h3>Language Center</h3>
                                    </NavLink>
                                    <nav>
                                              <ul>
                                                        <li><NavLink to={'/'}>Home</NavLink></li>
                                                        <li><NavLink to={'/about-us/'}>About Us</NavLink></li>
                                                        <li><NavLink to={'/courses/'}>Courses</NavLink></li>
                                                        <li><NavLink to={'/gallery/'}>Gallery</NavLink></li>
                                                        <li><NavLink to={'/contact-us/'}>Contact Us</NavLink></li>
                                              </ul>
                                    </nav>
                                    <div className="action-btns">
                                               <h2><span><PiPhoneCall /></span>+254 721 495774</h2>
                                               <NavLink to={'/register'}>Join Today</NavLink>
                                               <div className="menu-btn" onClick={openSidebar}>
                                                        <span><CgMenu /></span>
                                             </div>
                                    </div>
                                    
                        </div>
              </div>
    </header>
  )
}

export default Header