import React from 'react'
import {Link} from 'react-router-dom'

const Product = () => {
  return (
    <div className='text-5xl mt-2 font-bold underline'>
    <h1 className=' text-3xl underline font-bold'>
      Product Page
    </h1>
    
    <div className='flex gap-5 mt-5'>
      <Link className='text-xl font-semibold underline' to='/product/men'>Men's Collection</Link>
      <Link className='text-xl font-semibold underline' to='/product/women'>Women's Collection</Link>
    </div>
    
    </div>
  )
}

export default Product