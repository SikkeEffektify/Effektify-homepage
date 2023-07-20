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
    <div>
        <a href='/kontakt' class="text-white text-center spanNav-touch">Get in touch</a>
    </div>
    <button data-collapse-toggle="navbar-default" type="button" class=" " aria-controls="navbar-default" aria-expanded="false">
    </button>
       <button class="" type="button" data-dropdown-toggle="dropdown" >
       <img src={burgericon} alt="" />
    </button>
   
<div id="dropdown" class="z-10 hidden divide-y rounded-lg shadow  navbarDrop">
    <ul class="py-10 text-sm  text-white" aria-labelledby="dropdownDefaultButton">
        <h1 className='text-rose-300 text-2xl px-4 pb-1 '><span className='text-white'>Search</span>.</h1>
        <hr class="w-48 h-0.5 m-2 bg-gray-100 border-0 rounded dark:bg-gray-700" ></hr>
      <li class="pt-3">
        <a href="#" class="block px-4 py-2 text-base "><i class="fa-solid fa-chart-line text-rose-300 pr-2"></i>Sökmotoroptimering</a>
      </li>
      <li class="pt-3">
        <a href="#" class="block px-4 py-2 text-base"><i class="fa-solid fa-chart-column text-sky-400 pr-2"></i>Google ads</a>
      </li>
    </ul>
</div>
  </div>
</nav>
    </header>
  )
}

export default Nav