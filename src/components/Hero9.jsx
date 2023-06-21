import React from 'react'
import './Hero.css'
import videoBg from '../assets/trafic.mp4'
import divider from '../assets/whitedivider.svg'
export const Hero9 = () => {
  return (
<section>
   <div className='hero'>
    <div className="vidOverlay"></div>
    <video class="min-w-full min-h-full absolute object-cover" src={videoBg} autoPlay loop muted />
    <div class="vidContent pt-20 text-center ">
        <h1>Öka trafiken till din hemsida med sökmotoroptimering</h1>
    </div>
   </div>
   <section class="pt-10 text-lg font-black text-center text-white heading-container pb-10">
    <h2 class="uppercase">Väx med seo / sökmotoroptimering</h2>
    <p class="font-light pt-5 text-sm">
    Sökmotoroptimering, eller SEO som det också kallas, är en typ av digital marknadsföring där syftet är att öka ens synlighet i sökmotorernas organiska resultat. Sökmotoroptimering handlar alltså om att synas bra i det resultat som inte är betalda annonser hos sökmotorer så som Google, Bing och Yahoo. Om SEO utförs korrekt leder det till att ens webbplats syns högt upp i sökmotorers sökresultat på relevanta sökningar. Detta SEO-arbete innebär att man får fler besökare till sin webbplats vilket man i sin tur sedan förhoppningsvis kan konvertera till kunder.
    </p>
   </section>

   <section>

    <div className='hero'>
    <div className="vidOverlay"></div>
    <video class="min-w-full min-h-full absolute object-cover" src="https://player.vimeo.com/progressive_redirect/playback/714795502/rendition/1080p/file.mp4?loc=external&signature=f10571525f87060048a4f457365b416995804594ef77eb283e82fe660968d63e" autoPlay loop muted />
    <div class="vidContent2 text-center heading-container ">
        <p class="text-base uppercase font-light">Vi låter resultaten tala för sig själva</p>
        <h1 class="uppercase text-2xl pt-5 pb-5">Vi har tills nu hjälpt företag att synas  i Sverige & utomlands med</h1>
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
