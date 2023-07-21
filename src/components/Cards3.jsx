import React from 'react'
import './Cards.css'
import gif from '../assets/PONG_Light_version2.gif'

export const Cards3 = ({title1, desc1, title2, desc2, title3, desc3, title4, desc4}) => {
  return (
    <>
    <section class="cards-1 md:pt-80">
       <div class="pt-5 cards-container ">
     <div class="max-w-sm p-6 pb-10 border border-white shadow bg-black  mx-auto pt-10">
      <a href="#">
      <i class="fa-regular fa-square-check text-green-500 fa-2xl"></i> 
        <h1 class=" cards-title text-center text-3xl font-black text-rose-300"><span class="text-white">{title1}</span></h1>
    </a>
    <div dangerouslySetInnerHTML={{__html: desc1}}></div>
    </div>
    </div>
    <div class="pt-5 cards-container ">
     <div class="max-w-sm p-6 pb-10 border border-white shadow bg-black  mx-auto pt-10">
      <a href="#">
      <i class="fa-regular fa-square-check text-green-500 fa-2xl"></i> 
        <h1 class=" pt-5  cards-title text-center text-3xl font-black text-rose-300"><span class="text-white">{title2}</span></h1>
    </a>
    <div dangerouslySetInnerHTML={{__html: desc2}}></div>
    </div>
    </div>
    <div class="pt-5 cards-container ">
     <div class="max-w-sm p-6 pb-10 border border-white shadow bg-black  mx-auto pt-10">
      <a href="#">
      <i class="fa-regular fa-square-check text-green-500 fa-2xl"></i> 
        <h1 class=" pt-5  cards-title text-center text-3xl font-black text-rose-300"><span class="text-white">{title3}</span></h1>
    </a>
    <div dangerouslySetInnerHTML={{__html: desc3}}></div>
    </div>
    </div>
    <div class="pt-5 cards-container ">
     <div class="max-w-sm p-6 pb-10 border border-white shadow bg-black  mx-auto pt-10">
      <a href="#">
      <i class="fa-regular fa-square-check text-green-500 fa-2xl"></i> 
        <h1 class=" pt-5  cards-title text-center text-3xl font-black text-rose-300"><span class="text-white">{title4}</span></h1>
    </a>
    <div dangerouslySetInnerHTML={{__html: desc4}}></div>
    
    </div>
    </div>
    <img src={gif} class="md:w-2/3 mx-auto" alt="" />
    </section>
    
    </>
  )
}
