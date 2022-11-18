import React from 'react'
import Slider from "react-slick";
import ReactFlagsSelect from "react-flags-select";
import {useState} from "react"
import {FaFacebook} from "react-icons/fa"

  
const HeroSection = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows:false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
      
        autoplaySpeed:3500,
        cssEase:"linear"
      };
      const [selected, setSelected] = useState("TR");
      const phones ={
          US :"+1",
          DE:"+50",
          TR:"+90",
          IT:"+7",
          IN:"+15"

      }

  return (
    <div className='relative h-[500px]'>
     <Slider {...settings}>
         
            <div>
                <img className=' w-full h-[500px] object-cover' src='https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-4.jpg' alt='foto'></img>
            </div>
            <div>
                <img className='w-full h-[500px] object-cover' src='https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-2.jpg' alt='foto'></img>
            </div>
          
          
        </Slider>
        <div className='container flex justify-between items-center absolute top-0 left-1/2 -translate-x-1/2 h-[500px] z-20 px-3'>
            <div className='hidden sm:block' >
            <img src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg" alt="Logo" />
            <h3 className='mt-8 text-2xl md:text-4xl font-semibold text-white'>
                Dakikalar içinde <br/> kapınızda <br/>
            </h3>
           
            </div>
            <div className='w-full md:w-[400px] rounded-lg bg-gray-50 p-6'>
                <h4 className='text-primary-brand-color text-center font-semibold mb-4'>Giriş yap veya kayıt ol</h4>
                <div className='flex gap-x-2'>
                <ReactFlagsSelect
  countries={Object.keys(phones)}
  customLabels={phones}

  selected={selected}
  onSelect={code => setSelected(code)}
  className="flag-select1"
/>
<label className='flex-1 relative block group cursor-pointer'>
    <input required className='h-14 px-4 border-2 border-gray-200 rounded-lg w-full transition-colors group-hover:border-primary-brand-color outline-none focus:border-primary-brand-color peer text-sm pt-2' />
    <span className=' absolute top-0 left-8 h-full flex items-center text-sm 
     text-gray-500 transition-all peer-focus:h-7 peer-focus:text-primary-brand-color peer-focus:text-[8px] peer-valid:h-7 peer-valid:text-primary-brand-color peer-valid:text-sm ' >Telefon Numarası</span>
</label>
 
                </div>
                <div className='mt-3'>
                    <button className='bg-brand-yellow h-12 flex justify-center items-center w-full rounded-md text-sm font-semibold text-primary-brand-color transition-colors hover:bg-primary-brand-color hover:text-brand-yellow'>
                        Telefon Numarası ile devam et
                    </button>
                    <hr className='h-[1px] bg-gray-300 my-2'/>
                    <button className='bg-blue-700 bg-opacity-10 h-12 flex items-center w-full rounded-md text-sm px-4 font-semibold text-blue-700 text-opacity-80 transition-colors hover:bg-blue-700 hover:text-white'>
                        <FaFacebook size={24} className=""/>
                      <span className='mx-auto'>Facebook ile devam et</span>
                    </button>
                </div>

            </div>
        </div>
    </div>
  )
}

export default HeroSection