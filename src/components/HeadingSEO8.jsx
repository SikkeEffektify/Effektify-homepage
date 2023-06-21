import React from 'react'
import './Heading.css'
import img from '../assets/Effektify-SSL-saker-anslutning-1.webp'
import ContactForm from './ContactForm'

export const HeadingSEO8 = () => {
  return (
    <>
    <div class='pt-20 heading-container text-center text-black bg-white'>
    <h1 class="text-2xl uppercase pb-5">Öka försäljningen med Google My Business</h1>
    <p class="text-sm text-left pb-5">
    Ett av de bästa sätten att få trafik och nya kunder är att begära in och optimera sin 
    <em> Google My Business (GMB). </em>
    Google My Business är en lista med information om ditt 
    <em> företags verksamhet, recensioner, bilder, inlägg </em>
    och mycket mer.
    </p>

    <p class="text-sm text-left pb-5">
    Några saker som är bra att tänka på när det kommer till Google My Business är:
    </p>

      <ul class="list-disc text-sm text-left pb-10">
        <li>
        Vad hittar dina kunder när de söker efter ditt företag på nätet?   
        </li>
        <li>
        Hur snabbt kan de få tillgång till ditt telefonnummer om de behöver det?
        </li>
        <li>
        Om de vill veta om du har parkeringsplatser, hur får de reda på det?
        </li>
      </ul>
      <p class="text-sm text-left pb-5">
      Du måste se till att 
      <strong class="text-rose-300"> konsumenterna har tillgång till denna informationen redan innan de når din webbplats. </strong>
      Även om de flesta av dessa uppgifter finns på din hemsida, indexerar Google My Business det innehåll som du tillhandahåller för att 
      <strong class="text-rose-300"> skapa en enhetlig struktur i Google Search och Google Maps </strong>
      (Google Local Guides kan också granska och redigera ens listor för att skapa enhetlighet).
      </p>
    </div>
    

    <section class="bg-white">
       <div class="pt-5 cards-container p-6">
     <div class="custom-back max-w-sm p-6 pb-10  shadow headingSEO-card6 pt-10">
        <h1 class="text-center text-xl pt-5 pb-5 text-white">Vad är Google My Business?</h1>
        <p class="text-sm text-white pb-5">
        GMB är inte bara en plats där människor kan hitta grundläggande information om ditt företag. När Google My Business används på rätt sätt är det 
        <strong> ett kraftfullt verktyg som kan öka dina intäkter och ge värdefulla insikter om dina kunder.</strong>
        </p>
        <p class="text-sm text-white pb-5">
        Cirka 95 % av alla sökningar idag sker på just Google. Sökmotorn dominerar helt enkelt när det kommer till att söka på nätet. 
        <strong> Varje sekund som går på dygnet letar människor efter nya saker att köpa. </strong>
        Du som har en produkt att sälja kan helt enkelt inte riskera att inte synas på plattformen.
        </p>    
    </div>
    </div>
    </section>

    
    </>
  )
}
