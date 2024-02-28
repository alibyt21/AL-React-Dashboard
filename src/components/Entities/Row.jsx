import React from "react";

const Row = ({ children, type }) => {
  return (
    <>
      <div
        className={`flex justify-between  my-[1px] w-[960px] mr-[20px] h-[53px] rounded-[10px] text-[14px] ${
          type === 1 ? "bg-[#f4f4f4] " : "bg-[#fefefe3c]"
        }`}
      >
        {children}
      </div>
    </>
  );
};

export default Row;
