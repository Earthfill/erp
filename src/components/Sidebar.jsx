import brandName from "../images/access_brand_name_with_logo.svg";
import profile from "../images/profile.jpg";
import NavLinks from "./NavLinks";

const Sidebar = () => {
  return (
    <div className="flex flex-col items-center space-y-5 p-5 border-r min-h-screen h-full">
      <img src={brandName} alt="access bank" className="mx-auto" />
      <div className="avatar">
        <div className="w-24 rounded-full">
          <img
            src={profile}
            alt="profile picture"
            className="rounded-full w-32 h-[100px]"
          />
        </div>
      </div>
      <div>
        <p>Ifeoluwa Raji</p>
        <p className="text-warning text-xs">Executive Trainee</p>
      </div>
      <p className="text-blue-900 border border-blue-900 w-fit px-2 rounded-xl text-sm font-semibold bg-blue-100">Edit Profile</p>
      <NavLinks />
    </div>
  );
};

export default Sidebar;
