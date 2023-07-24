import React from 'react'
import './Cards.css'

export const ImageCards = ({title1, desc1, title2, desc2, title3, desc3, title4, desc4}) => {
  return (
    <>
    <div class="md:grid md:grid-cols-4 md:pt-10 ">
    <section class="cards2-1">
       <div class="pt-5 cards-container ">
     <div class="custom-back max-w-sm p-6 pb-10 border border-black shado  mx-auto  pt-10">
        <h1 class="pt-40 cards2-title text-center mb-2 font-semibold tracking-tight uppercase text-rose-300"><span class="text-white">{title1}</span></h1>
        <h2 class="pb-20 text-center cards2-under-title text-white"><span class="pl-4">{desc1}</span></h2>
    </div>
    </div>
    </section>
    <section class="cards2-2">
       <div class="pt-5 cards-container ">
     <div class="custom-back max-w-sm p-6 pb-10 border border-black shado  mx-auto  pt-10">
        <h1 class="pt-40 cards2-title text-center mb-2 font-semibold tracking-tight uppercase text-rose-300"><span class="text-white">{title2}</span></h1>
        <h2 class="pb-20 text-center cards2-under-title text-white"><span class="pl-4">{desc2}</span></h2>
    </div>
    </div>
    </section>
    <section class="cards2-3">
       <div class="pt-5 cards-container ">
     <div class="custom-back max-w-sm p-6 pb-10 border border-black shado  mx-auto  pt-10">
        <h1 class="pt-40 cards2-title text-center mb-2 font-semibold tracking-tight uppercase text-rose-300"><span class="text-white">{title3}</span></h1>
        <h2 class="pb-20 text-center cards2-under-title text-white"><span class="pl-4">{desc3}</span></h2>
    </div>
    </div>
    </section>
    <section class="cards2-4">
       <div class="pt-5 cards-container ">
     <div class="custom-back max-w-sm p-6 pb-10 border border-black shado  mx-auto  pt-10">
        <h3 class="pt-20 pb-20 cards2-title text-center mb-2 font-semibold tracking-tight uppercase text-rose-300"><span class="text-white">{title4}</span></h3>
    </div>
    </div>
    </section>

    </div>
    <section class="cards-bottom-divider pt-20">
      <div className='bg-white'>
      </div>
    </section>
    </>
  )
}
