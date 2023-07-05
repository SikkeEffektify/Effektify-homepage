import React from 'react'
import './Heading.css'



export const Heading = ({title, desc, bg, textColor, titlePosition}) => {



  
  return (
    <section class={bg}>
    <div class='pt-20 heading-container'>
    <div class={titlePosition}>
    <h1 class="text-4xl pb-5  text-rose-300 ">
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
