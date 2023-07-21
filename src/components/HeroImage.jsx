import React from 'react'
import './Hero.css'

export const HeroImage = ({image, titleRight, titleLeft, desc}) => {
  return (
<section>
   <div className='hero bg-fixed '>
    <img class="min-w-full min-h-full absolute object-cover hero-image " src={image}  />
    <div class="max-md:bg-black/60 vidContent2 min-h-full heading-container">
        <h1 class='pl-4 hero6-title font-black text-right max-md:text-white'>{titleRight}</h1>
        <p class="text-left pr-20 pt-20 text-2xl">
        {titleLeft}
        </p>
        <div className='text-white text-left text-base pt-20 ' dangerouslySetInnerHTML={{__html: desc}}>  
      </div>
   
    </div>
   </div>

  
    </section>
  )
}
