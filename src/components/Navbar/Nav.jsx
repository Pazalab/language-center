import { useState } from "react"
import { menuContext } from "./menucontext"
import Header from "./Header"
import Sidebar from "./Sidebar"
const Nav = () => {
    const [status, setStatus] = useState(false)
  return (
    <menuContext.Provider value={[status, setStatus]}>
                <Header />
                <Sidebar />
    </menuContext.Provider>
  )
}

export default Nav