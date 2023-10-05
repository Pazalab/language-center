import { useState } from "react"
import { menuContext } from "./menucontext"
import Header from "./Header"
import Sidebar from "./Sidebar"
import ScrolledHeader from "./ScrolledHeader"
const Nav = () => {
    const [status, setStatus] = useState(false)
  return (
    <menuContext.Provider value={[status, setStatus]}>
                <Header />
                <ScrolledHeader />
                <Sidebar />
    </menuContext.Provider>
  )
}

export default Nav