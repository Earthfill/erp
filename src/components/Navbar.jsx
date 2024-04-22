import { Link } from "react-router-dom";
import { toggleSidebar } from "../features/user/userSlice";
// import logo from '../images/logo.svg';
import { useState } from "react";
import { PiArrowUpLeftDuotone } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const [showLogout, setShowLogout] = useState(false);
  const { isSidebarOpen } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const toggle = () => {
    dispatch(toggleSidebar());
  }

  return (
    <div className='navbar bg-primary md:px-4 rounded-b-3xl'>
      <div className="navbar-start flex gap-3 transition-all duration-1000">
        <button onClick={toggle} className="transition-all duration-300 rounded-full bg-base-100 p-2 text-primary">
          <PiArrowUpLeftDuotone />
        </button>
        <ul className={`${isSidebarOpen ? 'flex transition-all duration-1000 font-semibold gap-3 text-base-100' : 'hidden md:flex transition-all duration-1000 font-semibold gap-3 text-base-100'}`}>
          <li>Home</li>
          <li>Leaves</li>
          <li>Appraisal</li>
        </ul>
      </div>

      <div className="navbar-end pr-4">
        <div className="flex flex-col">
          <div
            className="avatar placeholder"
            onClick={() => setShowLogout(!showLogout)}
          >
            <div className="bg-warning online text-neutral-content rounded-full w-8">
              <span>UA</span>
            </div>
          </div>
          <div 
            className={`bg-purple-200 transition-all duration-300 ${showLogout ? 'absolute right-6 top-[50px] lg:right-8 md:right-8' : 'hidden'}`}
          >
            <Link 
              to="/login"
              className="font-semibold text-primary rounded-md bg-accent py-1 px-[36px] lg:mt-2"
              onClick={() => dispatch(logoutUser('Logging out...'))}
            >
              Logout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar