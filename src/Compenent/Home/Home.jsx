import React from 'react'
import { useState } from 'react';
import styles from './Home.module.css'
export default function Home() {
  let componentDetails={
    name:'Home Component',
    details:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex perspiciatis quaerat molestiae in? Fugiat ipsa debitis, unde ea animi dolor velit necessitatibus delectus deserunt cum dicta vitae quo qui laborum dolorum, maxime veniam nesciunt. Temporibus vel iusto fuga blanditiis quaerat dolorem aliquam, magni, magnam rerum, molestiae animi expedita necessitatibus aperiam.'
 };
 let {name,details}=componentDetails;
 let [count,setCount]=useState(0);
 const counterIncrement=()=>{
   setCount(count+=1)
 }
 const counterDecrement=()=>{
   setCount(count-=1)
 }

  return (
<>
    <div  className='bg-warning text-center p-4'>
      <h3 className={styles.test} >{name}</h3>
      <p>{details}</p>
    <h3>{count}</h3>
    <button className="btn btn-success" onClick={counterIncrement}>increment count</button>
    <button className="btn btn-success" onClick={counterDecrement}>decrement count</button>
    </div>
    </>
  )
}
