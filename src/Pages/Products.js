import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';

const Products = () => {
  const [state, setState] = useState([]);
  const history = useHistory();
  useEffect(() => {
    fetch("http://www.mocky.io/v2/5c3e15e63500006e003e9795").then((res) =>
      res
        .json()
        .then((data) => setState(data.products))
        .catch((err) => console.log(err))
    );
  }, []);
  
  return (
    <div className="container">
      <div className="page-title-section">
        <h3 className="grey-300">Products</h3>
        <button className="button" onClick={() => history.push('/add-product')}>Add Product</button>
      </div>
      {state.map(product => (
        <div key={product.id}>
          <h2 >{product.name}</h2>
          <ul>{product.prices.map((item) => (
            <span key={item.id}>
              <li>{item.price}</li>
            </span>
          ))}</ul>
        </div>
      ))}
    </div>
  );
};

export default Products;
