import React from 'react'
import TiktokAdsComponent from '../components/TiktokAdsComponent'
import ContactForm from '../components/ContactForm'

export default function TiktokAds() {
  return (
    <>

    <TiktokAdsComponent 
      mainTitle1={"TikTok Ads"}
      mainDesc1={"TikTok har över 800 miljoner aktiva användare månatligen, vilket gör det till en av världens snabbast växande appar. Detta innebär att det är en stor fördel att synas på appen, speciellt om man vill nå de som är mellan 16-24, då de utgör 41 % av användarna."}
      underCard1Title={"Olika sätt att annonsera med TikTok Ads"}
      underCard1Desc={" Det finns olika sätt att använda sig av TikTok Ads på, in feed video-ads, pre roll-ads and branded hashtag challenge. In Feed video-ads är videos som kommer upp medan användaren skrollar. Pre roll-ads är videos som som startar så fort appen öppnas. Branded hashtag challenge är videos som uppmuntrar andra användare att delta i utmaningen och använda hashtagen i fråga, och på så vis sprida varumärkeskännedom. För de flesta av dessa alternativ behövs en TikTok account manager."}
      mainTitle2={" De tre kategorierena av TikTok ads"}
      mainDesc2={`
      <p class="text-sm text-left pb-10">
      Annonser som skapas genom TikTok Ads Manager är strukturerade i tre kategorier, “kampanjer”, “annonsgrupper” och “annonser”. Det första steget till att annonsera på TikTok är att skapa en “kampanj”, vilket också innebär att du behöver bestämma dina mål med kampanjen och vad du vill att det slutgiltiga resultatet av dina annonser ska vara. I denna kategori sätter man kampanjmål, man sätter en budget för kampanjen och man skapar en annonsgupp.
      </p>

      <p class="text-sm text-left pb-5">
      Det andra steget till att annonsera på TikTok är att skapa en annonsgrupp, vilket innebär att du kan specificera målgrupp, budget, schema och optimerade mål för varje annonsgrupp. Du kan välja antalet annonser i varje annonsgrupp för att sedan kunna jämföra resultatet av dessa och utifrån det sedan optimera annonsgrupperna utifrån resultatet.   
      </p>

      <p class="text-sm text-left pb-10">
      Det tredje steget till att annonsera på TikTok är att skapa annonserna, vilket är vad du slutligen presenterar till din målgrupp, det vill säga det de kommer se. Detta görs genom att namnge annonserna, välja format för annonserna, ange detaljer om annonserna och lägga till tracking.   
      </p>
      `}

      underCard2Desc={"Nå ut till över 800 miljoner människor månatligen genom att annonsera med TikTok Ads."}

      mainTitle3={"Analysera dina TikTok-annonser"}
      mainDesc3={` 
      <p class="text-sm text-left pb-5">
      Efter att du har skapat dina annonser i TikTok Ads Manager och kört de ett tag är det dags för att analysera hur annonserna har gått. I TikTok Ads Manager finns det två sätt att göra detta på, antingen från en makrosynpunkt eller en mikrosynpunkt.
      </p>
      <p class="text-sm text-left pb-5">
      När man analyserar datan utifrån en makrosynpunkt ser man över den allmänna datan från alla kampanjer, och för att få ett fågelperspektiv på din samlade data är det bästa alternativet att kolla på sidan “Dashboard”. Mikrosynpunkt däremot, innebär att man fokuserar på detaljerna i kampanjerna och gräver djupare i dessa. För att bättre förstå resultatet av kampanjerna, annonsgrupperna och annonserna använder man sig av sidan “Campaign”.    
      </p>
      <p class="text-sm text-left pb-10 md:pb-40">
      Sidan “Dashboard” bör vara det första du använder dig av då du med den kan hålla dig uppdaterad vad gäller resultat, ad spend, och den allmänna statusen för dina kampanjer. På sidan “Campaign” däremot, kan du djupdyka i alla detaljer för dina kampanjer, annonsgrupper och annonser. Här kan du även göra saker så som att filtrera dina kampanjer, anpassa formatet för att att lättare analysera datan och se över detaljerad data för varje kampanj, annonsgrupp och annons.   
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
