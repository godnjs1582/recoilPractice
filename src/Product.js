import React from 'react'
import ProductItem from "./ProductItem";
import { useRecoilValue,useRecoilRefresher_UNSTABLE } from "recoil";
import { productListState } from "./recoil/todo";

function Product() {
    const productList =useRecoilValue(productListState).products;
    console.log(productList.products);

  return (
    <>
     {productList.map(item=>(
        <ProductItem key={item.id} data={item}/>
    ))}
    
    </>

  
  )
     }
export default Product