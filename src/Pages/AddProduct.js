import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const AddProduct = () => {
  const [state, setState] = useState({
    name: "",
    price: "",
  });
  const history = useHistory();

  let newProduct = {
    id: Math.floor(Math.random() * 10000) + 1,
    name: state.name,
    price: state.price,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let cachedDate = localStorage.setItem(
      newProduct.id.toString(),
      JSON.stringify(newProduct)
    );
    history.push({ pathname: "/", data: cachedDate });
    setState("");
  };

  const handleOnChange = (e) => {
    const value = e.target.value;
    setState({ ...state, [e.target.name]: value });
  };

  return (
    <div className="container">
      <div className="page-title-section">
        <h3 className="grey-300">Add product</h3>
      </div>
      <div className="form-card">
        <form onSubmit={handleSubmit}>
          <div>
            <label className="input-label">Product name</label>
            <input
              className="input"
              type="text"
              placeholder="Product name"
              name="name"
              value={state.name}
              onChange={handleOnChange}
            />
          </div>
          <div>
            <label className="input-label">Price</label>
            <input
              className="input"
              type="text"
              placeholder="Eg. 5.00"
              name="price"
              value={state.price}
              onChange={handleOnChange}
            />
          </div>
          <div style={{ paddingTop: "8px" }}></div>
          <button className="button fluid" type="submit">
            Save Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
