import React from 'react'
let componentDetails={
   name:'Contact Component',
   details:'Contact Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex perspiciatis quaerat molestiae in? Fugiat ipsa debitis, unde ea animi dolor velit necessitatibus delectus deserunt cum dicta vitae quo qui laborum dolorum, maxime veniam nesciunt. Temporibus vel iusto fuga blanditiis quaerat dolorem aliquam, magni, magnam rerum, molestiae animi expedita necessitatibus aperiam.'
}
let {name,details}=componentDetails
export default function Contact() {
  return (
   <div className='bg-info text-center p-4'>
   <h3>{name}</h3>
   <p>{details}</p>
 </div>
  )
}
