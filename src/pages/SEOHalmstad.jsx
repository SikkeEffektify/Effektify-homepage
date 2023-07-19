import React from 'react'
import bg from '../assets/SEO-sokmotoroptimering-halmstad.jpg'
import stats from '../assets/seo-halmstad-stats.webp'
import { HeroButton } from '../components/HeroButton'
import ContactForm from '../components/ContactForm'
import videoHeroButton from '../assets/spaceloop2.mp4'
import { HeroImage } from '../components/HeroImage.jsx'
import { Heading } from '../components/Heading'

export default function SEOHalmstad() {
  return (
    <>

<HeroImage
image={bg}
titleLeft={"SEO Halmstad"}
desc={`
<p class='text-left text-sm text-white'>
        Låt oss ta den rollen! På samma sätt som du lyckades hitta vår hemsida när du sökte efter SEO Halmstad kan vi hjälpa dig synas när dina potentiella kunder söker efter produkter eller tjänster som du erbjuder. Vi har lång erfarenhet och bred kunskap inom sökmotoroptimering/SEO.
        </p>
        <p class='text-left text-sm text-white'>
        Det är ingen nyhet att synlighet skapar möjligheter för företag – både genom traditionell marknadsföring och digital marknadsföring. Att öka din synlighet online ökar också dina chanser att få fler besökare till din hemsida, och därmed fler kunder som sedan genererar större försäljning. Det finns många sätt att använda sig av digital marknadsföring på, och Effektify är inte enbart en SEO-byrå, vi hjälper våra kunder med allt inom digital marknadsföring, både i Halmstad och resterande Sverige.
        </p>
`}
/>
  

    <section>
    <div className='hero'>
    <div className="vidOverlay"></div>
    <video class="min-w-full min-h-full absolute object-cover" src="https://player.vimeo.com/progressive_redirect/playback/714795502/rendition/1080p/file.mp4?loc=external&signature=f10571525f87060048a4f457365b416995804594ef77eb283e82fe660968d63e" autoPlay loop muted />
    <div class="vidContent2 text-center heading-container ">
        <p class="text-base uppercase font-light">Vi låter resultaten tala för sig själva</p>
        <h1 class="uppercase text-2xl pt-5 pb-5">Vi har tills nu hjälpt företag i Halmstad att synas med</h1>
        <div class="ring-4 ring-yellow-400 pr-8 pl-8 pt-10 pb-10 rounded-full"> 
        <span>118</span>
        </div>
        <h3 class='text-2xl pt-5 pb-5'>Sökord i top 3</h3>
        <div class="ring-4 ring-green-400 pr-8 pl-8  pt-10 pb-10 rounded-full"> 
        <span>162</span>
        </div>
        <h3 class='text-2xl pt-5 pb-5'>Sökord i top 10</h3>
        <div class="ring-4 ring-pink-500 pr-8 pl-8 pt-10 pb-10 rounded-full"> 
        <span>219</span>
        </div>
        <h3 class='text-2xl pt-5 pb-5'>Sökord i top 20</h3>
    </div>
   </div>
    </section>

    <section> 

      <Heading
      bg={"bg-white"}
      title={"SEO Halmstad"}
      textColor={"text-black"}
      titlePosition={"text-center"}
      descCustomHtml={`
      <p class="uppercase text-xs pb-5">Syns du inte så finns du inte</p>
      <h1 class="text-lg uppercase">
      Behöver även du hjälp med SEO i Halmstad?
      </h1>
      <p class="text-left pt-10 text-base pb-5">
      SEO står för det engelska uttrycket Search Engine Optimization, vilket översatt till svenska är sökmotoroptimering. SEO består av många olika delar och är en viktig faktor för dig som vill att dina potentiella kunder ska hitta din webbplats när de gör sökningar på tjänster eller produkter som du erbjuder.
      </p>
      <p class="text-center pb-5 text-sm">
      Enkelt förklarat innebär 
      <a class="text-rose-300" target="_blank" rel="noopener noreferrer" href="/seo-sokmotoroptimering/"> SEO </a>
      att göra din webbplats synlig på Google och andra sökmotorer.
      </p>
      <img class="mx-auto pt-5 drop-shadow-lg" src="./src/assets/seo-halmstad-stats.webp" alt="" />
      `}
      />
    </section>

    <HeroButton 
      title={"We're ready for takeoff"}
      title2={"are you?"}
      buttonLink={"/kontakt"}
      buttonText={"Launch"}
      videoLink={videoHeroButton}
    />
    
    
    {/* håller statiskt för att den är annorlunda ifrån andra headinglist */}
    <section class="py-20 heading-container"> 

    <h1 class="text-lg text-white text-center pt-10 uppercase pb-5">För dig som vill veta mer om sökmotoroptimering</h1>
    <p class="text-white text-center pb-5" >Vanliga frågor om SEO i Halmstad</p>
   
    <div id="accordion-flush" data-accordion="collapse " class='pb-10' >
  <h2 id="accordion-flush-heading-1" class="button-no-back">
    <button type="button" class="flex button-no-back items-center justify-between w-full py-5 font-medium text-left text-white" data-accordion-target="#accordion-flush-body-1" aria-expanded="false" aria-controls="accordion-flush-body-1">
      <span class='uppercase'>Vad är lokal SEO- Halmstad?</span>
      <i class="fa-solid fa-angles-down pr-2 text-rose-300"></i>
    </button>
  </h2>
  <div id="accordion-flush-body-1" class="hidden" aria-labelledby="accordion-flush-heading-1">
    <div class="py-5 border-b">
      <p class="mb-2 text-sm tracking-wider  text-white">
      Sökmotoroptimering (SEO) står för Search Engine Optimization och handlar om hur man optimerar en webbplats för att den ska rankas så högt som möjligt i sökresultatet. Om din webbplats är SEO-optimerad för Halmstad kommer fler lokala kunder att ha större chans att hitta till din hemsida.
      </p> 
    </div>
  </div> 
  <h2 id="accordion-flush-heading-2" class="button-no-back">
    <button type="button" class="flex button-no-back items-center justify-between w-full py-5 font-medium text-left text-white" data-accordion-target="#accordion-flush-body-2" aria-expanded="false" aria-controls="accordion-flush-body-2">
      <span class='uppercase'>Lokal SEO analys- Halmstad?</span>
      <i class="fa-solid fa-angles-down pr-2 text-rose-300"></i>
    </button>
  </h2>
  <div id="accordion-flush-body-2" class="hidden" aria-labelledby="accordion-flush-heading-2">
    <div class="py-5 border-b">
      <p class="mb-2 text-sm tracking-wider  text-white">
      När man gör en analys som är lokal är det bra att fokusera på vad användarens intentioner med sökningen är. Om du har en firma som utför service av värmepumpar i Halmstad, vill man inte synas på sökresultat för människor som exempelvis bor i Stockholm. Man behöver inrikta sig till en lokal kundgrupp.
      </p>
    </div>
  </div> 
  <h2 id="accordion-flush-heading-3" class="button-no-back">
    <button type="button" class="flex button-no-back items-center justify-between w-full py-5 font-medium text-left text-white" data-accordion-target="#accordion-flush-body-3" aria-expanded="false" aria-controls="accordion-flush-body-3">
      <span class='uppercase'>Hur gör jag för att synas i det lokala sökresultatet i Halmstad?</span>
      <i class="fa-solid fa-angles-down pr-2 text-rose-300"></i>
    </button>
  </h2>
  <div id="accordion-flush-body-3" class="hidden" aria-labelledby="accordion-flush-heading-3">
    <div class="py-5 border-b">
      <p class="mb-2 text-sm tracking-wider  text-white">
      För att synas i lokala sökresultat behöver du inrikta dig för ett specifikt lokalt område. Om du har en firma som utför service av värmepumpar i Halmstad gör man det med sökord som exempelvis ”service värmepump Halmstad”.
      </p>
    </div>
  </div> 
  <h2 id="accordion-flush-heading-4" class="button-no-back">
    <button type="button" class="flex button-no-back items-center justify-between w-full py-5 font-medium text-left text-white" data-accordion-target="#accordion-flush-body-4" aria-expanded="false" aria-controls="accordion-flush-body-4">
      <span class='uppercase'>Vad påverkar min rankning i Halmstad?</span>
      <i class="fa-solid fa-angles-down pr-2 text-rose-300"></i>
    </button>
  </h2>
  <div id="accordion-flush-body-4" class="hidden" aria-labelledby="accordion-flush-heading-4">
    <div class="py-5 border-b text-white">
      <p class="mb-2 text-sm tracking-wider  text-white">
      Har du för ”breda” sökord som syns över hela Sverige istället för mer lokala sökord rankas du lägre för just din stad. Dina sökord behöver vara mer lokalt anpassade och då rankas man högre i sin stad.
      </p>
    
    </div>
  </div> 
  <h2 id="accordion-flush-heading-5" class="button-no-back">
    <button type="button" class="flex button-no-back items-center justify-between w-full py-5 font-medium text-left text-white" data-accordion-target="#accordion-flush-body-5" aria-expanded="false" aria-controls="accordion-flush-body-5">
      <span class='uppercase'>Vad bör man tänka på inför en lokal SEO analys i Halmstad?</span>
      <i class="fa-solid fa-angles-down pr-2 text-rose-300"></i>
    </button>
  </h2>
  <div id="accordion-flush-body-5" class="hidden" aria-labelledby="accordion-flush-heading-5">
    <div class="py-5 border-b">
      <p class="mb-2 tracking-wider text-sm text-white">
      När man vill synas på lokala sökresultat är det bra att på förhand fundera över vilka geografiska områden man vill synas på och om ni har några fördelar jämfört med era lokala konkurrenter. Ska man synas lokalt behöver man inrikta sina sökord. Om du har en frisörsalong i Halmstad, vill du inte synas på sökresultat för personer i Umeå. Välj då att inrikta dig på sökord som innehar den ort du vill synas i.
      </p>
    </div>
  </div> 
 

    </div>
 
    </section>
    
    
<section>

    <Heading 
    bg={"bg-white"}
    textColor={"text-black text-3xl"}
    titlePosition={"text-left"}
    title={"Sökmotoroptimering"}
    descCustomHtml={`
    <p class="text-sm text-left pb-5">
    Syftet med SEO är att synas så högt upp på Google (och andra sökmotorer) som möjligt på sökord som är relevanta för dig och ditt företag. Denna sidan är exempelvis optimerad för SEO Halmstad, för att det är mest relevant för oss samt denna sida.
    </p>
    <p class="text-sm text-left pb-5">
    Google analyserar faktorer så som huruvida din webbplats är relevant och hur den är uppbyggd, hur många, samt vilka som länkar till din webbplats och det innehåll du har på din webbplats för att sedan avgöra vilken placering du hamnar på.
        </p>

        <section class="bg-white">
        <div class="pt-5 cards-container p-6">
      <div class="custom-back max-w-sm p-6 pb-10  shadow headingSEO-card pt-10">
         <h1 class="text-center text-xl pt-5 pb-5 text-white">Vad består SEO av?</h1>
         <p class="text-sm text-white pb-5">
         SEO består huvudsakligen av tre delar, analys av sökord, on-page och off-page. En analys av sökord är viktigt för att kunna finna de specifika sökfraser som är relevanta för dig och som gynnar dig och din verksamhet.
         </p>
         
     </div>
     </div> 
     </section>  
     
     
     <h1 class="text-2xl uppercase pb-5">Analys</h1>
    <p class="text-sm text-left pb-5">
    Vid denna typ av analys kollar man på konkurrenter, antal sökningar på sökordet i fråga, sökintentionen m.m. Det är viktigt att konkurrensen inte är för hög men att det fortfarande är många sökningar på sökfrasen för att det ska vara gynnsamt.
    </p>
    <p class="text-sm text-left pb-10">
    Genom att göra en sökordsanalys får du en väldigt bra uppfattning om vilka sökord som är värda att fokusera på. Det första man bör göra är att sätta sig in i sin målgrupps situation, då kommer du att hitta de bästa nyckelorden för din bransch. Man kan själv göra en sökning på det man vill synas på, då får man en bättre uppfattning av hur kunder söker för att hitta det du erbjuder.
    </p>


    <h1 class="text-2xl uppercase pb-5">On-page-optimering</h1>
    <p class="text-sm text-left pb-5">
    On-page-optimering är också en viktig del av sökmotoroptimering, det är det arbete som utförs på din hemsida. On-page innebär optimering av hemsidans innehåll, bland annat texter, rubriker, hastighet, säkerhet, meta-titlar och meta-beskrivningar på hemsidan. Tanken är att optimera dessa utifrån de utvalda sökorden.
    </p>
    <p class="text-sm text-left pb-5">
    Sökmotorer älskar text innehåll, det är på detta sättet som sökmotorer läser av ens hemsida och skapar en uppfattning om den. På så sätt avgör den vilka typer av sökfrågor som ska leda till just din hemsida ska synas i sökresultatet.
    </p>
    <p class="text-sm text-left pb-10">
    Även interna länkar som leder besökare samt sökmotorer till andra målsidor är viktiga att ha. Interna länkar hänvisar besökare till en annan sida på samma hemsida. On-page SEO består av många delar och de alla bidrar till en bättre samt mer aktuell hemsida.
    </p>

    <h1 class="text-2xl uppercase pb-5">Off-page</h1>
    <p class="text-sm text-left pb-5">
    Off-page är det arbete inom sökmotoroptimering som görs utanför hemsidan, som att skicka länkar till din hemsida. De länkarna fungerar som rekommendationer till din hemsida. De hjälper ens hemsida att synas högre upp på sökmotorerna.
    </p>
    <p class="text-sm text-left pb-5">
    Vi på Effektify har en stor länkprofil med relevanta länkar för just er bransch och kan på många sätt hjälpa er där.
    </p>
    <p class="text-sm text-left pb-10">
    Dessa tre delar utgör en framgångsrik SEO-strategi. 
    </p>

    <h1 class="text-2xl uppercase pb-5">Vikten av bra SEO</h1>
    <p class="text-sm text-left pb-20">
    Eftersom vi använder internet allt mer för att hitta företag som säljer det vi vill köpa är det av stor betydelse att synas där besökarna finns. Lika viktigt som det en gång i tiden var att synas i traditionell media som lokalpressen eller telefonkatalogen är det idag att synas på nätet. 
    <strong class="text-rose-300"> Detta gör du med hjälp av SEO. </strong>
    </p>

    <div>
    <a href='/kontakt' class="cards-video-button pt-3 pb-3 uppercase">Ready For Take Off</a>
    </div>
    
    `}
    />

    <div class='pt-20 heading-container text-center text-black bg-white'>
   
    </div>
    
    


    <div class='pt-20 heading-container text-center text-black bg-white'>
    

    <h1 class="text-xl uppercase pt-20 pb-5">
    Google utvecklas ständigt
    <br />
    – därför måste också SEO göra det
    </h1>
    <p class="text-sm text-left pb-5">
    Det är ett faktum att företag som satsar på sökmotoroptimering ser en positiv skillnad på resultaten efter att denna strategi har implementerats och efter att man börjat optimera hemsidan i fråga. Arbetet med sökmotoroptimering utvecklas och ändras ständigt eftersom Google gör det, sökmotorn uppdateras ofta och därför är det av stor vikt att hänga med.
    </p>
    <p class="text-sm text-left pb-5">
    Detta innebär att även företag som arbetar med sökmotoroptimering bör se över sin strategi regelbundet för att fortsätta vara aktuella.
    </p>
    <p class="text-sm text-left pb-10">
    Vi på Effektify anser det vara av stor betydelse att hålla oss uppdaterade och att ständigt utvecklas inom sökmotoroptimering för att kunna erbjuda våra kunder bästa möjliga service.
    </p>


    <h1 class="text-xl uppercase pt-20 pb-5">
    Lokal SEO – Halmstad
    </h1>
    <p class="text-sm text-left pb-5">
    Lokal SEO, eller lokal sökmotoroptimering som det också kallas, skiljer sig något från SEO på nationell nivå. Den största skillnaden är konkurrensen, den är betydligt större på nationell nivå. För många branscher är det relevant att enbart synas lokalt online då deras tjänster eller produkter är avsedda att säljas lokalt. Om du exempelvis behöver hjälp av en rörmokare så kommer du troligtvis söka på “rörmokare” plus din stad eftersom det är vad som är relevant för dig.
    </p>
    <p class="text-sm text-left pb-5">
    En viktig del av lokal SEO är att tydliggöra var du befinner dig och i vilka orter du verkar på din hemsida, både för dina kunders skull, men också för Google så att sökmotorn anser din hemsida vara relevant. För att lyckas med lokal SEO behövs det även tas hänsyn till vissa tekniska åtgärder bakom hemsidan. Detta gör det lättare för Google att begripa vilka geografiska områden sökmotorn ska förknippa dig och ditt företag med.
    </p>
    </div>
</section>


    <section>
    <div class='pt-20 heading-container text-center text-black bg-white'>
    <h1 class="text-2xl uppercase pb-5">Google My Business (GMB)</h1>
    <p class="text-sm text-left pb-5">
    Om du driver ett lokalt företag som verkar inom ett avgränsat geografiskt område är det av stor vikt för dig att finnas på Google My Business. Det är viktigt då Google My Business är det resultat som Google visar om du söker efter lokala företag.
    </p>
    <p class="text-sm text-left pb-5">
    Google visar det som en lista av de olika relevanta lokala företagen ovanför de organiska sökresultaten. Google My Business är ett av de bästa sätten att få ny trafik samt nya kunder. Därför är det viktigt att optimera sin GMB sida med information om ditt företag i Halmstad för att synas på lokala resultat.
        </p>
    </div>
    
    <section class="bg-white">
       <div class="pt-5 cards-container p-6">
     <div class="custom-back max-w-sm p-6 pb-10  shadow headingSEO-card2 pt-10">
        <h1 class="text-center text-xl pt-5 pb-5 text-white">Vad hittar dina kunder om dig när de söker på ditt företag i Halmstad på nätet?</h1>
        <p class="text-sm text-white pb-5">
        Detta kan du reglera i GMB. De ska snabbt kunna få tag på ditt telefon nummer ifall de behöver det. Även vart det finns bra tillgängliga parkeringsplatser mm är bra att ta med.
        </p>
        <p class="text-sm text-white pb-5">
        Det är optimalt om dina kunder har tillgång till detta redan innan de når hemsidan. Google My Business är det enklaste och bästa sättet att få ditt företag att synas på förstasidan. Det är bevisat att de flesta inte kommer längre än till Googles första sida av sökresultat. Att synas på förstasidan är otroligt värdefullt.
        </p>
        </div>
        </div>
        </section>


        <div class='pt-20 heading-container text-center text-black bg-white'>
    <h1 class="text-2xl uppercase pb-5">SEO och Google Analytics</h1>
    <p class="text-sm text-left pb-5">
    För många så är målet med SEO att öka trafiken till sin webbplats och att öka konverteringarna. För att utföra detta behöver man ett verktyg för att spåra detta. Det finns ett kostnadsfritt verktyg från Google för alla som har en webbplats som heter Google analythics som utför detta på bästa sätt.
    </p>
    <p class="text-sm text-left pb-5">
    Denna plattform är en plattform för spårning av webbplatser. Den samlar in data på hur användarna integrerar på din hemsida. Efter att de samlats in sorteras dem i lättlästa rapporter. Detta är ett verktyg vi som SEO byrå starkt rekommenderar att ni tar hem om man inte redan gjort det.
    </p>
    <p class="text-sm text-left pb-10">
    En del av det man kan ta del av genom Google analythics är bland annat: vilka webbplatser dina besökare kom från, vilka landningssidor de kom till, hur snabbt din sida laddar, vilka tider på dagen du har flest besökare mm.
    </p>

    <h3 class="text-base uppercase pb-10">
    I Sverige görs det varje dag mer än 50 miljoner sökningar på Internet. Syns din hemsida i dessa sökningar idag?
    </h3>

    <h1 class="text-2xl uppercase pb-5">Google Search Console</h1>
    <p class="text-sm text-left pb-5">
    Ett annat kostnadsfritt verktyg som vi starkt kan rekommendera är Google search console, förkortat GSC. GSC hjälper dig bland annat att hitta eventuella problem med hemsidans sidor så att dessa kan åtgärdas, man kan spåra webbplatsens prestanda, man kan följa aktiviteten hos de besökare som kommit på sidan, vilken sida de landat på och man kan även se hur de sedan har navigerat sig fram på webbplatsen.
    </p>
    <p class="text-sm text-left pb-5">
    Google search console ger dig en bra överblick över hur din hemsida visas på sökmotorernas resultatsidor. Man får tillgång till information som bland annat position, intryck, totala antalet klick, vilka sökningar din webbplats visas för. Denna data kan man med hjälp av filter sortera utifrån datum, plats, typ av sökning mm.
    </p>
    <p class="text-sm text-left pb-5">
    GSC är ett väldigt bra och hjälpsamt verktyg och avgörande för att förstå effekten av din SEO och även lokal SEO. Med detta verktyg använder vi på Effektify datan som samlats in för att förbättra hemsidan samt öka trafiken till din webbplats.
    </p>
    </div>

    <section class="bg-white">
       <div class="pt-5 cards-container p-6">
     <div class="custom-back max-w-sm p-6 pb-10  shadow headingSEO-card pt-10">
        <h1 class="text-center text-xl pt-5 pb-5 text-white">Varför ska man anlita en byrå för SEO i Halmstad?</h1>
        <p class="text-sm text-white pb-5">
        Det finns många goda själ till varför man ska anlita en SEO- byrå. Har du pengar för digital marknadsföring i din budget är detta bästa sättet att spendera dem. Vi som är experter på SEO hjälper dig med bland annat meta-sökordsfraser, vi stärker din länkprofil med både ingående och utgående länkar samt hjälper dig att skapa ett bra content på din webbplats.
        </p>
        <p class="text-sm text-white pb-5">
        Anlitar man experter arbetar dem för en långsiktig och hållbar tillväxt på lång sikt. En SEO- byrå som lovar att snabbt ge dig topplaceringar är inte att föredra. Utan en bra grund att stå på fallerar det hela lätt och man sjunker i placeringar igen.
        </p>
        <p class="text-sm text-white pb-5">
        Andra bra anledningar till att anlita en SEO-byrå är att man helt enkelt inte har tid att sköta sin hemsida, man vill hålla sig uppdaterad inom SEO branschen, man vill öka sin organiska trafik till sidan, man vill ha sökord som faktiskt ger resultat eller hålla nere kostnaderna med mer optimerade annonser. Ja, anledningarna är många till varför man ska anlita en SEO-byrå.
        </p>
        </div>
        </div>
        </section>
        <div class='pt-10 heading-container text-center text-black bg-white'>
            <h1 class="text-lg uppercase pb-20 ">
            Hör av er till oss på Effektify idag! Vi hjälper dig att komma igång med din resa upp till toppen.
            </h1>
         <h1 class="text-2xl uppercase pb-5">Fakta om Halmstad</h1>
        <p class="text-sm text-left pb-5">
        Vid slutet av år 2020 bodde det 103 754 i Halmstad, vilket gör det till Sveriges 17:e största tätort. Halmstad ligger på västkusten, i södra Halland och har tidigare tillhört både Sverige och Danmark. Idag är Halmstad en mycket populär turistort, med sina fina, kilometerlånga stränder och rika nöjesliv är det en självklarhet för många turister. Förutom detta är Halmstad även känt för musiker som Per Gessle, Marie Fredriksson, Mariette, Linnea Henriksson, Roxette och Gyllene Tider.
        </p>
        <p class="text-sm text-left pb-5">
        I Halmstad finns många arbeten inom den offentliga sektorn, vilket man kan se på de 5 största arbetsgivarna i Halmstad; Halmstad kommun, Region Halland, Försvarsmakten, Martin & Servera Logistik AB och Högskolan i Halmstad.
        </p>
        <p class="text-sm text-left pb-5">
        Har du ett företag i Halmstad och vill att nya kunder ska hitta din hemsida? Vi på Effektify hjälper dig gärna! Vi hjälper företag i hela Sverige att förbättra sina resultat och uppnå sina mål genom digital marknadsföring, våra tjänster inkluderar allt från SEO och Google Ads till att bygga hemsidor.
        </p>
        </div>
    </section>


    <section class="py-10">
    <div id="accordion-flush" data-accordion="collapse " class='pb-5 text-center' >
    <h1 class="text-lg text-white pt-10 uppercase pb-5">För dig som behöver lokal sökmotoroptimering</h1>
    <h2 id="accordion-flush-heading-99" class="button-no-back ">
    <button type="button" class="button-no-back items-center justify-between w-full pt-5 font-medium text-center text-white" data-accordion-target="#accordion-flush-body-99" aria-expanded="false" aria-controls="accordion-flush-body-99">
      <span class='uppercase'>Välj din stad i listan nedan</span>
      <i class="fa-solid fa-angles-down pr-2  text-rose-300 pl-5"></i>
    </button>
  </h2>
    </div>
    <div id="accordion-flush-body-99" class="hidden" aria-labelledby="accordion-flush-heading-99">
    <div class="pb-5 border-b">
      <p class=" text-center pb-5 uppercase text-white">
      <a href="/seo-sokmotoroptimering-umea/" >Umeå</a>
      </p> 
      <p class=" text-center pb-5 uppercase text-white">
      <a href="/seo-sokmotoroptimering-upplands-vasby/" >Upplands väsby</a>
      </p> 
      <p class=" text-center pb-5 uppercase text-white">
      <a href="/seo-sokmotoroptimering-uppsala/" >Uppsala</a>
      </p> 
      <p class=" text-center pb-5 uppercase text-white">
      <a href="/seo-sokmotoroptimering-varberg/" >Varberg</a>
      </p> 
      <p class=" text-center pb-5 uppercase text-white">
      <a href="/seo-sokmotoroptimering-vasteras/" >Västerås</a>
      </p> 
      <p class=" text-center pb-5 uppercase text-white">
      <a href="/seo-sokmotoroptimering-vaxjo/" >Växjö</a>
      </p> 
      <p class=" text-center pb-5 uppercase text-white">
      <a href="/seo-sokmotoroptimering-orebro/" >Örebro</a>
      </p> 
      <p class=" text-center pb-5 uppercase text-white">
      <a href="/seo-sokmotoroptimering-ostersund/" >Östersund</a>
      </p> 

    </div>
  </div> 
    </section>

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
