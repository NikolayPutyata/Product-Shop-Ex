import { useEffect } from "react";
import ListItem from "../../components/ListItem/ListItem";
import { useLocation, useSearchParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import {
  fetchProducts,
  getProductByCategory,
} from "../../redux/operations/productsOps";
import { useDispatch, useSelector } from "react-redux";
import { selectProducts, selectTotalProducts } from "../../redux/selectors";
import Filters from "./Filters";
import PaginationControls from "./PaginationControls";

const Products = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const products = useSelector(selectProducts);
  const totalProducts = useSelector(selectTotalProducts);

  const [searchParams, setSearchParams] = useSearchParams();

  const currentSkip = Number(searchParams.get("skip")) || 0;
  const currentCategory = searchParams.get("category") || "";
  const currentSorters = searchParams.get("sorters") || "";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const isAllCategory =
          currentCategory === "all" || currentCategory === "";
        const action = isAllCategory ? fetchProducts : getProductByCategory;
        const payload = isAllCategory
          ? { skipElements: currentSkip, sorters: currentSorters }
          : { currentCategory, currentSkip, sorters: currentSorters };

        await dispatch(action(payload));
      } catch (e) {
        console.error("Error fetching products:", e);
      }
    };

    fetchData();
  }, [currentCategory, currentSkip, currentSorters, dispatch]);

  return (
    <div>
      {products.length > 0 ? (
        <>
          <Filters
            setSearchParams={setSearchParams}
            currentCategory={currentCategory}
            currentSorters={currentSorters}
          />
          <ul
            className={`flex flex-wrap justify-center gap-4 ${
              totalProducts >= 12 ? "" : "mb-6"
            }`}
          >
            {products.map((product) => (
              <li key={product.id}>
                <ListItem product={product} location={location} />
              </li>
            ))}
          </ul>
          {totalProducts > 12 && (
            <PaginationControls
              setSearchParams={setSearchParams}
              currentSkip={currentSkip}
            />
          )}
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Products;
