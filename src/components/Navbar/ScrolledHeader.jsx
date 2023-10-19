import { NavLink } from "react-router-dom"
import { PiPhoneCall } from "react-icons/pi"
import { useContext, useState } from "react"
import { CgMenu } from "react-icons/cg"
import { menuContext } from "./menucontext"
import logo from "../../assets/logo.png"
const ScrolledHeader = () => {
    const [navStatus, setNavStatus] = useState(false)
   const [ sidebarStatus, setSidebarStatus ] = useContext(menuContext) 

   const openSidebar = () => setSidebarStatus(!sidebarStatus)
    window.addEventListener("scroll", () =>{
             if(window.scrollY > 80){
                    setNavStatus(true) 
             }else{
                   setNavStatus(false)
             }
    });
  
  return (
    <header className={ navStatus ? 'scrolled-header active' : 'scrolled-header'}>
        <div className="inner-row">
              <div className="header-content">
                          <NavLink to={'/'} className='logo'>
                                       <img src={logo} alt="" />
                          </NavLink>
                          <nav>
                                    <ul>
                                              <li><NavLink to={'/'}>Home</NavLink></li>
                                              <li><NavLink to={'/about-us/'}>About Us</NavLink></li>
                                              <li><NavLink to={'/courses/'}>Courses</NavLink></li>
                                              <li><NavLink to={'/exams/'}>Exams</NavLink></li>
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

export default ScrolledHeader