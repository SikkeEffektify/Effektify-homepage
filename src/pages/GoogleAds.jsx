import React from 'react'
import videoBg from '../assets/googleadds.mp4'
import raket from '../assets/raket.webp'

export default function GoogleAds() {
  return (
    <>
    <section>
   <div className='hero'>
    <div className="vidOverlay"></div>
    <video class="min-w-full min-h-full absolute object-cover" src={videoBg} autoPlay loop muted />
    <div class="vidContent2 ">
        <h1  class="text-4xl">Få fler besökare genom annonsering på google adds</h1>
    </div>
   </div>
    </section>
    
    <section>
    <div class='pt-20 heading-container text-white'>
    <h1 class="text-left text-5xl pb-5 ">
    Google Ads / Annonsering
    </h1>
    <p class="text-sm text-left pb-5">
    Google är idag världens största sökmotor och det görs dagligen cirka 3,3 miljarder sökningar endast på deras plattform. Det innebär att om du vill nå ut till dina kunder på bästa sätt behöver du synas på Google. För att du ska lyckas med den digitala marknadsföringen av ditt företag behöver du arbeta med
    <em class="text-rose-300"> <a href="/seo-sokmotoroptimering"> SEO</a> </em>
    ,
    <em> Sökmotoroptimering </em>
    ,
    <em> SEM, Sökmotorannonsering. </em>
    </p>
    <p class="text-sm text-left pb-5">
    Att arbeta med SEO och optimeringen av din hemsida för att ranka bättre i det organiska resultatet tar tid. När du annonserar via Google Ads syns du direkt. Google Ads har funnits i över 20 år, närmare bestämt sedan oktober 2000, då Google Adwords (som det tidigare kallades) lanserades. Idag är Google utan tvekan marknadsledande inom annonsering online.
    </p>

    <section class="cards-google">
       <div class="pt-5 cards-container2 pb-10">
     <div class="custom-back max-w-sm pb-10 border border-black shado mx-auto pt-10">
        <h1 class="pt-40 cards2-title text-center mb-2 font-semibold tracking-tight uppercase text-rose-300"><span class="text-white"></span></h1>
        <h2 class="pb-20 text-center cards2-under-title text-white"><span class="pl-4"></span></h2>
    </div>
    </div>
    </section>

   
  
  <div dir="rtl">
  <div class="relative h-32 w-32 ...">
    <div class="absolute h-14 w-14 top-0 start-0 ...">
    <img class="pt-5 drop-shadow-lg scale-150 pb-20" src={raket} alt="" />
    </div>
  </div>
    </div>

    <h1 class="text-right pt-10 text-4xl pb-5 ">
    Dina kunder
    <br />
    finns på Google
    </h1>




    </div>
    </section>
    
    
    </>
  )
}
