import React from 'react'
import {useState,useEffect} from "react"
import cardsData from "../api/cards.json"

const Cards = () => {
  const [cards,setCards]=useState([]);

  useEffect(()=>{
setCards(cardsData)
  },[]);

  

  return (
    <div className='container mx-auto gap-x-4 grid md:grid-cols-2 lg:grid-cols-3 mt-3'>
      {cards.length&& cards.map((card)=>(
        <div className='bg-white p-14 rounded-lg shadow flex flex-col items-center text-center '>
          <img className='mb-6' src={card.image}/>
          <h6 className='font-semibold text-lg text-primary-brand-color'>{card.title}</h6>
          <p className='mt-2 text-sm text-gray-700'>{card.description}</p>
        </div>
      ))}
    </div>
  )
}

export default Cards