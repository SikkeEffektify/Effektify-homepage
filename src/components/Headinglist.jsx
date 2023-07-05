import React from 'react'
import './Heading.css'
;

export const Headinglist = (
{
  smallTitle, 
  mainTitle, 
  title1, 
  desc1,
  title2, 
  desc2,
  title3, 
  desc3,
  title4, 
  desc4,
  title5, 
  desc5,
  title6, 
  desc6,
  title7, 
  desc7,
  title8, 
  desc8,
  title9, 
  desc9,

}) => {
  return (


    <>
    <div class='pt-20 heading-container text-center text-white'>
      <p class='uppercase text-xs pt-5'>{smallTitle}</p>
    <h1 class="text-xl pt-5 pb-10">{mainTitle}</h1>
    </div>
    
<div id="accordion-flush" data-accordion="collapse " class='pb-10' >
  <h2 id="accordion-flush-heading-1" class="button-no-back">
    <button type="button" class="flex button-no-back items-center justify-between w-full py-5 font-medium text-left text-white" data-accordion-target="#accordion-flush-body-1" aria-expanded="false" aria-controls="accordion-flush-body-1">
      <span class='uppercase'>{title1}</span> 
      <i class="fa-solid fa-angles-down pr-2 text-rose-300"></i>
    </button>
  </h2>
  <div id="accordion-flush-body-1" class="hidden" aria-labelledby="accordion-flush-heading-1">
    <div class="py-5 border-b" dangerouslySetInnerHTML={{__html: desc1}}>
    </div>
  </div> 
  <h2 id="accordion-flush-heading-2" class="button-no-back">
    <button type="button" class="flex button-no-back items-center justify-between w-full py-5 font-medium text-left text-white" data-accordion-target="#accordion-flush-body-2" aria-expanded="false" aria-controls="accordion-flush-body-2">
      <span class='uppercase'>{title2}</span>
      <i class="fa-solid fa-angles-down pr-2 text-rose-300"></i>
    </button>
  </h2>
  <div id="accordion-flush-body-2" class="hidden" aria-labelledby="accordion-flush-heading-2">
    <div class="py-5 border-b" dangerouslySetInnerHTML={{__html: desc2}}>
    </div>
  </div> 
  <h2 id="accordion-flush-heading-3" class="button-no-back">
    <button type="button" class="flex button-no-back items-center justify-between w-full py-5 font-medium text-left text-white" data-accordion-target="#accordion-flush-body-3" aria-expanded="false" aria-controls="accordion-flush-body-3">
      <span class='uppercase'>{title3}</span>
      <i class="fa-solid fa-angles-down pr-2 text-rose-300"></i>
    </button>
  </h2>
  <div id="accordion-flush-body-3" class="hidden" aria-labelledby="accordion-flush-heading-3">
    <div class="py-5 border-b" dangerouslySetInnerHTML={{__html: desc3}}>
    </div>
  </div> 
  <h2 id="accordion-flush-heading-4" class="button-no-back">
    <button type="button" class="flex button-no-back items-center justify-between w-full py-5 font-medium text-left text-white" data-accordion-target="#accordion-flush-body-4" aria-expanded="false" aria-controls="accordion-flush-body-4">
      <span class='uppercase'>{title4}</span>
      <i class="fa-solid fa-angles-down pr-2 text-rose-300"></i>
    </button>
  </h2>
  <div id="accordion-flush-body-4" class="hidden" aria-labelledby="accordion-flush-heading-4">
    <div class="py-5 border-b text-white" dangerouslySetInnerHTML={{__html: desc4}}>
      
    </div>
  </div> 
  <h2 id="accordion-flush-heading-5" class="button-no-back">
    <button type="button" class="flex button-no-back items-center justify-between w-full py-5 font-medium text-left text-white" data-accordion-target="#accordion-flush-body-5" aria-expanded="false" aria-controls="accordion-flush-body-5">
      <span class='uppercase'>{title5}</span>
      <i class="fa-solid fa-angles-down pr-2 text-rose-300"></i>
    </button>
  </h2>
  <div id="accordion-flush-body-5" class="hidden" aria-labelledby="accordion-flush-heading-5">
    <div class="py-5 border-b" dangerouslySetInnerHTML={{__html: desc5}}>
      
    </div>
  </div> 
  <h2 id="accordion-flush-heading-6" class="button-no-back">
    <button type="button" class="flex button-no-back items-center justify-between w-full py-5 font-medium text-left text-white" data-accordion-target="#accordion-flush-body-6" aria-expanded="false" aria-controls="accordion-flush-body-6">
      <span class='uppercase'>{title6}</span>
      <i class="fa-solid fa-angles-down pr-2 text-rose-300"></i>
    </button>
  </h2>
  <div id="accordion-flush-body-6" class="hidden" aria-labelledby="accordion-flush-heading-6">
    <div class="py-5 border-b" dangerouslySetInnerHTML={{__html: desc6}}>
      
    </div>
  </div> 
  <h2 id="accordion-flush-heading-7" class="button-no-back">
    <button type="button" class="flex button-no-back items-center justify-between w-full py-5 font-medium text-left text-white" data-accordion-target="#accordion-flush-body-7" aria-expanded="false" aria-controls="accordion-flush-body-7">
      <span class='uppercase'>{title7}</span>
      <i class="fa-solid fa-angles-down pr-2 text-rose-300"></i>
    </button>
  </h2>
  <div id="accordion-flush-body-7" class="hidden" aria-labelledby="accordion-flush-heading-7">
    <div class="py-5 border-b" dangerouslySetInnerHTML={{__html: desc7}}>
     
    </div>
  </div> 
  <h2 id="accordion-flush-heading-8" class="button-no-back">
    <button type="button" class="flex button-no-back items-center justify-between w-full py-5 font-medium text-left text-white" data-accordion-target="#accordion-flush-body-8" aria-expanded="false" aria-controls="accordion-flush-body-8">
      <span class='uppercase'>{title8}</span>
      <i class="fa-solid fa-angles-down pr-2 text-rose-300"></i>
    </button>
  </h2>
  <div id="accordion-flush-body-8" class="hidden" aria-labelledby="accordion-flush-heading-8">
    <div class="py-5 border-b" dangerouslySetInnerHTML={{__html: desc8}}>
    
    </div>
  </div> 
  <h2 id="accordion-flush-heading-9" class="button-no-back">
    <button type="button" class="flex button-no-back items-center justify-between w-full py-5 font-medium text-left text-white" data-accordion-target="#accordion-flush-body-9" aria-expanded="false" aria-controls="accordion-flush-body-9">
      <span class='uppercase'>{title9}</span>
      <i class="fa-solid fa-angles-down pr-2 text-rose-300"></i>
    </button>
  </h2>
  <div id="accordion-flush-body-9" class="hidden" aria-labelledby="accordion-flush-heading-9">
    <div class="py-5 border-b" dangerouslySetInnerHTML={{__html: desc9}}>
     
    </div>
  </div> 
</div>
  </>
  )
}
