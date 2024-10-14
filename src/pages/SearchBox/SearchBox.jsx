import { useEffect, useState } from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import { searchProductByQuery } from "../../api";
import ListItem from "../../components/ListItem/ListItem";

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
    <div>
      <SearchForm setSearchingWord={setSearchingWord} />
      <ul>
        {searchProducts?.map((product) => (
          <ListItem key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
};

export default SearchBox;
