import React from 'react'
import './Hero.css'
import videoBg from '../assets/spaceloop2.mp4'
export const Hero2 = () => {
  return (
<section>
   <div className='hero'>
    <div className="vidOverlay"></div>
    <video class="min-w-full min-h-full absolute object-cover" src={videoBg} autoPlay loop muted />
    <div class="vidContent2">
        <h1 class="text-rose-300 uppercase text-center"><span class="text-white">We’re ready <br /> for takeoff</span>.</h1>
        <h1 class='uppercase pb-5'>Are you?</h1>
        <a class="vidButton" href='/kontakt'> Launch</a>
    </div>
   </div>
    </section>
  )
}
