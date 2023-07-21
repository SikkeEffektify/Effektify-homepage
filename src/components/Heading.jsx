import React from 'react'
import './Heading.css'



export const Heading = ({title, desc, bg, textColor, titlePosition, descCustomHtml}) => {


  return (
    <section class={bg}>
    <div class='max-md:pt-20 md:pt-40 md:w-screen heading-container'>
    <div class={titlePosition}>
    <h1 class="text-4xl pb-5  text-rose-300 ">
    <span class={textColor}>
    {title}
    </span>
    .
    </h1>
    <div dangerouslySetInnerHTML={{__html: descCustomHtml}}>
    
    </div>
    <div>
    <p class={textColor}>
    {desc}
    </p>
    </div>
    </div>
    </div>
    </section>
  )
}
