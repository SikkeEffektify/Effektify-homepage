import React from 'react'
import './Cards.css'

export const Cards = ({underTitle1, underDesc1, underTitle2, underDesc2, underTitle3, underDesc3, underTitle4, underDesc4 }) => {
  return (
    <>
    <div class="md:grid md:grid-cols-3  md:pt-10">
    <section class="cards-1">
       <div class="pt-5 cards-container">
     <div class="max-w-sm p-6 pb-10  border border-white shadow mx-auto bg-black pt-10">
      <a href="#">
        <h1 class=" cards-title text-center  mb-2 font-semibold tracking-tight uppercase text-rose-300"><span class="text-white">SEARCH</span>.</h1>
    </a>
   
    <h2 class=" pt-5 pb-1 cards-under-title text-white"><i class="fa-solid fa-chart-line text-rose-300"></i> <span class="pl-4">{underTitle1}</span></h2>
    <p class=" pl-10 cards-under-desc text-white">
    {underDesc1}
    </p>
    <h2 class=" pt-5 pb-2 cards-under-title text-white"><i class="fa-solid fa-chart-column text-sky-400"></i> <span class="pl-4">{underTitle2}</span></h2>
    <p class=" pl-10 cards-under-desc md:pb-11 text-white">
    {underDesc2}
    </p>
    </div>
    </div>
    </section>
    <section class="cards-2">
       <div class="pt-5 cards-container">
     <div class="max-w-sm p-6 pb-10 border  border-white shadow mx-auto bg-black pt-10">
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
     <div class="max-w-sm p-6 pb-10 border border-white shadow mx-auto bg-black pt-10">
      <a href="#">
        <h1 class=" cards-title text-center mb-2 font tracking-tight uppercase text-rose-300"><span class="text-white">Web & E-com</span>.</h1>
    </a>
    <a href="/webb"><h2 class=" pt-5 pb-2 cards-under-title text-white"><i class="fa-brands fa-wordpress-simple text-sky-700"></i> <span class="pl-4">{underTitle3}</span></h2>
    <p class=" pl-10 cards-under-desc text-white">
    {underDesc3}
    </p>
    </a>
    <a href="/webb">
    <h2 class=" pt-5 pb-2 cards-under-title text-white"><i class="fa-brands fa-shopify text-green-500"></i> <span class="pl-4">{underTitle4}</span></h2>
    <p class=" pl-10 cards-under-desc md:pb-10 text-white">
    {underDesc4}
    </p>
    </a>
    </div>
    </div>
    </section>
    </div>
    </>
  )
}
