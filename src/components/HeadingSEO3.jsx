import React from 'react'
import './Heading.css'
import img from '../assets/SEO-sokmoteropt-titlar.webp'
import img2 from '../assets/Meta-beskrivning.webp'
import img3 from '../assets/Namnge-bilder-pa-ratt-satt-1.webp'
import ContactForm from './ContactForm'

export const HeadingSEO3 = ({mainTitle1, mainDesc1, mainDesc2, smallTitle1, smallDesc1, smallDesc2, smallDesc3, listDesc, imageText, endDesc}) => {
  return (
    <>
    <div class='pt-20 heading-container text-center text-black bg-white'>
    <h1 class="text-3xl uppercase pb-5">{mainTitle1}</h1>
      <div dangerouslySetInnerHTML={{__html: mainDesc1}}></div>
    </div>


    <section class="text-black bg-white heading-container pt-20">
    <div dangerouslySetInnerHTML={{__html: mainDesc2}}></div>
    </section>
    
    <section class="text-black bg-white heading-container pt-5">
    <h1 class="text-lg pt-10 pb-5 uppercase text-center">{smallTitle1}</h1>
    <p class="text-sm pb-5">{smallDesc1}</p>
    <img class="mx-auto md:w-3/5  pt-5 drop-shadow-lg pb-5" src={img} alt="" />
    <div dangerouslySetInnerHTML={{__html: smallDesc2}}></div>
    <img class="mx-auto md:w-3/5  pt-5 drop-shadow-lg pb-5" src={img2} alt="" />
    <div dangerouslySetInnerHTML={{__html: smallDesc3}}></div>
    </section>
    
    <section class="bg-white heading-container">
      <div dangerouslySetInnerHTML={{__html: listDesc}}></div>
    </section>

    <section class="bg-white heading-container">
    <p class='text-sm pb-5'>{imageText}</p>
    <img class="mx-auto md:w-3/5  pt-5 drop-shadow-lg pb-5" src={img3} alt="" /> 
    <div dangerouslySetInnerHTML={{__html: endDesc}}></div>

    </section>

    </>
  )
}
