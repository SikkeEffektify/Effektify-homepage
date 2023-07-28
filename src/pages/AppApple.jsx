import React from 'react'
import testflight from '../assets/testflight_icon2.webp'
import appicon from '../assets/app-icon-light2.png'

export default function AppApple() {
  return (
    <>
    <section class='bg-neutral-900 text-white heading-container pt-20 pb-10'>
        <h1 class='text-center text-3xl'>How to download the 
            <br /> 
            beta to your iphone</h1>

            <p class="pt-10 text-xl text-center uppercase">1. Download Testflight</p>
            <p class='text-center text-sm pt-5'>Install the app and then return to this page.</p>
            <div class='pt-10 pb-10'>
        <a href="https://apps.apple.com/us/app/testflight/id899247664?mt=8">
        <img class='w-1/3 mx-auto' src={testflight} alt="" />
        <p class='text-xs text-center text-gray-50 pt-10'><span>Download TestFlight</span></p>
        <div class='text-center pt-20'>
        <i class="fa-solid fa-angles-down fa-2xl"></i>
        </div>
    
        </a>
    </div>
    </section>

    <section class='bg-neutral-900 text-white heading-container pt-40 pb-60'>
            <p class="pt-10 text-xl text-center uppercase">2. Join Our Beta</p>
            <p class='text-center text-sm pt-5'>After installing Testflight, you can join our beta by clicking on Start beta testing below.</p>
            <div class='pt-10 pb-10'>
        <a href="https://testflight.apple.com/join/lkDdQ87P">
        <img class='w-1/3 mx-auto' src={appicon} alt="" />
        <p class='text-xs text-center text-gray-50 pt-5'><span>Start beta testing</span></p>

    
        </a>
    </div>
    </section>
    </>
  )
}
