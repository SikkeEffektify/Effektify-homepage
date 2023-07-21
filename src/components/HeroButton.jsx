import React from 'react'
import './Hero.css'

export const HeroButton = ({title, title2, buttonLink, buttonText, videoLink}) => {
  return (
<section class="md:pb-10">
   <div className='hero'>
    <div className="vidOverlay"></div>
    <video class="min-w-full min-h-full absolute object-cover" src={videoLink} autoPlay loop muted />
    <div class="vidContent2">
        <h1 class="text-rose-300 uppercase text-center"><span class="text-white">{title}</span>.</h1>
        <h1 class='uppercase pb-5'>{title2}</h1>
        <a class="vidButton" href={buttonLink}> {buttonText}</a>
    </div>
   </div>
    </section>
  )
}
