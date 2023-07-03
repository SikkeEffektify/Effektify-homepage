import React from 'react'
import './Heading.css'
import img from '../assets/stats1.webp'
import img2 from '../assets/stats2.webp'
import img3 from '../assets/stats3.webp'

export const Heading7EN = () => {
  return (
    
    <div class='pt-20 heading-container text-center text-black bg-white'>
    <p class="uppercase text-xs pb-5">If you are not seen, you do not exist</p>
    <h1 class="text-lg uppercase">
    Examples of how we have helped businesses grow
    </h1>
    <img class="mx-auto pt-5 drop-shadow-lg" src={img} alt="" />
    <img class="mx-auto pt-5 drop-shadow-lg" src={img2} alt="" />
    <img class="mx-auto pt-5 drop-shadow-lg" src={img3} alt="" />
    <p class="text-left pt-10 text-base">Google is by far Sweden’s largest search engine and 95% of all searches today are made via their platform. In Sweden, more than 50 million searches are made on Google every day. With numbers like these, you probably realize the importance of appearing high up in the search results that Google shows. Competition between companies that want to rank high is extremely high today as many understand the importance of what a good position means.</p>
    </div>
  )
}
