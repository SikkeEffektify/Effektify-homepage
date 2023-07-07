import React from 'react'
import './Heading.css'
import img from '../assets/Effektify-SSL-saker-anslutning-1.webp'

export const HeadingSEO6 = ({mainTitle1, mainDesc1, mainTitle2, mainDesc2, cardTitle1, cardDesc1, endList, endTitle, endText}) => {
  return (
    <>
    <div class='pt-20 heading-container text-center text-black bg-white'>
    <h1 class="text-3xl uppercase pb-5">{mainTitle1}</h1>
    <div dangerouslySetInnerHTML={{__html: mainDesc1}}></div>
    </div>
    
    <div class='pt-20 heading-container text-center text-black bg-white'>
    <h1 class="text-3xl uppercase pb-5">{mainTitle2}</h1>
    <div dangerouslySetInnerHTML={{__html: mainDesc2}}></div>
  
    </div>

    <section class="bg-white">
       <div class="pt-5 cards-container p-6">
     <div class="custom-back max-w-sm p-6 pb-10 shadow headingSEO-card pt-10">
        <h1 class="text-center text-xl pt-5 pb-5 text-white">{cardTitle1}</h1>
        <div dangerouslySetInnerHTML={{__html: cardDesc1}}></div>
    </div>
    </div>

    <div class="heading-container">
    <h1 class="text-center text-lg pt-5 pb-5 text-black">{endTitle}</h1>

    <div dangerouslySetInnerHTML={{__html: endList}}></div>

    <img class="mx-auto pt-5 drop-shadow-lg pb-5" src={img} alt="" /> 
    <p class="text-sm">
    {endText}
    </p>
    </div>
    </section>
    </>
  )
}
