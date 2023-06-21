import React from 'react'
import './Cards.css'

export const Cards = () => {
  return (
    <>
    <section class="cards-1">
       <div class="pt-5 cards-container ">
     <div class="max-w-sm p-6 pb-10 border border-white shadow bg-black pt-10">
      <a href="#">
        <h1 class=" cards-title text-center mb-2 font-semibold tracking-tight uppercase text-rose-300"><span class="text-white">SEARCH</span>.</h1>
    </a>
   
    <h2 class=" pt-5 pb-2 cards-under-title text-white"><i class="fa-solid fa-chart-line text-rose-300"></i> <span class="pl-4">Sökmotoroptimering</span></h2>
    <p class=" pl-10 cards-under-desc text-white">
    Med SEO hjälper vi ert företag att synas högre upp på sökmotorer, på de sökord som är viktiga för er.
    </p>
    <h2 class=" pt-5 pb-2 cards-under-title text-white"><i class="fa-solid fa-chart-column text-sky-400"></i> <span class="pl-4">Google Ads</span></h2>
    <p class=" pl-10 cards-under-desc text-white">
    Med relevanta och rätt inriktade kampanjer och annonser, ökar vi er synlighet på sökmotorerna.
    </p>
    </div>
    </div>
    </section>
    <section class="cards-2">
       <div class="pt-5 cards-container">
     <div class="max-w-sm p-6 pb-10 border border-white shadow bg-black pt-10">
      <a href="#">
        <h1 class=" cards-title text-center mb-2 font-semibold tracking-tight uppercase text-rose-300"><span class="text-white">Paid social</span>.</h1>
    </a>
    <h2 class=" text-center pt-5 pb-2 cards-under-title text-white">Facebook Ads</h2>
    <h2 class=" text-center pt-5 pb-2 cards-under-title text-white">Instragram Ads</h2>
    <h2 class=" text-center pt-5 pb-2 cards-under-title text-white">LinkedIn Ads</h2>
    <h2 class=" text-center pt-5 pb-2 cards-under-title text-white">Youtube Ads</h2>
    <h2 class=" text-center pt-5 pb-2 cards-under-title text-white">TikTok Ads</h2>
    </div>
    </div>
    </section>
    <section class="cards-3">
    <div class="pt-5 cards-container">
     <div class="max-w-sm p-6 pb-10 border border-white shadow bg-black pt-10">
      <a href="#">
        <h1 class=" cards-title text-center mb-2 font-semibold tracking-tight uppercase text-rose-300"><span class="text-white">Web & E-com</span>.</h1>
    </a>
    <a href="/webb"><h2 class=" pt-5 pb-2 cards-under-title text-white"><i class="fa-brands fa-wordpress-simple text-sky-700"></i> <span class="pl-4">Wordpress</span></h2>
    <p class=" pl-10 cards-under-desc text-white">
    Världens största system för att skapa hemsidor, som idag används till  över 27% av alla webbplatser på internet.
    </p>
    </a>
    <a href="/webb">
    <h2 class=" pt-5 pb-2 cards-under-title text-white"><i class="fa-brands fa-shopify text-green-500"></i> <span class="pl-4">Shopify</span></h2>
    <p class=" pl-10 cards-under-desc text-white">
   
    En komplett handelsplattform som låter företag starta, utveckla och sälja produkter och tjänster online.
    </p>
    </a>
    </div>
    </div>
    </section>
    </>
  )
}
