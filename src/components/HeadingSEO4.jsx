import React from 'react'
import './Heading.css'
import img from '../assets/Interna-lankar.webp'
import ContactForm from './ContactForm'

export const HeadingSEO4 = ({mainTitle1, mainDesc1, cardTitle1, cardDesc1, mainTitle2, mainDesc2, underImageDesc, underImageButton, underImageLink, mainTitle3, mainDesc3, cardTitle2, cardDesc2}) => {
  return (
    <>
    <div class='pt-20 heading-container text-center text-black bg-white'>
    <h1 class="text-3xl uppercase pb-5">{mainTitle1}</h1>
    <div dangerouslySetInnerHTML={{__html: mainDesc1}}></div>
    </div>
    
    <section class="bg-white">
       <div class="pt-5 cards-container p-6">
     <div class="custom-back max-w-sm p-6 pb-10 md:max-w-6xl md:pb-20 md:p-20 mx-auto shadow headingSEO-card pt-10">
        <h1 class="text-center text-xl pt-5 pb-5 text-white">{cardTitle1}</h1>
        <div dangerouslySetInnerHTML={{__html: cardDesc1}}></div>
    </div>
    </div>
    </section>

   
    <div class='pt-20 heading-container text-center text-black bg-white'>
    <h1 class="text-2xl uppercase pb-5">{mainTitle2}</h1>
    <div dangerouslySetInnerHTML={{__html: mainDesc2}}></div>

    <img class="mx-auto md:w-3/6  pt-5 pb-10 drop-shadow-lg" src={img} alt="" />
    <p class='text-sm text-left pb-5'>
    {underImageDesc}
    </p>

    <div class="pt-20">
    <a href={underImageLink} class="pt-2 pb-2 cards-video-button uppercase">{underImageButton}</a>
    </div>
    </div>
    
    <section class="bg-white">
    <div class='pt-20 heading-container text-center text-black bg-white'>
    <h1 class="text-2xl uppercase pb-5">{mainTitle3}</h1>
    <div dangerouslySetInnerHTML={{__html: mainDesc3}}></div>
    </div>
    </section>

    <section class="bg-white">
       <div class="pt-5 cards-container p-6">
     <div class="custom-back mx-auto max-w-sm p-6 pb-10 md:max-w-6xl md:pb-20 md:p-20 shadow headingSEO-card pt-10">
        <h1 class="text-center text-xl pt-5 pb-5 text-white">{cardTitle2}</h1>
      <div dangerouslySetInnerHTML={{__html: cardDesc2}}></div>
        
    </div>
    </div>
    </section>

    </>
  )
}
