import React from 'react'
import { Hero9 } from '../components/Hero9'
import { Heading7 } from '../components/Heading7'
import { HeroButton } from '../components/HeroButton'
import { Headinglist } from '../components/Headinglist'
import { HeadingSEO } from '../components/HeadingSEO'
import { HeadingSEO2 } from '../components/HeadingSEO2'
import ContactForm from '../components/ContactForm'
import { HeadingCity } from '../components/HeadingCity'
import { HeadingSEO3 } from '../components/HeadingSEO3'
import { HeadingCity2 } from '../components/HeadingCity2'
import { HeadingSEO4 } from '../components/HeadingSEO4'
import { HeadingCity3 } from '../components/HeadingCity3'
import { HeadingSEO5 } from '../components/HeadingSEO5'
import { HeadingCity4 } from '../components/HeadingCity4'
import { HeadingSEO6 } from '../components/HeadingSEO6'
import { HeadingCity5 } from '../components/HeadingCity5'
import { HeadingSEO7 } from '../components/HeadingSEO7'
import { HeadingSEO8 } from '../components/HeadingSEO8'
import { HeadingSEO9 } from '../components/HeadingSEO9'
import { StatsHero } from '../components/StatsHero'

/* Videos */
import videoHero from '../assets/trafic.mp4'
import videoHeroButton from '../assets/spaceloop2.mp4'


/* Images for stats */
import img from '../assets/stats1.webp'
import img2 from '../assets/stats2.webp'
import img3 from '../assets/stats3.webp'



export default function SEOSokopt() {
  return (
    <>
    <StatsHero 
    title1={"Öka trafiken till din hemsida med sökmotoroptimering"}
    videoLink={videoHero}
    title2={"Väx med seo / sökmotoroptimering"}
    desc={"Sökmotoroptimering, eller SEO som det också kallas, är en typ av digital marknadsföring där syftet är att öka ens synlighet i sökmotorernas organiska resultat. Sökmotoroptimering handlar alltså om att synas bra i det resultat som inte är betalda annonser hos sökmotorer så som Google, Bing och Yahoo. Om SEO utförs korrekt leder det till att ens webbplats syns högt upp i sökmotorers sökresultat på relevanta sökningar. Detta SEO-arbete innebär att man får fler besökare till sin webbplats vilket man i sin tur sedan förhoppningsvis kan konvertera till kunder."}
    title3={"Vi låter resultaten tala för sig själva"}
    title4={"Vi har tills nu hjälpt företag att synas  i Sverige & utomlands med"}
    stats1={"1047"}
    underStats1={"Sökord i top 3"}
    stats2={"1832"}
    underStats2={"Sökord i top 10"}
    stats3={"2408"}
    underStats3={"Sökord i top 20"}

    videoLink2={"https://player.vimeo.com/progressive_redirect/playback/714795502/rendition/1080p/file.mp4?loc=external&signature=f10571525f87060048a4f457365b416995804594ef77eb283e82fe660968d63e"}
    />

    <Heading7
      smallTitle={"Syns du inte så finns du inte"}
      title={"Exempel på hur vi hjälpt företag att växa med SEO"}
      desc={"Google är Sveriges i särklass största sökmotor och 95% av alla sökningar görs idag via deras plattform. I Sverige görs det varje dag mer än 50 miljoner sökningar på Google. Med siffror som dessa inser du säkert vikten av att synas högt upp i sökresultatet som Google visar upp. Konkurrensen mellan företag som vill ranka högt upp på är idag oerhört stor då många förstår betydelsen av vad en bra position innebär."}
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
    <HeadingSEO/>
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
    <HeadingSEO2/>
    <HeadingCity
    title={"Behöver du hjälp med sökmotoroptimering i din stad?"}
    desc={"På effektify håller vi oss städigt uppdaterade och utvecklar strategier för att företag ska få den hjälp som krävs för att sticka ut i sin specifika bransch. Tillsammans utarbetar vi en plan som får ditt företag att synas bättre i det område du är verksam i."}
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
    <HeadingSEO3 />
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
    <HeadingSEO4 />
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
      desc={"Har du frågor eller är redo att starta din digitala resa redan nu, är du välkommen att fylla i några rader eller maila oss på "}
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
  )
}
