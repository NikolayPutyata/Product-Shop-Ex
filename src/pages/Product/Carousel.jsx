import { useSelector } from "react-redux";
import CarouselItem from "./CarouselItem";
import { selectSingleProduct } from "../../redux/selectors";

const Carousel = () => {
  const product = useSelector(selectSingleProduct);

  return (
    <div>
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
        <p className="w-full lg:w-1/2 text-justify p-5 text-gray-700 leading-relaxed text-base md:text-lg lg:text-xl lg:pl-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          saepe laudantium optio error nobis eligendi quibusdam deserunt iste,
          aspernatur reprehenderit culpa ratione et deleniti ullam ipsam totam
          ducimus, dignissimos non! Culpa, corporis. Voluptas, iure ipsum!
          Architecto eum, asperiores sit obcaecati enim vero nemo sed at placeat
          itaque ad ipsum nulla? <br />
          Repudiandae ea quaerat, sit atque quos velit quibusdam aliquam optio!
          Nesciunt rerum necessitatibus exercitationem itaque quis quas
          voluptatem corrupti, vero iusto architecto, aspernatur molestiae quo
          deleniti animi ratione ad dolores, nostrum labore iure repellat at
          porro doloremque. Eaque, voluptatem quo!
        </p>
      </div>
    </div>
  );
};

export default Carousel;
