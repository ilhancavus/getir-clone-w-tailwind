import React from 'react'
import {AiOutlinePlus} from "react-icons/ai"

const Product = ({product}) => {
  return (
    <div className='bg-white gap-y-2 flex flex-col items-cente relative text-center text-sm font-semibold p-3'>
        <button className='absolute top-3 bg-white right-3 w-8 h-6 flex items-center justify-center border border-gray-200 rounded-lg text-brand-color shadow-lg hover:bg-brand-color hover:text-brand-yellow transition-colors'><AiOutlinePlus/></button>
    <img src={product.image} alt={product.title}/>
    <div className='text-brand-color'>{product.price}</div>
    <div className='text-gray-900'>{product.title}</div>
    <div className='text-gray-500'>{product.alt}</div>
    </div>
  )
}

export default Product