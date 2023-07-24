import React from 'react'
import eBackground from '../assets/effektify-white-digital.webp'

import img2 from '../assets/digital-marknadsforing-drink.gif'

export default function HeadingWithLogo({mainTitle1, mainDesc1, mainTitle2 ,mainDesc2, cupText}) {
  return (
    <>
    
<section>
    <div class='pt-20  heading-container bg-white text-black'>
    <h1 class="text-left text-3xl pb-5 ">
    {mainTitle1}
    </h1>
   <div dangerouslySetInnerHTML={{__html: mainDesc1}}></div>

    <img src={eBackground} class="bg-effect " alt="" />

    <h1 class="text-right text-5xl pt-10 pb-5 ">
    {mainTitle2}
    </h1>
    
    <div dangerouslySetInnerHTML={{__html: mainDesc2}}></div>

    </div>
    </section>


    <div class="bg-white  ">
      <p class="text-right md:text-center text-lg pb-3 pr-3">
        {cupText}
      </p>
    <img class="flower mx-auto invert " src={img2} alt="" />
    </div>

    </>
  )
}


