import { useSelector } from "react-redux";
import { selectIsLoading } from "../../redux/cartSlice";
import Loader from "../../components/Loader/Loader";

const HomePage = () => {
  const isLoading = useSelector(selectIsLoading);
  return (
    <>
      <h1>Home</h1>
      {isLoading ? <Loader /> : <h1>Home page</h1>}
    </>
  );
};

export default HomePage;
