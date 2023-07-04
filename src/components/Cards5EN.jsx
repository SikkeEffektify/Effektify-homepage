import React from 'react'

import image from '../assets/e-commerce-sma-foretag.webp'
import gif from '../assets/PONG_Light_version2.gif'

export const Cards5EN= () => {
  return (
    <>
   <section class="cards5-1">
       <div class="pt-5 cards-container ">
     <div class="custom-back  mx-auto max-w-sm p-6 pb-60  pt-40">    
    </div>
    </div>
    </section>
    <div class='pt-40 pb-10 heading-container text-white '>
    <h1 class="text-5xl font-black pt-5 mb-4 tracking-tighter  ">
    Öka din synlighet
    </h1>
    <p class='font-light text-lg'>
    Google är Sveriges i särklass största sökmotor och 95% av alla sökningar görs idag via deras plattform. I Sverige görs det varje dag mer än 50 miljoner sökningar på Google. Med siffror som dessa inser du säkert vikten av att synas högt upp i sökresultatet som Google visar upp. Konkurrensen mellan företag som vill ranka högt upp på Google är idag oerhört stor då många idag förstår betydelsen av vad en bra position innebär. Med andra ord, syns du inte så finns du inte.
    </p>
    <p class='font-light pt-20 text-lg'>
    Att marknadsföra sin hemsida med Google Ads innebär att man betalar för att visas högst upp på Google och man betalar varje gång någon väljer att klicka på annonsen.
    </p>
    <em>
      <strong class="font-black text-rose-300">
      Detta kallas för Pay per click eller PPC <br />
      </strong>
    </em>
    och kostnaden som du betalar varje gång en besökare klickar på just din länk bestäms av konkurrenssituationen och vilka sökord det rör sig om.
    </div>

    <img class="w-3/4 mx-auto " src={image} alt="" />
    <img src={gif} alt="" />
    </>
  )
}
