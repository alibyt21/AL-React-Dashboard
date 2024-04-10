import React from "react";

const Column = ({ children, type ,color }) => {
  return (
    <>
      <div
        className={`flex  justify-center items-center w-full    ${
          type === 1
            ? " border-l-2 border-[#e5e5e5] "
            : type === 2
            ? "border-b-2 border-[#e5e5e5] h-[53px]"
            : ""
        } ${color === 1 ? " text-[#3e70c2]" : ""}`}
      >
        {children}
      </div>
    </>
  );
};

export default Column;
