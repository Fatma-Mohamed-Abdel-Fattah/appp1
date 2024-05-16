import React, { useState } from 'react'
import Product from './../Product/Product';

export default function Products() {

let [productList,setProductList]=useState([
  {name:"toshiba",category:"tv",price:8000,onSale:true},
  {name:"oppo",category:"mobile",price:10000,onSale:true},
  {name:"iphone",category:"apple",price:10000,onSale:false},
  {name:"usb",category:"flash memory",price:100,onSale:true},
  {name:"iphone",category:"apple",price:10000,onSale:false},
  {name:"usb",category:"flash memory",price:100,onSale:true},
 ]);
 const deleteProduct=(currentProduct)=>{
  // console.log(currentProduct)
  let currentIndex=productList.indexOf(currentProduct);
  productList.splice(currentIndex,1);
  let result =productList
  setProductList(result)
//  console.log(result)
 }
  return (
    <> 
    <div className="container">
      <div className="row">
        {productList.map((item,index)=>(
          <Product key={index} productInfo={item}  deleteProd={deleteProduct}/>
        ))}
      </div>
    </div>
   {/* <div className="container">
    <div className="row">
    {productList.map((product)=>(
      <Product product={product} />
      ))}
    </div>
   </div> */}
 </>
  );
}
