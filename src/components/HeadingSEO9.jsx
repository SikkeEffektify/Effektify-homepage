import React from 'react'
import './Heading.css'
import img from '../assets/how-google-search.webp'
import ContactForm from './ContactForm'

export const HeadingSEO9 = () => {
  return (
    <>
    <div class='pt-20 heading-container text-center text-black bg-white'>
    <h1 class="text-3xl uppercase pb-5">Vad är SEO?</h1>
    <p class="text-sm text-left pb-5">Inom SEO behöver man kreativitet och teknisk förståelse för att kunna förbättra företags positioner på Google och andra sökmotorer, samt för att kunna driva trafik till hemsidan. Det finns många olika faktorer som påverkar vilken placering en webbplats hamnar på. Det kan bero på allt från innehållet på hemsidan, det vill säga copyn, till antalet andra webbplatser som länkar till din webbplats.</p>
    <p class="text-sm text-left pb-5">Något som är bra att ha i åtanke är att sökmotoroptimering är ett arbete som bör göras kontinuerligt om man vill synas på första sidan på sökmotorerna samt att fortsätta göra det när man väl nått dit. Det är av stor vikt att göra sökmotoroptimering till en del av ens verksamhet och på samma sätt som ens verksamhet avstannar om man inte kontinuerligt driver den framåt, så gör även SEO det.</p>
    </div>
    
    <section class="bg-white">
       <div class="pt-5 cards-container p-6">
     <div class="custom-back max-w-sm p-6 pb-10  shadow headingSEO-card pt-10">
        <h1 class="text-center text-xl pt-5 pb-5 text-white">SEO hjälper dig att ranka högre på Google</h1>
        <p class="text-sm text-white pb-5">Googles sökmotor använder sig av en stor mängd faktorer för att avgöra vilka hemsidor som är mest relevanta att visa upp och i sökresultat. En del faktorer spelar större roll än andra och vad som anses vara viktigast för att ranka högt idag kan ha mindre betydelse om en månad. Det är därför oerhört viktigt att hålla sig uppdaterad när det kommer till vad Google och andra sökmotorer anser vara relevant för att kunna optimera en hemsida på bästa sätt.</p>
        <p class="text-sm text-white pb-5">Om du är intresserad av att öka trafiken till din hemsida och växa din kundbas är det viktigt att din hemsida har rätt möjligheter för att ranka högt på Google när potentiella kunder söker efter det du och ditt företag erbjuder.</p>
        <h1 class="text-center text-lg pb-10 text-white">Sökmotoroptimering är nyckeln till att lyckas med detta.</h1>
    </div>
    </div>
    </section>

    <section class="bg-white heading-container pb-20">
      <h1 class="text-center pt-5 text-xl pb-5">Vad betyder egentligen SEO?</h1>
      <p class='text-sm pb-5'>SEO är en förkortning för det engelska uttrycket Search Engine Optimization, vilket översatt till svenska är sökmotoroptimering. SEO och sökmotoroptimering är med andra ord samma sak.</p>

      <h1 class="text-center text-xl pb-5 pt-5">Varför bör jag synas på Google?</h1>
      <p class='text-sm pb-5'>Google är den största sökmotorn i Sverige och enligt flera undersökningar har Google en marknadsandel på ca 95 %. Det betyder att det är viktigt att din hemsida syns på Google om du vill kunna nå så många kunder som möjligt.</p>

      <h1 class="text-center text-xl pb-5 pt-5">Öka trafiken till din hemsida</h1>
      <p class='text-sm pb-5'>Att ha bra synlighet på Google ger ditt företag större möjlighet att nå ut till potentiella kunder som söker efter de produkter som just du erbjuder. Sökmotoroptimering eller SEO (från engelskans Search Engine Optimization) är med andra ord livsviktigt för att ditt företag ska synas online, få fler besökare och göra fler affärer.</p>
    
      <h1 class="text-center text-xl pb-5 pt-5">Vikten av bra SEO</h1>
      <p class='text-sm pb-5'>Eftersom vi använder internet allt mer för att hitta företag som säljer det vi vill köpa är det av stor betydelse att synas där besökarna finns. Lika viktigt som det en gång i tiden var att synas i traditionell media som lokalpressen eller telefonkatalogen är det idag att synas på nätet. Detta gör du med hjälp av SEO.</p>
    </section>

    <section class="bg-white heading-container pb-10">
      <h1 class="text-3xl text-center pb-10">Vad gör SEO på hemsidan så viktig?</h1>
      <p class="text-sm pb-5">Google tittar på sidans innehåll för att avgöra om det är relevant för sökningen som görs. En del av den här processen är att man söker efter viktiga sökord. Om dessa sökord hittas på din sida, i rubriker eller i brödtext, anses informationen vara mer relevant för sökningen i fråga.</p>
      <img class="mx-auto pt-5 drop-shadow-lg" src={img} alt="" />

      <p class="text-sm pt-10 pb-5">Vad som gör on-page SEO så viktigt är att det hjälper sökmotorerna att förstå din webbplats och innehållet som finns där, för att identifiera om den är relevant för sökningen som görs. Vad Google gör är att helt enkelt förstå vad användare faktiskt letar efter när de gör sin sökning, även kallat search intent, och att därefter leverera ett sökresultat som uppfyller avsikten bakom sökningen.</p>
      <p class="text-sm pb-5">Att hålla sig uppdaterad på vad kraven är för att Google ska anse dig vara relevant är oerhört viktigt, dels för att du ska fortsätta hålla dig synlig för användare, men även för att detta är den del av optimeringen som du faktiskt kan kontrollera, till skillnad från den del som styrs av faktorer utanför sidan.</p>

      <p class="text-base pb-5">Läs mer om on-page SEO <a class="text-rose-300" href="/on-page-seo">här</a></p>
    </section>

    <section class="bg-white heading-container pb-10">
    <h1 class="text-xl text-center pb-5">KORTA OCH RELEVANTA WEBBADRESSER</h1>
    <p class='text-sm pb-5'>Webbadressen, eller URL:en, en den exakta länken till sidan. För att hålla all synlig information så relevant som möjligt är det bra att även här använda sig av sökord för att sökmotorerna ska få så bra bild av innehållet på sidan som möjligt.</p>
    <p class='text-sm pb-5'>Tydliga och beskrivande URL:er hjälper användare att förstå vad sidan handlar om innan de klickat sig in på den. Oavsett om sidorna egentligen skulle handla om samma saker, framgår det av den första webbadressen att det är just vad sökaren är ute efter. Detta ger ett klart bättre resultat när det kommer till att öka trafiken till din sida.</p>
    <p class='text-sm pb-5'>I de flesta fall kan du enkelt ändra URL-sluggen, den del efter domänen och eventuella undersidor, vilket är det enklaste sättet att anpassa webbadressen för det aktuella sökordet du vill synas på. Precis som med meta-beskrivning är det bäst att testa sig fram för att nå ett bra resultat.</p>
    
    <h1 class="text-xl text-center pt-20 pb-10">Tydliga och beskrivande URL:er hjälper besökare och sökmotorer att enklare förstå vad sidorna handlar om.</h1>
   </section>


    </>
  )
}
