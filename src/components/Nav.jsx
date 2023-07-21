import React from 'react'
import logo from '../assets/Effektify-Vit-logo.png'
import burgericon from '../assets/hamburger.svg'

const Nav = () => {
  return (
    <header class="sticky top-0 bg-black">
        <nav class="navbar-padding ">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
    <a href="/" class="flex items-center">
        <img src={logo} class="logo" alt="Efektify Logo" />
    </a>
    <div class="max-md:text-center max-md:pl-5 md:pl-40">
        <a href='/kontakt' class="text-white spanNav-touch">Get in touch</a>
    </div>
    <button data-collapse-toggle="navbar-default" type="button" class=" " aria-controls="navbar-default" aria-expanded="false">
    </button>
       <button class="" type="button" data-dropdown-toggle="dropdown" >
       <img src={burgericon} alt="" />
    </button>
   
<div id="dropdown" class="z-10 hidden rounded-lg shadow navbarDrop">
    <div class="md:flex md:justify-center md:items-center max-md:text-center">
    <ul class="py-10 text-sm  text-white" aria-labelledby="dropdownDefaultButton">
        <h1 className='text-rose-300 text-2xl px-4 pb-1 '><span className='text-white'>Search</span>.</h1>
        <hr class="w-48 h-0.5 m-2 max-md:mx-auto bg-gray-100 border-0 rounded dark:bg-gray-700" ></hr>
      <li class="pt-3">
        <a href="#" class="block px-4 py-2 text-base"><i class="fa-solid fa-chart-line text-rose-300 pr-2 max-md:hidden"></i>Sökmotoroptimering</a>
        <p class="text-xs max-md:hidden text-gray-300 px-4">Med SEO hjälper vi ert företag <br /> att synas högre upp på sökmotorer, <br /> på de sökord som är viktiga för er.</p>
      </li>
      <li class="pt-3">
        <a href="#" class="block px-4 py-2 text-base"><i class="fa-solid fa-chart-column text-sky-400 pr-2 max-md:hidden" ></i>Google ads</a>
        <p class="text-xs max-md:hidden  text-gray-300 px-4">Med relevanta och rätt inriktade <br /> kampanjer br och annonser, <br /> ökar vi er synlighet på sökmotorerna.</p>
      </li>
    </ul>
    <ul class="text-sm  text-white" aria-labelledby="dropdownDefaultButton">
        <h1 className='text-rose-300 text-2xl px-4 pb-1 '><span className='text-white'>Paid social</span>.</h1>
        <hr class="w-48 h-0.5 m-2 max-md:mx-auto bg-gray-100 border-0 rounded "></hr>
        <div class="">
      <li class="">
        <a href="#" class="block px-4 py-2 text-base "><i class="fa-brands fa-facebook text-blue-400 pr-2 max-md:hidden"></i>Facebook Ads</a>
      </li>
      <li class="">
        <a href="#" class="block px-4 py-2 text-base "><i class="fa-brands fa-instagram text-pink-300 pr-2 max-md:hidden"></i>Instagram Ads</a>
      </li>
      <li class="">
        <a href="#" class="block px-4 py-2 text-base "><i class="fa-brands fa-linkedin text-blue-500 pr-2 max-md:hidden"></i>Linkedin Ads</a>
      </li>
      <li class="">
        <a href="#" class="block px-4 py-2 text-base "><i class="fa-brands fa-youtube text-red-500 pr-1 max-md:hidden"></i>Youtube Ads</a>
      </li>
      <li class="max-md:pb-10">
        <a href="#" class="block px-4 py-2 text-base "><i class="fa-brands fa-tiktok text-white pr-2 max-md:hidden"></i>Tiktok Ads</a>
      </li>
      </div>
    </ul>
    <ul class="text-sm  text-white" aria-labelledby="dropdownDefaultButton">
        <h1 className='text-rose-300 text-2xl px-4 pb-1 '><span className='text-white'>WEB & E-COM</span>.</h1>
        <hr class="w-48 h-0.5 m-2 max-md:mx-auto bg-gray-100 border-0 rounded dark:bg-gray-700 " ></hr>
      <li class="pt-3">
        <a href="#" class="block px-4 py-2 text-base "><i class="fa-brands fa-wordpress text-sky-600 pr-2 max-md:hidden" ></i>Wordpress</a>
        <p class="text-xs text-gray-300 px-4 max-md:hidden">Världens största system för att skapa <br /> hemsidor, som idag används <br /> till  över 27% av alla webbplatser på internet.</p>
      </li>
      <li class="pt-3 max-md:pb-10">
        <a href="#" class="block px-4 py-2 text-base"><i class="fa-brands fa-shopify text-green-400 pr-2 max-md:hidden"></i>Shopify</a>
        <p class="text-xs text-gray-300 px-4 max-md:hidden  ">En komplett handelsplattform som låter <br /> företag starta, utveckla och sälja <br /> produkter och tjänster online.</p>
      </li>
    </ul>
    </div>
</div>
  </div>
</nav>
    </header>
  )
}

export default Nav