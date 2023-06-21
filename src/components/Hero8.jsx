import React from 'react'
import './Hero.css'
import videoBg from '../assets/career-clouds.mp4'
export const Hero8 = () => {
  return (
<section>
   <div className='hero'>
    <div className="vidOverlay"></div>
    <video class="min-w-full min-h-full absolute object-cover" src={videoBg} autoPlay loop muted />
    <div class="vidContent2 bg-black/40">
        <h1 class='text-5xl pl-4'>bli en av oss</h1>
    </div>
   </div>
    </section>
    
  )
}
