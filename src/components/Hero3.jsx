import React from 'react'
import './Hero.css'
import videoBg from '../assets/clouds.mp4'
import gif from '../assets/PONG_Light_version2.gif'
export const Hero3 = () => {
  return (
<section>
   <div className='hero'>
    <div className="vidOverlay"></div>
    <video class="min-w-full min-h-full absolute object-cover" src={videoBg} autoPlay loop muted />
    <div class="vidContent2 bg-black/40">
        <h1 class='text-5xl pl-4'>redo att starta din resa?</h1>
    </div>
   </div>
    <img src={gif} alt="" />
    </section>
    
  )
}
