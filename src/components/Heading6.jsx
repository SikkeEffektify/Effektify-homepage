import React from 'react'
import './Heading.css'
import img from '../assets/effektify-digitalbyra-symbol.webp'
import img2 from '../assets/digital-marknadsforing-drink.gif'

export const Heading6 = () => {
  return (
    
    <section>
    <div class='bg-white pt-40 pb-10 heading-container '>
    <h1 class="text-5xl font-black pt-5 mb-4 tracking-tighter text-black ">
    Rätt strategi -
    <br />
    rätt resultat.
    </h1>
    <p class='font-light text-lg'>
    Med hjälp av väl optimerade annonser kommer det att vara betydligt större chans att dina potentiella kunder hittar dig när söker efter produkter eller tjänster som ditt företag erbjuder. När det kommer till digital marknadsföring har vi på Effektify både kunskapen och erfarenheten som krävs för att synas online idag.
    </p>
    <p>
    Vare sig det rör sig om annonsering på 
    <strong class='text-rose-300'>
      <a href="/didigtal-anonsering"> sociala medier </a>
    </strong>
    eller på
    <strong class='text-rose-300'>
      <a href="/digital-anonsering"> Google ads</a>
    </strong>
    ,
    erbjuder vi både den strategi som passar just ditt företag, 
    samt rapporter med mätbara resultat 
    så att du enkelt kan följa utvecklingen av dina kampanjer.
    </p>
    </div>
    
    
    <img src={img} alt="" />

    <div class='bg-white  pb-10 heading-container text-right'>
    <h1 class="text-5xl font-black pt-5 mb-4 tracking-tighter text-black ">
    på rätt plats
    <br />
    rvid rätt tid
    </h1>
    <p  class='font-light text-lg'>
    Google är Sveriges i särklass största sökmotor och 95% av alla sökningar görs idag via deras plattform. Att synas högt upp på Google ger företag möjlighet att nå ut till potentiella kunder när dessa själva gör en sökning. Sökmotoroptimering eller SEO är med andra ord ett av de bästa sätten att nå nya kunder.
    </p>
    </div>
    <div class='bg-white  pb-10 heading-container text-left'>
    <p  class='font-light text-lg'>
      Det finns olika sätt att synas på Google, man kan betala för att synas genom att annonsera via Google Ads eller genom att synas organiskt när potentiella kunder söker (sökmotoroptimering). Bägge sätten är viktiga delar av en modern digital marknadsföringsstrategi.
    </p>
    </div>
    <div class='bg-white  pb-10 heading-container text-left'>
    <p  class='font-light text-lg'>
    En av fördelarna med att annonsera med Google Ads är att det inte tar lika lång tid att synas som när man arbetar med sökmotoroptimering då du betalar för annonser och besökare. Nackdelen med annonsering är att så fort du slutar lägga pengar på annonser slutar du synas och får inga fler besök till hemsidan. Med sökmotoroptimering syns du varje gång nya potentiella kunder googlar efter det du säljer, dygnet runt året om.
    </p>
    </div>
    
    <div class="bg-white  ">
      <p class="text-right text-xl pb-3 pr-2">Luta dig tillbaka och låt oss 
        <br />
        göra det vi är bra på.</p>
    <img class="flower mx-auto invert " src={img2} alt="" />
    </div>
    </section>
    
  )
}
