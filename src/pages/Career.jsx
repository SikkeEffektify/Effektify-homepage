import React from 'react'
import { Hero } from '../components/Hero'
import { HeadingCareer } from '../components/HeadingCareer'


/* Videos */
import heroImage from '../assets/career-clouds.mp4'

export default function Career() {
  return (
    <>
    <Hero 
      title={"Bli en av oss"}
      videoLink={heroImage}
    />


    {/* Put in custom html in to all jobDesc for more control. */}
    <HeadingCareer 
      mainTitle={"Lediga tjänster"}
      mainDesc={`
      <p class="tracking-widest text-sm pb-5">
        Känner du att du hade trivts lika bra på vår arbetsplats som vi gör? Känner du att du hade kunnat bidra och utvecklas hos oss? Vi på Effektify håller ständigt utkik efter kreativa och äventyrslystna förmågor som ser sig själv jobba med spännande projekt tillsammans med världen bästa arbetskollegor.
      </p>
      <p class="tracking-widest text-sm pb-5">
        Känner du att någon tjänst nedan skulle vara som gjord för just dig, släng iväg en ansökan till oss direkt!
      </p>
      `}
      endText={"Hittar du inte rätt tjänst för dig ?"}
      emailMessage={"Skicka oss ditt CV"}



      jobTitle1={"Key Account Manager"}
      jobDesc1={`
      <p class="mb-2 text-black">
        Nu söker vi en<b class="text-rose-300"> Key Account Manager </b>
        till vårt
      <b class="text-rose-300"> Sales Team 
        i Halmstad </b> och vi vill gärna träffa dig som:
      </p>
      <ul class='list-disc list-outside text-sm space-y-2.5'>
      <li>
        Har minst 3 års dokumenterad erfarenhet av försäljning av digital marknadsföringstjänster eller annan likvärdig erfarenhet från samma bransch.
      </li>
      <li>
        Har djup kunskap inom sökmotoroptimering och digital annonsering.
      </li>
      <li>
        Är lösningsorienterad, ser potentiella affärer och levererar resultat både internt och mot kund.
      </li>
      <li>
        Har ett proaktivt och strukturerat arbetssätt.
      </li>
      <li>
        Är flytande i svenska såväl som engelska i både tal och skrift.
      </li>
      </ul>
      <p class="pt-5 text-base"><b class='text-rose-300'> Det är meriterande om du även:</b></p>
      <ul class='list-disc pt-2 list-outside text-sm space-y-2.5'>
      <li>
        Arbetar eller har arbetat med affärsutveckling inom e-handel.
      </li>
      <li>
        Har en utvecklad presentationsförmåga, muntlig såväl som skriftlig.
      </li>
      <li>
        Har god erfarenhet av att jobba med uppsökande försäljning.
      </li>
      <li>
        Har bra koll på de olika sociala medier-plattformarna.
      </li>

      <p class="pt-5 text-sm">
        Som Key Account Manager hos Effektify är du del av ett team, men samtidigt förväntas du arbeta intraprenöriellt och ta ansvar för din egen planering, exekvering och resultat. Du visar vägen för kollegor och är en ambassadör för Effektify. Du förväntas bygga din egen kundstock genom både lead generation och uppsökande försäljning enligt Effektifys säljprocess. Till din hjälp har du erfarna områdesexperter och ett av landets bästa leveransteam. 
      </p>

     
      </ul>
      <p class="pt-5"><b class="text-rose-300 text-base">Utöver dina professionella kvaliteter värdesätter vi att du</b></p>
      <ul class='list-disc pt-2 list-outside text-sm space-y-2.5'>
      <li>Har en väl utvecklad affärsförståelse, drivs av att hitta effektiva lösningar och vågar göra det oväntade.</li>
      <li>Har god samarbetsförmåga och värderar teamets gemensamma mål</li>
      </ul>
      <p class="pt-5"><b class="text-rose-300 text-base">Övrig information om tjänsten</b></p>
      <ul class='list-disc pt-2 list-outside text-sm space-y-2.5'>
      <li>
        Start: Enligt överenskommelse.
      </li>
      <li>
        Omfattning: Heltid.
      </li>
      <li>
        Anställningsform: Tillsvidareanställning.
      </li>
      <li>
        Lön: Fast samt rörlig lön.
      </li>
      <li>
        Placering: Centrala Halmstad.
      </li>
      </ul>

      <p class="pt-5 text-sm">
        Vi går igenom urvalet löpande och annonsen kan stängas ner innan tjänsten är tillsatt om vi gått över till urvals- och intervjufasen.
      </p>
      <p class="pt-5 text-sm">
        Skicka din ansökan tillsammans med ditt CV till <a class="text-rose-300" href="mailto:jobs@effektify.com"> jobs@effektify.com</a>.
      </p>
      <p class="pt-5 text-sm">
        id frågor vänligen kontakta Sämer Awad, Head of Sales,
        <a  class="text-rose-300" href="mailto:samer.awad@effektify.com"> samer.awad@effektify.com</a>.
      </p>
      `}


      jobTitle2={"Digital Medierådgivare"}
      jobDesc2={`
      <p class="mb-2 text-black">
        Nu söker vi en<b class="text-rose-300"> Digital Medierådgivare </b>
        till vårt
        <b class="text-rose-300"> Sales Team 
        i Halmstad </b> och vi vill gärna träffa dig som:
      </p>
      <ul class='list-disc list-outside text-sm space-y-2.5'>
       <li>
       Har minst 1 års dokumenterad erfarenhet av försäljning av digital marknadsföringstjänster eller annan likvärdig erfarenhet från samma bransch.
       </li>
       <li>
       Är lösningsorienterad, ser potentiella affärer och levererar resultat både internt och mot kund.
       </li>
       <li>
       Har ett proaktivt och strukturerat arbetssätt.
       </li>
       <li>
       Är flytande i svenska såväl som engelska i både tal och skrift.
       </li>
      </ul>
      <p class="pt-5 text-base"><b class='text-rose-300'>Det är meriterande om du även:</b></p>
      <ul class='list-disc pt-2 list-outside text-sm space-y-2.5'>
        <li>
        Har en utvecklad presentationsförmåga, muntlig såväl som skriftlig.
        </li>
        <li>
        Har god erfarenhet av att jobba med uppsökande försäljning.
        </li>
        <li>
        Har bra koll på de olika sociala medier-plattformarna.
        </li>


        <p class="pt-5 text-sm">
        Som Digital Medierådgivare hos Effektify är du del av ett team, men samtidigt förväntas du arbeta intraprenöriellt och ta ansvar för din egen planering, exekvering och resultat. Du bygger din egen kundstock genom både lead generation och uppsökande försäljning enligt Effektifys säljprocess. Till din hjälp har du erfarna områdesexperter och ett av landets bästa leveransteam.
        </p>

       
      </ul>
      <p class="pt-5"><b class="text-rose-300 text-base">Utöver dina professionella kvaliteter värdesätter vi att du</b></p>
      <ul class='list-disc pt-2 list-outside text-sm space-y-2.5'>
        <li>
        Har en utvecklad affärsförståelse, drivs av att hitta effektiva lösningar och vågar göra det oväntade.
        </li>
        <li>
        Har god samarbetsförmåga och värderar teamets gemensamma mål.
        </li>
      </ul>
      <p class="pt-5"><b class="text-rose-300 text-base">Övrig information om tjänsten</b></p>
      <ul class='list-disc pt-2 list-outside text-sm space-y-2.5'>
        <li>
        Start: Enligt överenskommelse.
        </li>
        <li>
        Omfattning: Heltid.
        </li>
        <li>
        Anställningsform: Tillsvidareanställning.
        </li>
        <li>
        Lön: Fast samt rörlig lön.
        </li>
        <li>
        Placering: Centrala Halmstad.
        </li>
      </ul>

      <p class="pt-5 text-sm">
      Vi går igenom urvalet löpande och annonsen kan stängas ner innan tjänsten är tillsatt om vi gått över till urvals- och intervjufasen.
      </p>
      <p class="pt-5 text-sm">
      Skicka din ansökan tillsammans med ditt CV till <a class="text-rose-300" href="mailto:jobs@effektify.com"> jobs@effektify.com</a>.
      </p>
      <p class="pt-5 text-sm">
      Vid frågor vänligen kontakta Sämer Awad, Head of Sales,
      <a  class="text-rose-300" href="mailto:samer.awad@effektify.com"> samer.awad@effektify.com</a>.
      </p>
      `}
      

      jobTitle3={"Digital Marketing Strategist"}
      jobDesc3={`
      <p class="mb-2 text-black">
        Nu söker vi en<b class="text-rose-300"> Digital Marketing Strategist </b>
        till vårt
        <b class="text-rose-300"> team 
        i Halmstad </b> och vi vill gärna träffa dig som:
      </p>
      <ul class='list-disc list-outside text-sm space-y-2.5'>
       <li>
       Har relevant erfarenhet och tidigare arbetat med strategiska marknadsfrågor, internt eller på byrå. Kanske som marknadsansvarig, projektledare eller marknadskoordinator.
       </li>
       <li>
       Har praktisk erfarenhet från en eller flera marknadsföringsvertikaler, t.ex. SEO, Paid Search eller Paid Social.
       </li>
       <li>
       Uttrycker dig obehindrat i tal och skrift på svenska och engelska.
       </li>
      </ul>
      <p class="pt-5 text-base"><b class='text-rose-300'>Det är meriterande om du även:</b></p>
      <ul class='list-disc pt-2 list-outside text-sm space-y-2.5'>
        <li>
        Vana av kundkontakt.
        </li>
        <li>
        Erfarenhet av e-handel som t.ex. Shopify och WooCommerce
        </li>
        <li>
        Goda kunskaper i WordPress och Shopify.
        </li>
        <li>
        Erfarenhet av content marketing/digital copy.
        </li>
        <li>
        Erfarenhet av konverteringsoptimering/AB-testning.
        </li>
        <li>
        Erfarenhet av att analysera trafik och effekter av optimering med hjälp av verktyg som Google Analytics och Google Search Console.
        </li>
        <li>
        Koll på de senaste trenderna inom digital marknadsföring.
        </li>
        <p class="pt-5 text-sm">
        Som <b class='text-rose-300'>Digital Marketing Strategist</b>  hos Effektify kommer du att arbeta huvudsakligen med större och mer komplexa projekt och förväntas även bidra till att utveckla vårt erbjudande och våra processer. Genom att ta fram sökstrategier och digitala lösningar hjälper du våra kunder att utveckla sina affärer och sin synlighet online. Du ingår i ett team med specialister inom SEO, Paid Search, Paid Social och Webb som arbetar tajt tillsammans och hjälps åt att ta fram bra lösningar för våra kunder.
        </p>

       
      </ul>
      <p class="pt-5"><b class="text-rose-300 text-base">Utöver dina professionella kvaliteter värdesätter vi att du</b></p>
      <ul class='list-disc pt-2 list-outside text-sm space-y-2.5'>
        <li>
        Har en väl utvecklad affärsförståelse, drivs av att hitta effektiva lösningar och vågar göra det oväntade.
        </li>
        <li>
        Är analytisk och strukturerad.
        </li>
        <li>
        Har god samarbetsförmåga och värderar teamets gemensamma mål.
        </li>
        <p>
      Hos oss får du en generös och fartfylld arbetsplats och en arbetsgivare med korta beslutsvägar som investerar i att skapa rätt förutsättningar för medarbetare att växa och lyckas i sin roll. Du får stora möjligheter att påverka ditt arbete och vi värdesätter att du utmanar dig själv och tar dig lite vatten över huvudet emellanåt.
      </p>
      </ul>
      <p class="pt-5"><b class="text-rose-300 text-base">Övrig information om tjänsten</b></p>
      <ul class='list-disc pt-2 list-outside text-sm space-y-2.5'>
        <li>
        Start: Enligt överenskommelse.
        </li>
        <li>
        Omfattning: Heltid.
        </li>
        <li>
        Anställningsform: Tillsvidareanställning.
        </li>
        <li>
        Lön: Fast lön.
        </li>
        <li>
        Placering: Centrala Halmstad.
        </li>
      </ul>

      <p class="pt-5 text-sm">
      Vi går igenom urvalet löpande och annonsen kan stängas ner innan tjänsten är tillsatt om vi gått över till urvals- och intervjufasen.
      </p>
      <p class="pt-5 text-sm">
      Skicka din ansökan tillsammans med ditt CV till <a class="text-rose-300" href="mailto:jobs@effektify.com"> jobs@effektify.com</a>.
      </p>
      <p class="pt-5 text-sm">
      Vid frågor vänligen kontakta Christian Engdahl, COO
      <a class='text-rose-300' href="mailto:christian.engdahl@effektify.com"> christian.engdahl@effektify.com</a>
      </p>
      `}

      jobTitle4={"Paid Social Specialist"}
      jobDesc4={`
      <p class="mb-2 text-black">
        Nu söker vi en<b class="text-rose-300"> Paid Social Specialist </b>
        till vårt
        <b class="text-rose-300"> team 
        i Halmstad </b> och vi vill gärna träffa dig som:
      </p>
      <ul class='list-disc list-outside text-sm space-y-2.5'>
       <li>
       Har relevant erfarenhet och tidigare arbetat med annonsering på Facebook/Instagram.
       </li>
       <li>
       Uttrycker dig obehindrat i tal och skrift på svenska och engelska.
       </li>
      </ul>
      <p class="pt-5 text-base"><b class='text-rose-300'>Det är meriterande om du även:</b></p>
      <ul class='list-disc pt-2 list-outside text-sm space-y-2.5'>
       <li>
       Labbat med andra sociala medier som. TikTok eller Pinterest
       </li>
       <li>
       Erfarenhet från andra marknadsföringsvertikaler, t.ex. SEO eller SEM.
       </li>
       <li>
       En grafisk ådra och kan skapa annonser på egen hand, gärna både bild och rörlig media.
       </li>
       <li>
       Vana av kundkontakt.
       </li>
       <li>
       Koll på de senaste trenderna inom digital marknadsföring.
       </li>
        <p class="pt-5 text-sm">
        Som <b class='text-rose-300'>Paid Social Specialist</b>   hos Effektify kommer dina primära arbetsuppgifter löpande utveckla våra kunders kampanjer och resultat i sociala medier. Du kommer även att onboarda nya kunder och bistå dem i att upprätta en bra kontostruktur.
        </p>
        <p class="pt-5 text-sm">
        Du ingår i ett team med andra specialister inom SEO, Paid Search och Webb som arbetar tajt tillsammans och hjälps åt att ta fram bra lösningar för våra kunder.
        </p>

       
      </ul>
      <p class="pt-5"><b class="text-rose-300 text-base">Utöver dina professionella kvaliteter värdesätter vi att du</b></p>
      <ul class='list-disc pt-2 list-outside text-sm space-y-2.5'>
        <li>
        Har god affärsförståelse, drivs av att hitta effektiva lösningar och vågar göra det oväntade.
        </li>
        <li>
        Är analytisk och strukturerad.
        </li>
        <li>
        Har god samarbetsförmåga och värderar teamets gemensamma mål.
        </li>
        <p>
        Hos oss får du en generös och fartfylld arbetsplats och en arbetsgivare med korta beslutsvägar som investerar i att skapa rätt förutsättningar för medarbetare att växa och lyckas i sin roll. Du får stora möjligheter att påverka ditt arbete och vi värdesätter att du utmanar dig själv och tar dig lite vatten över huvudet emellanåt.
      </p>
      </ul>
      <p class="pt-5"><b class="text-rose-300 text-base">Övrig information om tjänsten</b></p>
      <ul class='list-disc pt-2 list-outside text-sm space-y-2.5'>
        <li>
        Start: Enligt överenskommelse.
        </li>
        <li>
        Omfattning: Heltid.
        </li>
        <li>
        Anställningsform: Tillsvidareanställning.
        </li>
        <li>
        Lön: Fast lön.
        </li>
        <li>
        Placering: Centrala Halmstad.
        </li>
      </ul>

      <p class="pt-5 text-sm">
      Vi går igenom urvalet löpande och annonsen kan stängas ner innan tjänsten är tillsatt om vi gått över till urvals- och intervjufasen.
      </p>
      <p class="pt-5 text-sm">
      Skicka din ansökan tillsammans med ditt CV till <a class="text-rose-300" href="mailto:jobs@effektify.com"> jobs@effektify.com</a>.
      </p>
      <p class="pt-5 text-sm">
      Vid frågor vänligen kontakta Christian Engdahl, COO
      <a class='text-rose-300' href="mailto:christian.engdahl@effektify.com"> christian.engdahl@effektify.com</a>
      </p>
      `}

      jobTitle5={"Paid Search Specialist"}
      jobDesc5={`
      <p></p>
      <p class="mb-2 text-black">
        Nu söker vi en<b class="text-rose-300"> Paid Search Specialist </b>
        till vårt
        <b class="text-rose-300"> team 
        i Halmstad </b> och vi vill gärna träffa dig som:
      </p>
      <ul class='list-disc list-outside text-sm space-y-2.5'>
       <li>
       Har relevant erfarenhet och tidigare arbetat med SEM och i synnerhet Google Ads.
       </li>
       <li>
       Uttrycker dig obehindrat i tal och skrift på svenska och engelska.
       </li>
      </ul>
      <p class="pt-5 text-base"><b class='text-rose-300'>Det är meriterande om du även:</b></p>
      <ul class='list-disc pt-2 list-outside text-sm space-y-2.5'>
       <li>
       Förmågan att analysera och dra slutsatser baserat på data.
       </li>
       <li>
       Erfarenhet från andra marknadsföringsvertikaler, t.ex. SEO eller Paid Social.
       </li>
       <li>
       Vana av kundkontakt.
       </li>
       <li>
       Koll på de senaste trenderna inom digital marknadsföring.
       </li>
        <p class="pt-5 text-sm">
        Som <b class='text-rose-300'>Paid Search Specialist</b>    hos Effektify kommer dina primära arbetsuppgifter löpande utveckla våra kunders kampanjer och resultat i Google Ads. Du kommer även att onboarda nya kunder och bistå dem i att upprätta en bra kontostruktur.
        </p>
        <p class="pt-5 text-sm">
        Du ingår i ett team med andra specialister inom SEO, Paid Social och Webb som arbetar tajt tillsammans och hjälps åt att ta fram bra lösningar för våra kunder.
        </p>

      </ul>
      <p class="pt-5"><b class="text-rose-300 text-base">Utöver dina professionella kvaliteter värdesätter vi att du</b></p>
      <ul class='list-disc pt-2 list-outside text-sm space-y-2.5'>
        <li>
        Har god affärsförståelse, drivs av att hitta effektiva lösningar och vågar göra det oväntade.
        </li>
        <li>
        Är analytisk och strukturerad.
        </li>
        <li>
        Har god samarbetsförmåga och värderar teamets gemensamma mål.
        </li>
        <p>
        Hos oss får du en generös och fartfylld arbetsplats och en arbetsgivare med korta beslutsvägar som investerar i att skapa rätt förutsättningar för medarbetare att växa och lyckas i sin roll. Du får stora möjligheter att påverka ditt arbete och vi värdesätter att du utmanar dig själv och tar dig lite vatten över huvudet emellanåt.
      </p>
      <p>
      Vi sitter i helt nyrenoverade lokaler i centrala Halmstad med närhet till både tåg, buss och grymma lunchhak.
      </p>
      </ul>
      <p class="pt-5"><b class="text-rose-300 text-base">Övrig information om tjänsten</b></p>
      <ul class='list-disc pt-2 list-outside text-sm space-y-2.5'>
        <li>
        Start: Enligt överenskommelse.
        </li>
        <li>
        Omfattning: Heltid.
        </li>
        <li>
        Anställningsform: Tillsvidareanställning.
        </li>
        <li>
        Lön: Fast lön.
        </li>
        <li>
        Placering: Centrala Halmstad.
        </li>
      </ul>

      <p class="pt-5 text-sm">
      Vi går igenom urvalet löpande och annonsen kan stängas ner innan tjänsten är tillsatt om vi gått över till urvals- och intervjufasen.
      </p>
      <p class="pt-5 text-sm">
      Skicka din ansökan tillsammans med ditt CV till <a class="text-rose-300" href="mailto:jobs@effektify.com"> jobs@effektify.com</a>.
      </p>
      <p class="pt-5 text-sm">
      Vid frågor vänligen kontakta Christian Engdahl, COO
      <a class='text-rose-300' href="mailto:christian.engdahl@effektify.com"> christian.engdahl@effektify.com</a>
      </p>
      `}


      jobTitle6={"AI-utvecklare"}
      jobDesc6={`
      <p class='mb-2 text-sm text-black'>
      Önskar du också att du kunnat säga att du var med i Spotifys linda, eller att du bidragit till koden bakom PayPal? Nu har du chansen. Vi har tekniken. Vill du vara med och demokratisera den tillsammans med oss?
      </p>
      <p class="mb-2 text-black">
        Nu söker vi <b class="text-rose-300"> Utvecklare</b> som är extremt nyfiken på <b class='text-rose-300'>AI </b> 
        till vårt
        <b class="text-rose-300"> utvecklingsteam 
        i Halmstad </b> och vi vill gärna träffa dig som:
      </p>
      <ul class='list-disc list-outside text-sm space-y-2.5'>
       <li>
       Är en van programmerare som har börjat gräva lite i AI och hur man kan integrerar olika AI-lösningar och hur man kan skapa affärsnytta av dessa.
       </li>
       <li>
       Har väldigt goda kunskaper i såväl svenska som engelska i både tal och skrift. All kommunikation och dokumentation sker på de språken.
       </li>
       <li>
       Men viktigast av allt är att du har ett stort intresse för teknik, maskininlärning och artificiell intelligens.
       </li>
      </ul>
      <p class="pt-5 text-base"><b class='text-rose-300'>Det är meriterande om du även:</b></p>
      <ul class='list-disc pt-2 list-outside text-sm space-y-2.5'>
      <li>
       Erfarenhet av OpenAI.
       </li>
       <li>
       Har god erfarenhet av klassiska databaser.
       </li>
       <li>
       Har erfarenhet som programmerare / systemutvecklare.
       </li>
       <li>
       Bakgrund inom Data Science.
       </li>
       <li>
       Erfarenhet av Tensorflow, Tensor RT, PyTorch och/eller liknande AI-verktyg.
       </li>
        <p class="pt-5 text-sm">
        Som <b class='text-rose-300'>AI-utvecklare</b> hos Effektify kommer du jobba med en bredd i hela kedjan från idé till färdig AI-lösning. Du kommer arbeta till stor del med vårt team som utvecklar vår plattform där ni samarbetar och delar kunskap för att hitta nya innovativa lösningar. Målet är att du ska axla rollen som AI-specialist i teamet. För denna roll värderar vi personliga egenskaper högre än erfarenhet.
        </p>
        
        
      </ul>
      <p class="pt-5"><b class="text-rose-300 text-base">Utöver dina professionella kvaliteter värdesätter vi att du</b></p>
      <ul class='list-disc pt-2 list-outside text-sm space-y-2.5'>
       <li>
       Är lösningsorienterad och driven.
       </li>
       <li>
       Har god samarbetsförmåga och värderar teamets gemensamma mål.
       </li>
       <li>
       Är öppen för att prova på nya tekniker och lämnar alltid koden i ett bättre skick än du fann den.
       </li>
      </ul>
      <p class="pt-5"><b class="text-rose-300 text-base">Du erbjuds</b></p>
      <ul class='list-disc pt-2 list-outside text-sm space-y-2.5'>
        <li>
        Möjlighet att vara delaktig i en spännande resa på ett växande techbolag.
        </li>
        <li>
        En flexibel och trivsam arbetsplats på ett modernt kontor som är något alldeles extra, med allt från spelhörnor till loungeavdelning.
        </li>
      </ul>

      <p class="pt-5"><b class="text-rose-300 text-base">Om Effektify</b></p>
      <p class='text-sm pt-5'>Effektify är en plattform för att effektivisera företags marknadsföring.</p>
      <p class='text-sm pt-5'>Nu går vi in i en mycket spännande fas för att vidareutveckla, skala upp och samtidigt lansera fler spännande tjänster i vår plattform. Därför söker vi nu dig som intresserad av att utmana, utveckla och ser nya förbättrade lösningar för framtiden tillsammans med vårt utvecklingsteam!</p>
      
      <p class="pt-5"><b class="text-rose-300 text-base">Bakgrund</b></p>
      <p class='text-sm pt-5'>Bolaget grundades våren 2021 och har huvudkontor centralt i Halmstad. Vi har idag även ett nyöppnat kontor i Berlin och totalt är vi 22 personer.</p>
      <p class='text-sm pt-5'>Effektify består av två affärsområden där den ena delen är utveckling och den andra delen består av vår konsultverksamhet med specialister och experter inom analys, strategi och drift av digital marknadsföring.</p>

      <p class="pt-5"><b class="text-rose-300 text-base">Övrig information om tjänsten</b></p>
      <ul class='list-disc pt-2 list-outside text-sm space-y-2.5'>
        <li>
        Start: Enligt överenskommelse.
        </li>
        <li>
        Omfattning: Heltid.
        </li>
        <li>
        Placering: Centrala Halmstad.
        </li>
      </ul>

      <p class="pt-5 text-sm">
      Vi går igenom urvalet löpande och annonsen kan stängas ner innan tjänsten är tillsatt om vi gått över till urvals- och intervjufasen.
      </p>
      <p class="pt-5 text-sm">
      Skicka din ansökan tillsammans med ditt CV till <a class="text-rose-300" href="mailto:jobs@effektify.com"> jobs@effektify.com</a>.
      </p>
      `}

      jobTitle7={"Fullstackutvecklare"}
      jobDesc7={`
      <p class='mb-2 text-sm text-black'>
      Önskar du också att du kunnat säga att du var med i Spotifys linda, eller att du bidragit till koden bakom PayPal? Nu har du chansen. Vi har tekniken. Vill du vara med och demokratisera den tillsammans med oss?
      </p>
      <p class="mb-2 text-black">
        Nu söker vi <b class="text-rose-300"> Fullstackutvecklare </b>
        till vårt
        <b class="text-rose-300"> utvecklingsteam 
        i Halmstad </b> och vi vill gärna träffa dig som:
      </p>
      <ul class='list-disc list-outside text-sm space-y-2.5'>
       <li>
       Har flerårig erfarenhet av systemutveckling mot webb.
       </li>
       <li>
       Är bekväm i moderna javascriptramverk som Vue.js, Angular, React och liknande.
       </li>
       <li>
       God kännedom kring och erfarenhet av relationsdatabaser.
       </li>
       <li>
       Är bekväm i HTML, CSS och tycker design- och användbarhetsfrågor är kul.
       </li>
       <li>
       Har väldigt goda kunskaper i såväl svenska som engelska i både tal och skrift. All kommunikation och dokumentation sker på de språken.
       </li>
      </ul>
      <p class="pt-5 text-base"><b class='text-rose-300'>Det är meriterande om du även:</b></p>
      <ul class='list-disc pt-2 list-outside text-sm space-y-2.5'>
      <li>
      Har god erfarenhet av programmering i PHP samt PHP-ramverk, särskilt Laravel.
      </li>
      <li>
      Har relevant erfarenhet inom NoSQL-databaser.
      </li>
      <li>
      Har relevant erfarenhet av machine learning / AI.
      </li>
      <li>
      Har goda kunskaper inom linux, devops och / eller molnlösningar som AWS / GCP.
      </li>
        <p class="pt-5 text-sm">
        Som <b class='text-rose-300'>utvecklare</b> hos Effektify kommer du utveckla tjänster som bygger på ett växande urval av olika moderna tekniker och utvecklas enligt principer som Continuous Integration och Continuous Delivery. I teknikstacken finns idag PHP 8, MySQL, Javascript, Linux, HTML / CSS (SASS + bootstrap).
        </p>
        
        
      </ul>
      <p class="pt-5"><b class="text-rose-300 text-base">Utöver dina professionella kvaliteter värdesätter vi att du</b></p>
      <ul class='list-disc pt-2 list-outside text-sm space-y-2.5'>
       <li>
       Är lösningsorienterad och driven.
       </li>
       <li>
       Har god samarbetsförmåga och värderar teamets gemensamma mål.
       </li>
       <li>
       Är öppen för att prova på nya tekniker och lämnar alltid koden i ett bättre skick än du fann den.
       </li>
      </ul>
      <p class="pt-5"><b class="text-rose-300 text-base">Du erbjuds</b></p>
      <ul class='list-disc pt-2 list-outside text-sm space-y-2.5'>
        <li>
        Möjlighet att vara delaktig i en spännande resa på ett växande techbolag.
        </li>
        <li>
        En flexibel och trivsam arbetsplats på ett modernt kontor som är något alldeles extra, med allt från spelhörnor till loungeavdelning.
        </li>
      </ul>

      <p class="pt-5"><b class="text-rose-300 text-base">Om Effektify</b></p>
      <p class='text-sm pt-5'>Effektify är en plattform för att effektivisera företags marknadsföring.</p>
      <p class='text-sm pt-5'>Nu går vi in i en mycket spännande fas för att vidareutveckla, skala upp och samtidigt lansera fler spännande tjänster i vår plattform. Därför söker vi nu dig som intresserad av att utmana, utveckla och ser nya förbättrade lösningar för framtiden tillsammans med vårt utvecklingsteam!</p>
      
      <p class="pt-5"><b class="text-rose-300 text-base">Bakgrund</b></p>
      <p class='text-sm pt-5'>Bolaget grundades våren 2021 och har huvudkontor centralt i Halmstad. Vi har idag även ett nyöppnat kontor i Berlin och totalt är vi 22 personer.</p>
      <p class='text-sm pt-5'>Effektify består av två affärsområden där den ena delen är utveckling och den andra delen består av vår konsultverksamhet med specialister och experter inom analys, strategi och drift av digital marknadsföring.</p>

      <p class="pt-5"><b class="text-rose-300 text-base">Övrig information om tjänsten</b></p>
      <ul class='list-disc pt-2 list-outside text-sm space-y-2.5'>
        <li>
        Start: Enligt överenskommelse.
        </li>
        <li>
        Omfattning: Heltid.
        </li>
        <li>
        Placering: Centrala Halmstad.
        </li>
      </ul>

      <p class="pt-5 text-sm">
      Vi går igenom urvalet löpande och annonsen kan stängas ner innan tjänsten är tillsatt om vi gått över till urvals- och intervjufasen.
      </p>
      <p class="pt-5 text-sm">
      Skicka din ansökan tillsammans med ditt CV till <a class="text-rose-300" href="mailto:jobs@effektify.com"> jobs@effektify.com</a>.
      </p>
      `}

      jobTitle8={"Backendutvecklare"}
      jobDesc8={`
      <p class='mb-2 text-sm text-black'>
      Önskar du också att du kunnat säga att du var med i Spotifys linda, eller att du bidragit till koden bakom PayPal? Nu har du chansen. Vi har tekniken. Vill du vara med och demokratisera den tillsammans med oss?
      </p>
      <p class="mb-2 text-black">
        Nu söker vi <b class="text-rose-300"> Backendutvecklare </b>
        till vårt
        <b class="text-rose-300"> utvecklingsteam 
        i Halmstad </b> och vi vill gärna träffa dig som:
      </p>
      <ul class='list-disc list-outside text-sm space-y-2.5'>
       <li>
       Har flerårig erfarenhet av systemutveckling mot webb.
       </li>
       <li>
       God kännedom kring och erfarenhet av relationsdatabaser.
       </li>
       <li>
       Har väldigt goda kunskaper i såväl svenska som engelska i både tal och skrift. All kommunikation och dokumentation sker på de språken.
       </li>
      </ul>
      <p class="pt-5 text-base"><b class='text-rose-300'>Det är meriterande om du även:</b></p>
      <ul class='list-disc pt-2 list-outside text-sm space-y-2.5'>
      <li>
      Har god erfarenhet av programmering i PHP samt PHP-ramverk, särskilt Laravel.
      </li>
      <li>
      Har relevant erfarenhet inom NoSQL-databaser.
      </li>
      <li>
      Har relevant erfarenhet av machine learning / AI.
      </li>
        <p class="pt-5 text-sm">
        Som <b class='text-rose-300'>utvecklare</b> hos Effektify kommer du utveckla tjänster som bygger på ett växande urval av olika moderna tekniker och utvecklas enligt principer som Continuous Integration och Continuous Delivery. I teknikstacken finns idag PHP 8, MySQL, Javascript, Linux, HTML / CSS (SASS + bootstrap).
        </p>
        
        
      </ul>
      <p class="pt-5"><b class="text-rose-300 text-base">Utöver dina professionella kvaliteter värdesätter vi att du</b></p>
      <ul class='list-disc pt-2 list-outside text-sm space-y-2.5'>
       <li>
       Är lösningsorienterad och driven.
       </li>
       <li>
       Har god samarbetsförmåga och värderar teamets gemensamma mål.
       </li>
       <li>
       Är öppen för att prova på nya tekniker och lämnar alltid koden i ett bättre skick än du fann den.
       </li>
      </ul>
      <p class="pt-5"><b class="text-rose-300 text-base">Du erbjuds</b></p>
      <ul class='list-disc pt-2 list-outside text-sm space-y-2.5'>
        <li>
        Möjlighet att vara delaktig i en spännande resa på ett växande techbolag.
        </li>
        <li>
        En flexibel och trivsam arbetsplats på ett modernt kontor som är något alldeles extra, med allt från spelhörnor till loungeavdelning.
        </li>
      </ul>

      <p class="pt-5"><b class="text-rose-300 text-base">Om Effektify</b></p>
      <p class='text-sm pt-5'>Effektify är en plattform för att effektivisera företags marknadsföring.</p>
      <p class='text-sm pt-5'>Nu går vi in i en mycket spännande fas för att vidareutveckla, skala upp och samtidigt lansera fler spännande tjänster i vår plattform. Därför söker vi nu dig som intresserad av att utmana, utveckla och ser nya förbättrade lösningar för framtiden tillsammans med vårt utvecklingsteam!</p>
      
      <p class="pt-5"><b class="text-rose-300 text-base">Bakgrund</b></p>
      <p class='text-sm pt-5'>Bolaget grundades våren 2021 och har huvudkontor centralt i Halmstad. Vi har idag även ett nyöppnat kontor i Berlin och totalt är vi 22 personer.</p>
      <p class='text-sm pt-5'>Effektify består av två affärsområden där den ena delen är utveckling och den andra delen består av vår konsultverksamhet med specialister och experter inom analys, strategi och drift av digital marknadsföring.</p>

      <p class="pt-5"><b class="text-rose-300 text-base">Övrig information om tjänsten</b></p>
      <ul class='list-disc pt-2 list-outside text-sm space-y-2.5'>
        <li>
        Start: Enligt överenskommelse.
        </li>
        <li>
        Omfattning: Heltid.
        </li>
        <li>
        Placering: Centrala Halmstad.
        </li>
      </ul>

      <p class="pt-5 text-sm">
      Vi går igenom urvalet löpande och annonsen kan stängas ner innan tjänsten är tillsatt om vi gått över till urvals- och intervjufasen.
      </p>
      <p class="pt-5 text-sm">
      Skicka din ansökan tillsammans med ditt CV till <a class="text-rose-300" href="mailto:jobs@effektify.com"> jobs@effektify.com</a>.
      </p>
      `}

      jobTitle9={"DBA / Devops"}
      jobDesc9={`
      <p class='mb-2 text-sm text-black'>
      Önskar du också att du kunnat säga att du var med i Spotifys linda, eller att du bidragit till koden bakom PayPal? Nu har du chansen. Vi har tekniken. Vill du vara med och demokratisera den tillsammans med oss?
      </p>
      <p class="mb-2 text-black">
        Nu söker vi <b class="text-rose-300"> DBA / Devops-medarbetare  </b>
        till vårt
        <b class="text-rose-300"> utvecklingsteam 
        i Halmstad </b> och vi vill gärna träffa dig som:
      </p>
      <ul class='list-disc list-outside text-sm space-y-2.5'>
       <li>
       Är mycket bekväm i linuxmiljö.
       </li>
       <li>
       Har djupa kunskaper kring databaser och har stenkoll på hur saker som index, kluster och replikering används och fungerar under huven.
       </li>
       <li>
       Har erfarenhet av att bygga, underhålla och vidareutveckla server- och nätverkslösningar samt brinner för att skapa och optimera lösningar tillsammans med övriga i utvecklingsavdelningen.
       </li>
       <li>
       Är bekväm både i eget och andras cloud.
       </li>
       <li>
       Har god erfarenhet av installation och konfiguration av mjukvara relaterat till webbtjänster, såsom webbservrar, DNS, lastbalanserare, databaser etc.
       </li>
       <li>
       Löser problem med kod.
       </li>
       <li>
       Har väldigt goda kunskaper i såväl svenska som engelska i både tal och skrift. All kommunikation och dokumentation sker på de språken.
       </li>
      </ul>
      <p class="pt-5 text-base"><b class='text-rose-300'>Det är meriterande om du även:</b></p>
      <ul class='list-disc pt-2 list-outside text-sm space-y-2.5'>
        <li>
        Har arbetat med programmering, särskilt i PHP samt PHP-ramverk, särskilt Laravel.
        </li>
        <li>
        Har relevant erfarenhet inom NoSQL-databaser.
        </li>
        <li>
        Har relevant erfarenhet av machine learning / AI.
        </li>
        <li>
        Erfarenhet i HTML, javascript och CSS.
        </li>
        <p class="pt-5 text-sm">
        Som <b class='text-rose-300'>utvecklare</b> hos Effektify kommer du utveckla tjänster som bygger på ett växande urval av olika moderna tekniker och utvecklas enligt principer som Continuous Integration och Continuous Delivery. I teknikstacken finns idag PHP 8, MySQL, Javascript, Linux, HTML / CSS (SASS + bootstrap).
        </p>
        
        
      </ul>
      <p class="pt-5"><b class="text-rose-300 text-base">Utöver dina professionella kvaliteter värdesätter vi att du</b></p>
      <ul class='list-disc pt-2 list-outside text-sm space-y-2.5'>
       <li>
       Är lösningsorienterad och driven.
       </li>
       <li>
       Har god samarbetsförmåga och värderar teamets gemensamma mål.
       </li>
       <li>
       Är öppen för att prova på nya tekniker och lämnar alltid koden i ett bättre skick än du fann den.
       </li>
      </ul>
      <p class="pt-5"><b class="text-rose-300 text-base">Du erbjuds</b></p>
      <ul class='list-disc pt-2 list-outside text-sm space-y-2.5'>
        <li>
        Möjlighet att vara delaktig i en spännande resa på ett växande techbolag.
        </li>
        <li>
        En flexibel och trivsam arbetsplats på ett modernt kontor som är något alldeles extra, med allt från spelhörnor till loungeavdelning.
        </li>
      </ul>

      <p class="pt-5"><b class="text-rose-300 text-base">Om Effektify</b></p>
      <p class='text-sm pt-5'>Effektify är en plattform för att effektivisera företags marknadsföring.</p>
      <p class='text-sm pt-5'>Nu går vi in i en mycket spännande fas för att vidareutveckla, skala upp och samtidigt lansera fler spännande tjänster i vår plattform. Därför söker vi nu dig som intresserad av att utmana, utveckla och ser nya förbättrade lösningar för framtiden tillsammans med vårt utvecklingsteam!</p>
      
      <p class="pt-5"><b class="text-rose-300 text-base">Bakgrund</b></p>
      <p class='text-sm pt-5'>Bolaget grundades våren 2021 och har huvudkontor centralt i Halmstad. Vi har idag även ett nyöppnat kontor i Berlin och totalt är vi 22 personer.</p>
      <p class='text-sm pt-5'>Effektify består av två affärsområden där den ena delen är utveckling och den andra delen består av vår konsultverksamhet med specialister och experter inom analys, strategi och drift av digital marknadsföring.</p>

      <p class="pt-5"><b class="text-rose-300 text-base">Övrig information om tjänsten</b></p>
      <ul class='list-disc pt-2 list-outside text-sm space-y-2.5'>
        <li>
        Start: Enligt överenskommelse.
        </li>
        <li>
        Omfattning: Heltid.
        </li>
        <li>
        Placering: Centrala Halmstad.
        </li>
      </ul>

      <p class="pt-5 text-sm">
      Vi går igenom urvalet löpande och annonsen kan stängas ner innan tjänsten är tillsatt om vi gått över till urvals- och intervjufasen.
      </p>
      <p class="pt-5 text-sm">
      Skicka din ansökan tillsammans med ditt CV till <a class="text-rose-300" href="mailto:jobs@effektify.com"> jobs@effektify.com</a>.
      </p>
      `}

    />
    </>
  )
}
