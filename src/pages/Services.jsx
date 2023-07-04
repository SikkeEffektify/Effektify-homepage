import React from 'react'

import img from '../assets/effektify-digitalbyra-symbol.webp'
import gif from '../assets/PONG_Light_version2.gif'


export default function Services() {
  return (
    <>
    <section>
   <div class='pt-20 heading-container bg-white text-black'>
    <h1 class="text-left text-5xl pb-5 ">
    Positions
    </h1>
    <p class="text-sm text-left pb-10">
    Our services help companies increase their visibility and thus their sales. Whatever type of visibility is appropriate for your business, we guarantee that with the help of our specialists in each area, we can devise a strategy that will help you achieve your goals.
    </p>
    </div>
    </section>


    <section>
   <div class='pt-20 heading-container bg-neutral-100 text-black'>
    <p class="text-sm text-left pb-10">
    It is with wholehearted commitment that we help companies achieve the digital presence required today. At Effektify we have many years of experience in building and developing businesses, strategy work, marketing and sales.
    </p>
    <p class="text-sm text-left pb-10">
    As we see it, it’s not about SEO or Google Ads, Facebook or TikTok. We choose tools according to the task, not the other way around.
    </p>

    <div class="text-center pb-10">
    <a href="/en/google-ads">
    <i class="fa-solid fa-chart-column fa-2xl custom-icon"></i>
    <p class="text-center text-sm pt-3"> Google Ads</p>
    </a>
    </div>

    <div class="text-center pb-10">
    <a href="/en/search-engine-optimization/">
    <i class="fa-solid fa-magnifying-glass fa-flip-horizontal fa-2xl custom-icon"></i>
    <p class="text-center text-sm pt-3"> Search Engine Optimization</p>
    </a>
    </div>

    <div class="text-center pb-10">
    <a href="/en/web-copy">
    <i class="fa-solid fa-pen-to-square fa-flip-horizontal fa-2xl custom-icon"></i>
    <p class="text-center text-sm pt-3"> Web copy</p>
    </a>
    </div>


    <div class="text-center pb-10">
    <a href="/en/facebook-ads-instagram-ads/">
    <i class="fa-solid fa-comments fa-2xl custom-icon"></i>
    <p class="text-center text-sm pt-3"> Facebook Ads</p>
    </a>
    </div>

    <div class="text-center pb-10">
    <a href="/en/web/">
    <i class="fa-solid fa-globe fa-2xl custom-icon"></i>
    <p class="text-center text-sm pt-3"> Web design</p>
    </a>
    </div>


    <div class="text-center pb-10">
    <a href="/en/on-page-seo/">
    <i class="fa-solid fa-note-sticky fa-2xl custom-icon"></i>
    <p class="text-center text-sm pt-3"> On-page</p>
    </a>
    </div>
    </div>
    </section>

    <section>
    <div class='pt-20 heading-container bg-black text-white'>
    <h1 class="text-center text-3xl pb-5 ">
    Increase sales
    with Google Ads
    </h1>
    <p class="text-sm text-left pb-10">
    Google Ads is an excellent tool for those who want to
    <em class='text-rose-300'> increase your sales, increase the number of people who visit your website or who want more repeat customers. </em>
    Google Ads allows you to specify the audience you are targeting. You also have the option to target your ads geographically so that you appear on specific keywords in specific locations.
    </p>  

    <p class="text-lg text-left pb-20">
    <a href="/google-ads"><span>Get started with Google Ads today!</span></a>
    </p>

    <h1 class="text-right text-4xl pb-5 ">
    Get more visitors
    to your website
    </h1>
    <p class="text-sm text-right pb-10">
    Being visible on Google gives your business a better chance of reaching customers who are looking for the products or services you offer. Search engine optimization or SEO is therefore vital for your business to be seen online, get more visitors and do more business as a result.
    </p>

    <p class="text-sm text-center pb-10">
    <a href="/on-page-seo">Read more about <em class="text-rose-300">Search Engine Optimization</em></a>   
    </p>

    <h1 class="text-center text-6xl pb-10 ">
    we are
    <span class="underline decoration-rose-300"> effektify</span>
    </h1>

    <h1 class="text-center text-4xl pb-5 ">
    and we’re the
    </h1>

    <h1 class="text-center text-5xl pb-5 ">
    creative digital agency
    you need
    </h1>

    <img src={img} class="bg-effect invert" alt="" />

    </div>
    </section>

    <div class="whitedivider5 invert  pb-20">
      </div>

    <img src={gif} alt="" />
    <ContactFormEN />
    </>
  )
}
