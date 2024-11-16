import { useEffect } from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import { searchProductByQuery } from "../../redux/operations/productsOps";
import ListItem from "../../components/ListItem/ListItem";
import FavoriteList from "../../components/FavoriteList/FavoriteList";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSearchingProducts,
  selectSearchingWord,
  selectSearchLoading,
} from "../../redux/Products/searchingProductsSlice";
import Loader from "../../components/Loader/Loader";

const SearchPage = () => {
  const dispatch = useDispatch();
  const searchProducts = useSelector(selectSearchingProducts);
  const searchingWord = useSelector(selectSearchingWord);
  const loading = useSelector(selectSearchLoading);

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
      <div className="flex flex-col pl-12 pr-12 mt-4 mb-4 lg:hidden">
        <SearchForm />
      </div>

      {loading ? (
        <div className="lg:mt-9">
          <Loader />
        </div>
      ) : (
        <ul className="flex flex-wrap justify-center gap-4 mt-10">
          {searchProducts?.map((product) => (
            <ListItem key={product.id} product={product} />
          ))}
        </ul>
      )}
      <FavoriteList />
    </div>
  );
};

export default SearchPage;
