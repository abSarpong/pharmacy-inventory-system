import React from "react";
import { HiOutlineTrash, HiPencilAlt } from "react-icons/hi";
import {Link} from 'react-router-dom';

const ProductCard = ({ product, price }) => {

  const deleteProduct = () => {
    console.log(product.id)
  }
  return (
    <div className="card">
      <div className="card-body">
        <h4 className="grey-300">{product.name}</h4>
        <p className="grey-300 small-text">{price}</p>
      </div>
      <div>
          <span className="icon">
            <Link to={`/edit-product/${product.id}`}>
              <HiPencilAlt style={{color: "#333333", fontSize: 16}}/>
            </Link>
          </span>&nbsp;&nbsp;&nbsp;&nbsp;
          <span className="icon danger-icon" onClick={() => deleteProduct()}>
              <HiOutlineTrash style={{color: "#d62828", fontSize: 16}}/>
          </span>
      </div>
    </div>
  );
};

export default ProductCard;
