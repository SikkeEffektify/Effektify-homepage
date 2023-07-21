import React from 'react'
import './Heading.css'
import flower from '../assets/effektify-blomma.png'

export const HeadingWebb = ({titleLeft, titleRight, descLeft, DescRight, endText}) => {
  return ( 
    <section>
    <div class='max-md:pt-10 md:pt-40  heading-container text-left'>
    <h1 class="pt-5 text-4xl  ">
    <span class='text-white '>{titleLeft}</span>
    </h1>
    <p class="heading-webb-desc pt-5 text-lg font-thin">
    {descLeft}
    </p>
    </div>
    <div class='pb-10 heading-container text-right'>
    <h1 class="pt-5 text-4xl ">
    <span class='text-white '> {titleRight}
      </span>
    </h1>
    <p class="heading-webb-desc pt-5 text-lg font-thin">
    {DescRight}
    </p>
    </div>
    <section>
    <div class=' pt-20 pb-20 heading-container text-center '>
    <h1 class="pt-5 mb-4 text-white text-2xl ">
    {endText}
    </h1>
    </div>
    </section>
    <div class=" pb-40 ">
    <img class="flower mx-auto " src={flower} alt="" />
    </div>
    </section>
  )
}
