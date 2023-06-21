import React from 'react'
import './Hero.css'
import videoBg from '../assets/City-By-Night-low.mp4'
import divider from '../assets/whitedivider.svg'
export const Hero7 = () => {
  return (
<section>
   <div className='hero'>
    <div className="vidOverlay"></div>
    <video class="min-w-full min-h-full absolute object-cover" src={videoBg} autoPlay loop muted />
    <div class="vidContent pt-20 text-center ">
        <h1>Det krävs en strategi för att växa</h1>
        <a class="pt-40" href="#testtyp"><i class="fa-solid fa-circle-chevron-down fa-lg"></i></a>
    </div>
   </div>
   <section class="bg-white pt-10 text-lg font-black text-black heading-container pb-10">
    <h2 class="uppercase">MED TYDLIGA STRATEGIER OCH TRANSPARANS EFFEKTIVISERAR vi TILLVÄXT OCH LÖNSAMHET</h2>
    <p class="font-light pt-5 text-sm">
    Vi hjälper idag över 250 företag i Sverige, övriga Norden, Tyskland och Nederländerna. Ert mål är vår drivkraft, och utifrån full transparens i alla led och med dagens teknik, strävar vi på effektify mot att skapa tillväxt och lönsamhet för er som har en vision och en dröm. 
    </p>
   </section>
   <section>
    <div class="whitedivider pb-20">
    </div>
    <div className='hero'>
    <div className="vidOverlay"></div>
    <video class="min-w-full min-h-full absolute object-cover" src="https://player.vimeo.com/progressive_redirect/playback/714795502/rendition/1080p/file.mp4?loc=external&signature=f10571525f87060048a4f457365b416995804594ef77eb283e82fe660968d63e" autoPlay loop muted />
    <div class="vidContent2 text-center heading-container ">
        <p class="text-base uppercase font-light">Siffrorna talar sitt tydliga språk</p>
        <h1 class="uppercase text-2xl pt-5 pb-5">Med strategier som fungerar har vi hjälpt företag att synas med</h1>
        <div class="ring-4 ring-yellow-400 pr-5 pl-5 pt-10 pb-10 rounded-full"> 
        <span>1047</span>
        </div>
        <h3 class='text-2xl pt-5 pb-5'>Sökord i top 3</h3>
        <div class="ring-4 ring-green-400 pr-5 pl-5 pt-10 pb-10 rounded-full"> 
        <span>1832</span>
        </div>
        <h3 class='text-2xl pt-5 pb-5'>Sökord i top 10</h3>
        <div class="ring-4 ring-pink-500 pr-5 pl-5 pt-10 pb-10 rounded-full"> 
        <span>2408</span>
        </div>
        <h3 class='text-2xl pt-5 pb-5'>Sökord i top 20</h3>
    </div>
   </div>
   </section>
    </section>
  )
}
