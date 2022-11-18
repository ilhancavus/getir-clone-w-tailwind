import React from 'react'
import Menu from './ui/Menu'
import {FaFacebook,FaTwitter,FaInstagram }from "react-icons/fa"

const Footer = () => {
  const menus =[
    {
      title: "Getir'i Keşfedin",
      items:[
        {
          title:"Hakkımızda"
        },
        {
          title:"Kariyer"
        },
        {
          title:"İletişim"
        },
        {
          title:"COVİD-19 Duyuru"
        },
        {
          title:"Sosyal Sorumluluk Projeleri"
        }
      ]
    },
    {
      title: "Yardıma mı ihtiyacınız var?",
      items:[
        {
          title:"Sıkça Sorulan Sorular"
        },
        {
          title:"Kişisel Verilerin Korunması"
        },
        {
          title:"Gizlilik Politikası"
        },
        {
          title:"Kullanım Koşulları"
        },
        {
          title:"Çerez Politikası"
          
        }
      ]
    },
    {
      title: "İş Ortağımız Olun",
      items:[
        {
          title:"Bayimiz Olun"
        },
        {
          title:"Deponuzu Kiralayın"
        },
        {
          title:"GetirYemek Restoranı Olun"
        },
        {
          title:"GetirÇarşı İşletmesi Olun"
        },
        {
          title:"Zincir Restoranlar"
        }
      ]
    },
  ]
  return (
    <div className='bg-white mt-10  '>

      <div className='container mx-auto'>
        <div className='grid sm:gap-y-0 gap-y-3 justify-center  sm:grid-cols-4 pt-10'>
          <section>
           
            <nav className='grid gap-y-4'>
            <h6 className='text-lg text-primary-brand-color'>Getiri indirin</h6>
           <a href="#">
              <img  src='https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg'/>
              </a>
              <a href="#">
              <img  src='https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg'/>
              </a>
              <a href="#">
              <img  src='https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg'/>
              </a>
              </nav>
            </section>
            {menus.map((menu,index)=> <Menu key={index} {...menu} />)}
          </div>
          <div className='flex justify-between items-center border-t border-gray-100 m-6 pt-6'>
            <div className='text-xs text-gray-700 flex gap-x-8'>
              &copy; 2021 Getir
              <a href='#' className='text-primary-brand-color hover:underline'>
                Bilgi Toplumu Hizmetleri
              </a>
            </div>
            <nav className='flex  gap-x-3'>
              <a href='#' className=' rounded-lg text-gray-700 hover:bg-primary-brand-color hover:bg-opacity-10 hover:text-primary-brand-color'><FaFacebook size={20}/></a>
              <a href="#" className=' rounded-lg text-gray-700 hover:bg-primary-brand-color hover:bg-opacity-10 hover:text-primary-brand-color'><FaTwitter size={20}/></a>
              <a href="#" className=' rounded-lg text-gray-700 hover:bg-primary-brand-color hover:bg-opacity-10 hover:text-primary-brand-color'><FaInstagram size={20}/></a>
            </nav>
          </div> 

        </div>
      </div>

      

  )
} 

export default Footer