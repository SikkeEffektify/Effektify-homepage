import React from 'react'
import './Hero.css'
import videoBg from '../assets/City-By-Night-low.mp4'
import divider from '../assets/whitedivider.svg'
export const StatsHero = ({videoLink, title1, title2, desc, title3, title4, stats1, stats2, stats3, underStats1, underStats2, underStats3}) => {
  return (
<section>
   <div className='hero'>
    <div className="vidOverlay"></div>
    <video class="min-w-full min-h-full absolute object-cover" src={videoLink} autoPlay loop muted />
    <div class="vidContent pt-20 text-center ">
        <h1>{title1}</h1>
        <a class="pt-40" href="#testtyp"><i class="fa-solid fa-circle-chevron-down fa-lg"></i></a>
    </div>
   </div>
   <section class="bg-white pt-10 text-lg font-black text-black heading-container pb-10">
    <h2 class="uppercase">{title2}</h2>
    <p class="font-light pt-5 text-sm">
    {desc}
    </p>
   </section>
   <section>
    <div class="whitedivider pb-20">
    </div>
    <div className='hero'>
    <div className="vidOverlay"></div>
    <video class="min-w-full min-h-full absolute object-cover" src="https://player.vimeo.com/progressive_redirect/playback/714795502/rendition/1080p/file.mp4?loc=external&signature=f10571525f87060048a4f457365b416995804594ef77eb283e82fe660968d63e" autoPlay loop muted />
    <div class="vidContent2 text-center heading-container ">
        <p class="text-base uppercase font-light">{title3}</p>
        <h1 class="uppercase text-2xl pt-5 pb-5">{title4}</h1>
        <div class="ring-4 ring-yellow-400 pr-5 pl-5 pt-10 pb-10 rounded-full"> 
        <span>{stats1}</span>
        </div>
        <h3 class='text-2xl pt-5 pb-5'>{underStats1}</h3>
        <div class="ring-4 ring-green-400 pr-5 pl-5 pt-10 pb-10 rounded-full"> 
        <span>{stats2}</span>
        </div>
        <h3 class='text-2xl pt-5 pb-5'>{underStats2}</h3>
        <div class="ring-4 ring-pink-500 pr-5 pl-5 pt-10 pb-10 rounded-full"> 
        <span>{stats3}</span>
        </div>
        <h3 class='text-2xl pt-5 pb-5'>{underStats3}</h3>
    </div>
   </div>
   </section>
    </section>
  )
}
