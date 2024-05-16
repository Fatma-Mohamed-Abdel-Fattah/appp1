import React, { useState } from 'react'
import styles from './About.module.css'
export default function About() {
  let componentDetails={
    name:'About Component',
    details:'About Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex perspiciatis quaerat molestiae in? Fugiat ipsa debitis, unde ea animi dolor velit necessitatibus delectus deserunt cum dicta vitae quo qui laborum dolorum, maxime veniam nesciunt. Temporibus vel iusto fuga blanditiis quaerat dolorem aliquam, magni, magnam rerum, molestiae animi expedita necessitatibus aperiam.'
 }
 let {name,details}=componentDetails;
 let [uerName,setUserName]=useState("fatma mohamed")
 const changeauserName=()=>{
  setUserName("Upskilling hero")
 }
  return (
    <>
   <div className='bg-success text-center p-4'>
      <h3 className={styles.test}>{name}</h3>
      <p>{details}</p>
      <h3>{uerName}</h3>
<button onClick={changeauserName}  className='btn btn-info'>change user name</button>
    </div>
    </>
  );
}
