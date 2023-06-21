import React from 'react'
import './Heading.css'
import img from '../assets/stats1.webp'
import img2 from '../assets/stats2.webp'
import img3 from '../assets/stats3.webp'

export const Heading7 = () => {
  return (
    
    <div class='pt-20 heading-container text-center text-black bg-white'>
    <p class="uppercase text-xs pb-5">Syns du inte så finns du inte</p>
    <h1 class="text-lg uppercase">
    Med tydliga resultat hjälper
    <br />
    vi företag att öka sin digitala närvaro
    </h1>
    <img class="mx-auto pt-5 drop-shadow-lg" src={img} alt="" />
    <img class="mx-auto pt-5 drop-shadow-lg" src={img2} alt="" />
    <img class="mx-auto pt-5 drop-shadow-lg" src={img3} alt="" />
    <p class="text-left pt-10 text-base">Google är i särklass den största sökmotorn i världen. 95% av alla sökningar som görs idag sker via plattformen, och endast i Sverige görs det här dagligen mer än 50 miljoner sökningar. Eftersom allt fler företag förstår betydelsen med bra synlighet på Google, är det därför oerhört viktigt att aktivt se till att hålla en så god position som möjligt. Ju bättre du syns, desto mer besökare får din hemsida.</p>
    </div>
  )
}
