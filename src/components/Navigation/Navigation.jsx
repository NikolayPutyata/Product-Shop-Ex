import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/products">Products</NavLink>
      <NavLink to="/cart">Cart</NavLink>
    </>
  );
};

export default Navigation;
