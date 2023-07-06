import React from 'react'
import './Heading.css'
import img from '../assets/how-google-search.webp'
import ContactForm from './ContactForm'

export const HeadingSEO = ({mainTitle1, mainDesc1, cardTitle, cardDesc, smallDesc1, mainTitle2, mainDesc2, mainDesc3, endSection}) => {
  return (
    <>
    <div class='pt-20 heading-container text-center text-black bg-white'>
    <h1 class="text-3xl uppercase pb-5">{mainTitle1}</h1>
    <div dangerouslySetInnerHTML={{__html: mainDesc1}}></div>
    </div>
    
    <section class="bg-white">
       <div class="pt-5 cards-container p-6">
     <div class="custom-back max-w-sm p-6 pb-10  shadow headingSEO-card pt-10">
        <h1 class="text-center text-xl pt-5 pb-5 text-white">{cardTitle}</h1>
        <div dangerouslySetInnerHTML={{__html: cardDesc}}></div>
    </div>
    </div>
    </section>

    <section class="bg-white heading-container pb-20">
     <div dangerouslySetInnerHTML={{__html: smallDesc1}}></div>
    </section>

    <section class="bg-white heading-container pb-10">
      <h1 class="text-3xl text-center pb-10">{mainTitle2}</h1>
      <p class="text-sm pb-5">{mainDesc2}</p>
      <img class="mx-auto pt-5 drop-shadow-lg" src={img} alt="" />
      <div dangerouslySetInnerHTML={{__html: mainDesc3}}></div>
    </section>

    <section class="bg-white heading-container pb-10">
    <div dangerouslySetInnerHTML={{__html: endSection}}></div>
   </section>


    </>
  )
}
