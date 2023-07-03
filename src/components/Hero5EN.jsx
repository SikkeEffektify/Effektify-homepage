import React from 'react'
import './Hero.css'
import bg from '../assets/webbdesign-bygga-hemsida.webp'
export const Hero5EN = () => {
  return (
<section>
   <div className='hero '>
    <img class="min-w-full min-h-full absolute object-cover hero-image" src={bg} />
    <div class="vidContent2 hero-image-text pb-40  bg-black/60">
        <h1 class='text-4xlpl-4 text-left text-white pb-10'>What to consider when building a website?</h1>
        <p class='text-left text-xl text-white'>Building a website yourself is not very difficult nowadays, <br /> but like many things, <br /> it requires investing a lot of time to learn the basics, <br /> what is important and how the tool works. Here we list some things that are important when building a website:</p>
    </div>
   </div>
    </section>
  )
}
