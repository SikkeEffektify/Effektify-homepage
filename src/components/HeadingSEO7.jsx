import React from 'react'
import './Heading.css'
import img from '../assets/Effektify-SSL-saker-anslutning-1.webp'
import ContactForm from './ContactForm'

export const HeadingSEO7 = ({mainTitle1, mainDesc1, cardTitle1, cardDesc1, underCard1Desc, mainTitle2, mainDesc2, cardTitle2, cardDesc2, underCard2Desc, cardTitle3, cardDesc3, underCard3Desc, mainTitle3, mainDesc3}) => {
  return (
    <>
    <div class='pt-20 heading-container text-center text-black bg-white'>
    <h1 class="text-3xl uppercase pb-5">{mainTitle1}</h1>
    <div dangerouslySetInnerHTML={{__html: mainDesc1}}></div>
    </div>
    
   

    <section class="bg-white">
       <div class="pt-5 cards-container p-6">
     <div class="custom-back mx-auto max-w-sm p-6 pb-10  shadow headingSEO-card4 pt-10">
        <h1 class="text-center text-xl pt-5 pb-5 text-white">{cardTitle1}</h1>
        <div dangerouslySetInnerHTML={{__html: cardDesc1}}></div>
        
    </div>
    </div>

    <div class="heading-container">
      <div dangerouslySetInnerHTML={{__html: underCard1Desc}}></div>
    </div>
    </section>

    <div class='pt-20 heading-container text-center text-black bg-white'>
    <h1 class="text-3xl uppercase pb-5">{mainTitle2}</h1>
    <div dangerouslySetInnerHTML={{__html: mainDesc2}}></div>
    </div>
    <section class="bg-white">
    <div class="pt-5 cards-container p-6">
     <div class="custom-back mx-auto max-w-sm p-6 pb-10  shadow headingSEO-card4 pt-10">
        <h1 class="text-center text-xl pt-5 pb-5 text-white">{cardTitle2}</h1>
        <div dangerouslySetInnerHTML={{__html: cardDesc2}}></div>
      </div>
    </div>    
    </section>

    <div class='pt-20 heading-container text-center text-black bg-white'>
      <div dangerouslySetInnerHTML={{__html: underCard2Desc}}></div>
    </div>

    <section class="bg-white">
    <div class="pt-5 cards-container p-6">
     <div class="custom-back mx-auto max-w-sm p-6 pb-10  shadow headingSEO-card5 pt-10">
        <h1 class="text-center text-xl pt-5 pb-5 text-white">{cardTitle3}</h1>
        <div dangerouslySetInnerHTML={{__html: cardDesc3}}></div>
      </div>
    </div>    
    </section>

    <section class="bg-white">
    <div dangerouslySetInnerHTML={{__html: underCard3Desc}}></div>

   

    </section>
    <div class="whitedivider pb-20">
    </div>

    <div class="heading-container text-white">
      
      <h1 class="text-center uppercase text-2xl pb-10">{mainTitle3}</h1>
      <div dangerouslySetInnerHTML={{__html: mainDesc3}}></div>
     
    </div>
    </>
  )
}
