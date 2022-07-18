// Import Swiper React components
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/lazy";
import movies from "../MoviePage/multipleMoviesExample.json";

const MovieCarousel = ({ aMovies, sTitle }) => {
  return (
    <div className="flex-column">
      <h2 className="carousel-header">{sTitle}</h2>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={5}
        navigation={{ nextE1: "swiper-arrow", prevE1: "swiper-arrow" }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className="swiper"
        lazy={true}
        autoplay={true}
      >
        {movies.results.map((oMovie) => (
          <SwiperSlide className="slide" key={oMovie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${oMovie.poster_path}`}
              className="movie-slide"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MovieCarousel;
