import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Button from "../Components/Button";
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
    let cachedProducts = [];
    let keys = Object.keys(localStorage);

    for (let i = 0; i < keys.length; i++) {
      let reversePrice = JSON.parse(localStorage.getItem(keys[i]));
      reversePrice.price.reverse();
      cachedProducts.push(reversePrice);
    }

    let serverData = [];

    data.map((product) =>
      serverData.push({
        id: product.id,
        name: product.name,
        price: product.prices,
        flag: true,
      })
    );
    setProducts([...products, ...cachedProducts, ...serverData]);
  }

  return (
    <div className="container">
      <div className="page-title-section">
        <h3 className="grey-300">Products</h3>
        <Button
          label=" Add Product"
          onClick={() => history.push("/add-product")}
        />
      </div>

      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
