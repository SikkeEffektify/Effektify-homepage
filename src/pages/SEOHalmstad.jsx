import React from 'react'
import bg from '../assets/SEO-sokmotoroptimering-halmstad.jpg'

export default function SEOHalmstad() {
  return (
    <>
    <section>
   <div className='hero '>
    <img class="min-w-full min-h-full absolute object-cover hero-image" src={bg} />
    <div class="vidContent2 hero-image-text pb-40  bg-black/60">
        <h1 class='text-2xl pl-4 text-left uppercase text-white pb-10'>SEO Halmstad<span class="text-rose-300">.</span></h1>
        <p class='text-left text-sm text-white'>
        Låt oss ta den rollen! På samma sätt som du lyckades hitta vår hemsida när du sökte efter SEO Halmstad kan vi hjälpa dig synas när dina potentiella kunder söker efter produkter eller tjänster som du erbjuder. Vi har lång erfarenhet och bred kunskap inom sökmotoroptimering/SEO.
        </p>
        <p class='text-left text-sm text-white'>
        Det är ingen nyhet att synlighet skapar möjligheter för företag – både genom traditionell marknadsföring och digital marknadsföring. Att öka din synlighet online ökar också dina chanser att få fler besökare till din hemsida, och därmed fler kunder som sedan genererar större försäljning. Det finns många sätt att använda sig av digital marknadsföring på, och Effektify är inte enbart en SEO-byrå, vi hjälper våra kunder med allt inom digital marknadsföring, både i Halmstad och resterande Sverige.
        </p>
    </div>
   </div>
    </section>

    <section>
    <div className='hero'>
    <div className="vidOverlay"></div>
    <video class="min-w-full min-h-full absolute object-cover" src="https://player.vimeo.com/progressive_redirect/playback/714795502/rendition/1080p/file.mp4?loc=external&signature=f10571525f87060048a4f457365b416995804594ef77eb283e82fe660968d63e" autoPlay loop muted />
    <div class="vidContent2 text-center heading-container ">
        <p class="text-base uppercase font-light">Vi låter resultaten tala för sig själva</p>
        <h1 class="uppercase text-2xl pt-5 pb-5">Vi har tills nu hjälpt företag i Halmstad att synas med</h1>
        <div class="ring-4 ring-yellow-400 pr-8 pl-8 pt-10 pb-10 rounded-full"> 
        <span>118</span>
        </div>
        <h3 class='text-2xl pt-5 pb-5'>Sökord i top 3</h3>
        <div class="ring-4 ring-green-400 pr-8 pl-8  pt-10 pb-10 rounded-full"> 
        <span>162</span>
        </div>
        <h3 class='text-2xl pt-5 pb-5'>Sökord i top 10</h3>
        <div class="ring-4 ring-pink-500 pr-8 pl-8 pt-10 pb-10 rounded-full"> 
        <span>219</span>
        </div>
        <h3 class='text-2xl pt-5 pb-5'>Sökord i top 20</h3>
    </div>
   </div>
    </section>
    
 



    </>

  )
}
