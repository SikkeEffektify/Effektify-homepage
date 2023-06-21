import React from 'react'
import videoBg from '../assets/strategy-low.mp4'
import './CardsVideo.css'
import cat from '../assets/cat.png'

export const CardsVideo = () => {
  return (
    <>
      <section class="bg-white pb-0">
   <div className='cards-video-container ml-10'>
    <video class="" src={videoBg} autoPlay loop muted />
    <div class="cards-video-caption pb-10">
    <h1 class='text-white uppercase'>Let's talk strategies<span class='text-rose-300' >.</span></h1>
    <p class='pb-5 text-center'>Tillsammans skapar vi en anpassad <br /> lösning för att du ska kunna luta dig <br /> tillbaka och se resultaten du väntat på</p>
    <a href='/kontakt' class="cards-video-button uppercase">Play Ball</a>
    </div>
   </div>
    </section>
  
    </>
  )
}
