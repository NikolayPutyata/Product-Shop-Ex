import { useSelector } from "react-redux";
import { selectCartItems } from "../../redux/selectors";
import MiniListItem from "./MiniListItem";

const MiniOrderList = () => {
  const cartItems = useSelector(selectCartItems);

  return (
    <div className="border border-black rounded-lg p-6">
      <ul className="flex flex-col w-full space-y-4">
        {cartItems.map((product) => (
          <MiniListItem key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
};

export default MiniOrderList;
