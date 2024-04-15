import { Outlet } from "react-router-dom"
import { Navbar } from "../components"

const SharedLayout = () => {
  return (
    <main>
      <div>
        <Navbar />
      </div>

      <div className="2xl:max-w-full md:mx-auto md:max-w-screen-2xl md:px-12 bg-gray-100 h-screen align-element py-8">
        <Outlet />
      </div>
    </main>
  )
}

export default SharedLayout