import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Courses from "./pages/Courses"

function App() {

  return (
    <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/about-us/" element={<About />} />
             <Route path="/courses/" element={<Courses />} />
    </Routes>
  )
}

export default App
