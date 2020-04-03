import React, { useState } from "react";
import {
  Cost,
  Footer,
  Navbar,
  QuantityOfItem,
  Specifications
} from "../components";

const ProductPage = ({ product, basketItems, setBasketItems }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      <Navbar basketItems={basketItems} />
      <div className="darkerBackground column">
        <img
          src={product.imgUrl}
          alt={product.name}
          style={{
            width: "300px"
          }}
        />
      </div>

      <div>
        <h1>{product.name}</h1>
        <p className="blueFont">
          {product.power}/ packet of {product.quantity}
        </p>
      </div>
      <div className="darkerBackground column">
        <div className="row">
          <Cost price={product.price} />
          <QuantityOfItem quantity={quantity} setQuantity={setQuantity} />
        </div>

        <button
          className="addToCart"
          onClick={() => setBasketItems(basketItems + quantity)}
        >
          <h3>Add to cart</h3>
        </button>
      </div>

      <div>
        <h3>Description</h3>
        <p>{product.description}</p>
      </div>

      <div className="darkerBackground">
        <Specifications
          brand={product.brand}
          weight={product.weight}
          height={product.height}
          width={product.width}
          length={product.length}
          modelCode={product.modelCode}
          colour={product.colour}
        />
      </div>

      <Footer />
    </>
  );
};

export default ProductPage;
