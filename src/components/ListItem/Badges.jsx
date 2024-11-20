import { IoMdStar } from "react-icons/io";

const Badges = ({ product }) => {
  return (
    <div className="flex flex-col gap-1 relative">
      <div className="flex gap-1 items-center absolute top-4 left-4">
        <div
          className="flex items-center justify-center gap-1 bg-transparent text-green-500 px-[4px] py-[2px] rounded-full text-xs
          border border-green-500"
        >
          <IoMdStar />
          {product.rating}
        </div>
      </div>

      {product.stock > 0 ? (
        <div className={`flex gap-1 items-center absolute top-[42px] left-4`}>
          <p
            className="bg-transparent text-purple-500 px-[4px] py-[2px] rounded-full text-xs
          border border-purple-500"
          >
            In stock: {product.stock}
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default Badges;
