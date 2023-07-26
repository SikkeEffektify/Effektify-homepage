import React from 'react'
import './Heading.css'

export const HeadingSEO8 = ({mainTitle1, mainDesc1, cardTitle1, cardDesc1, underCard1Desc, underCard1Desc2, cardTitle2, cardDesc2}) => {
  return (
    <>
    <div class='pt-20 heading-container text-center text-black bg-white'>
    <h1 class="text-2xl uppercase pb-5">{mainTitle1}</h1>
   <div dangerouslySetInnerHTML={{__html: mainDesc1}}></div>
    </div>
    

    <section class="bg-white">
       <div class="pt-5 cards-container p-6">
     <div class="custom-back mx-auto max-w-sm p-6 pb-10 md:max-w-6xl md:pb-20 md:p-20  shadow headingSEO-card6 pt-10">
        <h1 class="text-center text-xl pt-5 pb-5 text-white">{cardTitle1}</h1>
        <div dangerouslySetInnerHTML={{__html: cardDesc1}}></div>
    </div>
    </div>

      <div class="heading-container bg-white">
      <div dangerouslySetInnerHTML={{__html: underCard1Desc}}></div>
      </div>

      <div class="heading-container bg-white">
        <div dangerouslySetInnerHTML={{__html: underCard1Desc2}}></div>
      </div>

      <section class="bg-white">
      <div class="pt-5 cards-container p-6">
     <div class="custom-back mx-auto  max-w-sm p-6 pb-10 md:max-w-6xl md:pb-20 md:p-20  shadow headingSEO-card pt-10">
        <h1 class="text-center text-xl pt-5 pb-5 text-white">{cardTitle2}</h1>
        <div dangerouslySetInnerHTML={{__html: cardDesc2}}></div>
      </div>
      </div>
      </section>

    </section>


    </>
  )
}
