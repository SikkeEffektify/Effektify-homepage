import React from 'react'
import bg from '../assets/SEO-linkoping.jpeg'
import stats from '../assets/Effektify-hjalper-foretag-med-lokal-SEO.webp'
import stats2 from '../assets/Effektify-hjalper-foretag-med-lokal-sokmotoroptimering.webp'
import stats3 from '../assets/Effektify-hjalper-dig-med-SEO-lokalt.webp'
import ContactForm from '../components/ContactForm'
import SEOComponent from '../components/SEOComponent'

export default function SEOLinkoping() {
  return (
    <>

  <SEOComponent 
  bg={bg}
  mainTitle1={"Seo Linköping"}
  mainDesc1={`
  <p class='text-left text-lg text-white'>
  Synlighet skapar möjligheter för företag, både genom traditionell och digital marknadsföring. Att få bättre synlighet online ökar också dina chanser att få mer relevant trafik från besökare till din hemsida, vilket i sin tur leder till fler kunder och en ökad försäljning. Det finns många sätt att använda sig av digital marknadsföring men det måste göras på rätt sätt för att det ska ge rätt effekt.
  </p>   
  `}

  underImage1={`
  <p class="text-left pt-5 text-base pb-10">
  Effektify är inte enbart en SEO-byrå. Vi hjälper kunder i Linköping med 
  <a href="https://effektify.com/seo-sokmotoroptimering/" class="text-rose-300" title="Sökmotoroptimering"> SEO </a>
  och allt annat inom digital marknadsföring, och har bred kunskap när det kommer till sökmotoroptimering/SEO och annonsering med 
  <a href="https://effektify.com/google-ads/" class="text-rose-300" title="Google Ads"> Google Ads </a>
  </p>
  `}
  mainTitle2={"Linköping – Sökmotoroptimering"}
  mainDesc2={`
  <p class="text-left pt-5 text-base pb-10">
  Behöver du hjälp med SEO i Linköping? På samma sätt som du lyckades hitta vår hemsida när du sökte efter SEO Linköping kan vi hjälpa dig att öka din närvaro hos potentiella kunder som söker efter de produkter eller tjänster som du erbjuder. Vi har lång erfarenhet och bred kunskap inom digital marknadsföring och sökmotoroptimering/SEO, och hjälper alla som vill ranka högt på Googles organiska sökresultat eller behöver hjälp med annonsering genom Google Ads eller sociala medier.
  </p>
  `}
  underImage2={`
  <h1 class="text-2xl uppercase pb-10">
  Hur fungerar SEO i Linköping?
  </h1>
  <p class="text-left pb-10 text-sm">
  SEO kommer från det engelska uttrycket 
  <em> Search Engine Optimization </em>
  , vilket direkt översatt betyder sökmotoroptimering. SEO handlar i grund och botten om att optimera din hemsida för att den dyka upp för sökningar som görs på Google. Detta består av oerhört många olika delar och är en väldigt viktig faktor för dig som vill att dina potentiella kunder ska hitta din webbplats när de gör sina sökningar på just de tjänster eller produkter som du erbjuder. Genom att med SEO genomföra en grundlig optimering av din webbplats gör du den synlig på sökmotorer som används av besökare som letar efter sidor som din. Syftet med SEO är att ranka så högt upp på sökmotorer som möjligt på sökord som är relevanta för just dig.
  </p>
  <img class="mx-auto pt-5 drop-shadow-lg pb-10" src={stats2} alt="" />
  <p class="text-left pb-5 text-sm">
  Det är en mängd faktorer som tillsammans avgör exakt hur väl anpassad din webbplats är för de sökord du vill att ditt företag ska synas på. Sökmotorerna granskar även hur sidan är uppbyggd, hur många, samt vilken typ av externa länkar som leder till din webbplats och det innehåll du har på din webbplats för att sedan avgöra vilken placering du hamnar på bland Googles sökresultat.
  </p>
  <p class="text-left pb-10 text-sm">
  SEO består huvudsakligen av tre delar; en analys av sökord, on-page och off-page optimering. Som SEO-byrå hjälper vi företag i Linköping och övriga Sverige med alla dessa delar för att förbättra deras synlighet med både analys och optimering on-page och off-page.
  </p>

  `}

  mainTitle3={"Bra synlighet ger ökad trafik"}
  mainDesc3={`
  <p class="text-left pb-5 text-sm">
    För att din firma ska kunna ranka högt på Google och andra sökmotorer är det av viktigt att allt innehåll på hemsidan är anpassad på rätt sätt. Genom att med SEO göra din hemsida så relevant som möjligt för aktuella sökord är ett krävande men nödvändigt arbete för att säkra din placering på sökmotorerna och för att öka trafiken som sökoptimering leder till. Sidor som ständigt håller hög placering på Googles sökresultat är resultat av hårt och ihärdigt SEO-arbete.
    </p>
  
  <p class="text-left pb-10 text-sm">
    Konkurrensen bland företag i Sverige ökar för varje dag som går då det blir enklare att med sin digitala synlighet erbjuda sina produkter för en betydligt större publik. Sökmotoroptimering är mest viktig för nyligen startade verksamheter, som med dess hjälp kan synas framför betydligt större konkurrenter. Att med bra SEO driva trafik till din webbplats kan du med sökmotorerna hjälpa din firma att växa dig större på betydligt kortare tid än vad som tidigare var möjligt. Framförallt i stora städer som Stockholm är bra sökmotoroptimering som mest viktig och betydelsen av att öka din hemsidas ranking absolut nödvändig då du vill lyckas med dagens digitala marknadsföring.
  </p>
  `}
    seoLink={"/seo-sokmotoroptimering/"}
    seoLinkText={"Vill du veta mer om SEO?"}
    seoLinkButton={"Klicka här"}
    underButtonDesc={`
    <h1 class="text-2xl uppercase pb-10">
    En SEO-byrå som utvecklas i takt med Google!
    </h1>
    <p class="text-left pb-5 text-sm">
    Det är ett faktum att människor som satsar på sökmotoroptimering ser en positiv skillnad på resultaten efter att denna strategi har implementerats och efter att man börjat optimera hemsidan i fråga. Arbetet med sökmotoroptimering utvecklas och ändras ständigt eftersom Google gör det. Sökmotorn uppdateras ofta och därför är det av stor vikt att hänga med i dess utveckling. Detta innebär att även SEO-byråer som arbetar med sökmotoroptimering bör se över sin strategi regelbundet för att fortsätta vara aktuella och för att kunna prestera på den nivå som just SEO-byråer bör.
    </p>
    <p class="text-left pb-10 text-sm">
    Vi på Effektify anser det vara av stor betydelse att hålla oss uppdaterade och att ständigt utvecklas inom sökmotoroptimering för att kunna erbjuda våra kunder bästa möjliga service. Våra experter utbildas ständigt inom varje del av SEO/SEM för att alltid kunna erbjuda våra kunder i exempelvis Stockholm och Linköping, det som krävs för att lyckas skapa relevans i sökmotorernas ögon.
    </p>

    <h1 class="text-2xl uppercase pb-10">
    Lokal SEO – Linköping
    </h1>
    <p class="text-left pb-5 text-sm">
    Lokal sökmotoroptimering skiljer sig något från SEO på nationell nivå. Den största skillnaden är konkurrensen, vilken är betydligt större på nationell nivå. För många branscher är det viktigare att enbart synas lokalt online då deras tjänster eller produkter är avsedda att säljas lokalt. Om du exempelvis behöver hjälp av en snickare så kommer du troligtvis söka på ”snickare” tillsammans med staden i fråga eftersom det är just vad som är relevant för dig. Du är troligtvis inte på jakt efter en snickare i Luleå då du befinner dig i Linköping.
    </p>

    <p class="text-left pb-5 text-sm">
    En viktig del av lokal SEO är att tydliggöra var du befinner dig och i vilka orter du verkar. Detta behöver tydligt redogöras för på din hemsida, både för dina kunders skull, men också för att sökmotorn ska anse din sida ha rätt innehåll för den kund som söker efter det du erbjuder. För att lyckas med SEO behövs det även tas hänsyn till vissa tekniska åtgärder som ligger till grund för din sida. Detta görs med sökmotoroptimering i Linköping.
    </p>

    <p class="text-left pb-5 text-sm">
    Vanligtvis kräver det betydligt mindre arbete för företag som vill synas bättre lokalt då konkurrensen begränsas i jämförelse med företag som är verksamma över hela landet. Detta har naturligtvis även att göra med vilken stad du vill synas lokalt på, då konkurrensen naturligtvis är betydligt högre i städer som Stockholm, Göteborg eller Malmö, till skillnad från mindre städer.
    </p>

    <p class="text-left pb-10 text-sm">
    Enligt Google består en tredjedel av alla sökningar som görs på Google av sökningar som är relaterade till platser, och därav är det mycket viktigt för dig att arbeta med lokal SEO. För att lyckas med lokal SEO är det viktigt att blad annat vara konsekvent med företagsinformationen, att använda sig av online reviews och koppla på Google reviews, samt skapa och optimera landningssidor på sin hemsida för lokala sökord.
    </p>
    

    <h1 class="text-2xl uppercase pb-10">
    Google My Business (GMB)
    </h1>
    <p class="text-left pb-5 text-sm">
    Om du driver ett lokalt företag som verkar inom ett avgränsat geografiskt område är det viktigt för dig att finnas på Google My Business. Det är viktigt då Google My Business är det resultat som Google visar om du söker efter lokala företag. Google visar det som en lista av de olika relevanta lokala företagen ovanför de organiska sökresultaten. Tjänsten är kostnadsfri, och dessutom fungerar den även som ett skyltfönster för ditt företag där du kan avgöra hur du vill presentera ditt företag. Du kan välja att lägga till telefonnummer, adress och öppettider exempelvis.
    </p>
    <p class="text-left pb-10 text-sm">
    En ytterligare fördel, förutom att synas i Googles organiska sökresultat, är att om ditt företag är registrerat på Google My Business då kan det även synas i Google Maps när någon söker efter den typ av företag som du driver. Exempelvis om någon söker på ”frisör” + en specifik plats så visas lokala företag som är registrerade i tjänsten upp på kartan. Detta gör att du får mer trafik till din webbplats, vilket i sin tur leder till högre försäljning.
    </p>
    `}

    endTitle={"Om Linköping"}
    endDesc={`
    <p class="text-left pb-5 text-sm">
    Sveriges femte största stad Linköping kallas för Sveriges flyghuvudstad då landets enda flygplanstillverkning finns här. Drygt en tredjedel av stadens näringsliv arbetar med något som rör just flyg. Linköping erbjuder en fantastisk landsbygd bara några kilometer från centrum och aktiviteter som att åka båt, vandra eller cykla längs välkända kanaler är är alla upplevelse du som du kommer att minnas.
    </p>
    <p class="text-left pb-5 text-sm">
    I Linköping har du nära till vackra gränder med kullersten, historiska trädgårdar och muséer som alla lockar många besökare. I centrala Linköping hittar du Domkyrkan som räknas som en av Sveriges mest bevarade katedral från medeltiden. Även ett brett utbud av restauranger och caféer gör Linköping till en liten storstad som borde besökas. Oavsett om du är ute efter nöjen, stadsliv eller en landsbygd med slättmark, sjöar och kanaler så hittar du i vackra Linköping allt du önskar dig.
    </p>
    <p class="text-left pb-5 text-sm">
    I Luleå finns det mycket att uppleva, allt från shopping och nöjesliv till kultur och idrott. Luleå har även en fantastisk bräckvattenskärgård med 1312 öar som går att besöka året om. Under sommaren kan man paddla eller segla ut till någon av öarna dygnet runt tack vare midnattsljuset. På vintern däremot, plogas milslånga isvägar som gör skoter- och bilkörning möjlig.
    </p>
    `}
  />


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
