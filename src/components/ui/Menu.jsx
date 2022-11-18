import React from 'react'

const Menu = ({title,items}) => {
  return (
<section>
           
 <nav className='grid gap-y-4'>
 <h6 className='text-lg text-primary-brand-color'>{title}</h6>
  
  <nav className="ml-1">
      <ul className='grid gap-y-2 '>
          {items.map((item,key)=>(
              <li key={key}>
                  <a href='#' className='text-sm hover:text-brand-color'>
                      {item.title}
                  </a>
              </li>

          ))}
      </ul>
  </nav>
  
 </nav>

</section>
  )
}

export default Menu