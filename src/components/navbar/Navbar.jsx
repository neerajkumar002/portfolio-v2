import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="shadow-lg w-[300px] mx-auto rounded-full bg-white px-4 py-2 flex gap-2">
        <NavLink
          to="/"
          className="rounded-full bg-black text-white text-sm my-auto px-3 py-1"
        >
          PROJECTS
        </NavLink>
        <NavLink
          to="/skills"
          className="rounded-full bg-black/70 text-white text-sm my-auto px-3 py-1"
        >
          SKILLS
        </NavLink>
        <NavLink
          to="/resume"
          className="rounded-full bg-black/70 text-white text-sm my-auto px-3 py-1"
        >
          RESUME
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
