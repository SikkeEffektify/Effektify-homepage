import React from 'react'
import ContactForm from '../components/ContactForm'
import img from '../assets/effektify-digitalbyra-symbol.webp'
import gif from '../assets/pong_light_version.gif'
import { Heading } from '../components/Heading'

export default function Services() {
  return (
    <>

    <Heading 
      bg={"bg-white"}
      textColor={"text-black md:text-6xl"}
      titlePosition={"md:text-center"}
      title={"Positions"}
      descCustomHtml={`
      <p class="text-sm text-left pb-10">Our services help companies increase their visibility and thus their sales. Whatever type of visibility is appropriate for your business, we guarantee that with the help of our specialists in each area, we can devise a strategy that will help you achieve your goals. </p>
      <p class="text-sm text-left pb-10">
      It is with wholehearted commitment that we help companies achieve the digital presence required today. At Effektify we have many years of experience in building and developing businesses, strategy work, marketing and sales.
      </p>
      <p class="text-sm text-left pb-10">
      As we see it, it’s not about SEO or Google Ads, Facebook or TikTok. We choose tools according to the task, not the other way around.
      </p>

      <div class="md:grid md:grid-cols-6 md:pb-20 md:pt-20">
      <div class="text-center pb-10">
      <a href="/en/google-ads">
      <i class="fa-solid fa-chart-column fa-2xl custom-icon"></i>
      <p class="text-center text-sm pt-3"> Google Ads</p>
      </a>
      </div>

      <div class="text-center pb-10">
      <a href="/en/searchengine-optimization">
      <i class="fa-solid fa-magnifying-glass fa-flip-horizontal fa-2xl custom-icon"></i>
      <p class="text-center text-sm pt-3"> Search engine optimization</p>
      </a>
      </div>

      <div class="text-center pb-10">
      <a href="/en/webbcopy">
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
      `}
      />


    <Heading 
      bg={"bg-black"}
      textColor={"text-white"}
      title={"Increase sales with Google Ads"}
      descCustomHtml={`
      <p class="text-sm text-white text-left pb-10">
      Google Ads is an excellent tool for those who want to
      <em class='text-rose-300'> increase your sales, increase the number of people who visit your website or who want more repeat customers. </em>
      Google Ads allows you to specify the audience you are targeting. You also have the option to target your ads geographically so that you appear on specific keywords in specific locations.
      </p>  

      <p class="text-lg text-white text-left pb-20">
      <a href="/en/google-ads"><span>Get started with Google Ads today!</span></a>
      </p>

      <h1 class="text-right text-white text-4xl pb-5 ">
      Get more visitors
      to your website
      </h1>
      <p class="text-sm text-white text-right pb-10">
      Being visible on Google gives your business a better chance of reaching customers who are looking for the products or services you offer. Search engine optimization or SEO is therefore vital for your business to be seen online, get more visitors and do more business as a result.
      </p>

      <p class="text-sm text-white text-center pb-10">
      <a href="/en/on-page-seo">Read more about <em class="text-rose-300">search engine optimization</em></a>   
      </p>

      <h1 class="text-center text-white text-6xl pb-10 ">
      we are
      <span class="underline decoration-rose-300"> effektify</span>
      </h1>

      <h1 class="text-center text-white text-4xl pb-5 ">
      and we're the
      </h1>

      <h1 class="text-center text-white text-5xl pb-5 ">
      creative digital agency
      you need
      </h1>
      `}
      />

    <section>
    <div class='heading-container bg-black text-white'>
    <img src={img} class="bg-effect invert" alt="" />

    </div>
    </section>

    <div class="whitedivider5 invert  pb-20">
      </div>

    <img className='mx-auto md:w-3/4' src={gif} alt="" />
    <ContactForm 
      title={"Let's play!"}
      desc={"If you have any questions or are ready to start your digital journey now, feel free to fill in a few lines or email us at"}
      company={"Company"}
      name={"Name"}
      phone={"Phone"}
      email={"Email"}
      text={"What can we do for you?"}
      buttonText={"Send"}
    
    />
    </>
  )
}
