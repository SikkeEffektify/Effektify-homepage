import React from 'react'
import './Hero.css'
import bg from '../assets/webbdesign-bygga-hemsida.webp'
export const Hero5 = () => {
  return (
<section>
   <div className='hero '>
    <img class="min-w-full min-h-full absolute object-cover hero-image" src={bg} />
    <div class="vidContent2 hero-image-text pb-40  bg-black/60">
        <h1 class='text-4xlpl-4 text-left text-white pb-10'>Vad ska man tänka på när man bygger en hemsida?</h1>
        <p class='text-left text-xl text-white'>Det är idag inte speciellt svårt att bygga en <br /> hemsida själv, men som <br /> mycket annat kräver det <br /> att man investerar en hel <br /> del tid för att lära sig <br /> grunderna, vad som är <br /> viktigt och hur verktyget fungerar. Här listar vi <br /> några saker som är viktiga <br /> när man bygger en <br /> hemsida:</p>
    </div>
   </div>
    </section>
  )
}
