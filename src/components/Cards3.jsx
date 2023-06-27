import React from 'react'
import './Cards.css'
import gif from '../assets/PONG_Light_version2.gif'

export const Cards3 = () => {
  return (
    <>
    <section class="cards-1">
       <div class="pt-5 cards-container ">
     <div class="max-w-sm p-6 pb-10 border border-white shadow bg-black  mx-auto pt-10">
      <a href="#">
      <i class="fa-regular fa-square-check text-green-500 fa-2xl"></i> 
        <h1 class=" cards-title text-center text-3xl font-black text-rose-300"><span class="text-white">Syfte och målgrupp</span></h1>
    </a>
    <p class=" pl-10 cards-under-desc text-white pt-4">
    Innan man sätter igång är de viktigaste frågorna “Vad är syftet med hemsidan?” och “Vem ska använda den?”. Detta för att kunna fokusera på vilket problem hemsidan ska lösa och för att den ska bli mer relevant och användarvänlig.
    </p>
    </div>
    </div>
    <div class="pt-5 cards-container ">
     <div class="max-w-sm p-6 pb-10 border border-white shadow bg-black  mx-auto pt-10">
      <a href="#">
      <i class="fa-regular fa-square-check text-green-500 fa-2xl"></i> 
        <h1 class=" pt-5  cards-title text-center text-3xl font-black text-rose-300"><span class="text-white">Tillgänglighet</span></h1>
    </a>
    <p class=" pl-5 cards-under-desc text-white pt-4">
    När man arbetar med hemsidor landar man ofta i uttrycket “lätt att säga, svårt att göra”. Det är ju självklart att en hemsida ska vara lika enkel att använda och läsa på både en stor skärm och en liten skärm. Men det kräver att man gör jobbet också. Förutom att säkerställa att bilder och texter går att se och läsa utan att zooma in (eller ut) kan det krävas att man ser över knappar och klickbara element så att de gör sitt jobb även på små skärmar.
    </p>
    </div>
    </div>
    <div class="pt-5 cards-container ">
     <div class="max-w-sm p-6 pb-10 border border-white shadow bg-black  mx-auto pt-10">
      <a href="#">
      <i class="fa-regular fa-square-check text-green-500 fa-2xl"></i> 
        <h1 class=" pt-5  cards-title text-center text-3xl font-black text-rose-300"><span class="text-white">Snabbhet och laddtid</span></h1>
    </a>
    <p class=" pl-5 cards-under-desc text-white pt-4">
    Det finns många faktorer som påverkar hur snabbt en hemsida laddar. Det du kan göra själv är att inte använda fler “tunga” element än nödvändigt, t.ex. video, bilder, m.m. De bilder du använder bör anpassas och komprimeras innan de laddas upp på hemsidan. Utöver innehållet på sajten påverkas laddtiden av hosting (var hemsidan finns), plattform (vilket verktyg som använts för att bygga hemsidan), m.m. Kontakta oss gärna om du vill veta mer om hur du kan få din hemsida att ladda snabbare. Du kan också testa din hemsida med 
    <a class='text-rose-300' href="https://developers.google.com/speed/pagespeed/insights/" rel="nofollow noopener" target="_blank"> Googles PageSpeed Insights.</a>
    </p>
    </div>
    </div>
    <div class="pt-5 cards-container ">
     <div class="max-w-sm p-6 pb-10 border border-white shadow bg-black  mx-auto pt-10">
      <a href="#">
      <i class="fa-regular fa-square-check text-green-500 fa-2xl"></i> 
        <h1 class=" pt-5  cards-title text-center text-3xl font-black text-rose-300"><span class="text-white">Säkerhet för dig och dina användare</span></h1>
    </a>
    <p class=" pl-5 cards-under-desc text-white pt-4">
    Hade du gått in i en butik eller en byggnad om du möttes av en skylt som sa “Den här byggnaden är inte säker. Vill du verkligen gå in?”. Knappast. Trygga dina besökare genom att installera ett SSL-certifikat på hemsidan. Utan SSL riskerar du också att sjunka i ranking på Google.
    </p>
    <p class=" pl-5 cards-under-desc text-white pt-4">
    För din egen säkerhet bör du se till så att din hemsida är skyddad från yttre attacker och intrång. Enklast är att kontakta din hostingpartner eller andra branschkunniga.
    </p>
    </div>
    </div>
    <img src={gif} alt="" />
    </section>
    
    </>
  )
}
