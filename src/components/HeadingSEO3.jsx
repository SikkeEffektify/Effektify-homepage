import React from 'react'
import './Heading.css'
import img from '../assets/SEO-sokmoteropt-titlar.webp'
import img2 from '../assets/Meta-beskrivning.webp'
import img3 from '../assets/Namnge-bilder-pa-ratt-satt-1.webp'
import ContactForm from './ContactForm'

export const HeadingSEO3 = () => {
  return (
    <>
    <div class='pt-20 heading-container text-center text-black bg-white'>
    <h1 class="text-3xl uppercase pb-5">On-page SEO</h1>
    <p class="text-sm text-left pb-5">On-page SEO innebär optimering som man gör på hemsidan för att den ska ranka högre upp på sökmotorer för att i sin tur öka trafiken, dvs. antalet besökare som söker efter det som hemsidan förmedlar.</p>
    <p class="text-sm text-left pb-5">Ungefär 70% av de som besöker din hemsida kommer från just det organiska resultatet som visas upp, vilket visar på hur viktigt det är att hamna så högt upp som möjligt på sökmotorer som Google, Bing & Yahoo.</p>
    <p class="text-sm text-left pb-5">On-page SEO har en mycket stor påverkan på huruvida din hemsida syns online eller inte. On-page är den synliga delen av SEO-arbetet, och inkluderar allt från att åtgärda tekniska aspekter på din hemsida till informationen som finns på din hemsida (text, bilder, videos, m.m.), samt hur denna information är strukturerad. Några faktorer som är viktiga att sökoptimera är hemsidans laddningshastighet, sidornas titlar, sidornas rubriker, sidornas bilder, sidornas URL och copy.</p>

    <h1 class="text-center pt-5 text-lg pb-5 uppercase">ON-PAGE SEO BESTÅR AV MÅNGA DELAR</h1>
      <p class='text-sm pb-5 text-left'>Det är många delar att tänka på när man optimerar sin hemsida on-page. Allt från titlar och rubriker till säkerhet och hastighet avgör tillsammans hur relevant du är i sökmotorernas ögon. Det är också bra att veta skillnaden mellan innehållet på sidan och informationen som syns på andra ställen.</p>
      <p class='text-sm pb-5 text-left'>När man pratar om on-page SEO brukar man framförallt prata om:</p>

      <ul class="list-disc heading-container">
        <li class=" pt-5 uppercase text-left text-rose-300 text-xl">
        Metadata
        </li>
        <p class='text-left pt-2 text-sm'>
        Beskriver innehållet på hemsidor för sökmotorer och förklarar hur detta innehåll ska tolkas.
        </p>

        <li class=" pt-5 uppercase text-left text-rose-300 text-xl">
        Content
        </li>
        <p class='text-left pt-2 text-sm'>
        Innehåll i form av texter, bilder, ljud, videos och annat som finns på din hemsida, och som förklarar vad sidan handlar om.
        </p>

        <li class=" pt-5 uppercase text-left text-rose-300 text-xl">
        Interna länkar
        </li>
        <p class='text-left pt-2 text-sm'>
        Länkar som leder besökare och sökmotorer vidare till andra sidor på samma domän.
        </p>
      </ul>
    </div>


    <section class="text-black bg-white heading-container pt-20">
    <p class="text-sm">Dessa delar, tillsammans med faktorer som hemsidans auktoritet, säkerhet och laddningshastighet kommer att förbättra din webbplats ranking i sökresultaten och därmed göra den mer synlig för potentiella besökare eller kunder som söker efter det som din hemsida erbjuder. Hemsidan skall tala till besökaren och dess behov, den ska tilltala rent estetiskt och vara lättnavigerad och hålla en look som speglar branschen. Tjänster och produkter är huvudsaken i hemsidans marknadsföring och när man bygger en sajt skall resultatet vara komplett ur flera perspektiv: seo, design och marknadsföring. Allt detta skall presentera ett samlat innehåll så att den blir ett alternativ vid search på Google där alla söker.</p>
    <h1 class="text-lg pt-10 pb-5 uppercase text-center">Hemsidans Laddningshastighet</h1>
    <p class="text-sm pb-5">En av faktorerna som påverkar Googles bedömning av din hemsida är hur snabbt webbläsaren läser in din hemsida. Google undviker att visa upp hemsidor som laddar långsamt och därav är det till stor nackdel för dig om din hemsida har dålig laddningshastighet.</p>
    <p class="text-sm pb-5">Google har skapat ett verktyg som du kan ta hjälp av för att ta reda på din hemsidas laddningshastighet. Verktyget visar hur snabbt hemsidan laddar, både på mobilen och datorn. Om verktyget skulle visa lägre än 50 poäng bör du se över vad du kan göra för att förbättra laddningshastigheten.</p>
    <p class="text-sm pb-5">Ju snabbare din hemsida laddar desto mer förbättrar du användarvänligheten för besökare, samtidigt som sökmotorerna ser sidan som bättre optimerad. Det är ett enkelt sätt för att förbättra sökresultaten och i sin tur för att få fler besökare. Det lättaste sättet att öka hastigheten är att hålla nere storleken på bilderna du använder dig av på sidan.</p>
    <p class="text-sm pb-5">Har du inte tillgång till program som ger dig möjlighet att komprimera dina bilder så finns det mängder av gratis verktyg på nätet som du kan använda dig av.</p>
    <p class="text-sm pb-5">Ett tips är att samtidigt som du komprimerar dina bilder även passar på att direkt sparar bilderna med namn som förbättrar din on-page SEO, vilket för oss till nästa steg i optimeringen.</p>
    </section>
    
    <section class="text-black bg-white heading-container pt-5">
    <h1 class="text-lg pt-10 pb-5 uppercase text-center">Hemsidands Titlar</h1>
    <p class="text-sm pb-5">En av de viktigaste faktorerna inom grundläggande SEO är en hemsidas titel. Detta beror på att sidans titel visar Google vad sidan handlar om, därför bör du också optimera alla titlar på din hemsida.</p>
    <img class="mx-auto pt-5 drop-shadow-lg pb-5" src={img} alt="" />
    
    <p class="text-sm pb-5">Sidans titel, eller page title, är den titel som visas upp som en en länk i det organiska sökresultatet på Google. Förutom att den syns högst upp i webbläsarens fönster efter att man klickat sig in på den, finns denna titel inte synlig på hemsidan, utan är specifikt utformad för att locka till sig besökare.</p>
    <p class="text-sm pb-5">Med tanke på att det är denna titel som ska locka till sig “gratis” besökare är det en av de viktigaste texterna som behöver anges. Den har stor inverkan på din hemsidas ranking och får inte vara längre än 65 tecken för att anses korrekt skriven.</p>
    <p class="text-sm pb-5">För bra resultat ska en page title innehålla viktiga sökord samtidigt som den lockar besökare till att klicka på den. Sökmotorer granskar titeln för att få reda på vad sidan handlar om vilket gör det viktigt att hålla denna relevant, att ha med viktiga sökord samtidigt som du håller den korta texten naturlig och användarvänlig.</p>
    
    <h1 class="text-lg pt-10 pb-5 uppercase text-center">Meta-Beskrivningar</h1>
    <p class="text-sm pb-5">Genom att själv ange en säljande och beskrivande text ökar du chanserna till att sticka ut och synas bättre för potentiella kunder som letar efter vad du erbjuder. Anger du ingen beskrivning väljer Google själva vilken text som visas upp för sidan, vilket många gånger innebär att du går miste om dessa potentiella kunder.</p>
    <img class="mx-auto pt-5 drop-shadow-lg pb-5" src={img2} alt="" />

    <p class="text-sm pb-5">För att ge sidan en bra meta-description bör du alltid ha med sökordet som du vill synas på, och gärna så tidigt i texten som möjligt. Ju bättre information du har med i beskrivningen desto fler klick får du från besökare som anser din sida vara mer relevant än konkurrenternas.</p>
    <p class="text-sm pb-5">Om beskrivningen skulle vara för lång väljer Google att klippa av den med 3 punkter, vilket gör att din väl utformade text inte visas upp i sin helhet. För att undvika detta ska du försöka hålla den till högst 158 tecken. Testa dig fram tills du har en meta-beskrivning som visas upp så som du vill att den ska visas samtidigt som den både ger en klar och tydlig bild om vad du erbjuder. Se till att texten är säljande och relevant.</p>
    
    <h1 class="text-lg pt-10 pb-5 uppercase text-center">Hemsidands Texter</h1>
    <p class="text-sm pb-5">Google finner det viktigt att texten på din hemsida är strukturerad och av hög kvalitet. Google kollar även noggrant på vad din text handlar om. Att undvika konstiga meningar och stavfel är till din och din hemsidas fördel.</p>


    <h1 class="text-lg pt-10 pb-5 uppercase text-center">OPTIMERING AV HEMSIDANS BILDER</h1>
    <p class="text-sm pb-5">En annan viktig och grundläggande faktor inom SEO är en hemsidas bilder. Google kan inte ”se” vad bilder föreställer, istället läser sökmotorn kod, därför är det av stor vikt att bildfilernas har rätt innehåll i form av information som är optimerad.</p>
    <p class="text-sm pb-5">Eftersom sökmotorer inte kan se bilder är det viktigt att med rätt information beskriva bilderna för att de ska kunna läsa av dem. Detta gör du dels genom att döpa bilderna på ett beskrivande sätt, gärna med sökordet inkluderat, men också genom att ange en relevant alt-text. Denna syns text syns endast i källkoden för hemsidan vilket gör att den många gånger glöms bort.</p>
    </section>
    
    <section class="bg-white heading-container">
    <ul class="list-disc heading-container">
        <li class=" pt-5 uppercase text-left text-rose-300 text-xl">
        Namnge bilder på rätt sätt
        </li>
        <p class='text-left pt-2 text-sm'>När du namnger bilder på rätt sätt <b> visar du Google vad bilderna handlar om </b>  vilket i sin tur hjälper till att göra sidan bättre anpassad för sökord du vill synas på. </p>
        <p class='text-left pt-2 text-sm'>Då du namnger dina bilder bör du:</p>
        <ol class='text-sm pt-5 list-decimal space-y-1 heading-container'>
          <li class=''>
          Vara beskrivande
          </li>
          <li>
          Vara kortfattad
          </li>
          <li>
            Använda dig av sökord
          </li>
          <li>
            Använda streck mellan ord
          </li>
        </ol>
        <p class="text-left pt-2 text-sm">Vill du exempelvis lägga upp en bild på din svarta katt bör du därmed döpa den till svart-katt.jpg. Detta gör det enkelt för Google att bilda sig en uppfattning av vad bilden föreställer.</p>

        <li class=" pt-5 uppercase text-left text-rose-300 text-xl">
        Använd beskrivande alt-text
        </li>
        <p class='text-left pt-2 text-sm'><strong>Alt-texter ger ytterligare information om vad bilder föreställer, </strong> vilket i sin tur låter dig lägga till relevanta sökord även här. Alt-taggar som innehåller viktiga sökord 
        <strong> ökar dina chanser att ranka högre </strong>  i exempelvis bildsökningar.
        </p>
        <p class='text-left pt-2 text-sm'>Då du anger en alt-text bör du:</p>
        <ol class='text-sm pt-5 list-decimal space-y-1 heading-container'>
          <li>
            Vara beskrivande
          </li>
          <li>
            Vara kortfattad
          </li>
          <li>
            Använda sökord
          </li>
          <li>
            Skriva naturligt
          </li>
        </ol>
        <p class='text-left pt-2 text-sm'>
        Enligt Google själva bör du fokusera på att <strong> ange en användbar, informationsrik text som använder sökord på ett naturligt sätt </strong>
        och som är i sammanhang med innehållet på sidan.
        </p>
    </ul>
    </section>

    <section class="bg-white heading-container">
    <p class='text-sm pb-5'>Ett exempel på hur du korrekt anger information för en bild är:</p>
    <img class="mx-auto pt-5 drop-shadow-lg pb-5" src={img3} alt="" /> 
    
    <h1 class="text-lg pt-10 pb-5 uppercase text-center">HEMSIDANS URL PÅVERKAR DIN SÖKMOTOROPTIMERING</h1>
    <p class='text-sm pb-5'>Utöver bra innehåll som är relevant på alla målsidor så är även hemsidans URL/webbadress viktig inom SEO. Hemsidans URL:er är det första som möter sökmotorer och de förklarar vad en hemsida handlar om, därav är det till fördel att göra den tydlig och se till att den beskriver hemsidans innehåll. Varje målsida på en hemsida har en unik URL.</p>
    <p class='text-sm pb-5'>Sökmotoroptimering (på engelska Search Engine Optimization) handlar om att man ska kunna hitta hemsidan och då behövs relevant innehåll. Hemsidans URL:er (målsidor) skall vara relevanta och innehålla sökorden kopplade till seo. URL är alltså det som står i webbläsarens adressfält, exempelvis https://effektify.com/seo-sokmotoroptimering/, där man tydligt ser vad just den målsidan handlar, vilket i detta fall är SEO och sökmotoroptimering.</p>
    </section>

    </>
  )
}
