import React from 'react'
import './Hero.css'
import videoBg from '../assets/City-By-Night-low.mp4'
export const Hero = () => {
  return (
<section>
   <div className='hero'>
    <div className="vidOverlay"></div>
    <video class="min-w-full min-h-full absolute object-cover" src={videoBg} autoPlay loop muted />
    <div class="vidContent ">
        <h1>we love</h1>
        <h1>marketing</h1>
    </div>
   </div>
    </section>
  )
}
