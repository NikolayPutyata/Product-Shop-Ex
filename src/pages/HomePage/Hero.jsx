import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchMainProductById } from "../../redux/Products/productsOps";
import { selectMainHomeProduct } from "../../redux/Products/homeSlice";

const Hero = () => {
  const dispatch = useDispatch();
  const mainProduct = useSelector(selectMainHomeProduct);

  useEffect(() => {
    const getMainProduct = async () => {
      try {
        await dispatch(fetchMainProductById("106"));
      } catch (e) {
        console.log(e);
      }
    };
    getMainProduct();
  }, [dispatch]);

  return (
    <>
      <div className="flex flex-col lg:flex-row w-full gap-8 lg:gap-16 items-start lg:items-center p-6 bg-gradient-to-b from-gray-50 to-gray-200 dark:from-gray-800 dark:to-gray-900">
        <div className="w-full lg:w-3/4 flex justify-center overflow-hidden">
          <img
            src={
              mainProduct.images && mainProduct.images.length > 1
                ? mainProduct.images[1]
                : mainProduct.thumbnail
            }
            className="w-full lg:h-[750px] object-cover"
            alt="Product"
          />
        </div>
        <p className="w-full lg:w-1/4 text-center lg:text-left text-4xl lg:text-6xl font-extrabold font-sans tracking-wide text-gray-800 dark:text-gray-100 leading-snug">
          <span className="block mb-10">FEEL</span>
          <span className="block mb-10">MODERN</span>
          <span className="block">SOLUTION</span>
        </p>
      </div>
    </>
  );
};

export default Hero;
