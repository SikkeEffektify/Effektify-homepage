import React from 'react'
import './Heading.css'



export const Heading = ({title, desc, bg, textColor, titlePosition}) => {



  
  return (
    <section class={bg}>
    <div class='pt-20 heading-container'>
    <div class={titlePosition}>
    <h1 class="heading-title mb-4 text text-rose-300 leading-none text tracking-tight md:text-5xl lg:text-6x ">
    <span class={textColor}>
    {title}
    </span>
    .
    </h1>
    <p class={textColor}>
    {desc}
    </p>
    </div>
    </div>
    </section>
  )
}
