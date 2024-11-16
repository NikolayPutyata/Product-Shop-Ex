const MiniListItem = ({ product }) => {
  return (
    <li className="flex items-center justify-between">
      <img
        src={product.thumbnail}
        className="w-14 h-14 object-cover rounded-lg"
      />
      <p className="text-wrap">{product.title}</p>

      <p>{product.count}</p>
    </li>
  );
};

export default MiniListItem;
