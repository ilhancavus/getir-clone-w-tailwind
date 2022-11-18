import React from 'react'
import {useState} from "react"
import { useEffect } from 'react';
import categoryData from "../api/categories.json"
import Category from './ui/Category';

const Categories = () => {
  const[categories,setCategories]= useState([]);
useEffect(()=>{
setCategories(categoryData);
},[])

  return (
    <div className='bg-white py-4'>
      <div className="container mx-auto">
        <h3 className='text-sm font-semibold mb-3 px-3'>Kategoriler</h3>
        <div className='grid grid-cols-4 lg:grid-cols-8 md:grid-cols-6 xl:grid-cols-11'>
          {categories&&categories.map((category,index)=><Category key={index} category={category}/>)}

        </div>
      
    
      </div>
    </div>
  )
}

export default Categories