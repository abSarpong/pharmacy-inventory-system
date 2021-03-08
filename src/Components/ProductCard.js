import React, {useState} from "react";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { Link, useHistory } from "react-router-dom";
import History from './History';
import Button from './Button'

const ProductCard = ({ product }) => {
  const history = useHistory();
  const [toggle, setToggle] = useState(false);
  let products = product;

  const deleteProduct = () => {
    localStorage.removeItem(product.id.toString());
    window.location.reload();
  };

  products.price.reverse();

  const toggleHistory = () => {
    setToggle(toggle => !toggle);
  }

  return (
    <div className="product-card">
      <div className="product-card-header">
        <h3>{product.name}</h3>
        <Link to="" className="link" onClick={toggleHistory}>View history</Link>
      </div>
      <div className="product-card-body">
        <div>
          <HiOutlineCurrencyDollar className="icon"/>&nbsp;&nbsp;
          <p className="body-text">Ghs {products.price[0].price}</p>
        </div>
      </div>
      <div toggle="toggle">
        {
          toggle && 
            <History product={product}/>
        }
      </div>
        {
          !product.flag && <div className="button-group">
            <Button label="Edit" buttonStyle="edit" onClick={()=> history.push(`/edit-product/${product.id}`)}/>
            <Button label="Delete" buttonStyle="delete" onClick={deleteProduct}/>
          </div>
        }
    </div>
  );
};

export default ProductCard;
