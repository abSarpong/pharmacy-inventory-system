import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import InputField from "../Components/InputField";
import Button from "../Components/Button";

const EditProduct = () => {
  const { product } = useParams();
  const history = useHistory();
  let savedData = JSON.parse(localStorage.getItem(product));

  const [priceState, setPriceState] = useState({
    price: savedData.price.reverse()[0].price,
  });

  const [newState, setNewState] = useState({
    id: savedData.id,
    name: savedData.name,
    price: savedData.price,
  });

  let editedProduct = {
    id: savedData.id,
    name: newState.name,
    price: [
      ...savedData.price,
      ...[
        {
          id: Math.floor(Math.random() * 10000) + 1,
          price: priceState.price,
          date: Date(Date.now()),
        },
      ],
    ],
  };

  const editProduct = (e) => {
    e.preventDefault();
    console.log(priceState.price);
    let editCachedDate = localStorage.setItem(
      editedProduct.id.toString(),
      JSON.stringify(editedProduct)
    );
    history.push({ pathname: "/", data: editCachedDate });
    setNewState("");
  };

  const handleOnChange = (e) => {
    const value = e.target.value;
    setNewState({ ...newState, [e.target.name]: value });
  };

  return (
    <div className="container">
      <div className="page-title-section">
        <h3 className="grey-300">Edit product</h3>
      </div>
      <div className="form-card">
        <form onSubmit={editProduct}>
          <div>
            <label className="input-label">Product name</label>
            <InputField
              className="input"
              type="text"
              placeholder="Product name"
              name="name"
              value={newState.name}
              onChange={handleOnChange}
            />
          </div>
          <div>
            <label className="input-label">Price</label>
            <InputField
              className="input"
              type="text"
              placeholder="Eg. 5.00"
              name="price"
              value={priceState.price}
              onChange={(e) => setPriceState({ price: e.target.value })}
            />
          </div>
          <Button label="Save Product" buttonType="fluid" />
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
