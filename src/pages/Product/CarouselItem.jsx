const CarouselItem = ({ id, src, prevSlide, nextSlide }) => {
  return (
    <div id={id} className="carousel-item relative w-full">
      <img src={src} className="w-full" />
      <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <a href={prevSlide} className="btn btn-circle">
          ❮
        </a>
        <a href={nextSlide} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
};

export default CarouselItem;
