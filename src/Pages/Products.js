import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import ProductCard from "../Components/ProductCard";

const Products = () => {
  const history = useHistory();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getLocalData([]);
    fetch("http://www.mocky.io/v2/5c3e15e63500006e003e9795").then((res) =>
      res
        .json()
        .then((data) => {
          getLocalData(data.products);
        })
        .catch((err) => console.log(err))
    );
  }, []);

  function getLocalData(data) {
    var cachedProducts = [],
      // fetch data keys from localStorage
      keys = Object.keys(localStorage),
      i = keys.length;

    // get data from localStorage
    while (i--) {
      cachedProducts.push(JSON.parse(localStorage.getItem(keys[i])));
    }

    var serverData = [];

    // prepare data from server
    data.map((product) =>
      serverData.push({
        id: product.id,
        name: product.name,
        price: product.prices[0].price,
        flag: true,
      })
    );

    setProducts([...products, ...cachedProducts, ...serverData]);
  }

  return (
    <div className="container">
      <div className="page-title-section">
        <h3 className="grey-300">Products</h3>
        <button className="button" onClick={() => history.push("/add-product")}>
          Add Product
        </button>
      </div>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
