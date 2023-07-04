import React from 'react'
import './Hero.css'

export const Hero = ({title, titlePink, videoLink}) => {
  return (
<section>
   <div className='hero'>
    <div className="vidOverlay"></div>
    <video class="min-w-full min-h-full absolute object-cover" src={videoLink} autoPlay loop muted />
    <div class="vidContent ">
        <h1>{title}</h1>
        <h1>{titlePink}</h1>
    </div>
   </div>
    </section>
  )
}
