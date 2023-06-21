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
    <img src={burgericon} alt="" />
    </button>
    <div class="bg-black hidden w-full md:block md:w-auto" id="navbar-default">
    <ul class="mb-4 space-y-4 md:mb-0 text-white">
                <li>
                    <a href="#" class="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                        Our Blog
                    </a>
                </li>
                <li>
                    <a href="#" class="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                        Terms & Conditions
                    </a>
                </li>
                <li>
                    <a href="#" class="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                        License
                    </a>
                </li>
                <li>
                    <a href="#" class="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                        Resources
                    </a>
                </li>
            </ul>
    </div>
  </div>
</nav>
    </header>
  )
}

export default Nav