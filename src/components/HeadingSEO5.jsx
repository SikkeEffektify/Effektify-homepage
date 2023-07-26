import React from 'react'
import './Heading.css'
import img from '../assets/how-google-search.webp'
import ContactForm from './ContactForm'

export const HeadingSEO5 = ({mainTitle1, mainDesc1, cardTitle1, cardDesc1, afterCardText, afterCardButton, afterCardLink, mainTitle2, mainDesc2, cardTitle2, cardDesc2, endDesc}) => {
  return (
    <>
    <div class='pt-20 heading-container text-center text-black bg-white'>
    <h1 class="text-3xl uppercase pb-5">{mainTitle1}</h1>
    <div dangerouslySetInnerHTML={{__html: mainDesc1}}></div>
    </div>
    
    <section class="bg-white">
       <div class="pt-5 cards-container p-6">
     <div class="custom-back mx-auto max-w-sm p-6 pb-10 md:max-w-6xl md:pb-20 md:p-20  shadow headingSEO-card3 pt-10">
        <h1 class="text-center text-xl pt-5 pb-5 text-white">{cardTitle1}</h1>
        <div dangerouslySetInnerHTML={{__html: cardDesc1}}></div>
    </div>
    </div>

    <div class="heading-container pt-10 text-black">
    <p class="text-sm pb-5">{afterCardText}</p>
    </div>
    <div class="pt-20 pb-10 text-center">
    <a href={afterCardLink} class="pt-2 pb-2 cards-video-button uppercase">{afterCardButton}</a>
    </div>
    </section>
  

    <section>
    <div class='pt-20 heading-container text-center text-black bg-white'>
    <h1 class="text-3xl uppercase pb-5">{mainTitle2}</h1>
    <div dangerouslySetInnerHTML={{__html: mainDesc2}}></div>
    </div>
    
    <section class="bg-white">
       <div class="pt-5 cards-container p-6">
     <div class="custom-back mx-auto max-w-sm p-6 pb-10 md:max-w-6xl md:pb-20 md:p-20 shadow headingSEO-card pt-10">
        <h1 class="text-center text-xl pt-5 pb-5 text-white">{cardTitle2}</h1>
        <div dangerouslySetInnerHTML={{__html: cardDesc2}}></div>
    </div>
    </div>

    <div class="heading-container pt-10 text-black">
    <div dangerouslySetInnerHTML={{__html: endDesc}}></div>
    </div>

    </section>
    </section>
    </>
  )
}
