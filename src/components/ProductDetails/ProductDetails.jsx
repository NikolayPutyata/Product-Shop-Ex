import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../../redux/Products/productsOps";

const ProductDetails = () => {
  const [product, setProduct] = useState([]);

  const { productId } = useParams();

  useEffect(() => {
    const fetchAndSetProductById = async () => {
      try {
        const data = await fetchProductById(productId);
        setProduct(data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchAndSetProductById();
  }, [productId]);

  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-base-100 rounded-lg shadow-md">
      <p className="text-lg sm:text-xl font-semibold mb-4">
        Rating: <span className="font-normal">{product.rating}</span>
      </p>
      <p className="text-md sm:text-lg mb-6">
        <span className="font-semibold">About:</span> {product.description}
      </p>

      <div>
        <h3 className="text-lg font-semibold mb-4">Reviews:</h3>
        <ul className="flex flex-col md:flex-row md:flex-wrap md:space-x-4">
          {product.reviews?.map(({ comment, reviewerName }) => (
            <li
              key={nanoid()}
              className="border-b border-gray-300 pb-4 md:border-b-0 md:pb-0 flex-1 md:flex-initial mb-4 md:mb-0"
            >
              <h4 className="text-md font-bold mb-1">{reviewerName}</h4>
              <p className="text-sm sm:text-base md:text-lg">{comment}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductDetails;
