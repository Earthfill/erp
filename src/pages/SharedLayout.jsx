import { Outlet } from "react-router-dom"
import { Sidebar } from "../components"

const SharedLayout = () => {
  return (
    <main className="flex">
      <div>
        <Sidebar />
      </div>
      <div className="flex-1 align-element">
        <Outlet />
      </div>
    </main>
  )
}

export default SharedLayout