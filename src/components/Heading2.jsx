import React from 'react'
import './Heading.css'

export const Heading2 = ({title, desc, desc2, descRose, centerBottomDesc}) => {
  return (
    <section>
    <div class='pt-20 pb-10 heading-container'>
    <h1 class="heading-title2 mb-4 text-rose-300 leading-none text tracking-tight md:text-5xl lg:text-6x ">
    <span class='text-white'>
    {title}
    </span>
    .
    </h1>
    <p class="heading-text text-rose-300">
    <span class="text-white">{desc}</span>
    {descRose}
    <span class="text-white"> {desc2} </span>
    </p>
    </div>
    <div class="heading-container pb-20">
      <h1 class="heading2-title text-white text-center">{centerBottomDesc}</h1>
    </div>
    </section>
  )
}
