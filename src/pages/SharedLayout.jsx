import { Outlet } from "react-router-dom"
import { Navbar } from "../components"

const SharedLayout = () => {
  return (
    <main>
      <div>
        <Navbar />
      </div>

      <div className="">
        <Outlet />
      </div>
    </main>
  )
}

export default SharedLayout