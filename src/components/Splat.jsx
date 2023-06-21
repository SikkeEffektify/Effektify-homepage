import React from 'react'
import './Splat.css'

export default function Splat() {
  return (
    <section class="splat-main">
    <div class="bg-white splat-container min-w-full min-h-full">
        <div class="splat-content pt-10">
        <p class="pt-20 pb-5 text-center">Via etablerade partners erbjuder vi även helhetslösningar inom</p>
        <h3 class="splat-bold pt-5 text-center uppercase">
        Affärsplan
        <span> ● </span>
        Varumärkesprofil
        <br />
        Grafisk Profil
        <span> ● </span>
        Foto & film
        </h3>
        <div class="pt-10 pl-5">
        <a class="splat-button uppercase center text-center pt-3 pb-3" href="/kontakt">Ready for takeoff</a>
        </div>
        </div>
        </div>
    </section>
    
  )
}
