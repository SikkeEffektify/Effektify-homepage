import React from 'react'
import bg from '../assets/SEO-boras-1.webp'
import stats from '../assets/Effektify-hjalper-foretag-med-lokal-SEO.webp'
import stats2 from '../assets/Effektify-hjalper-foretag-med-lokal-sokmotoroptimering.webp'
import stats3 from '../assets/Effektify-hjalper-dig-med-SEO-lokalt.webp'
import ContactForm from '../components/ContactForm'

export default function SEOComponent({mainTitle1, mainDesc1, underImage1, mainTitle2, mainDesc2, underImage2, mainTitle2}) {
  return (
    <>
    <section>
   <div className='hero '>
    <img class="min-w-full min-h-full absolute object-cover hero-image" src={bg} />
    <div class="vidContent2 hero-image-text pb-40  bg-black/60">
        <h1 class='text-6xl pl-4 text-left uppercase text-white pb-10'>{mainTitle1}<span class="text-rose-300">.</span></h1>
         <div dangerouslySetInnerHTML={{__html: mainDesc1}}></div>
    </div>
   </div>
    </section>

    <section>
    <div class='pt-20 heading-container text-center text-black bg-white'>
    <img class="mx-auto pt-5 drop-shadow-lg pb-10" src={stats} alt="" />
    <div dangerouslySetInnerHTML={{__html: underImage1}}></div>
 
    </div>
    </section>

    <section>
    <div class='pt-20 heading-container text-center text-black bg-gray-100'>
    <h1 class="text-2xl uppercase pb-10">
    {mainTitle2}
    </h1>
    <div dangerouslySetInnerHTML={{__html: mainDesc2}}></div>
    <img class="mx-auto pt-5 drop-shadow-lg pb-10" src={stats2} alt="" />
    <div dangerouslySetInnerHTML={{underImage2}}></div>
    </div>
    </section>

    <section>
    <div class='pt-20 heading-container text-center text-black bg-white'>
    <img class="mx-auto pt-5 drop-shadow-lg pb-10" src={stats3} alt="" />
    <h1 class="text-xl uppercase pb-10">
    Vi arbetar med att göra hemsidor synliga med hjälp av SEO
    </h1>
    <p class="text-left pb-5 text-sm">
    För att nå ett bra resultat med optimering krävs ett löpande arbete med allt från innehåll på din hemsida, till länkar, för att du ska kunna ha en chans att stå upp mot konkurrenter som har fler besökare och en bättre placering i sökresultatet. Som SEO-byrå hjälper vi dig att analysera din sida för att komma fram till rätt sökord och rätt utformat innehåll på hemsidan som skulle få den att få mer trafik. På Effektify arbetar vi dagligen med att hjälpa företagare i Borås med deras digitala marknadsföring och gör med våra experter en analys över vad som behöver förbättras för att du ska ranka bättre.
    </p>
    <p class="text-left pb-5 text-sm">
    Vi på Effektify anser det vara av stor betydelse att hålla oss uppdaterade och att ständigt utvecklas inom sökmotoroptimering och håller därför arbetet löpande för att kunna erbjuda våra kunder bästa möjliga service och för att kunna erbjuda rätt strategi som lämpar sig för just din marknadsföring. Våra experter utbildas ständigt inom varje del av SEO och SEM för att alltid kunna erbjuda våra kunder det som krävs för att lyckas hålla sig relevanta i sökmotorernas ögon.
    </p>
    </div>
    </section>

    <section>
    <div class='pt-20 heading-container text-center text-white bg-rose-300 pb-20'>
    <h1 class="text-lg uppercase pb-10">
    <a href="/seo-sokmotoroptimering/">Vill du veta mer om SEO?</a>
    </h1>
    <a class="vidButton" href='/seo-sokmotoroptimering/'>Klicka Här</a>
    </div>
    </section>

    <section>
    <div class='pt-20 heading-container text-center text-black bg-white'>
    <h1 class="text-2xl uppercase pb-10">
    Lokal SEO – Borås
    </h1>
    <p class="text-left pb-5 text-sm">
    Lokal SEO, eller lokal sökmotoroptimering, skiljer sig något från SEO på nationell nivå. Konkurrensen är betydligt större på nationell nivå och i många branscher är det mer relevant att synas lokalt då de är verksamma på begränsade platser. Om du exempelvis söker efter en hantverkare så kommer du troligtvis söka på exempelvis ”takläggare” tillsammans med staden du bor i eftersom det är just vad som är relevant för dig. Som kund letar du troligtvis inte efter en takläggare i Göteborg när du bor i exempelvis Stockholm.
    </p>
    <p class="text-left pb-5 text-sm">
    En viktig del av lokal SEO är att göra det tydligt var du befinner dig och i vilka orter du är verksam i. Detta behöver tydligt redogöras för på din hemsida, både för kundens skull, men också för att Google ska anse din hemsida vara relevant för kunden söker efter det du erbjuder. För att lyckas med lokal SEO behövs det även tas hänsyn till vissa tekniska åtgärder som ligger till grund för hemsidan. Detta gör det betydligt lättare för Google att förstå vilka geografiska områden sökmotorn ska förknippa dig och ditt företag med.
    </p>
    <p class="text-left pb-10 text-sm">
    Vanligtvis kräver det betydligt mindre arbete för företag som vill synas lokalt eftersom konkurrensen är mindre i jämförelse med företag som är verksamma över hela landet. Hur svårt det är att ranka beror naturligtvis också på vilken stad du vill synas lokalt på, då konkurrensen naturligtvis är betydligt högre i städer som Stockholm, Göteborg eller Malmö, till skillnad från mindre städer.
    </p>


    <h1 class="text-2xl uppercase pb-10">
    Google My Business (GMB)
    </h1>
    <p class="text-left pb-5 text-sm">
    Driver du ett lokalt företag som verkar i ett specifikt område är det viktigare för dig att finnas på Google My Business. Google visar upp resultaten av de relevanta lokala företagen som en lista ovanför det organiska sökresultatet och är en enkel lösning som inte kräver mycket arbete och passar lokala företag väl.
    </p>
    <p class="text-left pb-10 text-sm">
    Däremot är det viktigt att hålla informationen om ditt företag uppdaterad. Öppettider och korrekt adress kan du enkelt ändra med Google My Business så att dina potentiella kunder alltid har rätt information om din verksamhet och lätt komma i kontakt med dig.
    </p>
    
    <h1 class="text-2xl uppercase pb-10">
    Vi hjälper dig gärna med SEO i Borås
    </h1>
    <p class="text-left pb-20 text-sm">
    Har du en firma och vill att nya kunder ska hitta din hemsida? Som SEO-byrå skapar Effektify rätt förutsättningar för dig! Vi hjälper företag i hela Sverige att förbättra sina resultat och uppnå sina mål genom digital marknadsföring då våra tjänster inkluderar allt från analys av SEO och SEM till att bygga hemsidor. Kontakta oss redan idag för hjälp med SEO Borås!
    </p>
    </div>

  

    </section>


    <ContactForm/>

    <section>
    <div class='pt-20 heading-container text-center text-black bg-white'>

    <h1 class="text-2xl uppercase pb-10">
    Om Borås 
    </h1>
    <p class="text-left pb-5 text-sm">
    Med mer än 110 000 invånare är Borås landets trettonde största kommun och den näst största staden i Västra Götalandsregionen. Här finns mängder av parker, grönområden, skogar, sjöar och friluftsområden vilket gör att du kan bo centralt men ändå ha naturen intill.
    </p>
    <p class="text-left pb-5 text-sm">
    Under sommaren samlas tusentals boråsare och turister på Stora torget för att se mängder av artister uppträda på den stora utomhusscenen och tack vare street-artfestivalen No Limit har numera Borås ett gott rykte som konst- och skulpturstad.
    </p>
    <p class="text-left pb-5 text-sm">
    Under 1900-talet räknades staden som en av Sveriges snabbast växande städer. I dag är det ett centrum för textil design, utveckling och handel tack vare att många välkända kedjor har sina huvudkontor i här. Företag som Hemtex, Gina Tricot och Haléns har gett staden en hög kompetens inom logistik och distribution och stora företag som Ericsson och Volvo Bussar utgör tunga delar av stadens industri.
    </p>
    <p class="text-left pb-5 text-sm">
    För barnfamiljer lockar förstås Borås Djurpark med sina drygt 600 djur inriktning på afrikanska och nordiska vilda djur. Här finns även en mängd idrottsanläggningar, skatehall och ishall, liksom anläggningar för tennis, innebandy och gymnastik. En modern fotbollsarena, friidrottsarena, friidrottshall och ett utomhusbad gör att boende alltid har nära till hands till shopping och stadsliv, aktiviteter för hela familjen och parker och andra naturområden.
    </p>
    </div>
    </section>
    </>

  )
}
