import React from 'react'
import gif from '../assets/pong_light_version.gif'
import ContactForm from '../components/ContactForm'
import like from '../assets/annonsering-sociala-medier-gilla.webp'
import { Heading } from '../components/Heading'
import { SocialCards } from '../components/SocialCards'
import { HeroImage } from '../components/HeroImage'
import HeadingWithLogo from '../components/HeadingWithLogo'



export default function SocialaMedierEN() {
  return (
    <>
    <div className='bg-cyan-700 pb-60 pt-60'>
    <Heading 
      bg={"bg-cyan-700"}
      title={"Social Media"}
      textColor={"text-white"}
      desc={"With one of our personal specialists, advertising has never been easier. We tailor a strategy based on in-depth analysis of your desired keywords and competition to provide a solution that fits your industry and your business."}
    />
    </div>
    
    <HeroImage
      image={"/src/assets/digital-marknadsforing.webp"}
      titleRight={"With a vision and the right tools"}
      titleLeft={"your business can become the swan you’ve always dreamed of."}
    />
  
    <HeadingWithLogo 
     mainTitle1={"The right strategy – the right result."}
     mainDesc1={`
     <p class="text-left text-sm pb-5">
     With the help of well-optimized ads, your potential customers will be much more likely to find you when searching for products or services that your company offers. When it comes to digital marketing, we at Effektify have both the knowledge and experience required to be visible online today.
     </p>
     <p class="text-left text-sm pb-20">
     Whether it’s 
     <a class="text-rose-300" href="/en/digital-advertising"> sociala media </a>
     advertising or 
     <a class="text-rose-300"  href="/en/digital-advertising"> Google ads</a>
     , we offer the right strategy for your business, as well as reports with measurable results so you can easily track the progress of your campaigns.
     </p>
     `}

     mainTitle2={"the right place at the right time"}
     mainDesc2={`
     <p class="text-right text-sm pb-10">
     Google is by far Sweden’s largest search engine and 95% of all searches today are made via their platform. Ranking high on Google gives companies the opportunity to reach potential customers when they do a search inquiry. In other words, search engine optimization or SEO is one of the best ways to reach new customers.
     </p>
     <p class="text-left text-sm pb-5">
     There are different ways to be seen on Google, you can pay to be seen by advertising via Google Ads or by being seen organically when potential customers do a search (search engine optimization). Both methods are important parts of a modern digital marketing strategy.
     </p>
     <p class="text-left text-sm pb-5">
     One of the benefits of advertising with Google Ads is that it doesn’t take as long time to be seen as it does when working with search engine optimization, because you pay for ads and visitors. The disadvantage of advertising is that as soon as you stop spending money on ads, you stop being visible and get no more visits to the website. With search engine optimization, you are seen every time new potential customers google for what you sell, around the clock all year round.
     </p>
     `}

     cupText={"Sit back and let us do what we do best."}
    />
    
    <SocialCards 
      title={"which platform is right for you?"}
      desc={"With the help of the right strategies, we create customized solutions for companies that want to be able to reach a wider market while they can see measurable results."}
    />

    <img  className='mx-auto' src={gif} alt="" />
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
    <Heading 
      textColor={"text-white"}
      title={"Increase your visibility with Google Ads"}
      descCustomHtml={`
      <p class="text-left text-sm pb-10">
      Google is by far Sweden’s largest search engine and 95% of all searches today are made via their platform. In Sweden, more than 50 million searches are made on Google every day. With numbers like these, you probably realize the importance of appearing high up in the search results that Google shows. The competition between companies that want to rank high on Google is today extremely large as many today understand the importance of what a good position means. In other words, if you are not visible, you do not exist.
      </p>
  
      <p class="text-right text-sm pb-10">
      Google is by far Sweden’s largest search engine and 95% of all searches today are made via their platform. In Sweden, more than 50 million searches are made on Google every day. With numbers like these, you probably realize the importance of appearing high up in the search results that Google shows. The competition between companies that want to rank high on Google is today extremely large as many today understand the importance of what a good position means. In other words, if you are not visible, you do not exist.
      </p>
    `}
    />
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

    <Heading 
      title={"Reach your goals with Social Media"}
      titlePosition={"text-right"}
      textColor={"text-white"}
      descCustomHtml={`
      <p class="text-right text-sm pb-10">
      Google is by far Sweden’s largest search engine and 95% of all searches today are made via their platform. In Sweden, more than 50 million searches are made on Google every day. With numbers like these, you probably realize the importance of appearing high up in the search results that Google shows. The competition between companies that want to rank high on Google is today extremely large as many today understand the importance of what a good position means. In other words, if you are not visible, you do not exist.
      </p>
      <p class="text-left text-sm pb-10">
      We’ll work with you to find out what you want to achieve by advertising on social media and what your priorities should be to reach your goals.
      </p>
    `}
    />
    </div>     
    </section>

    <div class="pb-20 ">
    <img src={like} class="like-bg shadow" alt="" />
    </div>
  
    </>
  )
}
