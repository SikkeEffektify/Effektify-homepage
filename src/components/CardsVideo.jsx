import React from 'react'
import videoBg from '../assets/strategy-low.mp4'
import './CardsVideo.css'
import cat from '../assets/cat.png'

export const CardsVideo = ({title, desc, buttonLink, buttonText}) => {
  return (
    <>
      <section class="bg-white pt-20 pb-0">
   <div className='cards-video-container  mx-auto'>
    <video class="" src={videoBg} autoPlay loop muted />
    <div class="cards-video-caption  pb-10">
    <h1 class='text-white uppercase'>{title}<span class='text-rose-300' >.</span></h1>
    <p class='pb-5 text-center'>{desc}</p>
    <a href={buttonLink} class="cards-video-button uppercase">{buttonText}</a>
    </div>
   </div>
    </section>
  
    </>
  )
}
