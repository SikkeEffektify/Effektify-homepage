import React from 'react'
import './Heading.css'

export const HeadingCity = ({title, desc, button1, button2, button3, button4, button5}) => {
  return (
    <div class='pt-20 pb-20 heading-container'>
    <h1 class="text-2xl mb-4 text text-white text-center leading-none text tracking-tight md:text-5xl lg:text-6x ">
    {title}
    </h1>
    <p class=" text-sm text-center text-white pb-5">
    {desc}
    </p>
    <div class="text-center pt-5 pb-10 ">
    <a class="vidButton border-white pt-3 pl-6 pr-6 pb-3 normal-case text-white text-center" href='/seo-sokmotoroptimering-stockholm/'> {button1}</a>
    </div>

    <div class="text-center pt-5 pb-10">
    <a class="vidButton  border-white pt-3 pl-8 pr-8 pb-3 text-white text-center" href='/seo-sokmotoroptimering-goteborg/'> {button2}</a>
    </div>

    <div class="text-center pt-5 pb-10">
    <a class="vidButton  border-white pt-3 pl-12 pr-12 pb-3 text-white text-center" href='/seo-sokmotoroptimering-malmo/'> {button3}</a>
    </div>

    <div class="text-center pt-5 pb-10">
    <a class="vidButton  border-white pt-3 pl-10 pr-10 pb-3 text-white text-center" href='/seo-sokmotoroptimering-uppsala/'> {button4}</a>
    </div>

    <div class="text-center pt-5 pb-10">
    <a class="vidButton  border-white pt-3 pl-8 pr-8 pb-3 text-white text-center" href='/seo-sokmotoroptimering-halmstad/'> {button5}</a>
    </div>
    </div>
  )
}
