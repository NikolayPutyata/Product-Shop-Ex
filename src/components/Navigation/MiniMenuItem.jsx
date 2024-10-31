import { NavLink } from "react-router-dom";

const MiniMenuItem = ({ to, title }) => {
  return (
    <li className="m-1">
      <NavLink to={to} className="p-2 text-lg">
        {title}
      </NavLink>
    </li>
  );
};

export default MiniMenuItem;
