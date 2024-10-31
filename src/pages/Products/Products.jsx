import { useEffect, useState } from "react";
import ListItem from "../../components/ListItem/ListItem";
import { useLocation } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import { fetchProducts, getMoreProducts } from "../../api";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [skipElements, setskipElements] = useState(0);

  const location = useLocation();

  useEffect(() => {
    const fetchAndSetProducts = async () => {
      try {
        const { products } = await fetchProducts();
        setProducts(products);
        setskipElements(10);
      } catch (e) {
        console.log(e);
      }
    };
    fetchAndSetProducts();
  }, []);

  const loadMoreFu = async () => {
    try {
      const data = await getMoreProducts(skipElements);
      setProducts([...products, ...data.products]);
      setskipElements((prev) => prev + 10);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      {products.length > 0 ? (
        <>
          <ul className="flex flex-wrap justify-center gap-4">
            {products.map((product) => (
              <li key={product.id}>
                <ListItem product={product} location={location} />
              </li>
            ))}
          </ul>
          <button onClick={() => loadMoreFu()}>Load more</button>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Products;
