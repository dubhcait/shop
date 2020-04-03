import React from "react";
const Specifications = ({
  brand,
  weight,
  height,
  width,
  length,
  modelCode,
  colour
}) => (
  <>
    {" "}
    <h3>Specifications</h3>
    <ul>
      <li>
        <p>Brand</p>
        <p>{brand}</p>
      </li>
      <li>
        <p>Item weight</p>
        <p>{weight}</p>
      </li>
      <li>
        <p>Dimensions</p>
        <p>
          {height}x{width}x{length}
        </p>
      </li>
      <li>
        <p>Item model number</p>
        <p>{modelCode}</p>
      </li>
      <li>
        <p>Colour</p>
        <p>{colour}</p>
      </li>
    </ul>
  </>
);

export default Specifications;
