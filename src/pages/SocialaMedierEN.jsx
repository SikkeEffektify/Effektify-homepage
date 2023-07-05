import React from 'react'
import eBackground from '../assets/effektify-white-digital.webp'
import img2 from '../assets/digital-marknadsforing-drink.gif'
import gif from '../assets/PONG_Light_version2.gif'
import ContactForm from '../components/ContactForm'
import like from '../assets/annonsering-sociala-medier-gilla.webp'
import bg from '../assets/digital-marknadsforing.webp'
import google from '../assets/annonsering-google.webp'
import facebook from '../assets/facebook-icon.png'
import instagram from '../assets/instagram-icon.png'
import linkedin from '../assets/linkedin-icon.png'
import tiktok from '../assets/tiktok-icon.png'

export default function SocialaMedierEN() {
  return (
    <>
    <section>
   <div class='pt-40 pb-40 heading-container bg-cyan-700 text-white'>
    <h1 class="text-left text-8xl text-rose-300 pb-10 ">
    Sociala Media
    </h1>
    <p class="text-lg text-left pb-10">
    With one of our personal specialists, advertising has never been easier. We tailor a strategy based on in-depth analysis of your desired keywords and competition to provide a solution that fits your industry and your business.
    </p>
    </div>
    </section>

    <section>
   <div className='hero bg-fixed'>
    <img class="min-w-full min-h-full absolute object-cover hero-image" src={bg}  />
    <div class="vidContent2  bg-black/60">
        <h1 class='pl-4 hero6-title font-black text-right text-white '>With a vision<br /> and the right tools</h1>
        <p class="text-left pr-20 pt-2 text-2xl">
        your business can 
        <br />
        become the swan you’ve
        <br />
        always dreamed of.
        </p>
    </div>
   </div>
    </section>


    <section>
    <div class='pt-20  heading-container bg-white text-black'>
    <h1 class="text-left text-3xl pb-5 ">
    The right strategy – the right result.
    </h1>
    <p class="text-left text-sm pb-5">
    With the help of well-optimized ads, your potential customers will be much more likely to find you when searching for products or services that your company offers. When it comes to digital marketing, we at Effektify have both the knowledge and experience required to be visible online today.
    </p>
    <p class="text-left text-sm pb-20">
    Whether it’s 
    <a class="text-rose-300" href="/e/digital-advertising"> social media </a>
    advertising or 
    <a class="text-rose-300" href="/en/digital-advertising"> Google ads</a>
    , we offer the right strategy for your business, as well as reports with measurable results so you can easily track the progress of your campaigns.
    </p>

    <img src={eBackground} class="bg-effect " alt="" />

    <h1 class="text-right text-5xl pt-10 pb-5 ">
    the right place
    <br />
    at the right time
    </h1>
    <p class="text-right text-sm pb-10">
    Google is by far Sweden’s largest search engine and 95% of all searches today are made via their platform. Ranking high on Google gives companies the opportunity to reach potential customers when they do a search inquiry. In other words, search engine optimization or SEO is one of the best ways to reach new customers.
    </p>
    <p class="text-left text-sm pb-5">
    There are different ways to be seen on Google, you can pay to be seen by advertising via Google Ads or by being seen organically when potential customers do a search (search engine optimization). Both methods are important parts of a modern digital marketing strategy.
    </p>
    <p class="text-left text-sm pb-5">
    One of the benefits of advertising with Google Ads is that it doesn’t take as long time to be seen as it does when working with search engine optimization, because you pay for ads and visitors. The disadvantage of advertising is that as soon as you stop spending money on ads, you stop being visible and get no more visits to the website. With search engine optimization, you are seen every time new potential customers google for what you sell, around the clock all year round.
    </p>


    </div>
    </section>
        

    <div class="bg-white  ">
      <p class="text-right text-xl pb-3 pr-2">Sit back and let us
        <br />
        do what we do best.</p>
    <img class="flower mx-auto invert " src={img2} alt="" />
    </div>

    <section class="standard-padding">
      <h1 class='text-white text-center text-4xl pt-20 pb-5'>
        which 
        <br />
        platform is right 
        <br />
        for you?
      </h1>
      <p class='text-white text-lg pb-10'>
      With the help of the right strategies, 
      <br />
      we create customized solutions 
      <br /> 
      for companies that want to be able to 
      <br />
      reach a wider market while they 
      <br />
      can see measurable results.
      </p>

    </section>
   <section class="cards-1">
       <div class="pt-5 cards-container ">
     <div class="max-w-sm p-6 pb-10 border border-white shadow  mx-auto bg-black pt-10">
      <img class='cards-social-icon mx-auto' src={google} alt="" />
      <h4 class='text-white text-center pt-5'>Google</h4>
    </div>
    </div>
    </section>
    <section class="cards-1">
       <div class="pt-5 cards-container ">
     <div class="max-w-sm p-6 pb-10 border border-white shadow  mx-auto bg-black pt-10">
      <img class='cards-social-icon mx-auto' src={facebook} alt="" />
      <h4 class='text-white text-center pt-5'>Facebook</h4>
    </div>
    </div>
    </section>
    <section class="cards-1">
       <div class="pt-5 cards-container ">
     <div class="max-w-sm p-6 pb-10 border border-white shadow  mx-auto bg-black pt-10">
      <img class='cards-social-icon mx-auto' src={instagram} alt="" />
      <h4 class='text-white text-center pt-5'>Instagram</h4>
    </div>
    </div>
    </section>
    <section class="cards-1">
       <div class="pt-5 cards-container ">
     <div class="max-w-sm p-6 pb-10 border border-white shadow  mx-auto bg-black pt-10">
      <img class='cards-social-icon mx-auto' src={linkedin} alt="" />
      <h4 class='text-white text-center pt-5'>LinkedIn</h4>
    </div>
    </div>
    </section>
    <section class="cards-1 pb-20">
       <div class="pt-5 cards-container ">
     <div class="max-w-sm p-6 pb-10 border border-white shadow  mx-auto bg-black pt-10">
      <img class='cards-social-icon mx-auto' src={tiktok} alt="" />
      <h4 class='text-white text-center pt-5'>TikTok</h4>
    </div>
    </div>
    </section>
    <img src={gif} alt="" />
    <ContactFormEN />


    <section>
    <div class='pt-10  heading-container text-white'>
    <section class="cards-google4">
       <div class="pt-5 cards-container2 pb-10">
     <div class="custom-back max-w-sm pb-10 border border-black shado mx-auto pt-10">
        <h1 class="pt-40 cards2-title text-center mb-2 font-semibold tracking-tight uppercase text-rose-300"><span class="text-white"></span></h1>
        <h2 class="pb-20 text-center cards2-under-title text-white"><span class="pl-4"></span></h2>
    </div>
    </div>
    </section>

    <h1 class="text-left text-5xl pt-10 pb-5 ">
    Increase your visibility
    <br />
    with Google Ads
    </h1>
    <p class="text-left text-sm pb-10">
    Google is by far Sweden’s largest search engine and 95% of all searches today are made via their platform. In Sweden, more than 50 million searches are made on Google every day. With numbers like these, you probably realize the importance of appearing high up in the search results that Google shows. The competition between companies that want to rank high on Google is today extremely large as many today understand the importance of what a good position means. In other words, if you are not visible, you do not exist.
    </p>

    <p class="text-right text-sm pb-10">
    Google is by far Sweden’s largest search engine and 95% of all searches today are made via their platform. In Sweden, more than 50 million searches are made on Google every day. With numbers like these, you probably realize the importance of appearing high up in the search results that Google shows. The competition between companies that want to rank high on Google is today extremely large as many today understand the importance of what a good position means. In other words, if you are not visible, you do not exist.
    </p>

    <section class="cards-google4">
       <div class="pt-5 cards-socialm pb-10">
     <div class="custom-back max-w-sm pb-10 border border-black shado mx-auto pt-10">
        <h1 class="pt-40 cards2-title text-center mb-2 font-semibold tracking-tight uppercase text-rose-300"><span class="text-white"></span></h1>
        <h2 class="pb-20 text-center cards2-under-title text-white"><span class="pl-4"></span></h2>
    </div>
    </div>
    </section>

    <section class="cards-socialm2">
       <div class="pt-5 cards-container2 pb-10">
     <div class="custom-back max-w-sm pb-10 border border-black shado mx-auto pt-10">
        <h1 class="pt-40 cards2-title text-center mb-2 font-semibold tracking-tight uppercase text-rose-300"><span class="text-white"></span></h1>
        <h2 class="pb-20 text-center cards2-under-title text-white"><span class="pl-4"></span></h2>
    </div>
    </div>
    </section>

    <h1 class="text-right text-5xl pt-10 pb-5 ">
    Reach your goals
    <br />
    with Social Media
    </h1>
    <p class="text-right text-sm pb-10">
    Google is by far Sweden’s largest search engine and 95% of all searches today are made via their platform. In Sweden, more than 50 million searches are made on Google every day. With numbers like these, you probably realize the importance of appearing high up in the search results that Google shows. The competition between companies that want to rank high on Google is today extremely large as many today understand the importance of what a good position means. In other words, if you are not visible, you do not exist.
    </p>


    <p class="text-left text-sm pb-10">
    We’ll work with you to find out what you want to achieve by advertising on social media and what your priorities should be to reach your goals.
    </p>


    
    </div>     
    </section>

    <div class="pb-20 ">
   

    <img src={like} class="like-bg shadow" alt="" />
 
    </div>
  
    </>
  )
}
