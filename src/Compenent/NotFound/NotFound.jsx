import React from 'react'
import notfound1 from '../../assets/images/notfound-1.jpg'
import notfound2 from '../../assets/images/OIP.jpeg'
export default function NotFound() {
  return (
    <div className='d-flex justify-content-center align-items-center'>
      {/* <img src={notfound1} alt="404" className='d-block'/> */}
      <img src={notfound2} alt="404" className='d-block'/>
    </div>
  )
}
