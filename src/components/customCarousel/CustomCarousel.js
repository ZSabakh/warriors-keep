import React from "react";
import { Carousel } from "react-responsive-carousel";
import "./CustomCarousel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CustomCarousel = () => {
  return (
    <Carousel
      showThumbs={false}
      showArrows={true}
      useKeyboardArrows={true}
      autoPlay={true}
      interval={3000}
      // onChange={onChange}
      // onClickItem={onClickItem}
      // onClickThumb={onClickThumb}
    >
      <div>
        <img
          style={{ height: "420px" }}
          src="https://www.rover.com/blog/wp-content/uploads/2017/10/swimmer-802890_1280-960x540.jpg"
        />
        <p className="customLegend">
          <h1>
            Veteran's <u>best friend.</u>
          </h1>
          <button>Mission</button>
        </p>
      </div>
      <div>
        <img
          style={{ height: "420px" }}
          src="https://static.thebark.com/sites/default/files/content/article/full/service-dogs-support-ptsd.jpg"
        />
        <p className="customLegend">
          <h1>
            Professionally trained<u> dogs.</u>
          </h1>
          <button>Why</button>
        </p>
      </div>
      <div>
        <img
          style={{ height: "420px" }}
          src="http://jackidelecki.com/wp-content/uploads/2015/06/120503-ptsd-dogs-hilson-bcol-11a.3803807700.jpg"
        />
        <p className="customLegend">
          <h1>
            Dogs are <u>good.</u>
          </h1>
        </p>
      </div>
    </Carousel>
  );
};

export default CustomCarousel;
