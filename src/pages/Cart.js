import React, { useState, useEffect } from "react";
import { add, remove } from "../store/cartSlice";
import { useSelector, useDispatch } from "react-redux";
const Cart = () => {
  const [price, setPrice] = useState(0)
  useEffect(() => {
    let price = 0;
    products.map((ele) => {
      price = ele.price + price;
    })
    setPrice(price)
  },)
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);
  const handleRemove = (productId) => {
    dispatch(remove(productId));
  };
  return (
    <div>
      <h3>cart</h3>
      <div className="cartWrapper">
        {products.map((product) => (
          <div className="cartCard">
            <img src={product.image} />
            <h5>{product.title}</h5>
            <h3>{product.price}</h3>
            <button className="btn" onClick={() => handleRemove(product.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
      <h1 style={{ marginRight: "-550px" }}>Total : {price}</h1>
    </div>
  );
};
export default Cart;
