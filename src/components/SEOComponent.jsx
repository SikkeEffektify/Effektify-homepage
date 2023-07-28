import React from 'react'
import stats from '../assets/effektify-hjalper-foretag-med-lokal-seo-.webp'
import stats2 from '../assets/Effektify-hjalper-foretag-med-lokal-sokmotoroptimering.webp'
import stats3 from '../assets/effektify-hjalper-dig-med-seo-lokal.webp'

export default function SEOComponent({mainTitle1, mainDesc1, underImage1, mainTitle2, mainDesc2, underImage2, mainTitle3, mainDesc3, seoLink, seoLinkText, seoLinkButton, underButtonDesc, endTitle, endDesc, bg }) {
  return (
    <>
    <section class="">
   <div className='hero '>
    
    <img class=" min-w-full min-h-full absolute object-cover  hero-image" src={bg} />
    <div class="vidContentSEO hero-image-text  md:pb-40">
        <h1 class='text-5xl pl-4 text-left uppercase drop-shadow-xl text-white pb-10'>{mainTitle1}<span class="text-rose-300">.</span></h1>
         <div class="drop-shadow-lg" dangerouslySetInnerHTML={{__html: mainDesc1}}></div>
        
         
    </div>

   </div>
   
    </section>

    <section>
    <div class='pt-20 heading-container text-center  text-black bg-white'>
    <img class="mx-auto pt-5 drop-shadow-lg  pb-10" src={stats} alt="" />
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
    <div dangerouslySetInnerHTML={{__html: underImage2}}></div>
    </div>
    </section>

    <section>
    <div class='pt-20 heading-container text-center text-black bg-white'>
    <img class="mx-auto pt-5 drop-shadow-lg pb-10" src={stats3} alt="" />
    <h1 class="text-xl uppercase pb-10">
    {mainTitle3}
    </h1>
    <div dangerouslySetInnerHTML={{__html: mainDesc3}}></div>
    </div>
    </section>

    <section>
    <div class='pt-20 heading-container text-center text-white bg-rose-300 pb-20'>
    <h1 class="text-lg uppercase pb-10">
    <a href={seoLink}>{seoLinkText}</a>
    </h1>
    <a class="vidButton" href={seoLink}>{seoLinkButton}</a>
    </div>
    </section>

    <section className='bg-white heading-container pt-10'>
    <div  dangerouslySetInnerHTML={{__html: underButtonDesc}}></div>
  

    </section>

    <section>
    <div class='pt-20 heading-container text-center text-black bg-white'>

    <h1 class="text-2xl uppercase pb-10">
    {endTitle}
    </h1>
    <div dangerouslySetInnerHTML={{__html: endDesc}}></div>
    </div>
    </section>
    </>

  )
}
