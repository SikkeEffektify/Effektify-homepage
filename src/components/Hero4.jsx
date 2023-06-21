import React from 'react'
import './Hero.css'
import videoBg from '../assets/Webb.mp4'
export const Hero4 = () => {
  return (
<section>
   <div className='hero'>
    <div className="vidOverlay"></div>
    <video class="min-w-full min-h-full absolute object-cover" src={videoBg} autoPlay loop muted />
    <div class="vidContent2 bg-black/60">
        <h1 class='text-4xl  pl-4'>få fler besökare med en bra hemsida</h1>
    </div>
   </div>
    </section>
  )
}
