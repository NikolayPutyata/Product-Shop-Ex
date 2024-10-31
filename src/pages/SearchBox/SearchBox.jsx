import { useEffect, useState } from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import { searchProductByQuery } from "../../api";
import ListItem from "../../components/ListItem/ListItem";
import FavoriteList from "../../components/FavoriteList/FavoriteList";

const SearchBox = () => {
  const [searchProducts, setSearchProducts] = useState([]);
  const [searchingWord, setSearchingWord] = useState("");

  useEffect(() => {
    if (searchingWord.trim() === "") {
      setSearchProducts([]);
      return;
    }

    const fetchByQuery = async () => {
      try {
        const { products } = await searchProductByQuery(searchingWord);
        setSearchProducts(products);
      } catch (e) {
        console.log(e);
      }
    };
    fetchByQuery();
  }, [searchingWord]);

  return (
    <div className="">
      <div className="flex flex-col pl-10 pr-10">
        <SearchForm setSearchingWord={setSearchingWord} />
      </div>

      <ul className="">
        {searchProducts?.map((product) => (
          <ListItem key={product.id} product={product} />
        ))}
      </ul>
      <FavoriteList />
    </div>
  );
};

export default SearchBox;
