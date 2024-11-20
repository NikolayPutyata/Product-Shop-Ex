import { NavLink, useSearchParams, useNavigate } from "react-router-dom";
import SearchForm from "../SearchForm/SearchForm";
import SvgNav from "./SvgNav";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../redux/Cart/cartSlice";
import { useEffect } from "react";
import { searchProductByQuery } from "../../redux/operations/productsOps";

const NavBarEnd = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();
  const searchingWord = searchParams.get("query") || "";

  useEffect(() => {
    const fetchByQuery = async () => {
      if (searchingWord.trim()) {
        // Перевіряємо, чи користувач на сторінці /search з коректним параметром
        if (window.location.pathname !== "/search") {
          navigate({
            pathname: "/search",
            search: `?query=${searchingWord}`,
          });
        }

        try {
          await dispatch(searchProductByQuery(searchingWord));
        } catch (e) {
          console.error(e);
        }
      }
    };

    fetchByQuery();
  }, [searchingWord, dispatch, navigate]);

  const handleSearchSubmit = (query) => {
    setSearchParams({ query });
  };

  return (
    <>
      <div className="hidden w-72 lg:block">
        <SearchForm setSearchParams={handleSearchSubmit} />
      </div>

      <NavLink
        to="/search"
        className="btn btn-ghost btn-circle btn-lg lg:hidden"
      >
        <SvgNav d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </NavLink>
      <NavLink to="/cart" className="btn btn-ghost btn-circle btn-lg lg:ml-3">
        <div className="indicator">
          <SvgNav d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          <span className="badge indicator-item">{cartItems.length}</span>
        </div>
      </NavLink>
    </>
  );
};

export default NavBarEnd;
