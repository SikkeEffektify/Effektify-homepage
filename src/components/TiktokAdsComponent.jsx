import React from 'react'

export default function TiktokAdsComponent({mainTitle1, mainDesc1, underCard1Title, underCard1Desc, mainTitle2, mainDesc2, underCard2Desc, mainTitle3, mainDesc3}) {
  return (
    <>
     
     <section>
    <div class='pt-20 heading-container bg-white text-black'>
    <h1 class="text-left md:text-center text-5xl pb-5 ">
       {mainTitle1}
    </h1>

    <p class="text-sm text-left pb-10">
    {mainDesc1}
    </p>

    <section class="cards-tiktok">
       <div class="pt-5 cards-container2 pb-10">
     <div class="custom-back max-md:max-w-sm pb-10 border border-black shado mx-auto pt-10">
        <h1 class="pt-40 cards2-title text-center mb-2 font-semibold tracking-tight uppercase text-rose-300"><span class="text-white"></span></h1>
        <h2 class="pb-20 text-center cards2-under-title text-white"><span class="pl-4"></span></h2>
    </div>
    </div>
    </section>


    <h1 class="text-right text-4xl pb-5 ">
    {underCard1Title}
    </h1>
    <p class="text-sm text-right pb-10">
    {underCard1Desc}
    </p>
    </div> 
    </section>

    <div class="whitedivider5 pb-20">
      </div>

        
    <section>
    <div class='pt-20 heading-container text-white'>
    <h1 class="text-left md:text-center md:pb-10 text-5xl pb-5 ">
    {mainTitle2}
    </h1>

    <div dangerouslySetInnerHTML={{__html: mainDesc2}}></div>

    <section class="cards-tiktok2">
       <div class="pt-5 cards-container2 pb-10">
     <div class="custom-back max-md:max-w-sm pb-10 border border-black shado mx-auto pt-10">
        <h1 class="pt-40 cards2-title text-center mb-2 font-semibold tracking-tight uppercase text-rose-300"><span class="text-white"></span></h1>
        <h2 class="pb-20 text-center cards2-under-title text-white"><span class="pl-4"></span></h2>
    </div>
    </div>
    </section>

    <p class="text-lg text-center pt-10 pb-10">
    {underCard2Desc}
    </p>
    
    <hr class="my-12 h-0.5 border-t-0 bg-white opacity-100 dark:opacity-50" />

    </div>
     </section>
    
    
     <section>
    <div class='pt-20 heading-container bg-white text-black'>

    <h1 class="text-left md:text-center md:pt-20 text-5xl pb-5 ">
    {mainTitle3}
    </h1>
    <div dangerouslySetInnerHTML={{__html: mainDesc3}}></div>


    </div>
    </section>

    
    
    </>
  )
}
