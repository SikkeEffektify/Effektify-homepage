import React from 'react'
import { Hero } from '../components/Hero'
import { HeadingWebb } from '../components/HeadingWebb'
import { Cards3 } from '../components/Cards3'
import ContactForm from '../components/ContactForm'


/* Video */
import video from '../assets/Webb.mp4'

/* image */
import image from '../assets/webbdesign-bygga-hemsida.webp'
import { HeroImage } from '../components/HeroImage'

export default function Webb() {
  return (
    <>
    <Hero
      title={"Få fler besökare med en bra hemsida"}
      videoLink={video} 
    />
    <HeadingWebb 
      titleLeft={"Få fler affärer med ny  hemsida"}
      descLeft={"Hemsidor är inget nytt, men spelplanen och vad som är en bra hemsida ändras hela tiden. Därför krävs det att man som företagare är påläst och avsätter tid för att säkerställa att man är med i matchen. En hemsida är inte något som bör lämnas åt slumpen, utan kräver löpande arbete, service och investering."}
      titleRight={"Varför hemsida från Effektify"}
      DescRight={" Vi hymlar inte med att man kan bygga sin hemsida själv, och vi uppmuntrar dig gärna att försöka. Men vi finns också här när du har frågor eller när du vill ha experthjälp. Vi fokuserar inte bara på ett snyggt yttre, utan för oss är det viktigaste att ta reda på vad hemsidan ska göra för dig, och sedan tar vi fram en plan och en strategi på hur vi uppnår dina mål. Du ska inte bara bli nöjd när din nya hemsida går live."}
      endText={"Du ska älska att arbeta och växa med den under lång tid!"}
    />
    <HeroImage 
      titleLeft={"Vad ska man tänka på när man bygger en hemsida?"}
      desc={"Det är idag inte speciellt svårt att bygga en hemsida själv, men som mycket annat kräver det att man investerar en hel del tid för att lära sig grunderna, vad som är viktigt och hur verktyget fungerar. Här listar vi några saker som är viktiga när man bygger en hemsida:"}
      image={image}
    />
    <Cards3 
      title1={"Syfte och målgrupp"}
      desc1={`
      <p class=" pl-10 cards-under-desc text-white pt-4">
        Innan man sätter igång är de viktigaste frågorna “Vad är syftet med hemsidan?” och “Vem ska använda den?”. Detta för att kunna fokusera på vilket problem hemsidan ska lösa och för att den ska bli mer relevant och användarvänlig.
      </p>
      `}

      title2={"Tillgänglighet"}
      desc2={`
      <p class=" pl-5 cards-under-desc text-white pt-4">
        När man arbetar med hemsidor landar man ofta i uttrycket “lätt att säga, svårt att göra”. Det är ju självklart att en hemsida ska vara lika enkel att använda och läsa på både en stor skärm och en liten skärm. Men det kräver att man gör jobbet också. Förutom att säkerställa att bilder och texter går att se och läsa utan att zooma in (eller ut) kan det krävas att man ser över knappar och klickbara element så att de gör sitt jobb även på små skärmar.
      </p>
      `}

      title3={"Snabbhet och laddtid"}
      desc3={`
      <p class=" pl-5 cards-under-desc text-white pt-4">
        Det finns många faktorer som påverkar hur snabbt en hemsida laddar. Det du kan göra själv är att inte använda fler “tunga” element än nödvändigt, t.ex. video, bilder, m.m. De bilder du använder bör anpassas och komprimeras innan de laddas upp på hemsidan. Utöver innehållet på sajten påverkas laddtiden av hosting (var hemsidan finns), plattform (vilket verktyg som använts för att bygga hemsidan), m.m. Kontakta oss gärna om du vill veta mer om hur du kan få din hemsida att ladda snabbare. Du kan också testa din hemsida med 
        <a class='text-rose-300' href="https://developers.google.com/speed/pagespeed/insights/" rel="nofollow noopener" target="_blank"> Googles PageSpeed Insights.</a>
      </p>
      `}

      title4={"Säkerhet för dig och dina användare"}
      desc4={`
      <p class=" pl-5 cards-under-desc text-white pt-4">
        Hade du gått in i en butik eller en byggnad om du möttes av en skylt som sa “Den här byggnaden är inte säker. Vill du verkligen gå in?”. Knappast. Trygga dina besökare genom att installera ett SSL-certifikat på hemsidan. Utan SSL riskerar du också att sjunka i ranking på Google.
      </p>
      <p class=" pl-5 cards-under-desc text-white pt-4">
        För din egen säkerhet bör du se till så att din hemsida är skyddad från yttre attacker och intrång. Enklast är att kontakta din hostingpartner eller andra branschkunniga.
      </p>
      `}

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
    </>
  )
}
