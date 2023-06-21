import React from 'react'
import './Heading.css'
import flower from '../assets/effektify-blomma.png'

export const HeadingWebb = () => {
  return ( 
    <section>
    <div class='pt-10  heading-container text-left'>
    <h1 class="pt-5 text-4xl  ">
    <span class='text-white '>Få fler affärer
    <br />
    med ny <br /> hemsida
    </span>
    </h1>
    <p class="heading-webb-desc pt-5 text-lg font-thin">
    Hemsidor är inget nytt, men spelplanen och vad som är en bra hemsida ändras hela tiden. Därför krävs det att man som företagare är påläst och avsätter tid för att säkerställa att man är med i matchen. En hemsida är inte något som bör lämnas åt slumpen, utan kräver löpande arbete, service och investering.
    </p>
    </div>
    <div class='pb-10 heading-container text-right'>
    <h1 class="pt-5 text-4xl ">
    <span class='text-white '>Varför hemsida
    <br /> från Effektify?
    </span>
    </h1>
    <p class="heading-webb-desc pt-5 text-lg font-thin">
    Vi hymlar inte med att man kan bygga sin hemsida själv, och vi uppmuntrar dig gärna att försöka. Men vi finns också här när du har frågor eller när du vill ha experthjälp. Vi fokuserar inte bara på ett snyggt yttre, utan för oss är det viktigaste att ta reda på vad hemsidan ska göra för dig, och sedan tar vi fram en plan och en strategi på hur vi uppnår dina mål. Du ska inte bara bli nöjd när din nya hemsida går live.
    </p>
    </div>
    <section>
    <div class=' pt-20 pb-20 heading-container text-center '>
    <h1 class="pt-5 mb-4 text-white  text-2xl ">
    Du ska älska att arbeta <br /> <br /> och växa med den <br /> <br /> under lång tid!
    </h1>
    </div>
    </section>
    <div class=" pb-40 ">
    <img class="flower mx-auto " src={flower} alt="" />
    </div>
    </section>
  )
}
