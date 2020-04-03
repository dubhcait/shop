import React from "react";
const QuantityOfItem = ({ quantity, setQuantity }) => (
  <div className="column">
    <p className="blueFont">QTY</p>
    <div
      style={{
        display: "flex"
      }}
    >
      <button
        className="qualityButton"
        onClick={() => setQuantity(quantity === 0 ? quantity : quantity - 1)}
      >
        -
      </button>
      <p
        style={{ margin: "10px", fontSize: "larger" }}
        title="Current quantity"
      >
        {quantity}
      </p>
      <button
        className="qualityButton"
        onClick={() => setQuantity(quantity + 1)}
      >
        +
      </button>
    </div>
  </div>
);

export default QuantityOfItem;
