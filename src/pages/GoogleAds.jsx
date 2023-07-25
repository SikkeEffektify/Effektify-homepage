import React from 'react'
import videoBg from '../assets/googleadds.mp4'
import raket from '../assets/raket.webp'
import gif from '../assets/PONG_Light_version2.gif'
import ContactForm from '../components/ContactForm'
import { Hero } from '../components/Hero'
import { Heading } from '../components/Heading'

export default function GoogleAds() {
  return (
    <>


    <Hero 
      title={"Få fler besökare genom annonsering på google adds"}
      videoLink={videoBg}
    />

    
    <Heading 
      title={"Google Ads / Annonsering"}
      textColor={"text-white"}
      titlePosition={"md:text-center"}
      descCustomHtml={`
      <p class="text-sm text-left text-white pb-5">
      Google är idag världens största sökmotor och det görs dagligen cirka 3,3 miljarder sökningar endast på deras plattform. Det innebär att om du vill nå ut till dina kunder på bästa sätt behöver du synas på Google. För att du ska lyckas med den digitala marknadsföringen av ditt företag behöver du arbeta med
      <em class="text-rose-300"> <a href="/seo-sokmotoroptimering"> SEO</a> </em>
      ,
      <em> Sökmotoroptimering </em>
      ,
      <em> SEM, Sökmotorannonsering. </em>
      </p>
      <p class="text-sm text-left text-white pb-5">
      Att arbeta med SEO och optimeringen av din hemsida för att ranka bättre i det organiska resultatet tar tid. När du annonserar via Google Ads syns du direkt. Google Ads har funnits i över 20 år, närmare bestämt sedan oktober 2000, då Google Adwords (som det tidigare kallades) lanserades. Idag är Google utan tvekan marknadsledande inom annonsering online.
      </p>
    `}
    />
    
    <section>
    <div class='pt-20 heading-container text-white'>
    <section class="cards-google">
       <div class="pt-5 cards-container2 pb-10">
     <div class="custom-back max-w-sm pb-10 border border-black shado mx-auto pt-10">
        <h1 class="pt-40 cards2-title text-center mb-2 font-semibold tracking-tight uppercase text-rose-300"><span class="text-white"></span></h1>
        <h2 class="pb-20 text-center cards2-under-title text-white"><span class="pl-4"></span></h2>
    </div>
    </div>
    </section>

   
  
  <div dir="rtl">
  <div class="relative h-32 w-32 ...">
    <div class="absolute h-14 w-14 top-0 start-0 ...">
    <img class="pt-5 drop-shadow-lg scale-150 pb-20" src={raket} alt="" />
    </div>
  </div>
    </div>

 
    </div>
    </section>

    <Heading 
      bg={"text-white"}
      titlePosition={"text-right"}
      title={"Dina kunder finns på Google"}
      textColor={"text-white"}
      descCustomHtml={`
    
      <p class="text-sm text-right pb-10">
      Enligt uppgifter från Google tjänar de företag som använder sig av Google Ads i snitt 8 kr för varje krona de spenderar. Idag är Google Ads ett oerhört viktigt verktyg för företag som vill synas bättre online och vill få fler kunder att hitta deras produkter eller tjänster. Att med hjälp av Google Ads
      <em class="text-rose-300"> skapa relevanta och inriktade kampanjer och annonser </em>
      är ett utmärkt komplement till arbetet med SEO för ranka bra organiskt på viktiga sökord.
      </p>

      <h1 class="text-left pt-10 text-2xl pb-5 ">
      Vill du få mer trafik till din
      <br />
      hemsida? Då ska du annonsera
      <br />
      med Google Ads.
      </h1>
      <p class="text-sm text-left pb-5">
      Det är många gånger en bra strategi att annonsera på sökorden du vill synas på, även om du har bra synlighet i det organiska sökresultatet, eftersom du på så sätt har betydligt större chans att få nya potentiella kunder till din hemsida. Av de 50 miljoner sökningar som görs på Google varje dag når ungefär 70% av besökarna hemsidor genom att klicka på länkar i det organiska sökresultatet. De resterande 30% hittar till hemsidor genom att klicka på annonser via Google Ads. Om du använder dig av annonser och samtidigt har en bra placering organiskt så ökar chansen att en kund klickar sig vidare till din hemsida.
      </p>
      <p class="text-sm text-left pb-10">
      Det är viktigt att komma ihåg att även om man har förstaplatsen organiskt på ett sökord så visar Google ofta upp annonser ovanför sökresultatet. För att kunna skapa en lyckad marknadsstrategi online är det viktigt att göra en korrekt analys av marknaden, konkurrenterna och sökorden. 
      </p>
    `}
    />


    <Heading 
      bg={"text-white"}
      title={"Vad är då Google Ads?"}
      textColor={"text-white"}
      descCustomHtml={`
      <p class="text-lg text-left pb-5">
      Google Ads är världens största verktyg för digital annonsering. När du gör en sökning på Google ser du Google Ads-annonser allra högst upp på sidan samt allra längst ner på sidan.
      </p>
      <p class="text-sm text-left pb-5">
      När du gör en sökning på Google ser du Google Ads-annonser allra högst upp på sidan samt allra längst ner på sidan. Skillnaden mellan Google Ads och det organiska sökresultatet är att
      <em class="text-rose-300"> det inte går att påverka det organiska sökresultatet genom att betala för kampanjer, </em>
      medan du med Google Ads kan göra just detta för att din hemsida ska få bättre synlighet och fler besök.
      </p>
      <p class="text-sm text-left pb-5">
      Att marknadsföra sin hemsida med Google Ads innebär att man betalar för att visas högst upp på Google och man betalar varje gång någon väljer att klicka på annonsen.
      <em class="text-rose-300"> Detta kallas för Pay per click eller PPC </em>
      och kostnaden som du betalar varje gång en besökare klickar på just din länk bestäms av konkurrenssituationen och vilka sökord det rör sig om.
      </p>
      <p class="text-sm text-left pb-20">
      Det är viktigt att ständigt hålla koll på exakt hur mycket du betalar för varje klick eftersom det snabbt kan överstiga budgeten som du har satt för din annonsering.
      <em class="text-rose-300"> Att nå ett bra resultat kräver övervakning och optimering </em> 
      då du självklart vill få ut så mycket som möjligt av dina kampanjer och därmed öka vinsten i ditt företag.
      </p>


      <p class="text-sm text-center pb-10">
      Det är dock inte enbart på sökmotorn Google du kan annonsera. Du kan välja att få dina annonser att även visas i Gmail, på Youtube eller på externa webbsidor som är kopplade till Google Ads nätverk. 
      </p>
    `}
    />


    <Heading
      bg={"text-white"}
      textColor={"text-white"}
      title={"Använda sig av Google Ads"}
      descCustomHtml={`
      
      <p class="text-sm text-left text-white pb-5">
      Google Ads är ett utmärkt verktyg för dig som vill
      <em class="text-rose-300"> öka din försäljning, öka antalet besökare på din webbplats eller vill ha återkommande och fler kunder. </em>
      Med Google Ads är det möjligt att specificera den målgrupp du riktar dig mot. Du har även möjlighet att rikta in annonserna geografiskt så att du syns på specifika sökord i specifika orter.
      </p>


      <h1 class="text-left pt-10 text-2xl pb-5 ">
      Skillnaden mellan
      <br />
      Google Ads och Google Adwords
      </h1>
      <p class="text-sm text-left pb-5">
      Google Adwords och Google Ads är samma sak. När Google skapade sin marknadsföringstjänst för drygt 20 år sedan valde de att kalla tjänsten för Google Adwords. Google ville skapa en tjänst som skulle göra det enklare för potentiella kunder att hitta företag som erbjuder exakt det de söker.
      </p>
      <p class="text-sm text-left pb-5">
      Google valde att byta namn på sin tjänst från Google Adwords till Google Ads 2018. Innan namnbytet för tjänsten gjordes användes ofta begrepp som adwords-byrå och adwords-konsult istället för det vi idag kallar för SEM-byrå och SEM-specialist. Google valde att ta beslutet att byta från Google Adwords till Google Ads bland annat eftersom marknaden och efterfrågan har förändrades och ser idag inte ut på samma sätt som de gjorde för 20 år sedan. 
      </p>
      <p class="text-sm text-left pb-20">
      Att marknadsföra sin hemsida med Google Ads innebär att man betalar för att visas högst upp på Google och man betalar varje gång någon väljer att klicka på annonsen.  
      <em class="text-rose-300"> Detta kallas för Pay per click eller PPC </em>
      och kostnaden somdu betalar varje gång en besökare klickar på just din länk bestäms av konkurrenssituationen och vilka sökord det rör sig om.
      </p>

      <h1 class="text-center text-xl pb-20 ">
      Vill du istället annonsera på Facebook?
      <br />
      <a class="text-rose-300 underline" href="/facebook-ads-instagram-ads/">Klicka Här</a>
      </h1>
      `}
    />
    
    <img src={gif} alt="" />
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

    <div class="blacktopdivider fb-custom-color  pb-20">
      </div>

    <Heading 
      bg={"fb-custom-color"}
      textColor={"text-white"}
      title={"Hur väljer man rätt sökord vid annonsering med Google Ads?"}
      descCustomHtml={`
      <p class="text-sm text-white text-left pb-5">
      Det är många faktorer man bör ha i åtanke när man vill annonsera på Google. En viktig del av varje framgångsrik annonskampanj är att tänka ut vilken typ av annonsering man vill ha och vad ens mål med annonseringen är. Exempel på vanliga mål är försäljningsmål, att öka exponeringen av sitt varumärke och att nå ut med information till kunder. Annonser ska bestå av relevanta sökord baserat på de mål du vill uppnå med Google Ads. 
      </p>
      <p class="text-sm text-white text-right pb-5">
      Med annonserna har du möjligheten att nå olika behov hos målgruppen beroende på vilka sökord du väljer. Skillnaden mellan olika typer av sökord och dess intention kan du ta reda på genom att exempelvis söka på “köpa löparskor” eller “bästa löparskorna”. Personer som använder sig av den första sökfrasen är förmodligen mer benägen att ta ett köpbeslut medan den andra personen troligtvis fortfarande är ute efter att få mer information innan ett köpbeslut ska tas.
      </p>
  
      <p class="text-sm text-white text-left pb-5">
      Du måste alltså se på vilken sökintention som ligger bakom sökordet eller sökfrasen för att förstå vad personer faktiskt är ute efter. Att endast titta på ett specifikt sökord ger bara ytlig bild medan intentionen bakom sökningen avgör hur relevant din annons faktiskt är för personer som söker efter det.
      </p>
      <p class="text-sm text-white text-left pb-5">
      En annan viktig faktor är vilken typ av matchning du använder dig av när du skapar dina olika kampanjer. Man talar ofta om
      <em> Exakt matchning </em>
      och
      <em> Frasmatchning </em>
      och det är viktigt att ha koll på vad som är vad för att skapa annonser med önskat resultat.
      </p>
  
  
      <h1 class="text-left text-white pt-10 text-3xl pb-5 ">
      Frasmatchning
      </h1>
      <p class="text-sm text-white text-left pb-5">
      Genom att annonsera med frasmatchning, eller
      <em> Phrase Match </em>
      syns du på fraser och liknande varianter av dessa fraser. Ett sökord med frasmatchning bestäms genom att använda tecknet 
      <em> ” </em>
      före och efter ordet. Med frasmatchning visas dina annonser upp då någon söker på det exakta sökordet och eventuella ord före eller efter.
      </p>
  
      <h1 class="text-left text-white pt-10 text-3xl pb-5 ">
      Exakt matchning
      </h1>
      <p class="text-sm text-white text-left pb-5">
      För att skapa annonser med exakt matchning, eller 
      <em> Exact Match </em>
      använder du dig av exakta sökord som bestäms genom att sätta tecknet [ före och tecknet ] efter. Annonsen visas bara upp när någon söker på det exakta sökordet utan några andra termer. Denna typ av matchning är bäst för dig som vet exakt vad du vill med annonserna och vilken typ av besökare du vill ha till din hemsida.
      </p>
      `}
    />

    <section>
    <div class='pt-20 heading-container fb-custom-color text-white'>
    <section class="cards-google2">
       <div class="pt-5 cards-container2 pb-10">
     <div class="custom-back max-w-sm pb-10 border border-black shado mx-auto pt-10">
        <h1 class="pt-40 cards2-title text-center mb-2 font-semibold tracking-tight uppercase text-rose-300"><span class="text-white"></span></h1>
        <h2 class="pb-20 text-center cards2-under-title text-white"><span class="pl-4"></span></h2>
    </div>
    </div>
    </section>

   
   
    </div>
    </section>

      <Heading
      bg={"fb-custom-color"}
      title={"Negativa sökord"}
      textColor={"text-white"}
      descCustomHtml={`
      <p class="text-sm text-white text-left pb-5">
      En mycket viktig del vid arbete med Google Ads är att använda sig av negativa sökord. Det innebär kortfattat att du samlar ihop sökord i en lista som dina annonser inte ska visas för. Detta arbete är mycket viktigt om du vill lyckas med Google Ads och få ut så mycket som möjligt av din budget. Genom att lägga till negativa sökord undviker du att synas och därmed betala för klick som kommer från besökare som inte är intresserade av det du erbjuder. Det är ett bra sätt att filtrera bort besök som kostar pengar utan att ge dig några intäkter.  
      </p>
      <p class="text-sm text-white text-left pb-20">
      Ett exempel på hur man kan använda sig av negativa sökord är om du driver ett företag som erbjuder tjänster inom sökmotoroptimering och vill få fler potentiella kunder med Google Ads. Du vill synas på “sökmotoroptimering” men du vill självklart inte betala för klick för en besökare som sökt på “gratis sökmotoroptimering”. Då ser man till att göra “gratis sökmotoroptimering” till ett negativt sökord för att undvika att spendera delar av budgeten på någon som inte är benägen att köpa. 
      </p>
    
      <h1 class="text-center text-white text-xl pb-20 ">
      Vill du läsa mer om Sökmotorannonsering?
      <br />
      <a class="text-rose-300 underline" href="/seo-sokmotoroptimering/">Klicka Här</a>
      </h1>
    `}
    
    />

    <div class="whitedivider3 fb-custom-color  pb-20">
      </div>

    <section>
    <div class=' heading-container text-black bg-white'>


    <section class="cards-google3">
       <div class="pt-5 cards-container2 pb-10">
     <div class="custom-back max-w-sm pb-10 border border-black shadow mx-auto pt-10">
        <h1 class="pt-40 cards2-title text-center mb-2 font-semibold tracking-tight uppercase text-rose-300"><span class="text-white"></span></h1>
        <h2 class="pb-20 text-center cards2-under-title text-white"><span class="pl-4"></span></h2>
    </div>
    </div>
    </section>
    </div>
    </section>
    <Heading 
      bg={"bg-white"}
      textColor={"text-black"}
      title={"Olika sätt att annonsera i Google Ads "}
      descCustomHtml={`
      <p class="text-sm text-left pb-10">
      Vid annonsering i Google ads kan du välja mellan olika typer av annonser. Du kan annonsera genom Google sökannonser / 
      <em> Google Search Text Ads </em>
      , Google Display annonser / 
      <em> Google Display Ads </em>
      , Shoppingannonser / 
      <em> Shopping Ads </em>
      , Videoannonser / 
      <em> Video advertising </em>
      eller Appannonser / 
      <em> App advertising. </em>
      </p>

      <h1 class="text-left text-3xl pb-5 ">
      Olika sätt att annonsera i Google Ads 
      </h1>
      <p class="text-sm text-left pb-10">
      Det vanligaste sättet att använda sig av betald annonsering på Google är genom Google sökannonser. Baserat på vad användaren söker efter på Google så visar Google upp relevanta resultat, inte enbart organiska resultat, utan även annonser ovanför eller under det organiska sökresultatet. Målet är att din annons ska komma högt upp när en användare söker efter det du erbjuder. Det är endast när användaren väljer att klicka på din annons som du betalar så du behöver alltså bara betala per klick (
      <em>pay per click</em>
      ). För att öka förutsättningarna för att annonsen ska synas är det en bra idé att optimera dina annonser. Detta görs genom följande:
      </p>


      <h1 class="text-left text-2xl pb-5 ">
      Rubrik
      </h1>
      <p class="text-sm text-left pb-10">
      En av de viktigaste delarna av en annons är rubriken eftersom det är den användarna ser först. Med Google Ads kan du ha tre rubriker för varje annons. Varje rubrik kan max vara 30 tecken vilket gör att det är viktigt att använda dessa tecken väl. Det är gynnsamt att använda sökordet i både rubriken och i beskrivningen av dina annonser. Med Google annonsering är det garanterat att två av dina tre rubriker kommer visas, huruvida den tredje syns beror på annonsens relevans och quality score.
      </p>

      <h1 class="text-left text-2xl pb-5 ">
      Beskrivning
      </h1>
      <p class="text-sm text-left pb-10">
      Med beskrivningen förklarar du mer ingående vad det är du erbjuder och vad kunden kan förvänta sig att hitta på sidan som annonsen leder till.
      </p>

      <h1 class="text-left text-2xl pb-5 ">
      URL-sökvägar
      </h1>
      <p class="text-sm text-left pb-10">
      Google annonsering tillåter dig att anpassa webbadressen som visas i annonsen istället för att visa den faktiska URL:en till din webbplats. 
      </p>

      <h1 class="text-left text-2xl pb-5 ">
      Google sökannonser / Google Search Text Ads
      </h1>
      <p class="text-sm text-left pb-10">
      Annonstillägg ger din annons möjlighet att “ta mer plats” och synas bättre än konkurrenters annonser som inte använder sig av annonstillägg. En annons som syns bra ökar chansen att en kund klickar på din annons istället för någon av dina konkurrenters annonser. Utöver detta ger även annonstilläggen dig möjlighet att lägga till fler länkar och visa upp mer av vad du erbjuder. Detta gör att kunden också får tillgång till fler sidor på din hemsida direkt från annonsen.
      </p>

      <h1 class="text-left text-2xl pb-5 ">
      Callout extensions /
      <br />
      beskrivningstillägg
      </h1>
      <p class="text-sm text-left pb-10">
      Annonstillägg ger din annons möjlighet att “ta mer plats” och synas bättre än konkurrenters annonser som inte använder sig av annonstillägg. En annons som syns bra ökar chansen att en kund klickar på din annons istället för någon av dina konkurrenters annonser. Utöver detta ger även annonstilläggen dig möjlighet att lägga till fler länkar och visa upp mer av vad du erbjuder. Detta gör att kunden också får tillgång till fler sidor på din hemsida direkt från annonsen.
      </p>

      <h1 class="text-left text-2xl pb-5 ">
      Displayannonser /
      <br />
      Display Ads
      </h1>
      <p class="text-sm text-left pb-10">
      Google har ett stort nätverk av webbplatser där dina annonser kan synas, såsom bloggar, nyhetssajter eller någon annan av de många hemsidor som Google samarbetar med. Dessa annonser syns för användare som är intresserade av liknande produkter som du erbjuder eller har besökt en webbplats som erbjuder liknande saker som du. Dessa annonser visas även för användare som tidigare visat intresse för liknande produkter som du erbjuder men inte tagit ett köpbeslut om än. Det som är fördelaktigt med Displayannonser är att du har möjligheten att fånga in potentiella kunder tidigare i köpprocessen än vad du kan med en Google sökannons.
      </p>


      <h1 class="text-left text-2xl pb-5 ">
      Shoppingannonser / 
      <br />
      Shopping Ads
      </h1>
      <p class="text-sm text-left pb-10">
      Google shoppingannonser möjliggör för användarna att jämföra produkter. När användarna söker efter en specifik produkt visas relevanta annonser upp på Google sök eller under shoppingfliken. Du kan ladda upp dina produkter i Google Merchant Center i text eller XML-format. Denna lista innehåller de produkter du vill sälja, samt dess attributer såsom färg, märke, pris m.m. Efter att du laddat upp dina produkter i listan anger du din budget för annonserna. Efter att detta är gjort kommer dina produkter synas på Google Shopping-plattformen, samt i sökresultatet på Google.
      </p>


      <h1 class="text-left text-2xl pb-5 ">
      Gmail-annonser /  
      <br />
      Gmail Ads
      </h1>
      <p class="text-sm text-left pb-10">
      Gmail-annonser är ytterligare en möjlighet för dig att bli upptäckt av dina potentiella kunder. Dessa annonser fungerar baserat på en specifik användares kontoaktivitet och visar sig som interaktiva annonser som syns i inkorgen i din Gmail.
      </p>
        
    
      <h1 class="text-left text-2xl pb-5 ">
      Google sökannonser / 
      <br />
      Google Search Text Ads
      </h1>
      <p class="text-sm text-left pb-10">
      Näst efter Google så är YouTube världens största sökmotor och kan därför vara intressant använda sig av i sin digitala marknadsföring. Med något som kallas för Google Ads for video har du möjligheten att visa dina annonser i sökresultaten på YouTube, både före, under och efter att videon visas. Det fungerar på samma sätt som Google Ads, videon laddas upp i Google Ads och man lägger en budget för annonsen. Därefter betalar man när en användare klickar och tittar på videon.
      </p>
    

      <h1 class="text-left text-2xl pb-5 ">
      App-annonser / 
      <br />
      App Advertising
      </h1>
      <p class="text-sm text-left pb-10">
      Om du vill hitta potentiella användare till din mobilapp är det en bra idé att marknadsföra med hjälp av en app-annons. Denna annonsering kommer att resultera i fler installationer av din app samt driva konverteringar i din app. Med denna typ av annonskampanj har du möjlighet att annonsera på annonsnätverk såsom Google sök, Google Play, YouTube och som Display-annonser.
      </p>
     

      <h1 class="text-left text-2xl pb-5 ">
      Behöver du hjälp med att komma igång med Google Ads?
      </h1>
      <p class="text-sm text-left pb-5">
      Oavsett om du behöver hjälp med att sätta upp ett nytt Google Ads-konto och börja annonsera eller om du känner att du har fastnat och inte vet hur du ska ta din annonsering till nästa nivå finns vi här för dig.
      </p>
      <p class="text-sm text-left pb-5">
      På Effektify har vi många år bakom oss när det kommer till att bygga upp och få företag att växa. Vi har lång erfarenhet av strategiarbete, digital marknadsföring, försäljning och har stor kunskap när det kommer till Google Ads och SEO.  
      </p>
      <p class="text-sm text-left pb-5">
      Tillsammans har vi en djup förståelse för de olika utmaningar som företag kan ställas inför och hur de kan ta sin verksamhet till nästa nivå. Vi arbetar nära våra kunder för att få en bättre förståelse om verkligheten och målen för att kunna ta del av visionen som ligger bakom. Tillsammans med våra experter inom varje område tar vi fram en tydlig strategi för att på bästa sätt nå det önskade målet.
      </p>

    
      `}
    />
    </>
  )
}
