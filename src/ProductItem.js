import React from 'react';

function ProductItem(props) {
    const product=props.data
    console.log(product);
  return (
    <>
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <img src={product.thumbnail}/>
    </>
    
    
  )
}

export default ProductItem