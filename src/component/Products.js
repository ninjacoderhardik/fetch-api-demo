import React, { useEffect, useState } from "react";
import { STATUSES } from "../store/productSlice";
import { add } from "../store/cartSlice";
import { useDispatch,useSelector } from "react-redux";
import { fetchProducts } from "../store/productSlice";
import Spinner from "../Spinner"
const Products = () => {
  const {data:products,status} = useSelector((state)=>state.product)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  const handleAdd = (productd) => {
    dispatch(add(productd));
  };
  if(status === STATUSES.LOADING){
    return <Spinner/>
  }
  if(status === STATUSES.ERROR){
    return <h1>something went wrong</h1>
  }
  return (
    <div className="productsWrapper">
      {products.map((product) => (
        <div className="card" key="product.id">
          <img src={product.image} alt="" />
          <h4>{product.title}</h4>
          <h4>{product.price}</h4>
          <button className="btn" onClick={() => handleAdd(product)}>
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
};
export default Products;
