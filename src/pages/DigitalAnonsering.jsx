import React from 'react'
import { HeroImage } from '../components/HeroImage'
import { Heading6 } from '../components/Heading6'
import { Heading } from '../components/Heading'
import { SocialCards } from '../components/SocialCards'
import ContactForm from '../components/ContactForm'
import { CardsGoogle } from '../components/CardsGoogle'


/* Images */
import heroImg from '../assets/digital-marknadsforing.webp'


export default function DigitalAnonsering() {
  return (

    <>
   <Heading 
   bg={"bg-white pb-40 pt-20 md:pb-80 "}
   titlePosition={"md:text-center"}
   textColor={"text-black"}
   title={"Digital annonsering"}
   desc={"Med en av våra persoliga specialister har annonsering aldrig varit enklare. Vi skräddarsyr en strategi baserat på djupgående analyser av önskade sökord och konkurrens för att kunna erbjuda en lösning som passar din bransch och ditt företag."}
   />
   <HeroImage
   image={heroImg}
   titleLeft={" kan ditt företag bli till den svan du alltid drömt om."}
   titleRight={"Med en vision och rätt verktyg"}
   />
   <Heading6
    titleLeft={" Rätt strategi - rätt resultat."}
    descLeft={`
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
    `}
    titleRight={"på rätt plats vid rätt tid"}
    descRight={`
    <p  class='font-light text-lg'>
    Google är Sveriges i särklass största sökmotor och 95% av alla sökningar görs idag via deras plattform. Att synas högt upp på Google ger företag möjlighet att nå ut till potentiella kunder när dessa själva gör en sökning. Sökmotoroptimering eller SEO är med andra ord ett av de bästa sätten att nå nya kunder.
    </p>
    `}

    desc={`
    <p  class='font-light pb-10 text-lg'>
      Det finns olika sätt att synas på Google, man kan betala för att synas genom att annonsera via Google Ads eller genom att synas organiskt när potentiella kunder söker (sökmotoroptimering). Bägge sätten är viktiga delar av en modern digital marknadsföringsstrategi.
    </p>
    <p  class='font-light text-left text-lg'>
    En av fördelarna med att annonsera med Google Ads är att det inte tar lika lång tid att synas som när man arbetar med sökmotoroptimering då du betalar för annonser och besökare. Nackdelen med annonsering är att så fort du slutar lägga pengar på annonser slutar du synas och får inga fler besök till hemsidan. Med sökmotoroptimering syns du varje gång nya potentiella kunder googlar efter det du säljer, dygnet runt året om.
    </p>
    `}

    endText={`
    <p class="max-md:text-right  md:text-center text-xl pb-3 pr-2">Luta dig tillbaka och låt oss 
    <br />
    göra det vi är bra på.
    </p>
    `}
   />
   <SocialCards
     title={"Vilken platform är rätt för dig?"}
     desc={" Med hjälp av rätt strategier skapar vi anpassade lösningar för företag som vill kunna nå ut till en större marknad samtidigt som de kan se mätbara resultat."}
   />

<ContactForm 
    title={"Vad kul att du har hittat till oss!"}
    desc={"Har du frågor eller är redo att starta din digitala resa redan nu, är du välkommen att fylla i några rader eller maila oss på "}
    company={"Företag"}
    name={"Namn"}
    phone={"Telefon"}
    email={"E-post"}
    text={"Vad kan vi hjälpa dig med?"}
    buttonText={"Skicka"}
    />
   
   <CardsGoogle
    title={"Öka din synlighet"}
    desc1={"Google är Sveriges i särklass största sökmotor och 95% av alla sökningar görs idag via deras plattform. I Sverige görs det varje dag mer än 50 miljoner sökningar på Google. Med siffror som dessa inser du säkert vikten av att synas högt upp i sökresultatet som Google visar upp. Konkurrensen mellan företag som vill ranka högt upp på Google är idag oerhört stor då många idag förstår betydelsen av vad en bra position innebär. Med andra ord, syns du inte så finns du inte."}
    desc2={`
    <p class='font-light pt-20 text-lg'>
      Att marknadsföra sin hemsida med Google Ads innebär att man betalar för att visas högst upp på Google och man betalar varje gång någon väljer att klicka på annonsen.
    </p>
    <p>
      <em>
      <strong class="font-black text-rose-300">
      Detta kallas för Pay per click eller PPC <br />
      </strong>
      </em>
      och kostnaden som du betalar varje gång en besökare klickar på just din länk bestäms av konkurrenssituationen och vilka sökord det rör sig om.
    </p>
    `}
    
   />


    </>

  )
}
