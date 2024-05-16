import React from 'react'

export default function Product(props) {
   // console.log(props)
   let {productInfo,deleteProd}=props;
  return (
    <>
       <div className='col-md-4 bg-danger p-2 mx'>
        <div className='bg-dark text-white p-4'>
          <h3>{productInfo.name}</h3>
          <h5>{productInfo.category}</h5>
          <h3>{productInfo.price}</h3>
          <button className="btn btn-danger me-3" onClick={()=>deleteProd(productInfo)}>delte</button>
          <button className='btn btn-warning' >update</button>
        </div>
      </div>
    </>
  )
}
