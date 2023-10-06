import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Courses from "./pages/Courses"
import Contact from "./pages/Contact"
import Exams from "./pages/Exams"

function App() {

  return (
    <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/about-us/" element={<About />} />
             <Route path="/courses/" element={<Courses />} />
             <Route path="/exams/" element={<Exams />} />
             <Route path="/contact-us/" element={<Contact />} />
    </Routes>
  )
}

export default App
