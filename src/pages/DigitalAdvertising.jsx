import React from 'react'
import { HeroImage } from '../components/HeroImage'
import { Heading6 } from '../components/Heading6'
import { Heading } from '../components/Heading'
import { SocialCards } from '../components/SocialCards'
import ContactForm from '../components/ContactForm'
import { CardsGoogle } from '../components/CardsGoogle'


/* Images */
import heroImg from '../assets/digital-marknadsforing.webp'


export default function DigitalAdvertising() {
  return (

    <>
   <Heading 
   bg={"bg-white pb-40 pt-20"}
   textColor={"text-black"}
   title={"Digital advertising"}
   desc={"With one of our personal specialists, advertising has never been easier. We tailor a strategy based on in-depth analysis of your desired keywords and competition to provide a solution that fits your industry and your business."}
   />
   <HeroImage
   image={heroImg}
   titleRight={"With a vision and the right tools"}
   titleLeft={"your company can become the swan you’ve always dreamt of."}
   />
   <Heading6
    titleLeft={"The right strategy – the right result."}
    descLeft={`
    <p class='font-light text-lg'>
      With the help of well-optimized ads, your potential customers will be much more likely to find you when searching for products or services that your company offers. When it comes to digital marketing, we at Effektify have both the knowledge and experience required to be visible online today.
    </p>
    <p>
    Whether it’s 
      <strong class='text-rose-300'>
        <a href="/en/digtal-advertising"> Social media </a>
      </strong>
      advertising or 
      <strong class='text-rose-300'>
        <a href="/en/digital-advertising"> Google ads</a>
      </strong>
      ,
      we offer the right strategy for your business, as well as reports with measurable results so you can easily track the progress of your campaigns.
    </p>
    `}
    titleRight={"the right place at the right time"}
    descRight={`
    <p  class='font-light text-lg'>
      Google is by far Sweden’s largest search engine and 95% of all searches today are made via their platform. Ranking high on Google gives companies the opportunity to reach potential customers when they do a search inquiry. In other words, search engine optimization or SEO is one of the best ways to reach new customers.
    </p>
    `}

    desc={`
    <p  class='font-light pb-10 text-lg'>
      There are different ways to be seen on Google, you can pay to be seen by advertising via Google Ads or by being seen organically when potential customers do a search (search engine optimization). Both methods are important parts of a modern digital marketing strategy.
    </p>
    <p  class='font-light text-left text-lg'>
      One of the benefits of advertising with Google Ads is that it doesn’t take as long time to be seen as it does when working with search engine optimization, because you pay for ads and visitors. The disadvantage of advertising is that as soon as you stop spending money on ads, you stop being visible and get no more visits to the website. With search engine optimization, you are seen every time new potential customers google for what you sell, around the clock all year round.
    </p>
    `}

    endText={`
    <p class="text-right text-xl pb-3 pr-2">Sit back and let us 
    <br />
      do what we do best.
    </p>
    `}
   />
   <SocialCards
      title={"Which platform is right for you?"}
      desc={"With the help of the right strategies, we create customized solutions for companies that want to be able to reach a wider market while they can see measurable results."}
   />
   <CardsGoogle
      title={"Increase your visibility with Google Ads"}
      desc1={"Google is by far Sweden’s largest search engine and 95% of all searches today are made via their platform. In Sweden, more than 50 million searches are made on Google every day. With numbers like these, you probably realize the importance of appearing high up in the search results that Google shows. The competition between companies that want to rank high on Google is today extremely large as many today understand the importance of what a good position means. In other words, if you are not visible, you do not exist."}
      desc2={`
      <p class='font-light pt-20 text-lg'>
        Promoting your website with Google Ads means that you pay to appear at the top of Google and you pay every time someone chooses to click on the ad.
      </p>
      <p>
        <em>
        <strong class="font-black text-rose-300">
        This is called Pay per click or PPC <br />
        </strong>
        </em>
        and the cost you pay each time a visitor clicks on your particular link is determined by the competitive situation and the keywords involved.
      </p>
    `}
   />

  <ContactForm 
    title={"How nice that you have found us!"}
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
