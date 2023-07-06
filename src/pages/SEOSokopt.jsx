import React from "react";
import { Hero9 } from "../components/Hero9";
import { Heading7 } from "../components/Heading7";
import { HeroButton } from "../components/HeroButton";
import { Headinglist } from "../components/Headinglist";
import { HeadingSEO } from "../components/HeadingSEO";
import { HeadingSEO2 } from "../components/HeadingSEO2";
import ContactForm from "../components/ContactForm";
import { HeadingCity } from "../components/HeadingCity";
import { HeadingSEO3 } from "../components/HeadingSEO3";
import { HeadingCity2 } from "../components/HeadingCity2";
import { HeadingSEO4 } from "../components/HeadingSEO4";
import { HeadingCity3 } from "../components/HeadingCity3";
import { HeadingSEO5 } from "../components/HeadingSEO5";
import { HeadingCity4 } from "../components/HeadingCity4";
import { HeadingSEO6 } from "../components/HeadingSEO6";
import { HeadingCity5 } from "../components/HeadingCity5";
import { HeadingSEO7 } from "../components/HeadingSEO7";
import { HeadingSEO8 } from "../components/HeadingSEO8";
import { HeadingSEO9 } from "../components/HeadingSEO9";
import { StatsHero } from "../components/StatsHero";

/* Videos */
import videoHero from "../assets/trafic.mp4";
import videoHeroButton from "../assets/spaceloop2.mp4";

/* Images for stats */
import img from "../assets/stats1.webp";
import img2 from "../assets/stats2.webp";
import img3 from "../assets/stats3.webp";

export default function SEOSokopt() {
  return (
    <>
      <StatsHero
        title1={"Öka trafiken till din hemsida med sökmotoroptimering"}
        videoLink={videoHero}
        title2={"Väx med seo / sökmotoroptimering"}
        desc={
          "Sökmotoroptimering, eller SEO som det också kallas, är en typ av digital marknadsföring där syftet är att öka ens synlighet i sökmotorernas organiska resultat. Sökmotoroptimering handlar alltså om att synas bra i det resultat som inte är betalda annonser hos sökmotorer så som Google, Bing och Yahoo. Om SEO utförs korrekt leder det till att ens webbplats syns högt upp i sökmotorers sökresultat på relevanta sökningar. Detta SEO-arbete innebär att man får fler besökare till sin webbplats vilket man i sin tur sedan förhoppningsvis kan konvertera till kunder."
        }
        title3={"Vi låter resultaten tala för sig själva"}
        title4={
          "Vi har tills nu hjälpt företag att synas  i Sverige & utomlands med"
        }
        stats1={"1047"}
        underStats1={"Sökord i top 3"}
        stats2={"1832"}
        underStats2={"Sökord i top 10"}
        stats3={"2408"}
        underStats3={"Sökord i top 20"}
        videoLink2={
          "https://player.vimeo.com/progressive_redirect/playback/714795502/rendition/1080p/file.mp4?loc=external&signature=f10571525f87060048a4f457365b416995804594ef77eb283e82fe660968d63e"
        }
      />

      <Heading7
        smallTitle={"Syns du inte så finns du inte"}
        title={"Exempel på hur vi hjälpt företag att växa med SEO"}
        desc={
          "Google är Sveriges i särklass största sökmotor och 95% av alla sökningar görs idag via deras plattform. I Sverige görs det varje dag mer än 50 miljoner sökningar på Google. Med siffror som dessa inser du säkert vikten av att synas högt upp i sökresultatet som Google visar upp. Konkurrensen mellan företag som vill ranka högt upp på är idag oerhört stor då många förstår betydelsen av vad en bra position innebär."
        }
        img={img}
        img2={img2}
        img3={img3}
      />

      <HeroButton
        title={"We're ready for takeoff"}
        title2={"are you?"}
        buttonLink={"/kontakt"}
        buttonText={"Launch"}
        videoLink={videoHeroButton}
      />

      <Headinglist
        smallTitle={"För dig som vill veta mer om SEO"}
        mainTitle={"Vanligaste frågorna om sökmotoroptimering"}
        title1={"Vad är SEO?"}
        desc1={`
      <p class="mb-2 text-sm tracking-wider  text-white">
        Sökmotoroptimering är mer känt som SEO. 
        Optimering är grunden för allt som har med SEO att göra.   
        <strong class='text-rose-300'> När ditt varumärke är väl optimerat ökar du dess synlighet online. </strong>
        Din webbplats kommer med hjälp av SEO ha större möjlighet att hitta vägen till första sidan bland sökmotorernas resultat (SERP). På detta sätt kommer dina kunder också att hitta ditt företag mycket snabbare. 
      </p> `}
        title2={"Hur Fungerar SEO?"}
        desc2={`
      <p class="mb-2 text-sm tracking-wider  text-white">
        SEO är en metod för att göra din webbplats mer attraktiv för sökmotorer som Google och Bing. Sökmotorerna skannar din hemsida för att kunna förstå vad den handlar om.
        <strong class='text-rose-300'> SEO ökar mängden av organisk trafik och kvaliteten på dina besökare utan att du behöver betala för annonsering. </strong> 
        Den organiska trafiken innefattar därmed inte betalda medier, betalda placeringar eller direkttrafik till din hemsida. Med en bra SEO-strategi
        kommer Google att identifiera din hemsida som en pålitlig webbplats och i sin tur peka besökarna mot den.
      </p>
      `}
        title3={"Hur lång tid tar SEO?"}
        desc3={`
      <p class="mb-2 text-sm tracking-wider  text-white">Tiden det tar SEO att påverka din ranking 
        <strong class='text-rose-300'> beror mycket på dina mål och den strategi du använder dig av. </strong>
        Flera av de som arbetar med SEO skulle säga att det tar fyra till sex månader innan du börjar se resultat. Självklart beror detta även på vilken typ av konkurrens dina sökord har,  alltså vilka andra typer av aktörer som vill synas på samma sökord som du, samt hur många användare som söker efter det du erbjuder.
      </p>
      `}
        title4={"Hur hittar jag rätt sökord för SEO?"}
        desc4={`
      <p class="mb-2 text-sm tracking-wider  text-white">
        Genom att göra en <em>sökordsanalys </em>
        får du en bättre uppfattning om vilka sökord som är värda att fokusera på. För att hitta de bästa nyckelorden för din bransch måste du först 
        <strong class='text-rose-300'> sätta dig in i din målgrupps situation. </strong>
        Genom att själv göra en sökning på det du vill synas på, får du en bättre uppfattning av hur andra söker för att hitta det du erbjuder.
      </p>
      <p class="mb-2 text-sm tracking-wider" >
        Det är viktigt att veta vem din målgrupp är och att vara specifik när det gäller deras behov. Om ditt innehåll handlar om bilar är det alldeles för vagt att bara använda ordet ”bilar” som sökordord. Om din hemsida handlar om ”de mest populära bilarna”, kommer användningen av denna sökordsfras att vara mer relevant för det din målgrupp söker.
      </p>
      <p class="mb-2 text-sm tracking-wider" >
        När du tagit fram några möjliga sökord och fraser som är relevanta för din målgrupp är det viktigt att göra ytterligare analys kring dem. 
        <strong class='text-rose-300'> Om du använder sökord som är för populära kan det bli svårt för din hemsida att ranka bra mot dina konkurrenters hemsidor. </strong>
        Om du istället använder dig sökord som inte alls är populära kan det leda till att få människor någonsin kommer att söka efter sökorden i fråga.
      </p >
      <p class="mb-2 text-sm tracking-wider" >
        Det är därför av stor vikt att du undersöker sökvolymen och den potentiella konkurrensen för alla sökord du överväger. Ett sätt att göra detta är att använda sig av verktyget <em>Google Trends.</em>
      </p> 
      `}
        title5={"Behöver jag olika strategier för olika sökmotorer?"}
        desc5={`
      <p class="mb-2 tracking-wider text-sm text-white">
        Det finns små skillnader mellan de olika sökmotorerna.
        <strong class='text-rose-300'> Rekommenderat är dock att fokusera på Google i din SEO-strategi, </strong>
        då de flesta besökare använder denna ledande sökmotor, och majoriteten av den organiska trafiken du kommer att få till din hemsida kommer att komma från just Google.
      </p>
      `}
        title6={"Hur mycket kostar SEO?"}
        desc6={`
      <p class="mb-2 tracking-wider text-sm text-white">
      Det är rekommenderat att anlita en erfaren SEO-byrå för att arbetet ska rätt till, och denna kostnad bör ingå i din budget för marknadsföring. 
      <em> Kostnaden för arbetet är relativt, </em>
      anpassat till omfattningen av det arbete som krävs för just din bransch. 
      <strong class='text-rose-300'> Olika branscher kräver olika typer av strategier och arbeten, </strong>
      då konkurrensen varierar enormt mellan dem.
      </p>
      <p class="mb-2 text-sm tracking-wider text-white">
      En bra SEO-byrå gör en offert efter att ha gjort en analys på projektets omfattning samt efter dina förväntningar. Det genomsnittliga timpriset för att anlita en byrå eller SEO-expert är cirka 1500 kronor i timmen.
      </p> 
      `}
        title7={"Kan jag göra SEO själv?"}
        desc7={`
      <p class="mb-2 tracking-wider text-sm text-white">
      <strong class="text-rose-300">Absolut! </strong>  Däremot krävs det kunskap, tid och pengar för att lära dig att göra det. Det kommer att krävas många försök och många misstag för att lyckas, men det är möjligt att genomföra en grundläggande SEO-strategi själv. 
      </p>
      <p class='mb-2 tracking-wider text-sm text-white'>
      SEO är dock tidskrävande och för att göra det på rätt sätt måste du ta hänsyn till saker som 
      <em> analys, teknisk SEO, on-page SEO och off-page SEO. </em>
      Du behöver dessutom hålla dig uppdaterad om algoritmernas ändringar hos de olika sökmotorer som besökare använder sig av.
      </p>
      `}
        title8={"Vad påverkar min ranking?"}
        desc8={`
      <p class="mb-2 tracking-wider text-sm text-white">
        De tre största faktorerna som direkt påverkar din SEO-ranking är:
      </p>
      <p class="mb-2 tracking-wider text-sm text-white"><strong class="text-rose-300">Sidans laddningstid </strong>
        – Om din webbplats laddar för långsamt kommer dina besökare troligen att gå till en konkurrents webbplats. Sökmotorer rangordnar din hemsida lägre på grund av en långsam sidladdningstid.
      </p>
      <p class="mb-2 tracking-wider text-sm text-white"><strong class="text-rose-300">Val av sökord </strong>
        – Sökorden måste väljas noggrant för att din webbplats ska anses vara relevant det som din ideala kund söker efter.
      </p>
      <p class="mb-2 tracking-wider text-sm text-white"><strong class="text-rose-300">Skapande av innehåll </strong>
       – Om du skapar innehåll av hög kvalitet på din hemsida är det större chans att besökare hittar din webbplats och stannar kvar på den längre. Att din sida är relevant för sökningen förbättrar placeringen av den på sökmotorerna.
      </p>
      `}
        title9={"Är SEO bättre än betald marknadsföring?"}
        desc9={`
      <p class="mb-2 tracking-wider text-sm text-white">
        <strong class='text-rose-300 text-base'>SEO och SEM arbetar tillsammans för att stärka din webbplats och positionera ditt varumärke.</strong>
      </p>
      <p class="mb-2 tracking-wider text-sm text-white"> 
        <em>SEM </em>startar så fort du börjar betala för annonseringen, medan <em> SEO </em>  ofta ger en mycket bättre avkastning på din investering. Detta innebär dock inte att SEO är billigt och enkelt. SEO det tar en hel del tid och resurser, men 
        <strong class='text-rose-300'> den långsiktiga belöningen är större och mer hållbar i längden.</strong>
      </p>
      <p class="mb-2 tracking-wider text-sm text-white">
        För det mesta kommer SEO och betalda annonser att arbeta tillsammans för att ge de bästa resultaten.
      </p>
      `}
      />
      <HeadingSEO
        mainTitle1={"Vad är SEO?"}
        mainDesc1={`
        <p class="text-sm text-left pb-5">Inom SEO behöver man kreativitet och teknisk förståelse för att kunna förbättra företags positioner på Google och andra sökmotorer, samt för att kunna driva trafik till hemsidan. Det finns många olika faktorer som påverkar vilken placering en webbplats hamnar på. Det kan bero på allt från innehållet på hemsidan, det vill säga copyn, till antalet andra webbplatser som länkar till din webbplats.</p>
        <p class="text-sm text-left pb-5">Något som är bra att ha i åtanke är att sökmotoroptimering är ett arbete som bör göras kontinuerligt om man vill synas på första sidan på sökmotorerna samt att fortsätta göra det när man väl nått dit. Det är av stor vikt att göra sökmotoroptimering till en del av ens verksamhet och på samma sätt som ens verksamhet avstannar om man inte kontinuerligt driver den framåt, så gör även SEO det.</p>
      `}
        cardTitle={"SEO hjälper dig att ranka högre på Google"}
        cardDesc={`
        <p class="text-sm text-white pb-5">Googles sökmotor använder sig av en stor mängd faktorer för att avgöra vilka hemsidor som är mest relevanta att visa upp och i sökresultat. En del faktorer spelar större roll än andra och vad som anses vara viktigast för att ranka högt idag kan ha mindre betydelse om en månad. Det är därför oerhört viktigt att hålla sig uppdaterad när det kommer till vad Google och andra sökmotorer anser vara relevant för att kunna optimera en hemsida på bästa sätt.</p>
        <p class="text-sm text-white pb-5">Om du är intresserad av att öka trafiken till din hemsida och växa din kundbas är det viktigt att din hemsida har rätt möjligheter för att ranka högt på Google när potentiella kunder söker efter det du och ditt företag erbjuder.</p>
        <h1 class="text-center text-lg pb-10 text-white">Sökmotoroptimering är nyckeln till att lyckas med detta.</h1>
      `}
        smallDesc1={`
        <h1 class="text-center pt-5 text-xl pb-5">Vad betyder egentligen SEO?</h1>
        <p class='text-sm pb-5'>SEO är en förkortning för det engelska uttrycket Search Engine Optimization, vilket översatt till svenska är sökmotoroptimering. SEO och sökmotoroptimering är med andra ord samma sak.</p>

        <h1 class="text-center text-xl pb-5 pt-5">Varför bör jag synas på Google?</h1>
        <p class='text-sm pb-5'>Google är den största sökmotorn i Sverige och enligt flera undersökningar har Google en marknadsandel på ca 95 %. Det betyder att det är viktigt att din hemsida syns på Google om du vill kunna nå så många kunder som möjligt.</p>

        <h1 class="text-center text-xl pb-5 pt-5">Öka trafiken till din hemsida</h1>
        <p class='text-sm pb-5'>Att ha bra synlighet på Google ger ditt företag större möjlighet att nå ut till potentiella kunder som söker efter de produkter som just du erbjuder. Sökmotoroptimering eller SEO (från engelskans Search Engine Optimization) är med andra ord livsviktigt för att ditt företag ska synas online, få fler besökare och göra fler affärer.</p>
    
        <h1 class="text-center text-xl pb-5 pt-5">Vikten av bra SEO</h1>
        <p class='text-sm pb-5'>Eftersom vi använder internet allt mer för att hitta företag som säljer det vi vill köpa är det av stor betydelse att synas där besökarna finns. Lika viktigt som det en gång i tiden var att synas i traditionell media som lokalpressen eller telefonkatalogen är det idag att synas på nätet. Detta gör du med hjälp av SEO.</p>
      `}
        mainTitle2={"Vad gör SEO på hemsidan så viktig?"}
        mainDesc2={
          "Google tittar på sidans innehåll för att avgöra om det är relevant för sökningen som görs. En del av den här processen är att man söker efter viktiga sökord. Om dessa sökord hittas på din sida, i rubriker eller i brödtext, anses informationen vara mer relevant för sökningen i fråga."
        }
        mainDesc3={`
      
        <p class="text-sm pt-10 pb-5">Vad som gör on-page SEO så viktigt är att det hjälper sökmotorerna att förstå din webbplats och innehållet som finns där, för att identifiera om den är relevant för sökningen som görs. Vad Google gör är att helt enkelt förstå vad användare faktiskt letar efter när de gör sin sökning, även kallat search intent, och att därefter leverera ett sökresultat som uppfyller avsikten bakom sökningen.</p>
        <p class="text-sm pb-5">Att hålla sig uppdaterad på vad kraven är för att Google ska anse dig vara relevant är oerhört viktigt, dels för att du ska fortsätta hålla dig synlig för användare, men även för att detta är den del av optimeringen som du faktiskt kan kontrollera, till skillnad från den del som styrs av faktorer utanför sidan.</p>

        <p class="text-base pb-5">Läs mer om on-page SEO <a class="text-rose-300" href="/on-page-seo">här</a></p>
      `}
        endSection={`
        <h1 class="text-xl text-center pb-5">KORTA OCH RELEVANTA WEBBADRESSER</h1>
        <p class='text-sm pb-5'>Webbadressen, eller URL:en, en den exakta länken till sidan. För att hålla all synlig information så relevant som möjligt är det bra att även här använda sig av sökord för att sökmotorerna ska få så bra bild av innehållet på sidan som möjligt.</p>
        <p class='text-sm pb-5'>Tydliga och beskrivande URL:er hjälper användare att förstå vad sidan handlar om innan de klickat sig in på den. Oavsett om sidorna egentligen skulle handla om samma saker, framgår det av den första webbadressen att det är just vad sökaren är ute efter. Detta ger ett klart bättre resultat när det kommer till att öka trafiken till din sida.</p>
        <p class='text-sm pb-5'>I de flesta fall kan du enkelt ändra URL-sluggen, den del efter domänen och eventuella undersidor, vilket är det enklaste sättet att anpassa webbadressen för det aktuella sökordet du vill synas på. Precis som med meta-beskrivning är det bäst att testa sig fram för att nå ett bra resultat.</p>
    
        <h1 class="text-xl text-center pt-20 pb-10">Tydliga och beskrivande URL:er hjälper besökare och sökmotorer att enklare förstå vad sidorna handlar om.</h1>
      `}
      />
      <ContactForm
        title={"Vad kul att du har hittat till oss!"}
        desc={
          "Har du frågor eller är redo att starta din digitala resa redan nu, är du välkommen att fylla i några rader eller maila oss på "
        }
        company={"Företag"}
        name={"Namn"}
        phone={"Telefon"}
        email={"E-post"}
        text={"Vad kan vi hjälpa dig med?"}
        buttonText={"Skicka"}
      />
      <HeadingSEO2
        mainTitle1={"Vad är SEM?"}
        mainDesc={`
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
      `}
        buttonText={"Ready For Take Off"}
        buttonLink={"/kontakt"}
        mainTitle2={"Betald sökning förbättrar inte de organiska resultaten"}
        mainDesc2={`
        <p class='text-sm pb-5 text-left'>Det finns inget uppenbart samband mellan organiska positioner och betalda positioner. De ger resultat på olika sätt. De organiska sökresultaten kommer från indexdatabasen, medan PPC:s sponsrade länkar baseras på ditt bud och din totala investering.</p>
        <p class='text-sm pb-5 text-left'>Med betalda annonser kan du rikta in dig på fler sökord och enkelt testa olika kampanjer. Ännu viktigare är att du kan stärka din varumärkesidentitet när din betalda annons dyker upp ovanför sökresultaten. På detta sätt fångar du därför in trafik till din sajt både organiskt och från dina betalda annonser.</p>
      `}
        cardTitle={"FÅ BÄTTRE INSIKT I VAD MÄNNISKOR SÖKER EFTER"}
        cardDesc={`
        <p class="text-sm text-white pb-5">Betald marknadsföring kan hjälpa till att definiera och förfina de sökord som du riktar in dig på organiskt, med hjälp av exakta data. Det är trots allt mycket lättare att mäta avkastningen av en länk till en betald sökning än av en gratis organisk listning. Dessutom ger klickfrekvensen på betalda annonser dig insikt i vilka nyckelord som är bäst att optimera, för att sedan kunna skapa ett bättre organiskt optimerat resultat.</p>
        <p class="text-sm text-white pb-5">Därför råder det ingen tvekan om att betald sökning kan bidra till att förbättra konverteringsgraden för organiska resultat, men det kommer inte att direkt hjälpa till med din organiska position.</p>   
      `}
      />
      <HeadingCity
        title={"Behöver du hjälp med sökmotoroptimering i din stad?"}
        desc={
          "På effektify håller vi oss städigt uppdaterade och utvecklar strategier för att företag ska få den hjälp som krävs för att sticka ut i sin specifika bransch. Tillsammans utarbetar vi en plan som får ditt företag att synas bättre i det område du är verksam i."
        }
        button1={"SEO i Stockholm"}
        buttonStyle1={"pl-5 pr-5"}
        buttonLink1={"/seo-sokmotoroptimering-stockholm"}
        button2={"SEO i Göteborg"}
        buttonStyle2={"pl-7 pr-7"}
        buttonLink2={"/seo-sokmotoroptimering-goteborg"}
        button3={"SEO i Malmö"}
        buttonStyle3={"pl-11 pr-11"}
        buttonLink3={"/seo-sokmotoroptimering-malmo"}
        button4={"SEO i Uppsala"}
        buttonStyle4={"pl-9 pr-9"}
        buttonLink4={"/seo-sokmotoroptimering-uppsala"}
        button5={"SEO i Halmstad"}
        buttonStyle5={"pl-4 pr-4"}
        buttonLink5={"/seo-sokmotoroptimering-halmstad"}
      />
      <HeadingSEO3 
        mainTitle1={"On-page SEO"}
        mainDesc1={`
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
        `}

        mainDesc2={`
        <p class="text-sm">Dessa delar, tillsammans med faktorer som hemsidans auktoritet, säkerhet och laddningshastighet kommer att förbättra din webbplats ranking i sökresultaten och därmed göra den mer synlig för potentiella besökare eller kunder som söker efter det som din hemsida erbjuder. Hemsidan skall tala till besökaren och dess behov, den ska tilltala rent estetiskt och vara lättnavigerad och hålla en look som speglar branschen. Tjänster och produkter är huvudsaken i hemsidans marknadsföring och när man bygger en sajt skall resultatet vara komplett ur flera perspektiv: seo, design och marknadsföring. Allt detta skall presentera ett samlat innehåll så att den blir ett alternativ vid search på Google där alla söker.</p>
        <h1 class="text-lg pt-10 pb-5 uppercase text-center">Hemsidans Laddningshastighet</h1>
        <p class="text-sm pb-5">En av faktorerna som påverkar Googles bedömning av din hemsida är hur snabbt webbläsaren läser in din hemsida. Google undviker att visa upp hemsidor som laddar långsamt och därav är det till stor nackdel för dig om din hemsida har dålig laddningshastighet.</p>
        <p class="text-sm pb-5">Google har skapat ett verktyg som du kan ta hjälp av för att ta reda på din hemsidas laddningshastighet. Verktyget visar hur snabbt hemsidan laddar, både på mobilen och datorn. Om verktyget skulle visa lägre än 50 poäng bör du se över vad du kan göra för att förbättra laddningshastigheten.</p>
        <p class="text-sm pb-5">Ju snabbare din hemsida laddar desto mer förbättrar du användarvänligheten för besökare, samtidigt som sökmotorerna ser sidan som bättre optimerad. Det är ett enkelt sätt för att förbättra sökresultaten och i sin tur för att få fler besökare. Det lättaste sättet att öka hastigheten är att hålla nere storleken på bilderna du använder dig av på sidan.</p>
        <p class="text-sm pb-5">Har du inte tillgång till program som ger dig möjlighet att komprimera dina bilder så finns det mängder av gratis verktyg på nätet som du kan använda dig av.</p>
        <p class="text-sm pb-5">Ett tips är att samtidigt som du komprimerar dina bilder även passar på att direkt sparar bilderna med namn som förbättrar din on-page SEO, vilket för oss till nästa steg i optimeringen.</p>
        `}

        smallTitle1={"Hemsidands Titlar"}
        smallDesc1={"En av de viktigaste faktorerna inom grundläggande SEO är en hemsidas titel. Detta beror på att sidans titel visar Google vad sidan handlar om, därför bör du också optimera alla titlar på din hemsida."}
        smallDesc2={` 
        <p class="text-sm pb-5">Sidans titel, eller page title, är den titel som visas upp som en en länk i det organiska sökresultatet på Google. Förutom att den syns högst upp i webbläsarens fönster efter att man klickat sig in på den, finns denna titel inte synlig på hemsidan, utan är specifikt utformad för att locka till sig besökare.</p>
        <p class="text-sm pb-5">Med tanke på att det är denna titel som ska locka till sig “gratis” besökare är det en av de viktigaste texterna som behöver anges. Den har stor inverkan på din hemsidas ranking och får inte vara längre än 65 tecken för att anses korrekt skriven.</p>
        <p class="text-sm pb-5">För bra resultat ska en page title innehålla viktiga sökord samtidigt som den lockar besökare till att klicka på den. Sökmotorer granskar titeln för att få reda på vad sidan handlar om vilket gör det viktigt att hålla denna relevant, att ha med viktiga sökord samtidigt som du håller den korta texten naturlig och användarvänlig.</p>

        <h1 class="text-lg pt-10 pb-5 uppercase text-center">Meta-Beskrivningar</h1>
        <p class="text-sm pb-5">Genom att själv ange en säljande och beskrivande text ökar du chanserna till att sticka ut och synas bättre för potentiella kunder som letar efter vad du erbjuder. Anger du ingen beskrivning väljer Google själva vilken text som visas upp för sidan, vilket många gånger innebär att du går miste om dessa potentiella kunder.</p>
        `}
        smallDesc3={`
        
        <p class="text-sm pb-5">För att ge sidan en bra meta-description bör du alltid ha med sökordet som du vill synas på, och gärna så tidigt i texten som möjligt. Ju bättre information du har med i beskrivningen desto fler klick får du från besökare som anser din sida vara mer relevant än konkurrenternas.</p>
        <p class="text-sm pb-5">Om beskrivningen skulle vara för lång väljer Google att klippa av den med 3 punkter, vilket gör att din väl utformade text inte visas upp i sin helhet. För att undvika detta ska du försöka hålla den till högst 158 tecken. Testa dig fram tills du har en meta-beskrivning som visas upp så som du vill att den ska visas samtidigt som den både ger en klar och tydlig bild om vad du erbjuder. Se till att texten är säljande och relevant.</p>
    
        <h1 class="text-lg pt-10 pb-5 uppercase text-center">Hemsidands Texter</h1>
        <p class="text-sm pb-5">Google finner det viktigt att texten på din hemsida är strukturerad och av hög kvalitet. Google kollar även noggrant på vad din text handlar om. Att undvika konstiga meningar och stavfel är till din och din hemsidas fördel.</p>


        <h1 class="text-lg pt-10 pb-5 uppercase text-center">OPTIMERING AV HEMSIDANS BILDER</h1>
        <p class="text-sm pb-5">En annan viktig och grundläggande faktor inom SEO är en hemsidas bilder. Google kan inte ”se” vad bilder föreställer, istället läser sökmotorn kod, därför är det av stor vikt att bildfilernas har rätt innehåll i form av information som är optimerad.</p>
        <p class="text-sm pb-5">Eftersom sökmotorer inte kan se bilder är det viktigt att med rätt information beskriva bilderna för att de ska kunna läsa av dem. Detta gör du dels genom att döpa bilderna på ett beskrivande sätt, gärna med sökordet inkluderat, men också genom att ange en relevant alt-text. Denna syns text syns endast i källkoden för hemsidan vilket gör att den många gånger glöms bort.</p>
        `}


        listDesc={`
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
        `}

        imageText={"Ett exempel på hur du korrekt anger information för en bild är:"}
        endDesc={`
        
    <h1 class="text-lg pt-10 pb-5 uppercase text-center">HEMSIDANS URL PÅVERKAR DIN SÖKMOTOROPTIMERING</h1>
    <p class='text-sm pb-5'>Utöver bra innehåll som är relevant på alla målsidor så är även hemsidans URL/webbadress viktig inom SEO. Hemsidans URL:er är det första som möter sökmotorer och de förklarar vad en hemsida handlar om, därav är det till fördel att göra den tydlig och se till att den beskriver hemsidans innehåll. Varje målsida på en hemsida har en unik URL.</p>
    <p class='text-sm pb-5'>Sökmotoroptimering (på engelska Search Engine Optimization) handlar om att man ska kunna hitta hemsidan och då behövs relevant innehåll. Hemsidans URL:er (målsidor) skall vara relevanta och innehålla sökorden kopplade till seo. URL är alltså det som står i webbläsarens adressfält, exempelvis https://effektify.com/seo-sokmotoroptimering/, där man tydligt ser vad just den målsidan handlar, vilket i detta fall är SEO och sökmotoroptimering.</p>
        `}


      />
      <HeadingCity
        title={"Behöver du hjälp med sökmotoroptimering i din stad?"}
        button1={"SEO i Borås"}
        buttonStyle1={"pl-14 pr-14"}
        buttonLink1={"/seo-sokmotoroptimering-boras"}
        button2={"SEO i Eskilstuna"}
        buttonStyle2={"pl-7 pr-7"}
        buttonLink2={"/seo-sokmotoroptimering-eskilstuna"}
        button3={"SEO i Falkenberg"}
        buttonStyle3={"pl-6 pr-6"}
        buttonLink3={"/seo-sokmotoroptimering-falkenberg"}
        button4={"SEO i Gävle"}
        buttonStyle4={"pl-14 pr-14"}
        buttonLink4={"/seo-sokmotoroptimering-gavle"}
        button5={"SEO i Helsingborg"}
        buttonStyle5={"pl-2 pr-2"}
        buttonLink5={"/seo-sokmotoroptimering-helsingborg"}
      />
      <HeadingSEO4 
        mainTitle1={"Bra content ger bra resultat"}
        mainDesc1={`
          <p class="text-sm text-left pb-5">
          Content, eller innehåll som det kallas på svenska, är något Google finner allt viktigare. Google strävar efter att visa upp hemsidor som de anser ger deras användare bästa möjliga svar. För dig som har en hemsida innebär detta att innehållet på din hemsida är viktigt för huruvida du syns på Google eller inte när någon googlar efter det du erbjuder.
          </p>
  
          <h1 class="text-lg pt-5 uppercase text-center pb-5">I Sverige görs det varje dag mer än 50 miljoner sökningar på Internet. Syns din hemsida i dessa sökningar idag?</h1> 
          <p class="text-sm text-left pb-5">
          Att fylla din hemsida med lättlästa och användarvänliga texter som innehåller sökord som du vill ranka på, hjälper Google och andra sökmotorer att anse sidan vara mer relevant.
          </p>
      
          <h1 class="text-lg pt-5 uppercase text-center pb-5">RÄTT CONTENT FÖR RÄTT MÅLGRUPP = BRA SÖKMOTOROPTIMERING</h1>
          <p class="text-sm text-left pb-5">
          Då Googles algoritmer läser igenom informationen hos en webbsida tittar den på textinnehållet för att ta reda på vad den handlar om, för att sedan matcha den till sökningarna som görs på ämnet i fråga. Skulle texten på sidan matcha sökningen som görs, anses sidan vara relevant. Ju fler kriterier som uppfylls på din hemsida, desto mer relevant är den och därmed rankar den högre.
          </p>
          <p class="text-sm text-left pb-5">
          Vad som avgör hur bra innehållet på din hemsida står sig gentemot konkurrenters sidor beror på en rad element som alla väger olika tungt i Googles ögon. All text anses inte vara lika betydelsefull när det kommer till att öka din relevans, vilket gör det viktigt att veta vilka element som betyder mest.
          </p>
  
          `}

          cardTitle1={"NATURLIGT & ANVÄNDARVÄNLIGT INNEHÅLL HJÄLPER SEO"}
          cardDesc1={`
            <p class="text-sm text-white pb-5">Element som huvudrubrik (H1), underrubriker (H2, H3 osv.), listor och fetstilta ord påverkar alla hur hög relevans din sida har och genom att använda sig av sökord på dessa viktiga positioner, stärker du din webbsidas relevans betydligt och förbättrar resultatet.</p>
            <p class="text-sm text-white pb-5">Används sökord som du vill ranka på endast ett fåtal gånger på hemsidan anses det inte troligt att den handlar om det som sökningen avser. Ju mer text som finns, desto fler gånger behöver söktermen finnas med för att texten ska vara relevant. Om du däremot använder söktermer onaturligt mycket ser Google det som”keyword spamming” vilket kan göra att sidans ranking istället försämras.</p>
            <p class="text-sm text-white pb-5">Genom att analysera och använda sig av innehåll som är naturligt och användarvänligt håller du både besökare och sökmotorer nöjda, vilket oftast lönar sig i det långa loppet när man ser till sökresultaten.</p>
          `}


          mainTitle2={"Interna länkar gör dig mer relevant"}
          mainDesc2={`
            <p class='text-sm text-left pb-5'>
            En intern länk är när en sidas innehåll även består av länkar, alltså man hänvisar till en annan sida på samma hemsida. Som exempel länkar vi här till vår sida för Google Ads härifrån, vilket är ett verktyg som fungerar som en intern länk. Då många sidor pekar med länkar till samma sida blir denna sida mer relevant vilket gör att den rankar bättre på Google.
            </p>
            <p class='text-sm text-left pb-5'>
            Genom att använda sig av relevanta sökord i länktexten för den interna länken ökar också relevansen för målsidan som länken pekar till. Detta gör att du med hjälp av viktiga sökord i länktexten kan tala om för Google att målsidan den pekar till är relevant för de sökningar som görs på sökordet.
            </p>
            <p class='text-sm text-left pb-5'>
            Tillsammans med meta-data, content & rubriker på målsidan hjälper varje intern länk till att öka relevansen för målsidan ytterligare, och får denna att ranka högre på sökmotorerna.
            </p>
          `}

          underImageDesc={"Marknadsföring av dina tjänster och produkter med en seo, alltså optimering eller sökmotoroptimering som är utförd av professionella och erfarna seo-tekniker som har rätt verktyg och know-how skapar resultat i sökmotorerarna. Vi vet att sökmotorerna gillar länkar på en sajt, för få länkar är mindre bra, vi vet att ord i texter om tjänster och produkter inom verksamheten är viktiga, vi vet att seo vid search kräver innehåll av kvalitet och vi vet att driva trafik till en sajt genom att optimera den kan ge den ett bättre läge än andra webbplatser vid search på nätet. Optimering är den självklara partnern till en sajt."}
          underImageButton={"Ready for takeoff"}
          underImageLink={"/kontakt"}

          mainTitle3={"Off-page SEO stärker dina positioner"}
          mainDesc3={`
            <p class='text-sm text-left pb-5'>
            En annan viktig del av SEO är off-page. Off-page är det kontinuerliga arbete som ska utföras efter att arbetet med on-page är klart på hemsidan, man kan säga att det är det underhåll som krävs för att få din hemsida att behålla sin placering på Google.
            </p>
      
            <p class='text-sm text-left pb-5'>
            När Google gör en bedömning av huruvida din hemsida är relevant vad gäller specifika sökord ser sökmotorn över innehållet på hemsidan. Dock är det inte bara innehållet Google ser över, utan sökmotorn ser även över vilka hemsidor som länkar till din hemsida.
            </p>
            </div>
      
            <div class='pt-20 text-center text-black bg-white'>
            <h1 class="text-xl uppercase pb-5">BRA REKOMMENDATIONER GER BRA POSITIONER</h1>
      
            <p class='text-sm text-left pb-5'>
            På samma sätt som vi människor baserar många av våra köpbeslut på rekommendationer så baserar Google sina placeringar av hemsidor på ”rekommendationer” från andra hemsidor. Dessa rekommendationer är viktiga för att få upp din hemsida så högt upp som möjligt på Google. Google anser ”inlänkar” från andra hemsidor vara ”rekommendationer” till din hemsida.
            </p>
            <p class='text-sm text-left pb-5'>
            När Google ska bestämma huruvida din hemsida är relevant att visa upp på första sidan tar sökmotorn hänsyn till om det finns andra hemsidor som länkar till din, och ”lyssnar” till detta. Vad detta betyder är att inlänkar är en rankningsfaktor och därmed påverkar möjligheten att synas på Googles första sida. Man kan säga att det är en grundläggande del av SEO att ha en effektiv länkstrategi.
            </p>
          `}

          cardTitle2={"BRA REKOMMENDATIONER SÄLJER DIN PRODUKT LÄTTARE"}
          cardDesc2={`
            <p class="text-sm text-white pb-5">
            Ett exempel som går att applicera på detta är om du planerar att byta tak på ditt hus och letar efter en byggfirma som kan utföra detta. Du har två vänner, en som arbetar som snickare, och en som arbetar som revisor. De båda rekommenderar två olika byggfirmor, vems rekommendation kommer du lyssna på? Med störst sannolikhet är det snickaren eftersom denne har mer kunskap inom ämnet.
            </p>
            <p class="text-sm text-white pb-5">
            Google fungerar på samma sätt, sökmotorn lyssnar på relevanta ”rekommendationer” där det finns rätt sökord som är kopplade till din verksamhet. Därför är det viktigt att se till att inlänkningarna till din hemsida är relevanta. Om du driver ett byggföretag och får länkar från en blogg som handlar om bygg och snickeri så anser Google den länken väga mer än en som kommer från en matblogg till exempel. Sökmotoroptimering handlar om att skapa eller förbättra sökresultaten för webbplatser och det görs med texter efter gedigen analys.
            </p>
          `}



      />
      <HeadingCity
        title={"Behöver du hjälp med sökmotoroptimering i din stad?"}
        button1={"SEO i Huddinge"}
        buttonStyle1={"pl-12 pr-12"}
        buttonLink1={"/seo-sokmotoroptimering-huddinge"}
        button2={"SEO i Jönköping"}
        buttonStyle2={"pl-10 pr-10"}
        buttonLink2={"/seo-sokmotoroptimering-kalmar"}
        button3={"SEO i Kalmar"}
        buttonStyle3={"pl-14 pr-14"}
        buttonLink3={"/seo-sokmotoroptimering-kalmar"}
        button4={"SEO i kristianstad"}
        buttonStyle4={"pl-7 pr-7"}
        buttonLink4={"/seo-sokmotoroptimering-kristianstad"}
        button5={"SEO i Kungsbacka"}
        buttonStyle5={"pl-5 pr-5"}
        buttonLink5={"/seo-sokmotoroptimering-kungsbacka"}
      />
      <HeadingSEO5 />
      <HeadingCity
        title={"Behöver du hjälp med sökmotoroptimering i din stad?"}
        button1={"SEO i Linköping"}
        buttonStyle1={"pl-9 pr-9"}
        buttonLink1={"/seo-sokmotoroptimering-linkoping"}
        button2={"SEO i Luleå"}
        buttonStyle2={"pl-14 pr-14"}
        buttonLink2={"/seo-sokmotoroptimering-lulea"}
        button3={"SEO i Lund"}
        buttonStyle3={"pl-14 pr-14"}
        buttonLink3={"/seo-sokmotoroptimering-lund"}
        button4={"SEO i Nacka"}
        buttonStyle4={"pl-12 pr-12"}
        buttonLink4={"/seo-sokmotoroptimering-nacka"}
        button5={"SEO i Norrköping"}
        buttonStyle5={"pl-1 pr-1"}
        buttonLink5={"/seo-sokmotoroptimering-norrkoping"}
      />
      <HeadingSEO6 />
      <HeadingCity
        title={"Behöver du hjälp med sökmotoroptimering i din stad?"}
        button1={"SEO i Norrtälje"}
        buttonStyle1={"pl-4 pr-4"}
        buttonLink1={"/seo-sokmotoroptimering-norrtalje"}
        button2={"SEO i Skellefteå"}
        buttonStyle2={"pl-3 pr-3"}
        buttonLink2={"/seo-sokmotoroptimering-skelleftea"}
        button3={"SEO i Södertälje"}
        buttonStyle3={"pl-2 pr-2"}
        buttonLink3={"/seo-sokmotoroptimering-sodertalje"}
        button4={"SEO i Sollentuna"}
        buttonStyle4={"pl-1 pr-1"}
        buttonLink4={"/seo-sokmotoroptimering-sollentuna"}
        button5={"SEO i Sundsvall"}
        buttonStyle5={"pl-0 pr-0"}
        buttonLink5={"/seo-sokmotoroptimering-sundsvall"}
      />
      <HeadingSEO7 />
      <ContactForm
        title={"Vad kul att du har hittat till oss!"}
        desc={
          "Har du frågor eller är redo att starta din digitala resa redan nu, är du välkommen att fylla i några rader eller maila oss på "
        }
        company={"Företag"}
        name={"Namn"}
        phone={"Telefon"}
        email={"E-post"}
        text={"Vad kan vi hjälpa dig med?"}
        buttonText={"Skicka"}
      />
      <HeadingSEO8 />
      <HeadingSEO9 />
    </>
  );
}
