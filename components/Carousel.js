import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import classnames from "classnames";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  const renderDots = () => {
    return [0, 1].map((slideIndex) => {
      return (
        <button
          key={slideIndex}
          className="w-[18px] h-[18px] cursor-pointer border-0 bg-inherit p-0"
          onClick={() => handleSlideChange(slideIndex)}
        >
          <div
            className={classnames(
              "w-[12px] h-[12px] rounded-lg m-3",
              currentSlide === slideIndex ? "bg-blue-500" : "bg-gray-400"
            )}
          />
        </button>
      );
    });
  };

  return (
    <div className="relative w-full">
      <AutoPlaySwipeableViews
        enableMouseEvents
        index={currentSlide}
        onChangeIndex={handleSlideChange}
      >
        {/* <div
          style={{
            backgroundImage: `url('/images/carousel/carousel_1.jpg')`,
            backgroundSize: "100% 100%",
          }}
          className="sm:min-h-[500px] min-h-[200px] "
        ></div> */}
        <div
          style={{
            backgroundImage: `url('/images/carousel/carousel_2.jpg')`,
            backgroundSize: "100% 100%",
          }}
          className="sm:min-h-[500px] min-h-[200px] "
        ></div>
        <div
          style={{
            backgroundImage: `url('/images/carousel/carousel_3.jpg')`,
            backgroundSize: "100% 100%",
          }}
          className="sm:min-h-[500px] min-h-[200px] "
        ></div>
      </AutoPlaySwipeableViews>
      <div className="absolute bottom-[8px] right-[18px]">{renderDots()}</div>
    </div>
  );
}

export default Carousel;
