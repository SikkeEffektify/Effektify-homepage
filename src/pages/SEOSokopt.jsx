import React from "react";
import { Heading7 }    from "../components/Heading7";
import { HeroButton }  from "../components/HeroButton";
import { Headinglist } from "../components/Headinglist";
import { HeadingSEO }  from "../components/HeadingSEO";
import { HeadingSEO2 } from "../components/HeadingSEO2";
import   ContactForm   from "../components/ContactForm";
import { HeadingCity } from "../components/HeadingCity";
import { HeadingSEO3 } from "../components/HeadingSEO3";
import { HeadingSEO4 } from "../components/HeadingSEO4";
import { HeadingSEO5 } from "../components/HeadingSEO5";
import { HeadingSEO6 } from "../components/HeadingSEO6";
import { HeadingSEO7 } from "../components/HeadingSEO7";
import { HeadingSEO8 } from "../components/HeadingSEO8";
import { HeadingSEO9 } from "../components/HeadingSEO9";
import { Heading } from "../components/Heading";
import { StatsHero }   from "../components/StatsHero";

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
  
          <li class=" pt-5 uppercase text-left  text-rose-300 text-xl">
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
      <HeadingSEO5 
        mainTitle1={"Hur hittar Google din content och indexerar det?"}
        mainDesc1={`
          <p class="text-sm text-left pb-5">Optimering av crawl är viktigt när det kommer till sökmotoroptimering. Det handlar i stort sätt om saker du kan göra för att hjälpa Google att enkelt upptäcka, genomsöka och indexera det innehåll du förmedlar på din sajt.</p>
          <p class="text-sm text-left pb-5">Sökmotorbotar letar ständigt efter relevant innehåll. När din nya text är live behöver Google sedan hitta den och indexera din artikel för att den ska göra någon nytta. Det betyder dock inte att botarna kommer att hitta den, crawla och indexera den utan din insats. Speciellt inte om du vill att det ska gå snabbt. Utan att hjälpa sökspindlarna på traven kan det ta upp till två dagar innan ditt ämne.</p>
          <p class="text-sm text-left pb-5">För att allt ska gå fortare kan du börja med att installera ett pluginet Google XML-sitemapgenerator för WordPress. Du behöver inte göra någonting när du väl har installerat insticksprogrammet. I samma ögonblick som du trycker på knappen ”publicera”, genereras en ny XML-sitemap som skickas till sökmotorerna och katalogerna. Detta hjälper Google att indexera ditt nya innehåll så snabbt som möjligt, samtidigt som din befintliga länkprofil söks igenom och indexeras.</p>
        `}

        cardTitle1={"ANVÄND DIG AV SOCIALA MEDIER FÖR ATT HITTAS SNABBARE"}
        cardDesc1={`
          <p class="text-sm text-white pb-5">Genom att uppdatera dina sociala profiler får du också ditt nya innehåll indexerat snabbare. Genom att dela länken på din Facebook-sida eller på Twitter, skapar du fler vägar in till din hemsida, och gör att sökmotorerna enklare kan hitta, crawla och indexera den.</p>    
        `}

        afterCardText={"Ett annat enkelt verktyg som fungerar väldigt bra är Pingomatic. Det låter dig snabbt pinga en massa webbtjänster för att meddela dem om ditt nya innehåll. Genom att använda denna gratistjänst får man sitt färska, högkvalitativa innehåll indexerat på betydligt kortare tid än det skulle tagit annars."}
        afterCardButton={"Ready for takeoff"}
        afterCardLink={"/kontakt"}
        
        mainTitle2={"Är gästbloggar bra för SEO?"}
        mainDesc2={`
          <p class="text-sm text-left pb-5">
          Det blev ett ramaskri 2014 när Matt Cutts sa att ”om du använder gästbloggning som ett sätt att få länkar … sluta”. Många som inte förstod exakt vad det uttalandet innebar började omedelbart predika mot gästbloggning.
          </p>
          <p class="text-sm text-left pb-5">
          Det finns ingen teknisk skillnad mellan gästbloggar och andra typer av innehåll. Gästbloggning innebär helt enkelt att en gäst har bidragit med ett innehåll som sedan länkar till din sajt.
          </p>
          <p class="text-sm text-left pb-5">
          Det Matt Cutts menade med sitt uttalande är att inte länka dåligt innehåll på bloggar från en utomstående författare. Men även när författaren var webbplatsens ägare hade Googles Panda-uppdatering redan börjat straffa innehåll av låg kvalitet.
          </p>
        `}


        cardTitle2={"BRA LÄNKAR GÖR DIG MER TROVÄRDIG"}
        cardDesc2={`
          <p class="text-sm text-white pb-5">Digital marknadsföring är beroende av högkvalitativt innehåll med en stark länkprofil. Sökmotorerna indexerar miljarder webbsidor från olika domännamn, IP-adresser, platser osv, som alla ägs av olika personer. Att sammanlänka med dessa skapar relevans för dig och en stark länkprofil.</p>    
        `}

        endDesc={`
          <p class="text-sm pb-5">
           När det kommer till externa länkar är det varken författaren eller innehållet som är problemet, utan sammanhanget. Så länge artikeln kommer från en pålitlig källa, och innehållet i artikeln är relevant och är av hög klass, fungerar länken absolut som en bra rekommendation som stärker din hemsidas auktoritet.
          </p>
          <p class="text-sm pb-5">
          Vi anser att gästbloggning inte är dött. Och det kommer aldrig att dö, eftersom Google inte kan tyda exakt vad ett ”gästinlägg” är, särskilt inte när författarens länk finns direkt i texten och inte i författarprofilen.    
          </p>
          </div>
        
          <div class="heading-container pt-10 text-black">
          <h1 class="text-lg uppercase text-center pb-5">VI REKOMMENDERAR FORTFARANDE GÄSTBLOGGNING</h1>
          <p  class='text-sm pb-5'>
          Iallafall så länge man följer dessa enkla råd:
          </p>
    
          <p  class=' text-rose-300 text-base pb-2 '>
          Kalla dem inte för ”gästinlägg”
          </p>
          <p  class='text-sm pb-5'>
          Detta är viktigt. Google kan hitta texten ”detta är ett gästinlägg”. Skriv i stället som om du är en intern medarbetare. Det spelar ingen roll varifrån gästen kommer, så länge inlägget är användbart och relevant för din webbplats.
          </p>
    
          <p  class=' text-rose-300 text-base pb-2 '>
          Bygg relationer, inte länkar
          </p>
          <p  class='text-sm pb-5'>
          Försök inte få ditt gästinlägg publicerat på en betrodd blogg bara för länkens skull. Om du tänker så, kommer du att gå miste om relationen.
          </p>
    
          <p  class=' text-rose-300 text-base pb-2 '>
          Bygg upp ditt varumärke
          </p>
          <p  class='text-sm pb-5'>
          Använd ditt varumärkesnamn eller din URL som ankartext för naturlig länkuppbyggnad. Kontextbaserade länkar: Försök att så långt det är möjligt hålla dina länkar inom innehållet, inte i författarprofilen där de inte har lika stor tyngd. Använd gästbloggande med försiktighet och fokusera på slutanvändarna. Skapa högkvalitativt innehåll som får dem att tänka – som ger resonans med dem och löser deras problem. Engagera dem, svara på kommentarer och bygg upp din e-postlista.
          </p>
    
        `}

      />
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
      <HeadingSEO6 
        mainTitle1={"Sökordsanalys"}
        mainDesc1={`
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
        `}


        mainTitle2={"Hur säker är din hemsida?"}
        mainDesc2={`
          <p class="text-sm text-left pb-5">
          Sökmotorer föredrar hemsidor / webbplatser som är säkra och undviker gärna att visa upp sidor i sökresultatet som inte anses vara det . Genom att installera ett så kallat SSL-certifikat skyddas besökarnas kommunikation samtidigt som säkerheten hjälper din on-page SEO eftersom den då rankas högre i den organiska sökningen.
          </p>
          <p class="text-sm text-left pb-5">
          Genom att använda dig av en säker hemsida visar du också dina besökare att de känna sig trygga när de exempelvis handlar eller fyller i formulär på din hemsida. Med andra ord ger en trygg webbplats fler kunder.
          </p>
    
          <h1 class="text-lg uppercase pb-5">HUR MAN VET OM EN SAJT ÄR SÄKER?</h1>
          <p class="text-sm text-left pb-5">Ta reda på om en webbplats är säker genom att kontrollera säkerhetsinformation om webbplatsen. Chrome varnar dig om webbplatsen eller anslutningen till den inte är säker eller privat.</p>
        `}

        cardTitle1={"VAD ÄR SSL?"}
        cardDesc1={`
          <p class="text-sm text-white pb-5">
          SSL är en förkortning för Secure Sockets Layer vars mål är att skapa autentiserade och krypterade länkar mellan nätverksdatorer, mellan en webbserver och en webbläsare. Det möjliggör för organisationer och företag att skydda transaktioner online och håller kunders information säker och privat.
          </p>
          <p class="text-sm text-white pb-5">
          Ett SSL-certifikat är ett digitalt dokument som på en webbplats binder identiteten till ett kryptografiskt nyckelpar som är en privat nyckel och en offentlig nyckel. Certifikatet innehåller även identifierande information om en webbplats som inkluderar domännamn och.
          </p>
          <p class="text-sm text-white pb-5">
          Summerat så skyddar SSL internetanslutningar och förhindrar att informationen som överförs mellan två system inte kan läsas eller ändras av kriminella. När där finns ett hänglåsikon bredvid webbadressen i webbläsarens adressfält betyder det att SSL skyddar den webbplats du är inne på. De allra flesta webbplatser har idag SSL.
          </p>
        `}

        endTitle={"HUR SER DU ATT EN WEBBPLATS ÄR SÄKER?"}
        endList={`
        
          <ol class="list-decimal text-sm"> 
          <li>
           Öppna en sida i Chrome
          </li>
          <li>
           Titta på symbolen till vänster om webbadressen
          </li>
          </ol>
        `}
        endText={"Om du vill visa information om webbplatsen och vilka behörigheter den har klickar du på ikonen. Då visas en sammanfattning av hur privat anslutningen är enligt Chrome."}
      />
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
      <HeadingSEO7 
        mainTitle1={"Vad är Google Analytics?"}
        mainDesc1={`
          <p class="text-sm text-left pb-5">
          Det första man bör göra när det kommer till sökmotoroptimering och digital marknadsföring i övrigt är att sätta upp ett mål. Vad är det man arbetar mot? Många gånger är målet att öka trafiken till webbplatsen eller öka konverteringarna som sker. För att göra detta behöver man också ett verktyg som spårar dessa siffror, och det är där Google Analytics kommer in i bilden.
          </p>
          <p class="text-sm text-left pb-5">
          Google Analytics är ett kostnadsfritt verktyg och är en plattform för spårning av webbplatser, som samlar in data om hur användarna interagerar på din webbplats. När uppgifterna har samlats in sorterar Google Analytics dem i lättlästa rapporter, vilket är vad vi ser på plattformen.  
          </p> 
        `}

        underCard1Desc={`
          <h1 class="text-center text-xl pt-5 pb-5 text-black">GOOGLE ANALYTICS</h1>
          <p class="text-sm pb-10">
          Google Analytics, den ursprungliga plattformen, var ett enkelt visualiseringsverktyg som skapades för att göra loggfilsdata lättare att läsa. Det liknar den plattform som vi använder idag, men med mycket mindre data. Google vid den här tidpunkten lagrade och sålde inte all den personliga information om användarna som man gör idag.
          </p>
    
          <h1 class="text-center text-xl pt-5 pb-5 text-black">UNIVERSAL ANALYTICS</h1>
          <p class="text-sm pb-10">
          Universal Analytics blev standard 2014 när det kom ut som betaversion. Universal Analytics blev ett måste i takt med att mångfalden av användarenheter ökade. Framväxten av mobila enheter och surfplattor ledde till ett större behov av att spåra användare över hela internet och mellan olika enheter.
          </p>
    
          <h1 class="text-center text-xl pt-5 pb-5 text-black">GOOGLE ANALYTICS 4</h1>
          <p class="text-sm pb-5">
          Den nyaste versionen av Google Analytics-plattformen släpptes i oktober 2020. Google Analytics 4 är ett nytt grepp om App + Web-egenskaper och all data flödar i ett flöde. GA4 förlitar sig också mycket mer på maskininlärning och syftar till att hjälpa analytiker att prognostisera med en mer förutspående analys.
          </p>
          <p class="text-sm pb-5">
          Den här versionen av Google Analytics är fortfarande mycket ny och har ännu inte fått ett brett genomslag. Vi rekommenderar dock att man installerar GA4 så snart som möjligt, eftersom GA4 inte tar med historisk data från Universal Analytics till GA4.
          </p>
        `}


        cardTitle1={"VAD ÄR SSL?"}
        cardDesc1={`
          <p class="text-sm text-white pb-5">
          Data på webbplatser har inte alltid varit snygga och lätta att läsa. Om man ursprungligen ville veta vilken typ av trafik en webbplats fick, var man tvungen att läsa serverloggen. Serverns logg skulle ge en lista med information för varje åtgärd som utfördes på webbplatsen. Även om informationen var värdefull var den svår att förstå.
          </p>
          <p class="text-sm text-white pb-5">
          För att göra det hela lite enklare började företagen sammanställa loggfiler och skapa rapporter utifrån den tillgängliga informationen. Ett företag som hette Urchin gjorde rapporter av loggfilerna och växte mycket snabbt i popularitet. Så pass mycket att Google 2005 förvärvade Urchin och började bygga upp och varumärkesskydda Google Analytics.
          </p>
        `}

        mainTitle2={"Hur fungerar Google Analytics?"}
        mainDesc2={`
          <p class="text-sm text-left pb-5">
          För att få in data från din webbplats in i Google Analytics måste du först placera taggen på din webbplats. Så snart taggen är korrekt placerad börjar Google Analytics samla in data. Uppgifterna läggs sedan in i rapporter som består av mätvärden och dimensioner.
          </p>
          <p class="text-sm text-left pb-5">
          Metriker kallas det som producerar de siffror som du hittar i plattformen. Allt som kan mätas med en siffra är en metrik. Värt att titta på är antalet användare, antalet köp, värdet av konverteringar, genomsnittlig tid på webbplatsen osv.
          </p>
        `}

        cardTitle2={"VARFÖR SKA MAN VÄLJA GOOGLE ANALYTICS?"}
        cardDesc2={`
          <p class="text-sm text-white pb-5">
          Det som kanske är mest lockande med Google Analytics är att det är gratis. Detta gör plattformen tillgänglig för alla med en webbplats, vilket i sin tur skapar en större gemenskap av användare som kan dela information och vägledning. Det finns gott om resurser om hur man använder Google Analytics, vilket gör det tillgängligt för användare på alla nivåer.
          </p>
          <p class="text-sm text-white pb-5">
          Ytterligare en fördel är Google Analytics är till stor hjälp för analytiker på alla kunskapsnivåer. Med Google Analytics kan man uppnå en mer grundläggande analys av webbplatsens prestanda, samtidigt som det också finns möjlighet till mer avancerad analys. 
          </p>
        `}
        underCard2Desc={`
          <p class="text-sm text-left pb-5">
          Du får inte bara information om vilka marknadsföringskanaler som driver trafik till din webbplats, utan du kan även se vilka webbplatser användarna kommer från vid vilka olika tider på dagen, vilken landningssida de kom till och hur lång tid det tog för dem att ladda sidan.
          </p>
          <h1 class="text-lg uppercase pb-5">VEM SKULLE INTE VILJA HA INFORMATION OM SIN WEBBPLATS FRÅN DEN STÖRSTA SÖKMOTORN PÅ INTERNET? </h1>
          <p class="text-sm text-left pb-5">
          Som marknadsförare av söktjänster är en stor del av arbetet inriktat på att tillfredsställa Google. Att ha en plattform som kan berätta en del av den information som Google spårar på webbplatser är oerhört fördelaktigt för den strategiska planeringen. Med hjälp av siffrorna i Google Analytics kan man göra ändringar på sin webbplats med datadriven strategi i stället för att enbart förlita sig på intuition.
          </p>
          <p class="text-sm text-left pb-10">
          Slutligen, som marknadsförare använder vi många Google-verktyg: Search Console, Google Ads, Data Studio, Google Tag Manager, Google Optimize med flera. Alla dessa verktyg integreras smidigt med Google Analytics.
          </p>

          <h1 class="text-2xl uppercase pb-5">Bättre kontroll med Google Search Console</h1>
          <p class="text-sm text-left pb-5">
          Google erbjuder ett kostnadsfritt verktyg som heter Google Search Console. Google Search Console hjälper att
          <strong class="text-rose-300"> spåra webbplatsens prestanda och för att hitta eventuella problem med hemsidans sidor </strong>
          så att dessa kan åtgärdas. Det är ett kraftfullt men komplext verktyg.
          </p>
          <p class="text-sm text-left pb-5">
          Google Search Console är något vi starkt rekommenderar att använda sig av om man vill ha
          <strong class="text-rose-300"> bättre kontroll och kunna påverka det som sker på sin sajt. </strong> 
          Plattformen låter dig även följa aktiviteten hos de besökare som kommit på sidan, vilken sida de landat på samt hur de sedan navigerat sig fram genom de olika målsidorna. 
          </p>
        `}

        cardTitle3={"Hur kommer du igång med GSC?"}
        cardDesc3={`
          <p class="text-sm text-white pb-5">
          För att börja använda Google Search Console beger du dig helt enkelt till 
          <a href="https://search.google.com/search-console" class="text-green-400"> dess webbplats </a> 
          och loggar in med ditt Google-konto – då helst det som du redan använder för Google Analytics och eventuella Google-tjänster du redan använder dig av, så att du har allt samlat under ett och samma konto.
          </p>
          <p class="text-sm text-white pb-5">
          När du väl har registrerat dig på plattformen börjar du med att fylla i din hemsidas webbadress, varefter du får en kod som ska placeras på din hemsida. Efter att Search Console verifierat att koden finns på din hemsida kan det ta några dagar innan tillräcklig data har samlats in.
          </p>  
        `}
        underCard3Desc={`
          <div class='pt-5 heading-container text-black bg-white'>
          <h1 class="text-xl text-center uppercase pb-5">Vilken typ av information hämtar Google Search Console?</h1>
          <p class="text-sm text pb-5">
          Verktyget ger dig en översikt över hur din webbplats visas på sökmotorernas resultatsidor, inklusive 
          <em> totala antalet klick, intryck, position, klickfrekvens </em>  och
          <em> vilka sökningar din webbplats visas för. </em>  Med filter kan du sortera datan utifrån
          <em> plats, datum, typ av sökning </em> och mycket mer. Dessa uppgifter är avgörande för att 
          <strong class="text-rose-300"> förstå effekten av din sökmotoroptimering. </strong> 
          </p>
          </div>
    
          <div class="heading-container">
          <p class="text-sm pb-5">
          Information som du kan få är:
          </p>
          <ul class="list-disc text-sm text-gray-600">
          <li class="pb-5 ">
            <strong class="text-base">
            Rapport om indextäckning / coverage
            </strong>
            <br />
    
            Den här rapporten ger dig information om de webbadresser som
            <strong class="text-rose-300"> Google har försökt indexera på din webbplats, </strong>
            och om eventuella problem som Google har haft vid denna indexering. När botar söker igenom internet bearbetar den varje sida den hittar för att
            <strong class="text-rose-300"> sammanställa ett index </strong>
            över varje ord som den ser på varje hemsida. Den tittar också på innehållstaggar och attribut som titlar och alt-texter.
          </li>
          <li class="pb-5">
            <strong class=" text-base">
            Webbplatskarta / Sitemap
            </strong>
            <br />
    
            I GSC under "
            <em>Sitemaps</em>
            ” kan du se information om din webbplats sitemap, om det finns en sådan och när den senast uppdaterades. Skulle du upptäcka att det var längesen din webbplatskarta hämtades, kan det vara en god idé att skicka in webbplatskartan på nytt, för att uppdatera antalet webbadresser som hämtats in. Detta hjälper dig att
              <strong class="text-rose-300"> hålla koll på hur Google läser av din sitemap och om alla sidor du vill ska synas, visas som de ska. </strong>
            </li>
    
            <li class="pb-5">
            <strong class="text-base">
            Borttagningar / removals
            </strong>
            <br />
    
            Om du av någon anledning tillfälligt behöver
            <strong class="text-rose-300"> blockera en sida från Googles sökresultat </strong>
            går du till
            <em> borttagningar (removals). </em>
            Du kan dölja en sida i ungefär 90 dagar innan denna upphör. Skulle du vilja ta bort en sida permanent från Googles sökning måste du göra det på din webbplats.
            </li>
    
            <li class="pb-5">
            <strong class=" text-base">
            Diagnos av huvudvärden / Core Website Vitals
            </strong>
            <br />
    
            De viktigaste värden hos en webbplats är
            <strong class="text-rose-300"> de som påverkar din sökrankning. </strong>
            De omfattar
            <em> hastighet, användbarhet </em>
            och
            <em> visuell stabilitet. </em>
            Dessa är numera rankningssignaler och är något du bör vara uppmärksam på.
            </li>
    
    
            <li class="pb-5">
            <strong class=" text-base">
            AMP / Accelerated Mobile Pages
            </strong>
            <br />
    
            <em> AMP </em>
            är ett initiativ med öppen källkod som är utformat för att tillhandahålla mobila webbplatser med snabb laddning som fungerar även vid långsamma anslutningshastigheter. Hit kan du gå för att börja skapa en förstasida om du inte redan har en. Detta ger dig en standardkodning som du sedan kan anpassa vidare.       
            
            
            </li>
    
    
            <li class="pb-5">
            <strong class=" text-base">
            Länkar / Links till din webbplats
            </strong>
            <br />
    
            Är du nyfiken på dina
            <em> externa länkar? </em>
            GSC visar
            <strong class="text-rose-300"> vilka domäner som länkar till din hemsida, </strong>
            samt
    
            <strong class="text-rose-300"> vilka sidor på webbplatsen som får flest länkar till sig. </strong>
            Genom att scrolla ner i det vänstra sidofältet och klicka dig vidare till ”länkar”. för att få en fullständig rapport om alla länkar som pekar till din webbplats. Detta är förmodligen
            <strong class="text-rose-300"> den mest omfattande listan över de externa och interna länkar </strong>
            som du kan hitta utan att behöva betala. Det är ett kraftfullt verktyg som låter dig få en övergripande blick över hur innehållet på din hemsida utnyttjas och vad som fungerar bäst i Googles ögon.
            </li>
    
    
    
            <li class="pb-5">
            <strong class=" text-base">
            Manuella åtgärder / Manual Actions
            </strong>
            <br />
    
            Under fliken
            <em> Manuella åtgärder </em>
            kan du få reda på om någon av dina sidor
            <strong class="text-rose-300"> inte uppfyller Googles riktlinjer </strong>
            för webmasters kvalitet. Dessa åtgärder är ett bra sätt att få reda på om det sker eventuell
            <em> spamming </em>
            , och låter dig ta åtgärder mot detta.
    
            </li>
    
    
            <li class="pb-5">
            <strong class=" text-base">
            Användarbarhet på mobila enheter / Mobile Usability
            </strong>
            <br />
    
            Under fliken
            <em> användarbarhet på mobila enheter </em>
            kan du kontrollera att alla sidor på webbplatsen överensstämmer med Googles riktlinjer för att
            <strong class="text-rose-300"> korrekt visas på mobila enheter. </strong>
            Några av de saker som Google kan reagera på är bland annat
            <em> textstorlek, visningsinställningar </em>
            eller till och med
            <em> närheten till klickbara element. </em>
            Saker som dessa kan påverka rankingen av ens mobila webbplats negativt och leda till att sajten hamnar längre ner på resultatsidan.  Att hitta och åtgärda dessa fel kommer att
            <strong class="text-rose-300"> förbättra användarupplevelsen och resultaten. </strong>
            Se även till att kontrollerar din webbplats mobilhastighet då antalet användare som använder sin telefon för att surfa ständigt ökar.
            </li>
    
            <li class="pb-5">
            <strong class=" text-base">
            Genomsökning / Crawl stats
            </strong>
            <br />
    
            Vill du ha en mer djupgående analys av
            <strong class="text-rose-300"> hur ofta sökbotar söker igenom din webbplats </strong>
            kan du använda rapporten för detta under
            <em> Inställningar {'>'} Crawlstatistik. </em>
            Här kan du se
            <strong class="text-rose-300"> hur ofta sidorna på webbplatsen genomsöks, </strong>
            samt
            <strong class="text-rose-300"> vilka nedladdningstider hemsidan har. </strong>
            Enligt Google finns det inget ”bra” antal genomsökningar, men de ger ändå bra insikt i plötsliga toppar eller dalar i genomsökningsfrekvensen.
            </li>
    
    
            <li class="pb-5">
            <strong class=" text-base">
            Granskning av webbadress / URL inspektion / URL Inspection
            </strong>
            <br />
    
    
            Det här verktyget är användbart då det gör det möjligt att
            <strong class="text-rose-300"> göra en testkörning av hur Google går igenom och visar en specifik URL på webbplatsen </strong>
            i fråga. Det är ett bra sätt att se till att botarna får tillgång till en sida som annars skulle kunna förbises. Vill du ha tillgång till koden för webbplats går du vidare till ”Visa testad sida”. Här får du en skärmdump på
            <em> HTML-koden </em>
            och eventuella spårningsfel. Detta visades tidigare som en egen rapport, medan den nu finns i URL-inspektionen under
            <em> ”Täckning”</em>
            .
            </li>
    
    
            <li class="pb-5">
            <strong class=" text-base">
            Tester av Robots.txt /  Robots.txt Tests
            </strong>
            <br />
    
            Om du använder en
            <em> robot.txt-fil </em>
            för att
            <strong class="text-rose-300"> blockera Googles crawlers från en viss resurs, </strong>
            kan du med detta verktyg dubbelkolla att allt fungerar. Skulle du exempelvis av någon anledning ha en bild som du inte vill ska visas i en
            <em> Google Image Search, </em>
            kan du här testa din robot.txt för att se till att bilden inte dyker upp där du inte vill att den ska visas. Genom att testa detta får du antingen meddelandet
            <em> ”Accepterad” </em>
            eller
            <em> ”Blockerad” </em>
            , och kan sedan redigera därefter.
            </li>
    
    
            <li class="pb-5">
            <strong class=" text-base">
            URL-parametrar / URL Parameters
            </strong>
            <br />
    
            Google rekommenderar att man använder det här verktyget med försiktighet, eftersom en felaktig URL-parameter kan ha en negativ inverkan på hur webbplatsen genomsöks. Att använda detta låter dig 
            <strong  class='text-rose-300'> hålla koll på adressers prestanda </strong>
            och se till att de inte pekar sökbotarna i fel riktning.
    
            </li>
    
    
    
          </ul>
    
          <p class="text-sm text pb-5">
          Som du förstår ger Google Search Console
          <strong class='text-rose-300'> en bra inblick i hur din webbplats fungerar och presteras i sökmotorernas ögon. </strong>
          Det låter dig veta vad du kan göra för att behålla Googles uppmärksamhet och hur du ska 
          <strong class="text-rose-300"> göra din sajt både mer användarvänlig. </strong>
          När du väl har lärt dig grunderna i hur verktyget fungerar, kan du sedan gå vidare till att använda datan som samlas in till att förbättra hemsidan och få din trafik att öka.
          </p>
    
          </div>
        `}

        mainTitle3={"Varför ska man anlita en SEO-byrå?"}
        mainDesc3={`
          <p class="text-sm pb-10">Om du har pengar i din budget för digital marknadsföring, finns det många goda skäl att anlita en SEO-byrå för att hjälpa till med saker som meta-nyckelordsfraser, stärka din länkprofil och skapande av bra content:</p>
          <ul class="list-disc text-base pb-10">
          <li>
          Du har inte tid att sköta din webbplats.
          </li>
          <li>
          Du vill hålla dig uppdaterad inom SEO-branschen.
          </li>
          <li>
          Du vill ha hjälp med att söka efter sökord som ger resultat.
          </li>
          <li>
          Du vill öka din organiska trafik till hemsidan.
          </li>
          <li>
          Du vill hålla nere kostnaderna med bra optimerade annonser.
          </li>
          <li>
          Du vill bli utbildad av en byrå som kan sökmotoroptimering.
          </li>
          </ul>
          <p class="text-sm pb-5">
          Men du bör inte anlita en SEO-byrå som lovar att snabbt ge dig topplaceringar. Även om de på något sätt lyckas få din webbplats på första plats, kommer dina placeringar att sjunka utan en stark grund att stå på, och du förlorar i längder mer än du har vunnit.
          </p>
          <p class="text-sm pb-5">
          SEO är för långsiktigt inriktade digitala entreprenörer som har bestämt sig för att hjälpa användarna att hitta de svar de behöver, samt för att öka tillväxten på lång sikt.
          </p>
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
      <HeadingSEO8 
      mainTitle1={"Öka försäljningen med Google My Business"}
      mainDesc1={`
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
      `}


      cardTitle1={"Vad är Google My Business?"}
      cardDesc1={`
        <p class="text-sm text-white pb-5">
        GMB är inte bara en plats där människor kan hitta grundläggande information om ditt företag. När Google My Business används på rätt sätt är det 
        <strong> ett kraftfullt verktyg som kan öka dina intäkter och ge värdefulla insikter om dina kunder.</strong>
        </p>
        <p class="text-sm text-white pb-5">
        Cirka 95 % av alla sökningar idag sker på just Google. Sökmotorn dominerar helt enkelt när det kommer till att söka på nätet. 
        <strong> Varje sekund som går på dygnet letar människor efter nya saker att köpa. </strong>
        Du som har en produkt att sälja kan helt enkelt inte riskera att inte synas på plattformen.
        </p>
      `}
      underCard1Desc={`
        <p class="text-sm  pb-5">
        För att sätta saker och ting i perspektiv 
        <strong class="text-rose-300"> görs det ungefär 3,5 miljarder sökningar varje dag. </strong>
        De flesta användare kommer dock inte längre än till Googles första sida av sökresultat. I en studie undersöktes antalet klick för varje Google-sökresultat, och visade att antalet klick minskade exponentiellt på bara sida två.
        </p>
        <p class="text-sm  pb-5">
        Med andra ord hittar din potentiella kund den produkt den söker på Googles första sida. Även om det finns andra sätt att få sitt företag att visas på Googles första sida, 
        <strong class="text-rose-300"> är Google My Business ett otroligt värdefullt </strong>
        (och enkelt) 
        <strong class="text-rose-300"> verktyg </strong>
        som kan hjälpa dig otroligt mycket.
        </p>
        <p class="text-sm  pb-5">Genom att använda dig av GMB kan du:</p>

        <p class="text-sm  pb-5">1. Kontrollera, indexera och visa upp relevant företagsinformation.</p>
        <p class="text-sm  pb-5">2. Interagera med potentiella kunder och hantera ditt rykte i online-recensioner.</p>
        <p class="text-sm  pb-5">3. Samla in foton, videor och annat användargenererat innehåll från kunder.</p>
        <p class="text-sm  pb-5">4. Samla insikter om hur dina kunder kommer till din webbplats.</p>
      `}
      underCard1Desc2={`
        <h1 class="text-center text-xl pt-5 pb-5 ">Att göra anspråk på sin GMB ökar trafiken</h1>
        <p class="text-sm  pb-5">
        Google My Business är officiella företagslistor som innehåller ditt företags telefonnummer och adress.
        <strong class="text-rose-300"> Det är mycket viktigt att göra anspråk på sin lokala Google My Business. </strong>
        Med sin GMB säger man i princip åt Google att lista sitt företag i det område där man har flest kunder eller klienter.
        </p>
        <p class="text-sm pb-5">
        Men att bara lista ditt företag i Google Local ökar inte dina placeringar organiskt. Några av de saker du måste göra för att få de rankningar du vill ha är följande:
        </p>
          
          <ul class="text-sm list-disc">
          <li class="text-base">
          Håll dig konsekvent
          </li>
          <p class="pb-5">
          Varken Google eller Bing nöjda med inkonsekvens. För att förbli konsekvent i innehållsmarknadsföring bör du alltså 
          <strong class="text-rose-300"> använda samma uppgifter </strong>
          som du gör på gästbloggar, på dina profiler i sociala medier och på alla andra platser online som ditt företag visas på. 
          <strong class="text-rose-300"> Detta gör det betydligt lättare för sökmotorer att koppla ihop allt. </strong>
          </p>

          <li class="text-base">
          Uppmana till interaktioner
          </li>
          <p class="pb-5">
          Få människor att prata om ditt företag. Be dem länka till din lokala GMB. Man kan alltid använda
          <em> Link Explorer </em> 
          för att ta reda på vilka som länkat till sin webbplats och meddela dem om din företagsnotering.
          <strong class="text-rose-300"> ju fler människor pratar om ditt företag, </strong>
          med recensioner och länkar från egna sidor eller sociala medier, 
          <strong class="text-rose-300"> desto större chans har du att få bättre positioner hos sökmotorerna. </strong>
          </p>
        </ul>

        <h1 class="text-center text-xl pt-5 pb-5 ">Myter om sökmotoroptimering som du aldrig bör lyssna på</h1>
        <h2 class="text-center pt-5 pb-5 ">HUR ÖKAR MAN SIN TRAFIK MED ÖVER 13% PÅ BARA 30 DAGAR?</h2>
        <p class="text-sm  pb-5">
        Man följer en beprövad SEO-strategi. En strategi som hittar en sökande marknad, man skapar ett djupgående innehåll som backas upp av statistik och data, man löser ett konkret problem och marknadsför blogginlägg. Denna strategi verkar grundläggande, men det är så man vinner i längden med SEO.  
        </p>
        <p class="text-sm  pb-5">
        Verkligheten är att organisk trafik konverterar 9 % bättre än trafik från sociala medier. Dessa SEO-myter tenderar att hindra hårt arbetande marknadsförare och bloggare från att förbättra sin trafik och sin position på nätet.
        </p>
        <p class="text-sm  pb-5">
        Många som arbetar med sökmotorer hävdar att de är knutna till Google. Detta stämmer med största säkerhet inte, eftersom Google inte avslöjar vilka deras SEO-partners och affiliates är. Så om en SEO-konsult eller SEO-byrå lovar dig topplaceringar för ett ”lågt” pris per månad bör du oroa dig istället för att nappa. Ingen kan garantera topplaceringar i Googles sökmotorer.
        </p>
        <p class="text-sm  pb-5">
        Vi på Effektify har tagit reda på de allra vanligaste myterna kring sökmotoroptimering som du bör ignorera. Vi ger tips om vilka råd du bör följa för en smart SEO-strategi och säker digital marknadsföring.
        </p>


        <h2 class="text-center pt-5 pb-5 ">”EN XML-SITEMAP KOMMER ATT FÖRBÄTTRA DIN POSITION”</h2>
        <p class="text-sm  pb-5">
        Även om det kanske inte är det viktigaste för din ranking, är en XML-sitemap nödvändig om du vill bygga en sökbar webbplats. Varje gång du skapar ett nytt inlägg eller redigerar ett befintligt inlägg, skapar Google XML-sitemapgeneratorn en uppdaterad sitemap med dina nya målsidor. Denna sitemap skickas sedan till Google och andra sökmotorer. Vad vi vet är att en XML-sajtkarta hjälper sökmotorerna att snabbare genomsöka och indexera nya sidor. Men förbättrar det sökmotorernas rankning?
        </p>
        <p class="text-sm  pb-5">
        Redan 2008 talade Trevor Foucher och Susan Moskwa från Webmaster Tools-teamet, som är en del av panelen för sitemaps på Search Engine Strategies i Chicago. En av de många frågor de fick var: ”Kommer en sitemap att hjälpa mig att få en bättre placering?”. Trevors svar var att en webbplatskarta påverkar verkligen inte rankningen av dina webbsidor. Webbplatskartor är som ett hjälpmedel – en guide som ger Google mer information om din webbplats. De till att alla dina webbadresser är indexerade, för att underlätta sökningen. Det utgör egentligen inte grunden för digital marknadsföring, de ser till att det indexeras snabbt.
        </p>
        <p class="text-sm  pb-5">
        Även om detta var för tio år sedan gäller samma sak i dag. En sitemap kan leda till ökad synlighet för din webbplats så småningom, när URL:erna på siten prioriteras. Men det är ingen garanti. Om du inte redan använder Google XML Sitemaps generatorn på din WordPress-webbplats bör du installera den nu. Det finns ingen garanti för att dina placeringar kommer att förbättras. Men det kommer att hjälpa Google att upptäcka din content snabbare.
        </p>

        <h2 class="text-center pt-5 pb-5 ">”METATAGGAR HAR INGEN STÖRRE BETYDELSE”</h2>
        <p class="text-sm  pb-5">
        Metataggar är HTML-taggar som finns mellan de inledande och avslutande -taggarna. De används för att visa förhandsvisningar av en viss webbsida i sökresultaten.
        </p>
        <p class="text-sm  pb-5">
        De tre elementen i en metatag är:
        </p>
        <ul class="text-sm list-disc pb-5">
          <li>
          Titeltaggen
          </li>
          <li>
          Metabeskrivningen
          </li>
          <li>
          Meta nyckelord eller fraser
          </li>
        </ul>
        <p class="text-sm  pb-5">
        Titeltaggen visas i avsnittet  på en webbsida, och är ett nödvändigt sidelement. Metabeskrivningen och nyckelorden är däremot valfria sidelement. Utan metabeskrivningen kan Google dock hämta text från sidans innehåll som förhandsgranskningsutdrag. Även om Google inte använder metataggen för nyckelord i sidrankningen, är beskrivningar av nyckelord i metataggen fortfarande relevanta och det är klokt att lägga tid på dem.
        </p>
        <p class="text-sm  pb-5">
        Metataggar gör också dina sökresultat attraktiva, vilket kan locka till fler klick från användare som känner att din webbplats har ett högkvalitativt innehåll som fyller deras behov. Det är här som din digitala marknadsföring börjar förbättras och ger högre ranking i sökmotorerna.
        </p>
        <p class="text-sm  pb-5">
        Du kan ta hand om meta-sökordsfraser, titeltaggar och beskrivningar med WordPress-pluginet All In One SEO.
        </p>

        <h1 class="text-center text-xl pt-5 pb-5 ">Använd de här tipsen för att skapa innehållsrika metabeskrivningar:</h1>
        <ul class="text-sm list-disc pb-5 space-y-5 ">
          <li>
            <strong class="text-base">Gör dem beskrivande </strong>
            – Lägg in sökord som är relevanta för artikeln. Om du gillar formler, fråga “Vem? Vad? Varför? När? Var? Hur?” Det är en formel som journalister använder för att rapportera. Den fungerar lika bra när man skriver beskrivningar för sökmotoroptimering
          </li>
          <li>
            <strong class="text-base">Gör dem unika </strong>
            – Varje metabeskrivning bör skilja sig från dina andra sidors beskrivningar
          </li>
          <li>
            <strong class="text-base">Gör dem korta </strong>
            – Google begränsar metabeskrivningar till 160 tecken eller mindre. Att skriva mer än det är inte bra då de inte anses följa standarden och klipps ner.
          </li>
        </ul>


        <h1 class="text-center text-xl pt-5 pb-5 ">”ANVÄND META ROBOT TAGGEN FÖR ATT SPECIFICERA INDEXERBARA SIDOR”</h1>
        <p class="text-sm  pb-5">
        Filen Robots.txt talar om för sökmotorbotar vilka delar (sidor, länkar etc.) av din webbplats som ska genomsökas och indexeras och vilka som ska ignoreras. Man kan enkelt ställa in noindex- och nofollow-taggar med hjälp av WordPress-plugins Yoast eller All in One SEO.
        </p>
        <h1 class="text-lg pt-5 pb-5 "><i class="fa-regular fa-square-check text-green-500 fa-xl text-left"></i> Robots Meta NOINDEX</h1>
        <h1 class="text-lg pt-5 pb-10  "><i class="fa-regular fa-square-check text-green-500 fa-xl text-left"></i> Robots Meta NOFOLLOW</h1>
        <p class="text-sm  pb-5">
        Man bör endast markera knappen NOINDEX om man är säker på att man vill att sidan ska vara privat och inte synlig för allmänheten. Detta betyder dock inte att Google inte kommer att hitta dina nya sidor om du inte anger metarobotstaggen. Man behöver inte specificerade vilka sidor som Google ska indexera. Om man inte vill göra specifika sidor privata finns det egentligen ingen anledning att gå igenom det besväret.
        </p>
        <p class="text-sm  pb-5">
        Man kan använda filen Robot.txt för att blockera alla webbläsare från allt innehåll, en specifik mapp eller en specifik webbsida. Men om man inte behöver blockera webbläsare behöver man inte bry dig om det. Spara tid och kanalisera den till något viktigare i din innehållsmarknadsföring och SEO-strategi.  
        </p>


        <h1 class="text-center text-xl pt-5 pb-5 ">
        ”TOPPDOMÄNER FÖRBÄTTRAR RANKNINGEN”
        </h1>
        <p class="text-sm  pb-5">
        En toppdomän har den högsta positionen i det hierarkiska domännamnssystemet. De flesta sökanvändare känner igen .com som ett webbplatstillägg, men kan bli förvirrade när de hittar .biz eller .guru. Detta beror delvis på att 98 % av sökresultaten när du skriver in en sökordsfras i Googles sökning är .com-domännamn.
        </p>
        <p class="text-sm  pb-5">
        Det enda undantaget är domäner som kan riktas till geografiska målgrupper. Om jag bor i Kanada men har ett .com-domännamn antar Google att min målgrupp är global och visar mina webbsidor i sina sökresultat för den globala målgruppen. Å andra sidan kommer en kanadensisk webbplats inom samma bransch med ett .ca-tillägg att visas främst för sökanvändare från det landet.
        </p>
      `}

      cardTitle2={"MINNESVÄRDT OCH PROFESSIONELLT DOMÄNNAMN"}
      cardDesc2={`
        <p class="text-sm text-white pb-5">
        År 2007, före uppdateringarna av Googles algoritmer, införde ICANN nya generiska toppdomännamn – till exempel .guru, .club, .company och .email. Men efter mer än 10 år är .com fortfarande överlägset alla dessa namn när det gäller global användning. Den viktigaste faktorn för om toppdomäner har en effekt på SEO-innehållsmarknadsföring, är om domänen innehåller nyckelord eller inte.
        </p>
        <p class="text-sm text-white pb-5">
        Dessa uppgifter ska inte skrämma dig, utan snarare vägleda dig. Nu vet du att när du väljer toppdomäner är det viktiga det långsiktiga varumärket och fördelarna när du registrerar ett minnesvärt och professionellt domännamn. Om du ännu inte har registrerat något domännamn rekommenderar vi dig att välja toppdomännamn (.com och .net). Äger du dock redan en webbplats ska du fokusera på att erbjuda ett enormt värde, skapa innehåll av hög kvalitet och använda sociala medier för att få kontakt med influencers som kan hjälpa dig att marknadsföra ditt innehåll. Vi har sett domännamn med konstiga tillägg göra bra ifrån sig i sökningar.
        </p>
      `}
      />
      <Heading
      bg={"bg-white"}
      textColor={"text-black"}
      title={"ATT INKLUDERA ETT SÖKORD I SIN ANKARTEXT HAR INTE LÄNGRE NÅGON BETYDELSE FÖR SEO"}
      descCustomHtml={`
      <p class="text-sm text-left pb-5">
      Ankartext är den klickbara texten i en hyperlänk. När man klickar på frasen tar den användaren till målsidan som är länkad. Många branschexperter tror att ankartext kommer att förbli en rankingfaktor för alltid, oavsett vilka förändringar som kommer med nästa Google-uppdatering.</p>
    <p class="text-sm text-left pb-5">
      Målet med varje uppdatering eller ändring av algoritmen är att hjälpa sökare att hitta rätt webbplatser som innehåller den information de behöver på ett användarvänligt sätt. Överoptimering kan leda till att du straffas av Google. Innan Google Penguin kom, kunde du använda sökordsrik ankartext i dina blogginlägg, både för intern länkning och extern länkning (dvs. länkning till andra webbplatser). Sökmotorerna har nu upptäckt detta trick och straffar dig.</p>
      <p class="text-sm text-left pb-5">
      Det finns dock en liten förändring nu. Kontextuella länkar 5-10 gånger mer rankingkraft vanliga blogglänkar som till exempel visas i dina gästinlägg, men överdriven användning av sökordsrik ankartext kan eventuellt att påverka rankningen av din webbplats negativt. Korslänkning med rik ankartext är lika riskabelt och bör därför också undvikas. Men att säga att ankartext som innehåller sökord inte längre kommer att vara relevant i sökmotorrankningen är inte korrekt, och med andra ord en myt. 
      </p>
      <p class="text-sm text-left pb-5">
      Ändra ditt tillvägagångssätt. Variera ankartexten och se till att dina primära och sekundära sökord, dina meta-sökordsfraser samt ditt varumärke, din URL och generiska sökord används som ankartexter.
      </p>
      <p class="text-sm text-left pb-5">
      Vi gillar att bygga naturliga länkar, för det är vad Google vill ha. Du kan inte vara smartare än de som tillbringar sina arbetsdagar med att få algoritmen att fungera bättre. Fokusera istället på högkvalitativt innehåll och undvik straff från Google och andra sökmotorer. Efter Penguin-uppdateringen blev de flesta webbplatser med optimerad ankartext straffade. Å andra sidan upplevde en webbplats med diversifierad ankartext ett uppsving och endast ett fåtal av dem påverkades negativt.
      </p>
      <p class="text-sm text-left pb-5">
      Det finns flera typer av ankartext som du kan använda, men varumärkesbyggande är det enklaste sättet att sticka ut positivt i Googles ögon.
      </p>

      <h1 class="text-lg text-left uppercase pb-5">Du kan alltså följa den här ankartextstrategin:</h1>
      <p class="text-base text-left pb-5">1. Naturlig ankartext</p>
      <p class="text-sm text-left pb-5">Det kan vara en ankartext med nyckelord, varumärke eller URL. Den ska flyta naturligt med resten av innehållet. Dessa är oftast redaktionella länkar och kommer definitivt att påverka dina placeringar.</p>

      <p class="text-base text-left pb-5">2. Ankartext för varumärket eller varumärkets URL</p>
      <p class="text-sm text-left pb-5">Om du kan skapa mer varumärkes- eller URL-ankringstext bör du klara dig bra. Sträva efter att ha varumärkesankringstext i ungefär 90 % av dina länkar.</p>
      <p class="text-sm text-left pb-5">Det finns tusentals nyckelord som du skulle kunna använda i sin länkprofil för att bygga länkar, utan att späda ut sin webbplatsstrategi. Istället är de flesta ankartexter som pekar på ens egna målsidor oftast antingen varumärkesnamn, varumärkes-URL:er eller rena URL:er . Du kan naturligtvis inte kontrollera vilken ankartext en besökare använder för att länka till din webbplats. Men om du har möjlighet till det, antingen genom gästbloggande eller intervjuer, bör du undvika sökordsrik ankartext. Detta är en del av digital marknadsföring. Eller ännu bättre, använd ditt varumärke + nyckelord. Du kan också använda varumärkets webbadresser som ankartext.</p>
      
      <p class="text-base text-left pb-5">3. Generisk ankartext</p>
      <p class="text-sm text-left pb-5">Använd den inte i för stor utsträckning, eftersom den kan visa sig vara överoptimerad. Minst 5 % av dina ankarlänkar bör vara generiska, särskilt när du länkar till eller från en irrelevant sida. Förstå din länkprofil. Om man till exempel vill göra en hänvisning till en sportwebbplats från en blogg om digital marknadsföring är det bäst att använda generiska nyckelord.</p>

      <h1 class="text-lg uppercase pb-5">Du kan alltså följa den här ankartextstrategin:</h1>
      <p class="text-base text-left pb-5">
      Denna myt är farlig att lyssna på. När det kommer till digital marknadsföring och sökmotoroptimering har du inte råd att ignorera högkvalitativ sökordsanalys för din webbplats.
      </p>
      <p class="text-base text-left pb-5">
      Vad du bör undvika är överoptimering, överdriven användning av söksordsrika ankartexter och uppdateringar av Exact Match Domain. Fokusera på ROI, istället för på topplaceringar för det sökordet. Trots allt, oavsett om du rankas på plats 1 eller 5, är det viktiga vad du får tillbaka.
      </p>
      <p class="text-base text-left pb-5">
      Sökordsanalys är i hög grad fortfarande relevant. Men för att vara säker bör du fokusera på användarens avsikt bakom sökningen, inte bara på själva nyckelorden, vilket även gäller meta-sökordsfraserna.
      </p>
      `}
      />

      <HeadingSEO9 
      mainTitle={"För dig som behöver lokal sökmotoroptimering"}
      listButton={"Välj din stad i listan nedan"}
      city1={"Umeå"}
      city1Link={"/seo-sokmotoroptimering-umea/"}
      city2={"Upplands väsby"}
      city2Link={"/seo-sokmotoroptimering-upplands-vasby/"}
      city3={"Uppsala"}
      city3Link={"/seo-sokmotoroptimering-uppsala/"}
      city4={"Varberg"}
      city4Link={"/seo-sokmotoroptimering-varberg/"}
      city5={"Västerås"}
      city5Link={"/seo-sokmotoroptimering-vasteras/"}
      city6={"Växjö"}
      city6Link={"/seo-sokmotoroptimering-vaxjo/"}
      city7={"Örebro"}
      city7Link={"/seo-sokmotoroptimering-orebro/"}
      city8={"Östersund"}
      city8Link={"/seo-sokmotoroptimering-ostersund/"}
      />
      
    </>
  );
}
