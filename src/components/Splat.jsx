import React from 'react'
import './Splat.css'

export default function Splat({headingText, text, text2, buttonLink, buttonText}) {
  return (
    <section class="splat-main text-center">
    <div class="bg-white splat-container min-w-full min-h-full">
        <div class="splat-content text-center pt-10">
        <p class="pt-20 pb-5 text-center"> {headingText} </p>
        <h3 class="splat-bold pt-5 text-center uppercase">
        {text}
        <br />
        {text2}
        </h3>
        <div class="pt-10 pl-5">
        <a class="splat-button uppercase center text-center pt-3 pb-3" href={buttonLink}>{buttonText}</a>
        </div>
        </div>
        </div>
    </section>
    
  )
}
