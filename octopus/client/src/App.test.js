import { fireEvent, render, waitForElement } from "@testing-library/react";
import React from "react";
import App from "./App";

// resetting window history before each test, need to tidy up
beforeEach(() => {
  if (window.location.pathname !== "/") {
    window.history.replaceState(null, null, "/");
  }
});
test("should be able to increase and decrease product quantity", async () => {
  const { getByText, getByTitle } = render(<App />);
  fireEvent.click(getByText("Go to product page"));

  const increaseQuantity = await waitForElement(() => getByText("+"));

  const currentQuantity = getByTitle("Current quantity");
  expect(currentQuantity).toHaveTextContent("1");

  fireEvent.click(increaseQuantity);
  expect(currentQuantity).toHaveTextContent("2");

  const decreaseQuantity = await waitForElement(() => getByText("-"));

  fireEvent.click(decreaseQuantity);
  expect(currentQuantity).toHaveTextContent("1");
});

test("should be able to add items to the basket", async () => {
  const { getByText, getByTitle } = render(<App />);
  fireEvent.click(getByText("Go to product page"));

  const increaseQuantity = await waitForElement(() => getByText("+"));

  const currentQuantity = getByTitle("Current quantity");

  fireEvent.click(increaseQuantity);
  fireEvent.click(increaseQuantity);
  fireEvent.click(increaseQuantity);

  expect(currentQuantity).toHaveTextContent("4");

  const addToBasketElement = getByText("Add to cart");
  fireEvent.click(addToBasketElement);

  const basketItems = getByTitle("Basket Items");
  expect(basketItems).toHaveTextContent("4");
});
