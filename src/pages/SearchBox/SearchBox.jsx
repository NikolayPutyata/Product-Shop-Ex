import { useEffect } from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import { searchProductByQuery } from "../../redux/operations/productsOps";
import ListItem from "../../components/ListItem/ListItem";
import FavoriteList from "../../components/FavoriteList/FavoriteList";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSearchingProducts,
  selectSearchingWord,
} from "../../redux/Products/searchingProductsSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const searchProducts = useSelector(selectSearchingProducts);
  const searchingWord = useSelector(selectSearchingWord);

  useEffect(() => {
    const fetchByQuery = async () => {
      if (searchingWord.trim()) {
        try {
          await dispatch(searchProductByQuery(searchingWord));
        } catch (e) {
          console.log(e);
        }
      }
    };

    fetchByQuery();
  }, [searchingWord, dispatch]);

  return (
    <div className="">
      <div className="flex flex-col pl-12 pr-12 mt-4  lg:hidden">
        <SearchForm />
      </div>

      <ul className="flex flex-wrap justify-center gap-4 mt-10">
        {searchProducts?.map((product) => (
          <ListItem key={product.id} product={product} />
        ))}
      </ul>
      <FavoriteList />
    </div>
  );
};

export default SearchBox;
