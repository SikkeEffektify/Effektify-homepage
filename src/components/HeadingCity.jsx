import React from 'react'
import './Heading.css'

/* Buttonstyle = put pl- + pr- class to make buttons look better */

export const HeadingCity = ({title, desc, button1, button2, button3, button4, button5, buttonLink1, buttonLink2, buttonLink3, buttonLink4, buttonLink5, buttonStyle1, buttonStyle2, buttonStyle3, buttonStyle4, buttonStyle5}) => {
  return (
    <div class='pt-20 pb-20 heading-container'>
    <h1 class="text-2xl mb-4 text text-white text-center leading-none text tracking-tight md:text-5xl lg:text-6x ">
    {title}
    </h1>
    <p class=" text-sm text-center text-white pb-5">
    {desc}
    </p>
    <div class="text-center pt-5 pb-10 ">
    <a class="vidButton border-white pb-3 pt-3 normal-case text-white text-center " href={buttonLink1}> <strong className={buttonStyle1}>{button1}</strong> </a>
    </div>

    <div class="text-center pt-5 pb-10">
    <a class="vidButton  border-white pt-3 pb-3 text-white text-center" href={buttonLink2}> <strong className={buttonStyle2}>{button2}</strong> </a>
    </div>

    <div class="text-center pt-5 pb-10">
    <a class="vidButton  border-white pt-3 pb-3 text-white text-center" href={buttonLink3}> <strong className={buttonStyle3}>{button3}</strong> </a>
    </div>

    <div class="text-center pt-5 pb-10">
    <a class="vidButton  border-white pt-3 pb-3 text-white text-center" href={buttonLink4}> <strong className={buttonStyle4}>{button4}</strong> </a>
    </div>

    <div class="text-center pt-5 pb-10">
    <a class="vidButton  border-white pt-3 pl-8 pr-8 pb-3 text-white text-center" href={buttonLink5}> <strong className={buttonStyle5}>{button5}</strong> </a>
    </div>
    </div>
  )
}
