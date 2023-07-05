import React from 'react'
import { HeroImage } from '../components/HeroImage'
import { Heading6 } from '../components/Heading6'
import { Heading } from '../components/Heading'
import { SocialCards } from '../components/SocialCards'
import ContactForm from '../components/ContactForm'
import { Cards5 } from '../components/Cards5'


/* Images */
import heroImg from '../assets/digital-marknadsforing.webp'


export default function DigitalAnonsering() {
  return (

    <>
   <Heading 
   bg={"bg-white pb-40 pt-20"}
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
   <Cards5 
 
   />
    </>

  )
}
