import React from 'react'
import './Cards.css'
import google from '../assets/annonsering-google.webp'
import facebook from '../assets/facebook-icon.png'
import instagram from '../assets/instagram-icon.png'
import linkedin from '../assets/linkedin-icon.png'
import tiktok from '../assets/tiktok-icon.png'

export const Cards4EN = () => {
  return (
    <>
    <section class="standard-padding">
      <h1 class='text-white text-center text-4xl pt-20 pb-5'>
        vilken
        <br />
        platform är rätt
        <br />
        för dig?
      </h1>
      <p class='text-white text-lg pb-10'>
      Med hjälp av rätt strategier 
      <br />
      skapar vi anpassade lösningar
      <br /> 
      för företag som vill kunna nå ut till 
      <br />
      en större marknad samtidigt 
      <br />
      som de kan se mätbara resultat.
      </p>

    </section>
   <section class="cards-1">
       <div class="pt-5 cards-container ">
     <div class="max-w-sm p-6 pb-10 border border-white shadow  mx-auto bg-black pt-10">
      <img class='cards-social-icon mx-auto' src={google} alt="" />
      <h4 class='text-white text-center pt-5'>Google</h4>
    </div>
    </div>
    </section>
    <section class="cards-1">
       <div class="pt-5 cards-container ">
     <div class="max-w-sm p-6 pb-10 border border-white shadow  mx-auto bg-black pt-10">
      <img class='cards-social-icon mx-auto' src={facebook} alt="" />
      <h4 class='text-white text-center pt-5'>Facebook</h4>
    </div>
    </div>
    </section>
    <section class="cards-1">
       <div class="pt-5 cards-container ">
     <div class="max-w-sm p-6 pb-10 border border-white shadow  mx-auto bg-black pt-10">
      <img class='cards-social-icon mx-auto' src={instagram} alt="" />
      <h4 class='text-white text-center pt-5'>Instagram</h4>
    </div>
    </div>
    </section>
    <section class="cards-1">
       <div class="pt-5 cards-container ">
     <div class="max-w-sm p-6 pb-10 border border-white shadow  mx-auto bg-black pt-10">
      <img class='cards-social-icon mx-auto' src={linkedin} alt="" />
      <h4 class='text-white text-center pt-5'>LinkedIn</h4>
    </div>
    </div>
    </section>
    <section class="cards-1 pb-20">
       <div class="pt-5 cards-container ">
     <div class="max-w-sm p-6 pb-10 border border-white shadow  mx-auto bg-black pt-10">
      <img class='cards-social-icon mx-auto' src={tiktok} alt="" />
      <h4 class='text-white text-center pt-5'>TikTok</h4>
    </div>
    </div>
    </section>
    </>
  )
}
