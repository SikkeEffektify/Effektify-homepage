import React from 'react'
import './Heading.css'
import flower from '../assets/effektify-blomma.png'

export const HeadingWebbEN = () => {
  return ( 
    <section>
    <div class='pt-10  heading-container text-left'>
    <h1 class="pt-5 text-4xl  ">
    <span class='text-white '>
    Get more business
    <br />
    with new <br /> website
    </span>
    </h1>
    <p class="heading-webb-desc pt-5 text-lg font-thin">
    Websites are nothing new, but the playing field and what makes a good website is changing all the time. Therefore, it is required that you as an entrepreneur are well prepared and put in a lot of time to ensure that you are in the game. A website is not something that should be left to chance, but requires ongoing work, service and investment.
    </p>
    </div>
    <div class='pb-10 heading-container text-right'>
    <h1 class="pt-5 text-4xl ">
    <span class='text-white '>
    Why a website
    <br /> 
    from Effektify?
    </span>
    </h1>
    <p class="heading-webb-desc pt-5 text-lg font-thin">
    We don’t deny that you can build your own website, and we encourage you to try. But we’re also here when you have questions or want expert help. We don’t just focus on making a website look good, for us the most important thing is to find out what the website is going to do for you, and then we develop a plan and a strategy on how to achieve your goals. You shouldn’t just be happy when your new website goes live.
    </p>
    </div>
    <section>
    <div class=' pt-20 pb-20 heading-container text-center '>
    <h1 class="pt-5 mb-4 text-white  text-2xl ">
    You shall love working  <br />  and growing with it  <br />  for a long time!
    </h1>
    </div>
    </section>
    <div class=" pb-40 ">
    <img class="flower mx-auto " src={flower} alt="" />
    </div>
    </section>
  )
}
