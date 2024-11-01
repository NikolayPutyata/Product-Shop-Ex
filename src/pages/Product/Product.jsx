import { useEffect, useRef, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { addToCart } from "../../redux/cartOps";
import { useDispatch } from "react-redux";
import { fetchProductById } from "../../api";
import { nanoid } from "nanoid";
import CarouselItem from "./CarouselItem";

const Product = () => {
  const [product, setProduct] = useState({});

  const location = useLocation();
  const backState = useRef(location.state || "/products");

  const dispatch = useDispatch();

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
    <>
      <Link to={backState.current}>Back</Link>
      <div className="hero bg-base-200 px-4 lg:px-8">
        <div className="hero-content flex-col lg:flex-row gap-6 lg:gap-12">
          <img
            src={
              product.images && product.images.length <= 3
                ? product.images[0]
                : product.thumbnail
            }
            className="w-full max-w-xs sm:max-w-md lg:max-w-xl rounded-lg shadow-2xl"
          />
          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              {product.title}
            </h1>
            <p className="py-4 text-lg sm:text-xl font-bold">
              ${product.price}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                className="btn btn-primary btn-md lg:btn-lg w-full sm:w-auto "
                onClick={() => dispatch(addToCart(product))}
              >
                Add to cart
              </button>
              <Link
                to="info"
                className="btn btn-outline btn-md lg:btn-lg w-full sm:w-auto"
              >
                Info
              </Link>
            </div>
            <div className="mt-6">
              <ul className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {product.tags?.map((tag) => (
                  <li
                    key={nanoid()}
                    className="bg-white text-black px-3 py-1 rounded-full text-sm border border-blue-500"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {product.images && product.images.length <= 3 && (
        <div className="flex flex-col lg:flex-row w-full gap-6 lg:gap-12 items-start lg:items-center">
          <div className="carousel w-full lg:w-1/2">
            <CarouselItem
              id="slide1"
              src={product.images && product.images[0]}
              prevSlide="#slide3"
              nextSlide="#slide2"
            />
            <CarouselItem
              id="slide2"
              src={product.images && product.images[1]}
              prevSlide="#slide1"
              nextSlide="#slide3"
            />
            <CarouselItem
              id="slide3"
              src={product.images && product.images[2]}
              prevSlide="#slide2"
              nextSlide="#slide1"
            />
          </div>
          <p className="w-full lg:w-1/2 text-justify p-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            saepe laudantium optio error nobis eligendi quibusdam deserunt iste,
            aspernatur reprehenderit culpa ratione et deleniti ullam ipsam totam
            ducimus, dignissimos non! Culpa, corporis. Voluptas, iure ipsum!
            Architecto eum, asperiores sit obcaecati enim vero nemo sed at
            placeat itaque ad ipsum nulla? Repudiandae ea quaerat, sit atque
            quos velit quibusdam aliquam optio! Nesciunt rerum necessitatibus
            exercitationem itaque quis quas voluptatem corrupti, vero iusto
            architecto, aspernatur molestiae quo deleniti animi ratione ad
            dolores, nostrum labore iure repellat at porro doloremque. Eaque,
            voluptatem quo!
          </p>
        </div>
      )}
      <Outlet />
    </>
  );
};

export default Product;
