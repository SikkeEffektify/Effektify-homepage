import React from 'react'

export default function LinkedInComponent({mainTitle1, mainDesc1, underCard1Title, underCard1Desc, mainTitle2, mainDesc2, mainTitle3, mainDesc3, underCard2Title, underCard2Desc, endTitle, endDesc}) {
  return (
    <>
    
    
    <section>
    <div class='pt-20 heading-container bg-white text-black'>
    <h1 class="text-left text-5xl pb-5 ">
       {mainTitle1}
    </h1>

    <p class="text-sm text-left pb-10">
   {mainDesc1}
    </p>

    <section class="cards-linkedin">
       <div class="pt-5 cards-container2 pb-10">
     <div class="custom-back max-md:max-w-sm pb-10 border border-black shado mx-auto pt-10">
        <h1 class="pt-40 cards2-title text-center mb-2 font-semibold tracking-tight uppercase text-rose-300"><span class="text-white"></span></h1>
        <h2 class="pb-20 text-center cards2-under-title text-white"><span class="pl-4"></span></h2>
    </div>
    </div>
    </section>


    <h1 class="text-center text-4xl pb-5 ">
    {underCard1Title}
    </h1>


    <div dangerouslySetInnerHTML={{__html: underCard1Desc}}></div>

    <h1 class="text-center text-4xl pb-10 ">
    {mainTitle2}
    </h1>

    <div dangerouslySetInnerHTML={{__html: mainDesc2}}></div>
    </div>
    </section>
    
   <div class="whitedivider5 linkedin-custom-color  pb-20">
      </div>


    <section>
    <div class='pt-20 heading-container linkedin-custom-color text-white'>
        
    <h1 class="text-left text-4xl pb-5 ">
    {mainTitle3}
    </h1>

    <div dangerouslySetInnerHTML={{__html: mainDesc3}}></div>

    <hr class="my-12 h-0.5 border-t-0 bg-white opacity-100 dark:opacity-50" />



    <section class="cards-linkedin2">
       <div class="pt-5 cards-container2 pb-10">
     <div class="custom-back max-md:max-w-sm pb-10 border border-black shado mx-auto pt-10">
        <h1 class="pt-40 cards2-title text-center mb-2 font-semibold tracking-tight uppercase text-rose-300"><span class="text-white"></span></h1>
        <h2 class="pb-20 text-center cards2-under-title text-white"><span class="pl-4"></span></h2>
    </div>
    </div>
    </section>


    <h1 class="text-left text-4xl pb-5 ">
    {underCard2Title}
    </h1>

    <div dangerouslySetInnerHTML={{__html: underCard2Desc}}></div>

    <h1 class="text-left text-4xl pb-5 ">
    {endTitle}
    </h1>
    
    <div dangerouslySetInnerHTML={{__html: endDesc}}></div>

    </div>
    </section>

    
    </>
  )
}
