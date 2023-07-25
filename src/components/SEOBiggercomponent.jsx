import React from 'react'
import bg2 from '../assets/seo-google-my-business.webp'
import stats2 from '../assets/Sökmotoroptimering-seo-1.webp'
import ContactForm from './ContactForm'



export default function SEOBiggerComponent({mainTitle1, mainDesc1, mainTitle2, mainDesc2, mainTitle3, mainDesc3, mainTitle4, mainDesc4, mainTitle5, mainDesc5, mainTitle6, mainDesc6, mainTitle7, mainDesc7, mainTitle8, mainDesc8, mainTitle9, mainDesc9, bg}) {
  return (
    <>
    <section>
   <div className='hero '>
    <img class="min-w-full min-h-full absolute object-cover hero-image" src={bg} />
    <div class="vidContent hero-image-text pb-40  ">
        <h1 class='text-5xl pl-4 text-left uppercase text-white pt-10 pb-10'>{mainTitle1}<span class="text-rose-300">.</span></h1>
        <p class='text-left text-lg text-white'>
        {mainDesc1}
        </p>   
    </div>
   </div>
    </section>

    <section>
    <div class='pt-20 md:pt-40 heading-container text-center text-white '>
    <h1 class="text-2xl uppercase pb-10">
    {mainTitle2}
    </h1>
    <div dangerouslySetInnerHTML={{__html: mainDesc2}}></div>
    <section class="cards-seo">
       <div class="pt-5 cards-container2 pb-10">
     <div class="custom-back max-md:max-w-sm pb-10 border border-black shado  mx-auto  pt-10">
        <h1 class="pt-40 cards2-title text-center mb-2 font-semibold tracking-tight uppercase text-rose-300"><span class="text-white"></span></h1>
        <h2 class="pb-20 text-center cards2-under-title text-white"><span class="pl-4"></span></h2>
    </div>
    </div>

    <div class='pt-10 heading-container text-center text-white '>
    <h1 class="text-2xl uppercase pb-10">
    {mainTitle3}
    </h1>
   
    <div dangerouslySetInnerHTML={{__html: mainDesc3}}></div>

    <h1 class="text-3xl  uppercase pb-10">
    {mainTitle4}
    </h1>

    <div dangerouslySetInnerHTML={{__html: mainDesc4}}></div>

    </div>
    </section>

    </div>
    </section>
    <div class="whitedivider3  pb-20">
      
      </div>

      <section>
    <div class='pt-20 heading-container text-center text-black bg-white'>
      <h1 class="text-2xl uppercase pb-10">
      {mainTitle5}
      </h1>
      <div dangerouslySetInnerHTML={{__html: mainDesc5}}></div>
      <section class="cards-seo2">
       <div class="pt-5 cards-container2 pb-10">
     <div class="custom-back max-md:max-w-sm pb-10 border border-black shado mx-auto pt-10">
        <h1 class="pt-40 cards2-title text-center mb-2 font-semibold tracking-tight uppercase text-rose-300"><span class="text-white"></span></h1>
        <h2 class="pb-20 text-center cards2-under-title text-white"><span class="pl-4"></span></h2>
    </div>
    </div>
    </section>

    <hr
  class="my-12 h-0.5 border-t-0 bg-black opacity-100 dark:opacity-50" />
    <h1 class="text-2xl text-left md:text-center uppercase pt-5 pb-5">
    {mainTitle6}
    </h1>
   <div dangerouslySetInnerHTML={{__html: mainDesc6}}></div>
    </div>
    </section>

    <section>
    <div class='pt-20 heading-container text-center text-white '>
      <h1 class="text-2xl uppercase pb-10">
      {mainTitle7}
      </h1>
      <div dangerouslySetInnerHTML={{__html: mainDesc7}}></div>

    </div>
    </section>

    <section>
   <div className='hero '>
    <img class="min-w-full min-h-full absolute object-cover hero-image" src={bg2} />
    <div class="vidContentSEO hero-image-text pb-40  bg-black/80">
        <h1 class='text-5xl pl-4 text-left uppercase text-white pt-40 pb-10'>
        {mainTitle8}
        </h1>
        <div dangerouslySetInnerHTML={{__html: mainDesc8}}></div>
    </div>
   </div>
    </section>

    <section>
    <div class='pt-20 md:pt-80 heading-container text-center text-white'>
      <h1 class="text-2xl uppercase pb-10">
      {mainTitle9}
      </h1>
      <div dangerouslySetInnerHTML={{__html: mainDesc9}}></div>
    </div>
    </section>
    </>

  )
}
