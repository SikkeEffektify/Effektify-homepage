import React from 'react'
import '../components/Heading.css'
import phone from '../assets/onboarding-phone.webp'
import apple from '../assets/Apple-logo.webp'
import android from '../assets/Android-logo.webp'
import { Heading } from '../components/Heading'

export default function Onboarding() {
  return (
   <>

   <Heading 
   bg={"bg-white"}
   textColor={"text-black"}
   title={"You have been invited to our beta"}
   descCustomHtml={`
   <p class="heading-text text-base text-black uppercase">
   NOTE! Use your phone before proceeding with the next step
   </p>
   <p class='text-gray-700 text-sm pt-10'>
   The aim is to get as much feedback as possible, both good and bad. This is in order to deliver the best and easiest experience for you as possible. We therefore welcome all opinions and ideas from your side that can make the beta better. You can leave your feedback via the chat directly in the app.
   </p>
   <p class='text-gray-700 text-sm pt-5'>This beta is version 1.0 which includes reporting.</p>
   `}
   />



<Heading
    title={"If you have been invited to our Beta, you will receive a PDF to your email with more information. Stay tuned"}
    bg={"bg-white"}
    textColor={"text-black"}
    />
<div class='heading-container bg-white'>

    </div>
    <div class='bg-white pt-10   0'>
    <img class='w-11/12 mx-auto' src={phone} alt="" />
    </div>
    
    <div class="bg-white text-center pt-10 pb-20">
    <i class="fa-solid fa-angles-down fa-2xl "></i>
    </div>

    <Heading 
    title={"Join our beta"}
    textColor={"text-white"}
    bg={"text-white"}
    descCustomHtml={`
    <section class='bg-Neutral-400'>
    <div class='pt-20'>
        <h1 class='text-center text-5xl text-white'></h1>
        <p class='text-white pt-5 text-center text-base'>If you have been invited to test our beta, you can choose below to download the app for iPhone or Android.</p>
    </div>

    <div class='pt-10 pb-10'>
        <a href="/en/download-the-app-for-apple/">
        <img class='w-1/5 mx-auto' src="./src/assets/Apple-logo.webp" alt="" />
        <p class='text-xs text-center text-gray-50 pt-5'><span>Go to the description of how to download <br /> the app to your iPhone.</span></p>
        </a>
    </div>
    <div class='pt-10 pb-20'>
        <a href="/en/ladda-ner-appen-for-android/">
        <img class='w-1/5 mx-auto' src="./src/assets/Android-logo.webp" alt="" />
        <p class='text-xs text-center text-gray-50 pt-5'><span>Go to description of how to download the <br /> beta for Android.</span></p>
        </a>    
    </div>
   </section>
    
    `}
    />
    
    
   </>
  )
}
