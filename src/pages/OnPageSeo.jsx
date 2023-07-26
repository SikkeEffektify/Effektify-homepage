import React from 'react'
import Google from '../assets/google-fung.webp'
import Sokmotoroptimering from '../assets/SEO-sokmotoroptimering.webp'
import Meta from '../assets/Meta-beskrivning-2.webp'
import ContactForm from '../components/ContactForm'
import Namnge from '../assets/Namnge-bilder-ratt-satt.webp'
import ssl from '../assets/Effektify-ssl.webp'
import gif from '../assets/PONG_Light_version2.gif'
import { Heading } from '../components/Heading'


export default function OnPageSeo() {
  return (
   <>

   <Heading
   titlePosition={"md:text-center"}
   bg={"bg-white"}
   textColor={"text-black"}
   title={"On-page SEO"}
   descCustomHtml={`
   <p class="text-left text-sm pb-5 md:pt-10">
    On-page SEO innebär optimering som man gör på hemsidan för att den ska ranka högre upp på sökmotorer för att i sin tur öka trafiken, dvs. antalet besökare som söker efter det som hemsidan förmedlar.
    </p>
    <p class="text-left text-sm pb-10">
    Ungefär 70% av de som besöker din hemsida kommer från just det organiska resultatet som visas upp, vilket visar på hur viktigt det är att hamna så högt upp som möjligt på sökmotorer som Google, Bing & Yahoo.   
    </p>

    <h1 class="text-right text-2xl pb-5 ">
    On-page SEO består
    <br />
    av många delar
    </h1>

    <p class="text-right text-sm pb-5">
    Det är många delar att tänka på när man optimerar sin hemsida on-page. Allt från titlar och rubriker till säkerhet och hastighet avgör tillsammans hur relevant du är i sökmotorernas ögon. Det är också bra att veta skillnaden mellan innehållet på sidan och informationen som syns på andra ställen.   
    </p>
    <p class="text-right text-sm pb-20">
    När man pratar om on-page
    <a href="/seo-sokmotoroptimering" class='text-rose-300'> SEO </a>
    brukar 
    man framförallt prata om:
    </p>


    <h1 class="text-left text-2xl md:text-center pb-5 ">
    Metadata
    </h1>
    <p class="text-left text-sm md:text-center pb-10">
    Beskriver innehållet på hemsidor för sökmotorer och förklarar hur detta innehåll ska tolkas.
    </p>


    <h1 class="text-left text-2xl md:text-center pb-5 ">
    Content
    </h1>
    <p class="text-left text-sm md:text-center pb-10">
    Innehåll i form av texter, bilder, ljud, videos och annat som finns på din hemsida.
    </p>


    <h1 class="text-left text-2xl md:text-center pb-5 ">
    Interna länkar
    </h1>
    <p class="text-left text-sm md:text-center pb-20">
    Länkar som leder besökare och sökmotorer vidare till andras sidor på samma domän.
    </p>

    <p class="text-left text-base pb-10" md:pb-40 md:text-center>
    Dessa delar, tillsammans med faktorer som hemsidans auktoritet, säkerhet och laddningshastighet kommer att förbättra din webbplats ranking i sökresultaten och därmed göra den mer synlig för potentiella besökare eller kunder som söker efter det som din hemsida erbjuder.
    </p>
   `}
   />


   <div class="whitedivider5 pb-20">
    </div>


    <Heading 
    title={"Vad gör SEO på sidan så viktig?"}
    titlePosition={"md:text-center"}
    textColor={"text-white"}
    bg={"text-white"}
    descCustomHtml={`
    <p class="text-left text-sm md:pt-10   pb-5">Google tittar på sidans innehåll för att avgöra om det är relevant för sökningen som görs. En del av den här processen är att leta efter viktiga sökord. Om dessa sökord hittas på din sida, i rubriker eller i brödtext, anses informationen vara mer relevant för sökningen i fråga."}</p>
    <p class="text-left text-sm pb-5">
    Vad som gör on-page SEO så viktigt är att det hjälper sökmotorerna att förstå din webbplats och innehållet som finns där, för att identifiera om den är relevant för sökningen som görs. Vad Google gör är att helt enkelt förstå vad användare faktiskt letar efter när de gör sin sökning, även kallat search intent, och att därefter leverera ett sökresultat som uppfyller avsikten bakom sökningen.    
    </p>
    <p class="text-left text-sm pb-10 md:pb-20">
    Att hålla sig uppdaterad på vad kraven är för att Google ska anse dig vara relevant är oerhört viktigt, dels för att du ska fortsätta hålla dig synlig för användare, men även för att detta är den del av optimeringen som du faktiskt kan kontrollera, till skillnad från den del som styrs av faktorer utanför sidan.  
    </p>
    `}
    />

    <section>
    <div class='heading-container text-white'>
    <img class="mx-auto pt-5 md:w-4/6 drop-shadow-lg pb-10" src={Google} alt="" />
    </div>
    </section>

    <Heading 
    bg={"text-white"}
    textColor={"text-white"}
    titlePosition={"md:text-center"}
    title={"Korta och relevanta adresser"}
    descCustomHtml={`
    
    <p class="text-left text-sm pb-5">
    Webbadressen, eller URL:en, en den exakta länken till sidan. För att hålla all synlig information så relevant som möjligt är det bra att även här använda sig av sökord för att sökmotorerna ska få så bra bild av innehållet på sidan som möjligt.
    </p>
    <p class="text-left text-sm pb-5">
    Tydliga och beskrivande URL:er hjälper användare att förstå vad sidan handlar om innan de klickat sig in på den. Oavsett om sidorna egentligen skulle handla om samma saker, framgår det av den första webbadressen att det är just vad sökaren är ute efter. Detta ger ett klart bättre resultat när det kommer till att öka trafiken till din sida.
    </p>
    <p class="text-left text-sm pb-5">
    I de flesta fall kan du enkelt ändra URL-sluggen, den del efter domänen och eventuella undersidor, vilket är det enklaste sättet att anpassa webbadressen för det aktuella sökordet du vill synas på.
    </p>
    <p class="text-left text-sm pb-20">
    Precis som med meta-beskrivning är det bäst att testa sig fram för att nå ett bra resultat.
    </p>

    <h1 class="text-center text-lg pb-5 ">
    Tydliga och beskrivande URL:er hjälper besökare och
    <br />
    sökmotorer att enklare förstå vad sidan handlar om
    </h1>
    `}
    />

    <div class="blacktopdivider fb-custom-color pb-20">
    </div>
   
    
    <Heading 
    bg={"fb-custom-color text-white"}
    textColor={"text-white"}
    titlePosition={"md:text-center"}
    title={"Relevant Content"}
    descCustomHtml={`
    <p class="text-left text-sm pb-5">
    Att fylla din hemsida med lättlästa och användarvänliga texter som innehåller sökord som du vill ranka på, hjälper Google och andra sökmotorer att anse sidan vara mer relevant. Då Google algoritmer läser igenom informationen hos en webbsida tittar den på textinnehållet för att ta reda på vad den handlar om, för att sedan matcha den till sökningarna som görs på ämnet i fråga. Skulle texten på sidan matcha sökningen som görs, anses sidan vara relevant. Ju fler kriterier som uppfylls på din hemsida, desto mer relevant är den och därmed rankar den högre.
    </p>

    <p class="text-left text-sm pb-10">
    Vad som avgör hur bra innehållet på din hemsida står sig gentemot konkurrenters sidor beror på en rad element som alla väger olika tungt i Googles ögon. All text anses inte vara lika betydelsefull när det kommer till att öka din relevans, vilket gör det viktigt att veta vilka element som betyder mest.
    </p>

    <h1 class="text-left text-4xl pb-5 md:text-center ">
    Naturligt & användarvänligt innehåll   
    </h1>
    <p class="text-left text-sm pb-5">
    Element som huvudrubrik (H1), underrubriker (H2, H3 osv.), listor och fetstilta ord påverkar alla hur hög relevans din sida har och genom att använda sig av sökord på dessa viktiga positioner, stärker du din webbsidas relevans betydligt.   
    </p>
    <p class="text-left text-sm pb-5">
    Används sökord som du vill ranka på endast ett fåtal gånger på hemsidan anses det inte troligt att den handlar om det som sökningen avser. Ju mer text som finns, desto fler gånger behöver söktermen finnas med för att texten ska vara relevant. Om du däremot använder söktermer onaturligt mycket ser Google det som”keyword spamming” vilket kan göra att sidans ranking istället försämras.    
    </p>
    <p class="text-left text-sm pb-5">
    Genom att använda sig av innehåll som är naturligt och användarvänligt håller du både besökare och sökmotorer nöjda, vilket oftast lönar sig i det långa loppet.   
    </p>

    <p class="text-center text-2xl pt-10  pb-20">
    <a href="/webbcopy">Läs mer om content och webbcopy <em> här </em></a>
    </p>


    `} 
    />


    <section>
    <div class='heading-container fb-custom-color text-white'>
    <section class="cards-seo3">
       <div class="pt-5 cards-container2 pb-10">
     <div class="custom-back max-md:max-w-sm pb-10 border border-black shado mx-auto pt-10">
        <h1 class="pt-40 cards2-title text-center mb-2 font-semibold tracking-tight uppercase text-rose-300"><span class="text-white"></span></h1>
        <h2 class="pb-20 text-center cards2-under-title text-white"><span class="pl-4"></span></h2>
    </div>
    </div>
    </section>

    </div>
    </section>

    <Heading 
    textColor={"text-black"}
    bg={"bg-white"}
    titlePosition={"md:text-center"}
    title={"Titlar"}
    descCustomHtml={` <p class="text-left text-sm pb-5">
    Sidans titel, eller page title, är den titel som visas upp som en en länk i det organiska sökresultatet på Google. Förutom att den syns högst upp i webbläsarens fönster efter att man klickat sig in på den, finns denna titel inte synlig på hemsidan, utan är specifikt utformad för att locka till sig besökare.   
    </p>
  
    <p class="text-left text-sm pb-5">
    Med tanke på att det är denna titel som ska locka till sig “gratis” besökare är det en av de viktigaste texterna som behöver anges. Den har stor inverkan på din hemsidas ranking och får inte vara längre än 65 tecken för att anses korrekt skriven.    
    </p>
    <p class="text-left text-sm pb-5">
    För bra resultat ska en sidtitel innehålla viktiga sökord samtidigt som den lockar besökare till att klicka på den. Sökmotorer granskar titeln för att få reda på vad sidan handlar om vilket gör det viktigt att hålla denna relevant, att ha med viktiga sökord samtidigt som du håller den korta texten naturlig och användarvänlig.    
    </p>

    <hr class="my-12 h-0.5 border-t-0 bg-black opacity-100 dark:opacity-50" />
    
    <p class="text-center text-xl pt-5 pb-20">
    Tydliga och beskrivande URL:er hjälper besökare och
    <br />
    sökmotorer att enklare förstå vad sidan handlar om
    </p>

    <h1 class="text-left text-4xl pt-5 md:text-center pb-10 ">
    Meta beskrivning
    </h1>
    <p class="text-left text-sm pb-5">
    När du skapar ett Ad Set kan du välja vem du vill nå, samt när och var. När du specificerar målgruppen kan du välja faktorer så som kön, ålder och geografi, men även faktorer så som målgruppens intressen och livssituation för att underlätta för Facebook att identifiera målgruppen genom insamlad data.   
    </p>
    <p class="text-left text-sm pb-5">
    Genom att själv ange en säljande och beskrivande text ökar du chanserna till att sticka ut och synas bättre för potentiella kunder som letar efter vad du erbjuder. Anger du ingen beskrivning väljer Google själva vilken text som visas upp för sidan, vilket många gånger innebär att du går miste om dessa potentiella kunder.
    </p>
    <p class="text-left text-sm pb-5">
    För att ge sidan en bra meta-description bör du alltid ha med sökordet som du vill synas på, och gärna så tidigt i texten som möjligt. Ju bättre information du har med i beskrivningen desto fler klick får du från besökare som anser din sida vara mer relevant än konkurrenternas.    
    </p>
    <p class="text-left text-sm pb-10">
    Om beskrivningen skulle vara för lång väljer Google att klippa av den med 3 punkter, vilket gör att din väl utformade text inte visas upp i sin helhet. För att undvika detta ska du försöka hålla den till högst 158 tecken. Testa dig fram tills du har en meta-beskrivning som visas upp så som du vill att den ska visas samtidigt som den både ger en klar och tydlig bild om vad du erbjuder. Se till att texten är säljande och relevant.    
    </p>
    `}
    />


    <section>
    <div class='pt-20 heading-container bg-white text-black'>
      <section class="cards-seo">
       <div class="pt-5 cards-container2 pb-10">
     <div class="custom-back max-md:max-w-sm pb-10 border border-black shado mx-auto pt-10">
        <h1 class="pt-40 cards2-title text-center mb-2 font-semibold tracking-tight uppercase text-rose-300"><span class="text-white"></span></h1>
        <h2 class="pb-20 text-center cards2-under-title text-white"><span class="pl-4"></span></h2>
    </div>
    </div>
    </section>

    
    <img class="mx-auto pt-5 md:w-3/4 drop-shadow-lg pb-10" src={Sokmotoroptimering} alt="" />

    <img class="mx-auto pt-5 md:w-3/4 drop-shadow-lg pb-10" src={Meta} alt="" />
    </div>
    <div class="whitedivider5  pb-20">
      </div>
    </section>


    <Heading 
    bg={"text-white"}
    textColor={"text-white"}
    titlePosition={"md:text-center"}
    title={"Hemsidans Hemlighet"}
    descCustomHtml={`
    <p class="text-left text-sm pb-5">
    Ju snabbare din hemsida laddar desto mer förbättrar du användarvänligheten för besökare samtidigt som sökmotorerna ser sidan som bättre optimerad. Det är ett enkelt sätt att få fler besökare och ger dig en större chans att behålla besökare som redan hittat dit. Det lättaste sättet att öka hastigheten är att hålla nere storleken på bilderna du använder dig av på sidan.   
    </p>
    <p class="text-left text-sm pb-5">
    Har du inte tillgång till program som ger dig möjlighet att komprimera dina bilder så finns det mängder av gratis verktyg på nätet som du kan använda dig av.  
    </p>
    <p class="text-left text-sm pb-10">
    Ett tips är att samtidigt som du komprimerar dina bilder även passar på att direkt sparar bilderna med namn som förbättrar din on-page SEO, vilket för oss till nästa steg i optimeringen.   
    </p>
    `}
    />


    <section>
    <div class='heading-container  text-white'>
      <section class="cards-seo4">
       <div class="pt-5 cards-container2 pb-10">
     <div class="custom-back max-md:max-w-sm pb-10 border border-black shado mx-auto pt-10">
        <h1 class="pt-40 cards2-title text-center mb-2 font-semibold tracking-tight uppercase text-rose-300"><span class="text-white"></span></h1>
        <h2 class="pb-20 text-center cards2-under-title text-white"><span class="pl-4"></span></h2>
    </div>
    </div>
    </section>
    </div>
    <Heading 
    titlePosition={"md:text-center"}
    title={"Bild optimering"}
    bg={"text-white"}
    textColor={"text-white"}
    descCustomHtml={`
    
    <p class="text-left text-sm pb-5">
    Eftersom sökmotorer inte kan se bilder är det viktigt att med rätt information beskriva bilderna för att de ska kunna läsa av dem. Detta gör du dels genom att döpa bilderna på ett beskrivande sätt, gärna med sökordet inkluderat, men också genom att ange en relevant alt-text. Denna syns text syns endast i källkoden för hemsidan vilket gör att den många gånger glöms bort.   
    </p>

    <p class="text-left text-base pb-5">
    Namnge bilder på rätt sätt
    </p>


    <p class="text-left text-sm pb-5">
    När du namnger bilder på rätt sätt visar du Google vad bilderna handlar om vilket i sin tur hjälper till att göra sidan bättre anpassad för sökord du vill synas på.
    </p>

    <p class="text-left text-sm pb-10">
    Då du namnger dina bilder bör du:
    <ul class="list-disc text-base text-left">
      <li> Vara beskrivande</li> 
      <li> Vara Kortfattad </li>
      <li> Använda dig av sökord </li>
      <li> Använda streck mellan ord </li>
    </ul>   
    </p>
    <p class="text-right text-base pb-10 md:pt-10">
    Vill du exempelvis lägga upp en bild på din svarta katt bör du därmed döpa den till svart-katt.jpg. Detta gör det enkelt för Google att bilda sig en uppfattning av vad bilden föreställer.
    </p>

    <h1 class="text-left text-xl pt-5 pb-10 ">
    Använd beskrivande alt-text    
    </h1>

    <p class="text-left text-base pb-5">
    Alt-texter ger ytterligare information om vad bilder föreställer, vilket i sin tur låter dig lägga till relevanta sökord även här. Alt-taggar som innehåller viktiga sökord ökar dina chanser att ranka högre i exempelvis bildsökningar.
    </p>

    <p class="text-left text-base pb-5">
        Då du angerer en alt-text bör du:

        <ul class="list-disc text-lg text-left pt-5">
            <li> Vara Beskrivande </li>
            <li> Vara kortfattad </li>
            <li> Använda sökord </li>
            <li> Skriva naturligt </li>
        </ul>
    </p>

    <p class="text-left text-base pb-5 md:pt-10">
    Enligt Google själva bör du fokusera på att ange en användbar, informationsrik text som använder sökord på ett naturligt sätt och som är i sammanhang med innehållet på sidan.
    </p>
    `}
    />




    <div className='heading-container'>
    <img class="mx-auto pt-5 md:w-3/4 drop-shadow-lg pb-10" src={Namnge} alt="" />
    </div>
   


    </section>

    <div class="blacktopdivider fb-custom-color pb-20">
    </div>

    <Heading 
    bg={"fb-custom-color text-white"}
    textColor={"text-white"}
    title={"Hemsidans säkerhet"}
    titlePosition={"md:text-center"}
    descCustomHtml={`
    <p class="text-left text-sm pb-5">
    Sökmotorer föredrar hemsidor som är säkra och undviker gärna att visa upp sidor som inte anses vara det. Genom att installera ett så kallat SSL-certifikat skyddas besökarnas kommunikation samtidigt som säkerheten hjälper din on-page SEO eftersom den då rankas den högre i den organiska sökningen.
    </p>
    <p class="text-left text-sm pb-5">
    Genom att använda sig av en säker hemsida visar du också dina besökare att de känna sig trygga när de exempelvis handlar eller fyller i formulär på din hemsida. Med andra ord ger en trygg webbplats fler kunder.   
    </p>
    <p class="text-left text-sm pb-10">
    Ta reda på om en webbplats är säker genom att kontrollera säkerhetsinformation om webbplatsen. Chrome varnar dig om webbplatsen eller anslutningen till den inte är säker eller privat.
    </p>

    <h1 class="text-left text-2xl pb-5 ">
    Hur ser du att en webbplats är säker?
    </h1>

    <ol class="list-decimal text-left">
    <li>
    Öppna en sida i Chrome 
    </li>
    <li>
    Titta på symbolen till vänster om webbadressen 
    </li>
    </ol>


    <p class="text-center text-base pt-5 pb-10">
    Om du vill visa information om webbplatsen och vilka behörigheter den har klickar du på ikonen. Då visas en sammanfattning av hur privat anslutningen är enligt Chrome.
    </p>
    `}
    />


    <section>
    <div class='heading-container fb-custom-color text-white'>
   

    <img class="mx-auto drop-shadow-lg w-3/4" src={ssl} alt="" />
    
    </div>
    </section>

    <Heading
    bg={"fb-custom-color text-white"}
    textColor={"text-white"}
    titlePosition={"md:text-center"}
    title={"Interna länkar"}
    descCustomHtml={`
    <p class="text-left text-sm pb-5">
    En intern länk är när en sida hänvisar till en annan sida på samma hemsida. Som exempel länkar vi här till vår sida för 
    <a class="text-rose-300" href="/google-ads"> Google Ads </a> 
    härifrån, vilket fungerar som en intern länk. Då många sidor pekar till samma sida blir denna sida mer relevant vilket gör att den rankar bättre på Google.  
    </p>
    <p class="text-left text-sm pb-5">
    Genom att använda sig av relevanta sökord i länktexten för den interna länken ökar också relevansen för målsidan som länken pekar till. Detta gör att du med hjälp av viktiga sökord i länktexten kan tala om för Google att målsidan den pekar till är relevant för de sökningar som görs på sökordet.  
    </p>
    <p class="text-left text-sm pb-5">
    Tillsammans med meta-data, content & rubriker på målsidan hjälper varje intern länk till att öka relevansen för målsidan ytterligare, och får denna att ranka högre på sökmotorerna.   
    </p>

    <p class="text-right text-sm pb-10">
    Och eftersom du till skillnad från externa länkar kan kontrollera dina interna länkar betydligt enklare, är de ett bra sätt framhäva de sidor som är av stor vikt för både besökare och för sökmotorerna.  
    </p>
    `}
    />

    <img className='mx-auto md:w-3/4' src={gif} alt="" />

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
