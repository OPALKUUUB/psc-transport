import React from "react";

function Logo() {
  return (
    <div className="w-[50px] h-[50px] lg:w-[80px] lg:h-[75px] border-solid border-2 border-white bg-[var(--primary)] text-inherit text-center">
      <h2 className="font-mono uppercase lg:text-[2.5rem] bg-white text-[var(--primary)] w-full lg:mb-1">
        psc
      </h2>
      <span className="text-white font-mono lg:text-[.95rem] text-[.55rem]">logistic</span>
    </div>
  );
}

export default Logo;
