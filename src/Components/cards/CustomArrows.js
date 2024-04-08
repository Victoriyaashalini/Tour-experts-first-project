import React from "react";


const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
     
      onClick={onClick}
    >
      <img src="../../assests/images/arrow.png" alt="" />
     
    </div>
  );
};

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
     
      onClick={onClick}
    >
     <img src="../../assests/images/arrow (1).png" alt="" />
     
    </div>
  );
};

export { CustomPrevArrow, CustomNextArrow };