import React from 'react'

import image from '../assets/e-commerce-sma-foretag.webp'
import gif from '../assets/PONG_Light_version2.gif'

export const CardsGoogle= ({title, desc1, desc2}) => {
  return (
    <>
   <section class="cards5-1">
       <div class="pt-5 cards-container ">
     <div class="custom-back max-md:mx-auto max-md:max-w-sm p-6 pb-60 pt-40">    
    </div>
    </div>
    </section>
    <div class='pt-40 pb-10 heading-container text-white '>
    <h1 class="text-5xl font-black pt-5 mb-4 tracking-tighter  ">
    {title}
    </h1>
    <p class='font-light text-lg'>
    {desc1}
    </p>
    <div dangerouslySetInnerHTML={{__html: desc2}}>

    </div>
    </div>

    <img class="w-3/4 mx-auto " src={image} alt="" />
    <img src={gif} alt="" />
    </>
  )
}
