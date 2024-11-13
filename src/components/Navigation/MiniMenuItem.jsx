import { NavLink } from "react-router-dom";
import { handleLinkClick } from "../../redux/Home/homeSlice";
import { useDispatch } from "react-redux";

const MiniMenuItem = ({ to, title }) => {
  const dispatch = useDispatch();

  return (
    <li className="m-1">
      <NavLink
        to={to}
        className="p-2 text-lg"
        onClick={() => dispatch(handleLinkClick())}
      >
        {title}
      </NavLink>
    </li>
  );
};

export default MiniMenuItem;
