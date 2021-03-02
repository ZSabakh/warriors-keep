import React from "react";
import { Carousel } from "react-responsive-carousel";
import "./CustomCarousel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CustomCarousel = () => {
  return (
    <Carousel
      showStatus={false}
      className="carousel_container"
      showThumbs={false}
      showArrows={true}
      useKeyboardArrows={true}
      autoPlay={true}
      interval={3000}
    >
      <div>
        <img src="https://patriotpaws.org/wp-content/uploads/2016/02/Veteran-Slide-Elead-b-1438x430.jpg" />
        <div className="slideContent">
          <h1>
            Veteran's <u>best friend.</u>
          </h1>
          <button className="carousel_button1">See More</button>
        </div>
      </div>
      <div>
        <img src="https://patriotpaws.org/wp-content/uploads/2016/02/Brian-Field-Justice-RWVM-b-1500x430.jpg" />
        <div className="slideContent">
          <h1>
            Professionally trained<u> dogs.</u>
          </h1>
          <button className="carousel_button2">Why</button>
        </div>
      </div>
      <div>
        <img src="https://patriotpaws.org/wp-content/uploads/2017/01/Prison-Jan-2017-1500x430.jpg" />
        <div className="slideContent">
          <h1>
            Dogs are <u>good.</u>
          </h1>
        </div>
      </div>
    </Carousel>
  );
};

export default CustomCarousel;
