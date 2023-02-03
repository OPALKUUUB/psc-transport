import React from "react";

function Logo() {
  return (
    <div className="min-w-[80px] w-[80px] min-h-[75px] h-[75px] border-solid border-2 border-white bg-[var(--primary)] text-inherit text-center">
      <h2 className="font-mono uppercase text-[2.5rem] bg-white text-[var(--primary)] w-full mb-1">
        psc
      </h2>
      <span className="text-white font-mono text-[.95rem]">logistic</span>
    </div>
  );
}

export default Logo;
