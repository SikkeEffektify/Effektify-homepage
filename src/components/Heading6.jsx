import React from 'react'
import './Heading.css'
import img from '../assets/effektify-digitalbyra-symbol.webp'
import img2 from '../assets/digital-marknadsforing-drink.gif'

export const Heading6 = ({titleLeft, titleRight, descLeft, descRight, desc, endText}) => {
  return (
    
    <section>
    <div class='bg-white max-md:pt-40 md:pt-80 pb-10 heading-container '>
    <h1 class="text-5xl font-black pt-5 mb-4 tracking-tighter text-black ">
    {titleLeft}
    </h1>
    <div dangerouslySetInnerHTML={{__html: descLeft}}>

    </div>
    </div>
    
    
    <img src={img} class="bg-effect" alt="" />

    <div class='bg-white  pb-10 heading-container text-right'>
    <h1 class="text-5xl font-black pt-5 mb-4 tracking-tighter text-black ">
    {titleRight}
    </h1>
    <div dangerouslySetInnerHTML={{__html: descRight}}>

    </div>
    </div>
    <div class='bg-white pb-10 heading-container text-left' dangerouslySetInnerHTML={{__html: desc}}>
    
    </div>
    
    <div class="bg-white ">
    <div dangerouslySetInnerHTML={{__html: endText}}>
    </div>
    <img class="flower mx-auto invert " src={img2} alt="" />
    </div>
    </section>
    
  )
}
