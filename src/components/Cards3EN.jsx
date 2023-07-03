import React from 'react'
import './Cards.css'
import gif from '../assets/PONG_Light_version2.gif'

export const Cards3EN = () => {
  return (
    <>
    <section class="cards-1">
       <div class="pt-5 cards-container ">
     <div class="max-w-sm p-6 pb-10 border border-white shadow bg-black  mx-auto pt-10">
      <a href="#">
      <i class="fa-regular fa-square-check text-green-500 fa-2xl"></i> 
        <h1 class=" cards-title text-center text-3xl font-black text-rose-300"><span class="text-white">Purpose and target group</span></h1>
    </a>
    <p class=" pl-10 cards-under-desc text-white pt-4">
    Before getting started, the most important questions are “What is the purpose of the website?” and “Who will use it?”. This is in order to focus on the problem the website should solve and to make it more relevant and user-friendly.
    </p>
    </div>
    </div>
    <div class="pt-5 cards-container ">
     <div class="max-w-sm p-6 pb-10 border border-white shadow bg-black  mx-auto pt-10">
      <a href="#">
      <i class="fa-regular fa-square-check text-green-500 fa-2xl"></i> 
        <h1 class=" pt-5  cards-title text-center text-3xl font-black text-rose-300"><span class="text-white">Availability</span></h1>
    </a>
    <p class=" pl-5 cards-under-desc text-white pt-4">
    When working with websites, we often end up with the expression “easy to say, hard to do”. It goes without saying that a website should be equally easy to use and read on both a large screen and a small screen. But that requires doing the work, too. As well as ensuring that images and text can be seen and read without zooming in (or out), buttons and clickable elements may need to be reviewed so that they do their job even on small screens.
    </p>
    </div>
    </div>
    <div class="pt-5 cards-container ">
     <div class="max-w-sm p-6 pb-10 border border-white shadow bg-black  mx-auto pt-10">
      <a href="#">
      <i class="fa-regular fa-square-check text-green-500 fa-2xl"></i> 
        <h1 class=" pt-5  cards-title text-center text-3xl font-black text-rose-300"><span class="text-white">Speed and charging time</span></h1>
    </a>
    <p class=" pl-5 cards-under-desc text-white pt-4">
    There are many factors that affect how fast a website loads. What you can do yourself is not to use more “heavy” elements than necessary, e.g. video, images, etc. The images you use should be adapted and compressed before being uploaded to the website. In addition to the content of the site, loading time is affected by hosting (where the website is located), platform (which tool was used to build the website), etc. Please contact us if you would like to know more about how you can make your website load faster. You can also test your website with 
    <a class='text-rose-300' href="https://developers.google.com/speed/pagespeed/insights/" rel="nofollow noopener" target="_blank"> Googles PageSpeed Insights.</a>
    </p>
    </div>
    </div>
    <div class="pt-5 cards-container ">
     <div class="max-w-sm p-6 pb-10 border border-white shadow bg-black  mx-auto pt-10">
      <a href="#">
      <i class="fa-regular fa-square-check text-green-500 fa-2xl"></i> 
        <h1 class=" pt-5  cards-title text-center text-3xl font-black text-rose-300"><span class="text-white">Security for you and your users</span></h1>
    </a>
    <p class=" pl-5 cards-under-desc text-white pt-4">
    Would you have entered a shop or a building if you were greeted by a sign that said “This building is not safe. Do you really want to go in?”. Hardly. Reassure your visitors by installing an SSL certificate on your website. Without SSL, you also risk a drop in Google rankings.
    </p>
    <p class=" pl-5 cards-under-desc text-white pt-4">
    For your own security, you should make sure that your website is protected from external attacks and intrusions. The easiest way is to contact your hosting partner or other industry experts.
    </p>
    </div>
    </div>
    <img src={gif} alt="" />
    </section>
    
    </>
  )
}
