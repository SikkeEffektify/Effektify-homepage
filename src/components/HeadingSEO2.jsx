import React from 'react'
import './Heading.css'
import img from '../assets/how-google-search.webp'
import ContactForm from './ContactForm'

export const HeadingSEO2 = () => {
  return (
    <>
    <div class='pt-20 heading-container text-center text-black bg-white'>
    <h1 class="text-3xl uppercase pb-5">Vad är SEM?</h1>
    <p class="text-sm text-left pb-5">När det kommer till digital marknadsföring och att synas högt upp i sökresultatet så kan man förutom att arbeta med SEO även arbeta med SEM, eller Search Engine Marketing. <br /> Till skillnad från att med hjälp av sökmotoroptimering synas i det organiska resultatet kan du genom att annonsera via <a class='text-rose-300' href="/google-ads/"> Goggle Ads </a>synas högt upp i sökresultatet.</p> 
    
    <h1 class="text-center pt-5 text-lg pb-5 uppercase">Precis som med SEO behöver du analysera och optimera dina annonser på rätt sätt för att du ska synas högre upp än dina konkurrenter på de sökord du vill synas på.</h1>
      <p class='text-sm pb-5 text-left'>Tillsammans utgör SEO och SEM idag en väsentlig del av arbetet med att öka trafiken till din hemsida och få fler besökare och kunder. Ungefär 70% av all trafik från besökare kommer från de organiska resultaten med hjälp av SEO. Resterande 30% når din webbplats via klick från annonser och är därför ett bra komplement för dig som vill öka din relevans i sökmotorernas ögon och därmed öka din försäljning.</p>
      <p class='text-sm pb-5 text-left'>Utöver SEO och SEM finns det en del andra faktorer som är viktiga när sökmotorer bedömer din hemsida för att avgöra om den är mer relevant att visa upp än dina konkurrenters sidor. Några av dessa faktorer är:</p>

      <ul class="list-disc heading-container">
        <li class=" pt-5 uppercase text-left text-rose-300 text-xl">
        On-page SEO
        </li>
        <p class='text-left pt-2 text-sm'>
        Relevanta texter, bilder och annan content på din hemsida som med hjälp av SEO optimeras för sökmotorerna.
        </p>

        <li class=" pt-5 uppercase text-left text-rose-300 text-xl">
        On-page SEO
        </li>
        <p class='text-left pt-2 text-sm'>
        Aktiviteter som du och andra gör utanför din webbplats som höjer rankningen av din sida hos sökmotorer.
        </p>

        <li class=" pt-5 uppercase text-left text-rose-300 text-xl">
        Externa Länkar
        </li>
        <p class='text-left pt-2 text-sm'>
        Rekommendationer från andra hemsidor som pekar till din hemsida och får den att öka i ranking.
        </p>
      </ul>
    </div>

    <section class="bg-white text-center pt-20 pb-20">
    <a href='/kontakt' class="cards-video-button pt-3 pb-3 uppercase">Ready For Take Off</a>
    </section>
    
    <section class='bg-white heading-container'>
    <h1 class="text-center pt-5 text-2xl pb-10 uppercase">Betald sökning förbättrar inte de organiska <br /> resultaten</h1>
      <p class='text-sm pb-5 text-left'>Det finns inget uppenbart samband mellan organiska positioner och betalda positioner. De ger resultat på olika sätt. De organiska sökresultaten kommer från indexdatabasen, medan PPC:s sponsrade länkar baseras på ditt bud och din totala investering.</p>
      <p class='text-sm pb-5 text-left'>Med betalda annonser kan du rikta in dig på fler sökord och enkelt testa olika kampanjer. Ännu viktigare är att du kan stärka din varumärkesidentitet när din betalda annons dyker upp ovanför sökresultaten. På detta sätt fångar du därför in trafik till din sajt både organiskt och från dina betalda annonser.</p>
    </section>

    <section class="bg-white">
       <div class="pt-5 cards-container p-6">
     <div class="max-w-sm p-6 pb-10  shadow headingSEO-card2 pt-10">
        <h1 class="text-center text-xl pt-5 pb-5 text-white">FÅ BÄTTRE INSIKT I VAD MÄNNISKOR SÖKER EFTER</h1>
        <p class="text-sm text-white pb-5">Betald marknadsföring kan hjälpa till att definiera och förfina de sökord som du riktar in dig på organiskt, med hjälp av exakta data. Det är trots allt mycket lättare att mäta avkastningen av en länk till en betald sökning än av en gratis organisk listning. Dessutom ger klickfrekvensen på betalda annonser dig insikt i vilka nyckelord som är bäst att optimera, för att sedan kunna skapa ett bättre organiskt optimerat resultat.</p>
        <p class="text-sm text-white pb-5">Därför råder det ingen tvekan om att betald sökning kan bidra till att förbättra konverteringsgraden för organiska resultat, men det kommer inte att direkt hjälpa till med din organiska position.</p>   
    </div>
    </div>
    </section>

    
    
    

    </>
  )
}
