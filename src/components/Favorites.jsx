import React from 'react'
import Products from "../api/Products.json"
import {useState,useEffect} from "react";

import Product from './ui/Product';

const Favorites = () => {
  const [products,setProducts]=useState([]);

  useEffect(()=>{
    setProducts(Products)

  },[]);


  return (
    <div className='container mx-auto'>
       <h3 className='text-sm font-semibold mb-3 px-3'>Favoriler</h3>
       <div className='grid grid-cols-3 xl:grid-cols-8 lg:grid-cols-6 md:grid-cols-4 gap-1  rounded-lg overflow-hidden'>

         {products.length&& products.map((product,index)=><Product key={product.id} product={product}/>)}

       </div>
    </div>
  )
}

export default Favorites