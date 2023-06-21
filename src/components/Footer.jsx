import React from 'react'
import './Footer.css'
import arrow from '../assets/arrows.png'
import logo from '../assets/Effektify-Vit-logo.png'



export default function Footer() {
  return (
    <div class="bg-black footer-container text-white text-center">
        <section class="pt-20 pb-20">
            <h1 class='uppercase pb-5'>We simplify <br /> business growth</h1>
            <p class="pb-10">Ditt mål är vår drivkraft, ingen dröm är för <br /> stor helt enkelt. Vi på effektify tror på <br /> transparens i alla led och att detta är något <br /> vi måste göra tillsammans för att det ska <br /> bli riktigt bra.</p>
            <a href='/contact' class="uppercase footer-button" >starta din resa idag</a>
        </section>
        <section>
            <div class="text-center pb-10 footer-list">
                <h3 class="pb-5 uppercase">Vi hjälper dig med</h3>
                <div class='pb-2'><a href="/">Sökmotoroptimering</a></div>
                <div class='pb-2'> <a href="/">Googgle Ads</a></div>
                <div class='pb-2'> <a href="/">Webbdesign</a></div>
                <div class='pb-2'> <a href="/">Social medier</a></div>
                <div class='pb-2'><a href="/">E-commerce</a></div>
                <div class='pb-2'><a href="/digital-annonsering/">Digital annonsering</a></div>
                <div class='pb-2'><a href="/">On-page SEO</a></div>
                <div class='pb-2'> <a href="/">Webbcopy</a></div>
            </div>
            <div class="text-center pb-10 footer-list">
                <h3 class="pb-5 uppercase">Kontakt</h3>
                <div class='pb-2'><a href="/contact">Kontakta oss</a></div>
                <div class='pb-2'><a href="/">Lediga tjänster</a></div>
            </div>
            <div class='arrow-container'>
                <a href="/"><img class="arrows mx-auto" src={arrow} alt="" /></a>
            </div>   
            <h3  class="text-center text-lg uppercase pt-5 font-black">Starta om <br /> rundturen</h3>
            <p class="text-xs copyright pt-20">©2023 Effektify. All rights reserved</p>
            <div class="footer-logo pt-10 pb-10">
                <a href="/"><img class=" mx-auto " src={logo} alt="" /></a>
            </div>
        </section>
    </div>
  )
}
