import { FaAngleUp } from "react-icons/fa";

const Badges = ({ product }) => {
  return (
    <div className="flex flex-col gap-1 relative">
      {product.rating > 4 ? (
        <div className="flex gap-1 items-center absolute top-4 left-4">
          <p className="text-xs text-green-500 italic">High Rating</p>
          <FaAngleUp className="text-green-500" />
        </div>
      ) : null}

      {product.stock > 0 ? (
        <div
          className={`flex gap-1 items-center absolute ${
            product.rating > 4 ? "top-10" : "top-4"
          } left-4`}
        >
          <p className="text-xs text-purple-500 italic">
            In stock: {product.stock}
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default Badges;
