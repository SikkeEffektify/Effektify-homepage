import React from 'react'
import './Heading.css'
import img from '../assets/Effektify-SSL-saker-anslutning-1.webp'
import ContactForm from './ContactForm'

export const HeadingSEO6 = () => {
  return (
    <>
    <div class='pt-20 heading-container text-center text-black bg-white'>
    <h1 class="text-3xl uppercase pb-5">Sökordsanalys</h1>
    <p class="text-sm text-left pb-5">
    En analys är en viktig del för att kunna välja ut ord som är av betydelse för dina affärer och för att sedan kunna optimera din hemsida utefter dessa. Ett bra och relevant sökord för ditt företag kommer generera pengar. Sökordsanalysen görs för att ta reda på hur stor sökvolymen är för sökordet, hur hög konkurrensen är för just det sökordet, samt vad sökintentionen för sökordet är så att det med all säkerhet är relevant för dig och ditt företag.
    </p>
    <p class="text-sm text-left pb-5">
    Det är viktigt att ta reda på hur stor sökvolymen är för ett sökord för att veta affärsnyttan i att synas på just det sökordet. Det är också av stor vikt att göra en bedömning av svårighetsgraden att synas på sökordet i fråga. Allt detta gör du med en analys.
    </p>
   <p class="text-sm text-left pb-5">
   Eftersom det enbart finns tio placeringar på första sidan på Google så måste du kunna ”knuffa ner” en av hemsidorna, som kan ses som konkurrenter, som redan har en av dessa placeringar. Detta betyder att det är ständig konkurrens om placeringarna på första sidan, och din hemsida måste därför vara bättre än den hemsida vars placering du vill ha. Om den inte är det går det att förbättra dess resultat med många verktyg så att sökmotorerna får hjälp att hitta webbplatsen.
   </p>
   <p class="text-sm text-left pb-5">
   Därav är det viktigt att ta reda på hur konkurrensen för ett specifikt sökord ser ut. Utöver detta är det även viktigt att göra en bedömning av sökintentionen för ett specifikt sökord. Google försöker konstant förstå vad för typ av information deras användare vill få fram när de gör en specifik sökning. Baserat på vad Google tror är intentionen med sökningen visas det upp hemsidor som Google anser matcha användarens sökintention bäst.
   </p>
   <p class="text-sm text-left pb-5">
   Något som också är bra att känna till är att det finns tre grundläggande typer av sökningar, informationssökningar, navigeringssökningar och transaktionssökningar. En informationssökning görs när användaren vill veta mer om något, om hur det fungerar eller hur något ska göras.
   </p>
   <p class="text-sm text-left pb-5">
   En navigationssökning görs när användaren vet vad den är ute efter och använder Google för att navigera sig till rätt hemsida. En transaktionssökning görs ofta när användaren är beredd att ta ett köpbeslut.

   </p>
    </div>
    
    <div class='pt-20 heading-container text-center text-black bg-white'>
    <h1 class="text-3xl uppercase pb-5">Hur säker är din hemsida?</h1>
    <p class="text-sm text-left pb-5">
    Sökmotorer föredrar hemsidor / webbplatser som är säkra och undviker gärna att visa upp sidor i sökresultatet som inte anses vara det . Genom att installera ett så kallat SSL-certifikat skyddas besökarnas kommunikation samtidigt som säkerheten hjälper din on-page SEO eftersom den då rankas högre i den organiska sökningen.
    </p>
    <p class="text-sm text-left pb-5">
    Genom att använda dig av en säker hemsida visar du också dina besökare att de känna sig trygga när de exempelvis handlar eller fyller i formulär på din hemsida. Med andra ord ger en trygg webbplats fler kunder.
    </p>

    <h1 class="text-lg uppercase pb-5">HUR MAN VET OM EN SAJT ÄR SÄKER?</h1>
    <p class="text-sm text-left pb-5">Ta reda på om en webbplats är säker genom att kontrollera säkerhetsinformation om webbplatsen. Chrome varnar dig om webbplatsen eller anslutningen till den inte är säker eller privat.</p>
  
    </div>


    <section class="bg-white">
       <div class="pt-5 cards-container p-6">
     <div class="custom-back max-w-sm p-6 pb-10  shadow headingSEO-card pt-10">
        <h1 class="text-center text-xl pt-5 pb-5 text-white">VAD ÄR SSL?</h1>
        <p class="text-sm text-white pb-5">
        SSL är en förkortning för Secure Sockets Layer vars mål är att skapa autentiserade och krypterade länkar mellan nätverksdatorer, mellan en webbserver och en webbläsare. Det möjliggör för organisationer och företag att skydda transaktioner online och håller kunders information säker och privat.
        </p>
        <p class="text-sm text-white pb-5">
        Ett SSL-certifikat är ett digitalt dokument som på en webbplats binder identiteten till ett kryptografiskt nyckelpar som är en privat nyckel och en offentlig nyckel. Certifikatet innehåller även identifierande information om en webbplats som inkluderar domännamn och.
        </p>
        <p class="text-sm text-white pb-5">
        Summerat så skyddar SSL internetanslutningar och förhindrar att informationen som överförs mellan två system inte kan läsas eller ändras av kriminella. När där finns ett hänglåsikon bredvid webbadressen i webbläsarens adressfält betyder det att SSL skyddar den webbplats du är inne på. De allra flesta webbplatser har idag SSL.
        </p>
    </div>
    </div>

    <div class="heading-container">
    <h1 class="text-center text-lg pt-5 pb-5 text-black">HUR SER DU ATT EN WEBBPLATS ÄR SÄKER?</h1>

    <ol class="list-decimal text-sm"> 
    <li>
      Öppna en sida i Chrome
    </li>
    <li>
    Titta på symbolen till vänster om webbadressen
    </li>
    </ol>
    <img class="mx-auto pt-5 drop-shadow-lg pb-5" src={img} alt="" /> 
    <p class="text-sm">
    Om du vill visa information om webbplatsen och vilka behörigheter den har klickar du på ikonen. Då visas en sammanfattning av hur privat anslutningen är enligt Chrome.
    </p>
    </div>

  
    </section>
    </>
  )
}
