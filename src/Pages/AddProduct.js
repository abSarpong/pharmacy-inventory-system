import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "../Components/Button";
import InputField from "../Components/InputField";

const AddProduct = () => {
  const history = useHistory();
  const [errorText, setErrorText] = useState("");
  const [state, setState] = useState({
    name: "",
    price: "",
  });

  let newProduct = {
    id: Math.floor(Math.random() * 10000) + 1,
    name: state.name,
    price: [
      {
        id: Math.floor(Math.random() * 10000) + 1,
        price: state.price,
        date: Date(Date.now()),
      },
    ],

    flag: false,
  };

  const addProduct = (e) => {
    e.preventDefault();

    if (!state.name || !state.price) {
      setErrorText("Can't submit empty field(s)");
      return false;
    }

    let cachedDate = localStorage.setItem(
      newProduct.id.toString(),
      JSON.stringify(newProduct)
    );
    history.push({ pathname: "/", data: cachedDate });
    setState("");
  };

  const handleOnChange = (e) => {
    const value = e.target.value;
    setState((state) => ({ ...state, [e.target.name]: value }));
  };

  return (
    <div className="container">
      <div className="page-title-section">
        <h3 className="grey-300">Add product</h3>
      </div>
      <div className="form-card">
        <div className="danger-alert">{errorText}</div>
        <form onSubmit={addProduct} className="field-wrapper">
          <div>
            <label className="input-label">Product name</label>
            <InputField
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
            <InputField
              className="input"
              type="number"
              placeholder="Eg. 5.00"
              name="price"
              value={state.price}
              onChange={handleOnChange}
            />
          </div>
          <Button label="Save Product" buttonStyle="fluid" />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
