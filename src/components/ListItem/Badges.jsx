const Badges = ({ product }) => {
  return (
    <div className="flex flex-col gap-1 relative">
      {product.rating > 4 ? (
        <div className="flex gap-1 items-center absolute top-4 left-4">
          <p
            className="bg-transparent text-green-500 px-[4px] py-[2px] rounded-full text-xs
          border border-green-500"
          >
            High Rating
          </p>
        </div>
      ) : null}

      {product.stock > 0 ? (
        <div
          className={`flex gap-1 items-center absolute ${
            product.rating > 4 ? "top-[42px]" : "top-4"
          } left-4`}
        >
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
