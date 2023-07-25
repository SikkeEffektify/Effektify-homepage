import React from 'react'
import './Heading.css'


export const Heading7 = ({smallTitle, title, desc, img, img2, img3}) => {
  return (
    
    <div class='pt-20 heading-container text-center text-black bg-white'>
    <p class="uppercase text-xs pb-5">{smallTitle}</p>
    <h1 class="text-lg uppercase">
    {title}
    </h1>
    <img class="mx-auto md:w-4/5 pt-5 drop-shadow-lg" src={img} alt="" />
    <img class="mx-auto md:w-4/5  pt-5 drop-shadow-lg" src={img2} alt="" />
    <img class="mx-auto md:w-4/5  pt-5 drop-shadow-lg" src={img3} alt="" />
    <p class="text-left md:w-4/5  pt-10 pb-10 text-base">{desc}</p>
    </div>
  )
}
