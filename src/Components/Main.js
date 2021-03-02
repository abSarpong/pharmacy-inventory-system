import React from "react";
import { Switch, Route } from "react-router-dom";
import AddProduct from "../Pages/AddProduct";
import EditProduct from "../Pages/EditProduct";
import Products from "../Pages/Products";

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Products} />
      <Route exact path="/add-product" component={AddProduct} />
      <Route exact path="/edit-product" component={EditProduct} />
    </Switch>
  </main>
);

export default Main;
