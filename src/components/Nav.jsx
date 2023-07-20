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
        <a href='/kontakt' class="text-white spanNav-touch">Get in touch</a>
    </div>
    <button data-collapse-toggle="navbar-default" type="button" class=" " aria-controls="navbar-default" aria-expanded="false">
    </button>
       <button class="" type="button" data-dropdown-toggle="dropdown" >
       <img src={burgericon} alt="" />
    </button>
   

<div class="text-center">
</div>
<div id="dropdown" class="z-10 hidden divide-y divide-gray-100 rounded-lg shadow w-44 bg-gray-700">
    <ul class="py-2 text-sm  text-white" aria-labelledby="dropdownDefaultButton">
      <li>
        <a href="#" class="block px-4 py-2  hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2  hover:bg-gray-600 dark:hover:text-white">Settings</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2  hover:bg-gray-600 dark:hover:text-white">Earnings</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2  hover:bg-gray-600 dark:hover:text-white">Sign out</a>
      </li>
    </ul>
</div>
  </div>
</nav>
    </header>
  )
}

export default Nav