import NavBarStart from "./NavBarStart";
import NavBarCenter from "./NavBarCenter";
import NavBarEnd from "./NavBarEnd";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <div className="navbar bg-base-100 p-1 md:p-2 lg:p-6 border">
        <div className="navbar-start">
          <div className="lg:hidden">
            <NavBarStart />
          </div>
          <div className="hidden lg:flex gap-6">
            <NavLink to="/" className="p-2 w-32 text-lg btn btn-ghost ">
              Home
            </NavLink>
            <NavLink
              to="/products"
              className="p-2 text-lg btn btn-outline btn-wide"
            >
              Products
            </NavLink>
          </div>
        </div>
        <div className="navbar-center">
          <NavBarCenter />
        </div>
        <div className="navbar-end">
          <NavBarEnd />
        </div>
      </div>
    </>
  );
};

export default Navigation;
