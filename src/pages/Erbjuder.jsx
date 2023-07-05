import React from 'react'
import { Heading7 } from '../components/Heading7'
import { HeroButton } from '../components/HeroButton'
import { Headinglist } from '../components/Headinglist'
import { StatsHero } from '../components/StatsHero'


/* Videos */
import videoStatsHero from '../assets/City-By-Night-low.mp4'
import videoHeroButton from '../assets/spaceloop2.mp4'


/* Images for stats */
import img from '../assets/stats1.webp'
import img2 from '../assets/stats2.webp'
import img3 from '../assets/stats3.webp'

export default function Erbjuder() {
  return (
    <>
    <StatsHero 
      videoLink={videoStatsHero}
      title1={"Det krävs en strategi för att växa"}
      title2={"MED TYDLIGA STRATEGIER OCH TRANSPARANS EFFEKTIVISERAR vi TILLVÄXT OCH LÖNSAMHET"}
      title3={"Siffrorna talar sitt tydliga språk"}
      title4={"Med strategier som fungerar har vi hjälpt företag att synas med"}


      videoLink2={"https://player.vimeo.com/progressive_redirect/playback/714795502/rendition/1080p/file.mp4?loc=external&signature=f10571525f87060048a4f457365b416995804594ef77eb283e82fe660968d63e"}
      desc={"Vi hjälper idag över 250 företag i Sverige, övriga Norden, Tyskland och Nederländerna. Ert mål är vår drivkraft, och utifrån full transparens i alla led och med dagens teknik, strävar vi på effektify mot att skapa tillväxt och lönsamhet för er som har en vision och en dröm."}
      stats1={"1047"}
      underStats1={"Sökord i top 3"}
      stats2={"1832"}
      underStats2={"sökord i top 10"}
      stats3={"2408"}
      underStats3={"sökord i top 20"}
    />
    <Heading7
      smallTitle={"Syns du inte så finns du inte"}
      title={"Med tydliga resultat hjälper vi företag att öka sin digitala närvaro"}
      desc={"Google är i särklass den största sökmotorn i världen. 95% av alla sökningar som görs idag sker via plattformen, och endast i Sverige görs det här dagligen mer än 50 miljoner sökningar. Eftersom allt fler företag förstår betydelsen med bra synlighet på Google, är det därför oerhört viktigt att aktivt se till att hålla en så god position som möjligt. Ju bättre du syns, desto mer besökare får din hemsida."}
      img={img}
      img2={img2}
      img3={img3}
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
    <HeroButton 
      title={"We're ready for takeoff"}
      title2={"are you?"}
      buttonLink={"/kontakt"}
      buttonText={"Launch"}
      videoLink={videoHeroButton}
    />
    </>
  )
}
