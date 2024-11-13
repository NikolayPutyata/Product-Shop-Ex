import { FaStar, FaUser } from "react-icons/fa";
import { nanoid } from "nanoid";
import { useSelector } from "react-redux";
import { selectSingleProduct } from "../../redux/Products/singleProductSlice";

const ProductDetails = () => {
  const product = useSelector(selectSingleProduct);

  return (
    <div className="p-6 sm:p-8 lg:p-10 bg-white rounded-lg shadow-lg border border-gray-200">
      <p className="flex items-center text-lg sm:text-xl font-semibold text-gray-800 mb-4">
        <FaStar className="text-yellow-500 mr-2" />
        Rating: <span className="font-normal ml-1">{product.rating}</span>
      </p>
      <p className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
        Warranty: {product.warrantyInformation}
      </p>

      <p className="text-md sm:text-lg text-gray-700 mb-6 leading-relaxed">
        {product.description}
      </p>

      <div>
        <ul className="space-y-6 lg:space-y-0 md:space-x-6 md:flex md:flex-wrap">
          {product.reviews?.map(({ comment, reviewerName }) => (
            <li
              key={nanoid()}
              className="bg-gray-50 p-4 shadow-md border border-gray-200 flex-1 md:flex-initial md:w-[45%] lg:w-[30%] mb-4 md:mb-0"
            >
              <h4 className="flex items-center text-md font-bold text-gray-800 mb-2">
                <FaUser className="text-gray-500 mr-2" />
                {reviewerName}
              </h4>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-snug">
                {comment}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductDetails;
