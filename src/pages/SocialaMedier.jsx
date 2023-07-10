import React from 'react'
import gif from '../assets/PONG_Light_version2.gif'
import ContactForm from '../components/ContactForm'
import like from '../assets/annonsering-sociala-medier-gilla.webp'
import { Heading } from '../components/Heading'
import { SocialCards } from '../components/SocialCards'
import { HeroImage } from '../components/HeroImage'
import HeadingWithLogo from '../components/HeadingWithLogo'



export default function SocialaMedier() {
  return (
    <>

    <div className='bg-cyan-700 pb-60 pt-60'>
    <Heading 
      bg={"bg-cyan-700"}
      title={"Sociala Medier"}
      textColor={"text-white"}
      desc={" Med en av våra persoliga specialister har annonsering aldrig varit enklare. Vi skräddarsyr en strategi baserat på djupgående analyser av önskade sökord och konkurrens för att kunna erbjuda en lösning som passar din bransch och ditt företag."}
    />
   
    </div>
    
    <HeroImage
      image={"../src/assets/digital-marknadsforing.webp"}
      titleRight={"Med en vision och rätt värktyg"}
      titleLeft={"kan ditt företag bli till den svan du alltid drömt om"}

    />
  
    <HeadingWithLogo 
     mainTitle1={"Rätt strategi – rätt resultat."}
     mainDesc1={`
     <p class="text-left text-sm pb-5">
     Med hjälp av väl optimerade annonser kommer det att vara betydligt större chans att dina potentiella kunder hittar dig när söker efter produkter eller tjänster som ditt företag erbjuder. När det kommer till digital marknadsföring har vi på Effektify både kunskapen och erfarenheten som krävs för att synas online idag.   
     </p>
     <p class="text-left text-sm pb-20">
     Vare sig det rör sig om annonsering på 
     <a class="text-rose-300" href="/digital-annonsering"> sociala medier </a>
     eller på
     <a class="text-rose-300" href="/digital-annonsering"> Google ads</a>
     , erbjuder vi både den strategi som passar just ditt företag, samt rapporter med mätbara resultat så att du enkelt kan följa utvecklingen av dina kampanjer.
     </p>
     `}

     mainTitle2={"på rätt plats vid rätt tid"}
     mainDesc2={`
     <p class="text-right text-sm pb-10">
     Google är Sveriges i särklass största sökmotor och 95% av alla sökningar görs idag via deras plattform. Att synas högt upp på Google ger företag möjlighet att nå ut till potentiella kunder när dessa själva gör en sökning. Sökmotoroptimering eller SEO är med andra ord ett av de bästa sätten att nå nya kunder.   
     </p>
     <p class="text-left text-sm pb-5">
     Det finns olika sätt att synas på Google, man kan betala för att synas genom att annonsera via Google Ads eller genom att synas organiskt när potentiella kunder söker (sökmotoroptimering). Bägge sätten är viktiga delar av en modern digital marknadsföringsstrategi.
     </p>
     <p class="text-left text-sm pb-5">
     En av fördelarna med att annonsera med Google Ads är att det inte tar lika lång tid att synas som när man arbetar med sökmotoroptimering då du betalar för annonser och besökare. Nackdelen med annonsering är att så fort du slutar lägga pengar på annonser slutar du synas och får inga fler besök till hemsidan. Med sökmotoroptimering syns du varje gång nya potentiella kunder googlar efter det du säljer, dygnet runt året om.   
     </p>
 
     `}

     cupText={"Luta dig tillbaka och låt oss göra det vi är bra på."}
    />
    

  

    <SocialCards 
      title={"Vilken platform är rätt för dig?"}
      desc={"Med hjälp av rätt strategier skapar vi anpassade lösningar för företag som vill kunna nå ut till en större marknad samtidigt som de kan se mätbara resultat."}
    />

    <img  className='mx-auto' src={gif} alt="" />
    <ContactForm 
      title={"Let's play!"}
      desc={"Har du frågor eller är redo att starta din digitala resa redan nu, är du välkommen att fylla i några rader eller maila oss på "}
      company={"Företag"}
      name={"Namn"}
      phone={"Telefon"}
      email={"E-post"}
      text={"Vad kan vi hjälpa dig med?"}
      buttonText={"Skicka"}
  />


    <section>
    <div class='pt-10  heading-container text-white'>
    <section class="cards-google4">
       <div class="pt-5 cards-container2 pb-10">
     <div class="custom-back max-w-sm pb-10 border border-black shado mx-auto pt-10">
        <h1 class="pt-40 cards2-title text-center mb-2 font-semibold tracking-tight uppercase text-rose-300"><span class="text-white"></span></h1>
        <h2 class="pb-20 text-center cards2-under-title text-white"><span class="pl-4"></span></h2>
    </div>
    </div>
    </section>


    <Heading 
      textColor={"text-white"}
      title={"Öka din synlighet med google ads"}
      descCustomHtml={`
      <p class="text-left text-sm pb-10">
      Google är Sveriges i särklass största sökmotor och 95% av alla sökningar görs idag via deras plattform. I Sverige görs det varje dag mer än 50 miljoner sökningar på Google. Med siffror som dessa inser du säkert vikten av att synas högt upp i sökresultatet som Google visar upp. Konkurrensen mellan företag som vill ranka högt upp på Google är idag oerhört stor då många idag förstår betydelsen av vad en bra position innebär. Med andra ord, syns du inte så finns du inte.
      </p>
  
      <p class="text-right text-sm pb-10">
      Google är Sveriges i särklass största sökmotor och 95% av alla sökningar görs idag via deras plattform. I Sverige görs det varje dag mer än 50 miljoner sökningar på Google. Med siffror som dessa inser du säkert vikten av att synas högt upp i sökresultatet som Google visar upp. Konkurrensen mellan företag som vill ranka högt upp på Google är idag oerhört stor då många idag förstår betydelsen av vad en bra position innebär. Med andra ord, syns du inte så finns du inte.    
      </p>
    `}
    />

    <section class="cards-google4">
       <div class="pt-5 cards-socialm pb-10">
     <div class="custom-back max-w-sm pb-10 border border-black shado mx-auto pt-10">
        <h1 class="pt-40 cards2-title text-center mb-2 font-semibold tracking-tight uppercase text-rose-300"><span class="text-white"></span></h1>
        <h2 class="pb-20 text-center cards2-under-title text-white"><span class="pl-4"></span></h2>
    </div>
    </div>
    </section>

    <section class="cards-socialm2">
       <div class="pt-5 cards-container2 pb-10">
     <div class="custom-back max-w-sm pb-10 border border-black shado mx-auto pt-10">
        <h1 class="pt-40 cards2-title text-center mb-2 font-semibold tracking-tight uppercase text-rose-300"><span class="text-white"></span></h1>
        <h2 class="pb-20 text-center cards2-under-title text-white"><span class="pl-4"></span></h2>
    </div>
    </div>
    </section>

    <Heading 
      title={"Uppnå dina mål med Sociala medier"}
      textColor={"text-white"}
      descCustomHtml={`
      <p class="text-right text-sm pb-10">
      Google är Sveriges i särklass största sökmotor och 95% av alla sökningar görs idag via deras plattform. I Sverige görs det varje dag mer än 50 miljoner sökningar på Google. Med siffror som dessa inser du säkert vikten av att synas högt upp i sökresultatet som Google visar upp. Konkurrensen mellan företag som vill ranka högt upp på Google är idag oerhört stor då många idag förstår betydelsen av vad en bra position innebär. Med andra ord, syns du inte så finns du inte.    
      </p>


      <p class="text-left text-sm pb-10">
      Tillsammans med dig reder vi ut vad du vill uppnå genom att annonsera på sociala medier och vad som ska prioriteras för att nå dina mål.
      </p>

    `}
    />

  


    
    </div>     
    </section>

    <div class="pb-20 ">
   

    <img src={like} class="like-bg shadow" alt="" />
 
    </div>
  
    </>
  )
}
