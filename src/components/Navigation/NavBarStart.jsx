import MiniMenuItem from "./MiniMenuItem";
import SvgNav from "./SvgNav";
import { useDispatch, useSelector } from "react-redux";
import { selectNavMenuIsOpen, toggleNavMenu } from "../../redux/Home/homeSlice";

const NavBarStart = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectNavMenuIsOpen);

  const toggleDropdown = () => {
    dispatch(toggleNavMenu());
  };

  return (
    <div className="dropdown">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle btn-lg"
        onClick={toggleDropdown}
      >
        <SvgNav d="M4 6h16M4 12h16M4 18h7" />
      </div>
      <ul
        tabIndex={0}
        className={`menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <MiniMenuItem to="/" title="Home" />
        <MiniMenuItem to="/products" title="Products" />
        <MiniMenuItem to="/cart" title="Cart" />
        <MiniMenuItem to="/search" title="Search" />
      </ul>
    </div>
  );
};

export default NavBarStart;
