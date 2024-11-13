import { useEffect } from "react";
import ListItem from "../../components/ListItem/ListItem";
import { useLocation, useSearchParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import { fetchProducts } from "../../redux/operations/productsOps";
import { useDispatch, useSelector } from "react-redux";
import { selectProducts } from "../../redux/Products/productsSlice";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);

  const [searchParams, setSearchParams] = useSearchParams();

  const location = useLocation();

  useEffect(() => {
    const fetchAndSetProducts = async () => {
      try {
        const currentSkip = Number(searchParams.get("skip")) || 0;

        await dispatch(fetchProducts(currentSkip));
      } catch (e) {
        console.log(e);
      }
    };
    fetchAndSetProducts();
  }, [dispatch, searchParams]);

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
                className="join-item btn btn-outline btn-md"
                onClick={() => {
                  const currentSkip = Number(searchParams.get("skip") || 0);
                  setSearchParams({ skip: currentSkip - 12 });
                }}
                disabled={Number(searchParams.get("skip")) === 0}
              >
                Previous page
              </button>
              <button
                className="join-item btn btn-outline btn-md"
                onClick={() => {
                  const currentSkip = Number(searchParams.get("skip") || 0);
                  setSearchParams({ skip: currentSkip + 12 });
                }}
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
