import React from "react";
import Slider from "react-slick";
import "../../assests/css/cardcarousel.css";

// Slider item component
const SliderItem = ({ number }) => {
  return (
    <div>
      <h3>{number}</h3>
    </div>
  );
};

function Responsive() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  // Generate slider items
  const sliderItems = Array.from({ length: 8 }, (_, i) => i + 1);

  return (
    <div>
      <div className="slider-container">
        <Slider {...settings}>
          {sliderItems.map((item) => (
            <SliderItem key={item} number={item} />
          ))}
        </Slider>
      </div>
      <div className="search-container">
        {/* Your search component goes here */}
        {/* For example: */}
        {/* <SearchComponent /> */}
      </div>
    </div>
  );
}

export default Responsive;
