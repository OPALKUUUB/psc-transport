import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const styles = {
  slide: {
    // padding: 15,
    color: "#fff",
  },
  slide1: {
    backgroundImage: "url('/images/carousel/carousel_1.jpg')",
    backgroundSize: "100% 100%",
  },
  slide2: {
    backgroundImage: "url('/images/carousel/carousel_2.jpg')",
    backgroundSize: "100% 100%",
  },
  slide3: {
    backgroundImage: "url('/images/carousel/carousel_3.jpg')",
    backgroundSize: "100% 100%",
  },
};

function Carousel() {
  const [index, setIndex] = useState(0);
  const handleChangeIndex = (idx) => {
    setIndex(idx);
  };
  return (
    <div className="relative">
      <AutoPlaySwipeableViews
        enableMouseEvents
        index={index}
        onChangeIndex={handleChangeIndex}
      >
        <div
          style={Object.assign({}, styles.slide, styles.slide1)}
          className="sm:min-h-[500px] min-h-[200px] "
        ></div>
        <div
          style={Object.assign({}, styles.slide, styles.slide2)}
          className="sm:min-h-[500px] min-h-[200px] "
        ></div>
        <div
          style={Object.assign({}, styles.slide, styles.slide3)}
          className="sm:min-h-[500px] min-h-[200px] "
        ></div>
      </AutoPlaySwipeableViews>
      <div className="absolute bottom-[8px] right-[8px]">
        <button
          className="w-[18px] h-[18px] cursor-pointer border-0 bg-inherit p-0"
          onClick={() => handleChangeIndex(0)}
        >
          <div
            className={`${
              index === 0 && "bg-[#319fd6]"
            } h-[12px] w-[12px] rounded-lg m-[3px] bg-[#e4e6e7]`}
          />
        </button>
        <button
          className="w-[18px] h-[18px] cursor-pointer border-0 bg-inherit p-0"
          onClick={() => handleChangeIndex(1)}
        >
          <div
            className={`${
              index === 1 && "bg-[#319fd6]"
            } h-[12px] w-[12px] rounded-lg m-[3px] bg-[#e4e6e7]`}
          />
        </button>
        <button
          className="w-[18px] h-[18px] cursor-pointer border-0 bg-inherit p-0"
          onClick={() => handleChangeIndex(2)}
        >
          <div
            className={`${
              index === 2 && "bg-[#319fd6]"
            } h-[12px] w-[12px] rounded-lg m-[3px] bg-[#e4e6e7]`}
          />
        </button>
      </div>
    </div>
  );
}

export default Carousel;
