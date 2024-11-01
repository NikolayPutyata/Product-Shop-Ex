import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectCartItems } from "../../redux/cartSlice";
import SvgNav from "./SvgNav";
import MiniMenuItem from "./MiniMenuItem";

const Navigation = () => {
  const cartItems = useSelector(selectCartItems);

  return (
    <>
      <div className="navbar bg-base-100 p-1 md:p-2 lg:p-6 border">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle btn-lg"
            >
              <SvgNav d="M4 6h16M4 12h16M4 18h7" />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <MiniMenuItem to="/" title="Home" />
              <MiniMenuItem to="/products" title="Products" />
              <MiniMenuItem to="/cart" title="Cart" />
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <NavLink to="/" className="btn btn-ghost text-xl">
            Market
          </NavLink>
        </div>
        <div className="navbar-end">
          <NavLink to="/search" className="btn btn-ghost btn-circle btn-lg">
            <SvgNav d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </NavLink>
          <NavLink to="/cart" className="btn btn-ghost btn-circle btn-lg">
            <div className="indicator">
              <SvgNav d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              <span className="badge indicator-item">{cartItems.length}</span>
            </div>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navigation;
