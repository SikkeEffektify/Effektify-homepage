import React from 'react'
import ContactForm from '../components/ContactForm'
import img from '../assets/effektify-digitalbyra-symbol.webp'
import gif from '../assets/PONG_Light_version2.gif'

export default function Tjanster() {
  return (
    <>
    <section>
   <div class='pt-20 heading-container bg-white text-black'>
    <h1 class="text-left text-5xl pb-5 ">
    Tjänster
    </h1>
    <p class="text-sm text-left pb-10">
    Med våra tjänster hjälper vi företag att synas bättre och därmed öka sin försäljning. Oavsett vilken typ av synlighet som lämpar sig för just ditt företag, garanterar vi att med hjälp av våra specialister på varje område, kan utforma en strategi som hjälper dig nå dina mål.
    </p>
    </div>
    </section>


    <section>
   <div class='pt-20 heading-container bg-neutral-100 text-black'>
    <p class="text-sm text-left pb-10">
    Det är med helhjärtat engagemang vi hjälper företag nå den digitala närvaro som krävs idag. På Effektify har vi många års erfarenhet av att bygga och växa företag, strategiarbete, marknadsföring och försäljning.
    </p>
    <p class="text-sm text-left pb-10">
    Som vi ser det handlar det inte om SEO eller Google Ads, Facebook eller TikTok. Vi väljer verktyg enligt uppgiften, inte tvärtom.    
    </p>

    <div class="text-center pb-10">
    <a href="/google-ads">
    <i class="fa-solid fa-chart-column fa-2xl custom-icon"></i>
    <p class="text-center text-sm pt-3"> Google Ads</p>
    </a>
    </div>

    <div class="text-center pb-10">
    <a href="/seo-sokmotoroptimering">
    <i class="fa-solid fa-magnifying-glass fa-flip-horizontal fa-2xl custom-icon"></i>
    <p class="text-center text-sm pt-3"> Sökmotoroptimering</p>
    </a>
    </div>

    <div class="text-center pb-10">
    <a href="/webbcopy">
    <i class="fa-solid fa-pen-to-square fa-flip-horizontal fa-2xl custom-icon"></i>
    <p class="text-center text-sm pt-3"> Webbcopy</p>
    </a>
    </div>


    <div class="text-center pb-10">
    <a href="/facebook-ads-instagram-ads/">
    <i class="fa-solid fa-comments fa-2xl custom-icon"></i>
    <p class="text-center text-sm pt-3"> Facebook Ads</p>
    </a>
    </div>

    <div class="text-center pb-10">
    <a href="/webb/">
    <i class="fa-solid fa-globe fa-2xl custom-icon"></i>
    <p class="text-center text-sm pt-3"> Webbdesign</p>
    </a>
    </div>


    <div class="text-center pb-10">
    <a href="/on-page-seo/">
    <i class="fa-solid fa-note-sticky fa-2xl custom-icon"></i>
    <p class="text-center text-sm pt-3"> On-page</p>
    </a>
    </div>
    </div>
    </section>

    <section>
    <div class='pt-20 heading-container bg-black text-white'>
    <h1 class="text-center text-3xl pb-5 ">
    Öka försäljningen
    med Google Ads
    </h1>
    <p class="text-sm text-left pb-10">
    Google Ads är ett utmärkt verktyg för dig som vill
    <em class='text-rose-300'> öka din försäljning, öka antalet människor som besöker din hemsida eller som vill ha fler återkommande kunder. </em>
    Med Google Ads kan du specificera den målgrupp du riktar dig mot. Du har även möjlighet att rikta in annonserna geografiskt så att du syns på specifika sökord i specifika orter.
    </p>  

    <p class="text-lg text-left pb-20">
    <a href="/google-ads"><span>Kom igång med Google Ads redan idag!</span></a>
    </p>

    <h1 class="text-right text-4xl pb-5 ">
    Få fler besökare
    till din hemsida
    </h1>
    <p class="text-sm text-right pb-10">
    Att synas på Google ger ditt företag större möjlighet att nå ut till kunder som söker efter de produkter eller tjänster som just du erbjuder. Sökmotoroptimering eller SEO  är därför livsviktigt för att ditt företag ska synas online, få fler besökare och göra fler affärer som följd av detta.   
    </p>

    <p class="text-sm text-center pb-10">
    <a href="/on-page-seo">Läs mer om just <em class="text-rose-300">Sökmotoroptimering</em></a>   
    </p>

    <h1 class="text-center text-6xl pb-10 ">
    vi är
    <span class="underline decoration-rose-300"> effektify</span>
    </h1>

    <h1 class="text-center text-4xl pb-5 ">
    och vi är den
    </h1>

    <h1 class="text-center text-5xl pb-5 ">
    kreativa digitalbyrån
    du behöver
    </h1>

    <img src={img} class="bg-effect invert" alt="" />

    </div>
    </section>

    <div class="whitedivider5 invert  pb-20">
      </div>

    <img src={gif} alt="" />
    <ContactForm />
    </>
  )
}
