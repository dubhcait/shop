import ApolloClient, { gql } from "apollo-boost";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { Navbar } from "./components";
import ProductPage from "./pages/productPage";

const App = () => {
  const [product, setProduct] = useState({});
  const [basketItems, setBasketItems] = useState(0);

  const client = new ApolloClient({
    uri: "http://127.0.0.1:8000/graphql",
    headers: {}
  });

  useEffect(() => {
    client
      .query({
        query: gql`
          query getProductById {
            product(productId: 1) {
              id
              name
              power
              description
              price
              quantity
              brand
              weight
              height
              width
              length
              modelCode
              colour
              imgUrl
            }
          }
        `
      })
      .then(({ data, error }) => {
        //  to do add validation of the the response
        const { product } = data;
        setProduct(product);
        if (error) {
          console.log("Error with gql request:", error);
        }
      });
    // eslint-disable-next-line
  }, []);

  if (!product) {
    return <p>Loading</p>;
  }
  return (
    <Router>
      <Switch>
        <Route path="/product">
          <ProductPage
            basketItems={basketItems}
            setBasketItems={setBasketItems}
            product={product}
          />
        </Route>
        <Route path="/">
          <>
            <Navbar basketItems={basketItems} />
            <Link to="/product">Go to product page</Link>
          </>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
