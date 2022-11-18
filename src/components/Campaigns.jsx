import React from 'react'
import {useState,useEffect} from "react"
import Slider from "react-slick";
import  Banners from "../api/banners.json"
import {IoIosArrowBack,IoIosArrowForward} from "react-icons/io"





function Nextbtn(props) {
  const { className, style, onClick } = props;
  return  <button className={`text-brand-color absolute top-1/2 -right-6 -translate-y-1/2`}  onClick={onClick}><IoIosArrowForward/></button>
    
}

function Prevbtn(props) {
  const { className, style, onClick } = props;
  return <button className={`text-brand-color absolute top-1/2 -left-6 -translate-y-1/2`} 
 onClick={onClick}><IoIosArrowBack/></button>
    
}

const Campaigns = () => {
  
  const [banners,setBanners]=useState([]);

  useEffect(()=>{
setBanners(Banners);
  },[]);
  
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows:true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay:true,
  
    autoplaySpeed:3500,
    cssEase:"linear",
    nextArrow: <Nextbtn/>,
    prevArrow: <Prevbtn />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          arrows:false,
         
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          
         
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows:false,
         
        }
      },
    
    ]
  };
  return (
    <div className='container mx-auto py-8'>
      <h3 className='text-sm font-semibold mb-3 px-3'>Kampanyalar</h3>
      <Slider {...settings}>
         
         {banners.length&& banners.map((banner,index)=>(
            <div key={banner.id}>
            <div className='px-2'>
            <img src={banner.image} className="rounded-lg"/>
            
            </div>
          </div>
         ))
          
         }
       
       
     </Slider>
    </div>
  )
}

export default Campaigns