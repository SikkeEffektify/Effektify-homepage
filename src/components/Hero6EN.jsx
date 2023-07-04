import React from 'react'
import './Hero.css'
import bg from '../assets/digital-marknadsforing.webp'
export const Hero6EN = () => {
  return (
<section>
   <div className='hero bg-fixed'>
    <img class="min-w-full min-h-full absolute object-cover hero-image" src={bg}  />
    <div class="vidContent2  bg-black/60">
        <h1 class='pl-4 hero6-title font-black text-right text-white '>Med en vision <br /> och rätt verktyg</h1>
        <p class="text-left pr-20 pt-2 text-2xl">
          kan ditt företag bli
        <br />
        till den svan du
        <br />
        alltid drömt om.
        </p>
    </div>
   </div>
    </section>
  )
}
