import React from 'react'
import appicon from '../assets/app-icon-light.png'

export default function AppAndroid() {
  return (
    <>
      <section class='bg-neutral-900 text-white heading-container pt-60 pb-60'>
            <p class="pt-10 text-xl text-center uppercase">Join Our Beta</p>
            <p class='text-center text-sm pt-5'>If you have been invited to join our Android beta, you can click on start beta testing below.</p>
            <div class='pt-10 pb-10'>
        <a href="https://play.google.com/apps/testing/com.effektify.app">
        <img class='w-1/3 mx-auto' src={appicon} alt="" />
        <p class='text-xs text-center text-gray-50 pt-5'><span>Start beta testing</span></p>

    
        </a>
    </div>
    </section>
    </>
  )
}
