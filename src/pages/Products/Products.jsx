import { useEffect, useState } from "react";
import ListItem from "../../components/ListItem/ListItem";
import { useLocation } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import {
  fetchProducts,
  getMoreProducts,
} from "../../redux/Products/productsOps";
import { useDispatch, useSelector } from "react-redux";
import { selectProducts } from "../../redux/Products/productsSlice";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const [skipElements, setskipElements] = useState(0);

  const location = useLocation();

  useEffect(() => {
    const fetchAndSetProducts = async () => {
      try {
        await dispatch(fetchProducts());
      } catch (e) {
        console.log(e);
      }
    };
    fetchAndSetProducts();
  }, [dispatch]);

  const loadPage = async (offset) => {
    try {
      const newSkip = skipElements + offset;
      setskipElements(newSkip);

      await dispatch(getMoreProducts(newSkip));
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
          <div className="flex justify-center mt-5 mb-5">
            <div className="join grid grid-cols-2 gap-4 w-auto">
              <button
                className="join-item btn btn-outline"
                onClick={() => loadPage(-12)}
                disabled={skipElements === 0}
              >
                Previous page
              </button>
              <button
                className="join-item btn btn-outline"
                onClick={() => loadPage(12)}
              >
                Next
              </button>
            </div>
          </div>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Products;
