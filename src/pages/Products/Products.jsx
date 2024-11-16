import { useEffect } from "react";
import ListItem from "../../components/ListItem/ListItem";
import { useLocation, useSearchParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import {
  fetchProducts,
  getProductByCategory,
} from "../../redux/operations/productsOps";
import { useDispatch, useSelector } from "react-redux";
import {
  selectProducts,
  selectTotalProducts,
} from "../../redux/Products/productsSlice";
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (currentCategory.trim() === "" || currentCategory.trim() === "all") {
          await dispatch(fetchProducts(currentSkip));
        } else {
          await dispatch(
            getProductByCategory({ currentCategory, currentSkip })
          );
        }
      } catch (e) {
        console.error("Error fetching products:", e);
      }
    };

    fetchData();
  }, [currentCategory, currentSkip, dispatch]);

  return (
    <div>
      {products.length > 0 ? (
        <>
          <Filters
            setSearchParams={setSearchParams}
            currentCategory={currentCategory}
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
          {totalProducts >= 12 && (
            <PaginationControls
              setSearchParams={setSearchParams}
              currentSkip={currentSkip}
            />
          )}
        </>
      ) : (
        // <div className="flex justify-center items-center min-h-[600px]"></div>
        <Loader />
      )}
    </div>
  );
};

export default Products;
