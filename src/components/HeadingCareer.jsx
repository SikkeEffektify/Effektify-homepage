import React from 'react'
import './Heading.css'
import img from '../assets/stats1.webp'
import img2 from '../assets/stats2.webp'
import img3 from '../assets/stats3.webp'

export const HeadingCareer = ({mainTitle, mainDesc, endText, emailMessage, jobTitle1, jobDesc1, jobTitle2, jobDesc2, jobTitle3, jobDesc3, jobTitle4, jobDesc4, jobTitle5, jobDesc5, jobTitle6, jobDesc6, jobTitle7, jobDesc7, jobTitle8, jobDesc8, jobTitle9, jobDesc9}) => {
  return (
    <>
    <div class='max-md:pt-20 md:pt-40 heading-container text-left text-black bg-white'>
    <h1 class="text-3xl uppercase text-rose-300 pb-5">
      <span class="text-black">{mainTitle}</span>.
    </h1>
    <div dangerouslySetInnerHTML={{__html: mainDesc}}></div>
    </div>

<div id="accordion-collapse" data-accordion="collapse">
  <h2 id="accordion-collapse-heading-1">
    <button type="button" class="flex items-center justify-between w-full p-5 font-medium text-left border border-black text-black bg-white" data-accordion-target="#accordion-collapse-body-1" aria-expanded="false"aria-controls="accordion-collapse-body-1">
      <span class="text-black">{jobTitle1}</span>
      <i class="fa-solid fa-angles-down pr-2 text-rose-300"></i>
    </button>
  </h2>
  <div id="accordion-collapse-body-1" class="hidden bg-white border border-black" aria-labelledby="accordion-collapse-heading-1">
    <div class="p-5 border border-b-0 " dangerouslySetInnerHTML={{__html: jobDesc1}}>
     
    </div>
  </div>
  <h2 class="bg-white" id="accordion-collapse-heading-2">
    <button type="button" class="flex items-center justify-between w-full p-5 font-medium text-left border border-black text-black bg-white" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
      <span class="text-black">{jobTitle2}</span>
      <i class="fa-solid fa-angles-down pr-2 text-rose-300"></i>
    </button>
  </h2>
  <div id="accordion-collapse-body-2" class="hidden bg-white border border-black" aria-labelledby="accordion-collapse-heading-2">
    <div class="p-5 border border-b-0 "dangerouslySetInnerHTML={{__html: jobDesc2}}>
      
    </div>
  </div>
  <h2 class="bg-white" id="accordion-collapse-heading-3">
    <button type="button" class="flex items-center justify-between w-full p-5 font-medium text-left border border-black text-black bg-white" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
      <span class="text-black">{jobTitle3}</span>
      <i class="fa-solid fa-angles-down pr-2 text-rose-300"></i>
    </button>
  </h2>
  <div id="accordion-collapse-body-3" class="hidden bg-white border border-black" aria-labelledby="accordion-collapse-heading-3">
    <div class="p-5 border border-b-0 " dangerouslySetInnerHTML={{__html: jobDesc3}}>
    
    </div>
  </div>
  <h2 class="bg-white" id="accordion-collapse-heading-4">
    <button type="button" class="flex items-center justify-between w-full p-5 font-medium text-left border border-black text-black bg-white" data-accordion-target="#accordion-collapse-body-4" aria-expanded="false" aria-controls="accordion-collapse-body-4">
      <span class="text-black">{jobTitle4}</span>
      <i class="fa-solid fa-angles-down pr-2 text-rose-300"></i>
    </button>
  </h2>
  <div id="accordion-collapse-body-4" class="hidden bg-white border border-black" aria-labelledby="accordion-collapse-heading-4">
    <div class="p-5 border border-b-0 " dangerouslySetInnerHTML={{__html: jobDesc4}}>
      
    </div>
  </div>
  <h2 class="bg-white" id="accordion-collapse-heading-5">
    <button type="button" class="flex items-center justify-between w-full p-5 font-medium text-left border border-black text-black bg-white" data-accordion-target="#accordion-collapse-body-5" aria-expanded="false"aria-controls="accordion-collapse-body-5">
      <span class="text-black">{jobTitle5}</span>
      <i class="fa-solid fa-angles-down pr-2 text-rose-300"></i>
    </button>
  </h2>
  <div id="accordion-collapse-body-5" class="hidden bg-white border border-black" aria-labelledby="accordion-collapse-heading-5">
    <div class="p-5 border border-b-0 " dangerouslySetInnerHTML={{__html: jobDesc5}}>
     
    </div>
  </div>
  <h2 class="bg-white" id="accordion-collapse-heading-6">
    <button type="button" class="flex items-center justify-between w-full p-5 font-medium text-left border border-black text-black bg-white" data-accordion-target="#accordion-collapse-body-6" aria-expanded="false"aria-controls="accordion-collapse-body-6">
      <span class="text-black">{jobTitle6}</span>
      <i class="fa-solid fa-angles-down pr-2 text-rose-300"></i>
    </button>
  </h2>
  <div id="accordion-collapse-body-6" class="hidden bg-white border border-black" aria-labelledby="accordion-collapse-heading-6">
    <div class="p-5 border border-b-0 " dangerouslySetInnerHTML={{__html: jobDesc6}}>
     
    </div>
  </div>
  <h2 class="bg-white" id="accordion-collapse-heading-7">
    <button type="button" class="flex items-center justify-between w-full p-5 font-medium text-left border border-black text-black bg-white" data-accordion-target="#accordion-collapse-body-7" aria-expanded="false"aria-controls="accordion-collapse-body-7">
      <span class="text-black">{jobTitle7}</span>
      <i class="fa-solid fa-angles-down pr-2 text-rose-300"></i>
    </button>
  </h2>
  <div id="accordion-collapse-body-7" class="hidden bg-white border border-black" aria-labelledby="accordion-collapse-heading-7">
    <div class="p-5 border border-b-0 " dangerouslySetInnerHTML={{__html: jobDesc7}}>
    
    </div>
  </div>

  <h2 class="bg-white" id="accordion-collapse-heading-8">
    <button type="button" class="flex items-center justify-between w-full p-5 font-medium text-left border border-black text-black bg-white" data-accordion-target="#accordion-collapse-body-8" aria-expanded="false"aria-controls="accordion-collapse-body-8">
      <span class="text-black">{jobTitle8}</span>
      <i class="fa-solid fa-angles-down pr-2 text-rose-300"></i>
    </button>
  </h2>
  <div id="accordion-collapse-body-8" class="hidden bg-white border border-black" aria-labelledby="accordion-collapse-heading-8">
    <div class="p-5 border border-b-0 " dangerouslySetInnerHTML={{__html: jobDesc8}}>
   
    </div>
  </div>


  <h2 class="bg-white" id="accordion-collapse-heading-9">
    <button type="button" class="flex items-center justify-between w-full p-5 font-medium text-left border border-black text-black bg-white" data-accordion-target="#accordion-collapse-body-9" aria-expanded="false"aria-controls="accordion-collapse-body-9">
      <span class="text-black">{jobTitle9}</span>
      <i class="fa-solid fa-angles-down pr-2 text-rose-300"></i>
    </button>
  </h2>
  <div id="accordion-collapse-body-9" class="hidden bg-white border border-black" aria-labelledby="accordion-collapse-heading-9">
    <div class="p-5 border border-b-0 " dangerouslySetInnerHTML={{__html: jobDesc9}}>
   
    </div>
  </div>
</div>

<div class="text-center bg-white text-black pt-20">
  <h1 class="pb-5 text-xl">{endText}</h1>
  <a href="mailto:jobs@effektify.com"><p>{emailMessage}</p></a>
</div>

</>
  )
}
