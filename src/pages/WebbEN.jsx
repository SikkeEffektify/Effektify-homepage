import React from 'react'
import { Hero } from '../components/Hero'
import { HeadingWebb } from '../components/HeadingWebb'
import { Cards3 } from '../components/Cards3'
import ContactForm from '../components/ContactForm'


/* Video */
import video from '../assets/Webb.mp4'

/* image */
import image from '../assets/webbdesign-bygga-hemsida.webp'
import { HeroImage } from '../components/HeroImage'

export default function WebbEN() {
  return (
    <>
    <Hero
      title={"Get more visitors with a good website"}
      videoLink={video} 
    />
    <HeadingWebb 
      titleLeft={"Get more business with a new website"}
      descLeft={"Websites are nothing new, but the playing field and what makes a good website is changing all the time. Therefore, it is required that you as an entrepreneur are well prepared and put in a lot of time to ensure that you are in the game. A website is not something that should be left to chance, but requires ongoing work, service and investment."}
      titleRight={"Why a website from Effektify"}
      DescRight={"We don’t deny that you can build your own website, and we encourage you to try. But we’re also here when you have questions or want expert help. We don’t just focus on making a website look good, for us the most important thing is to find out what the website is going to do for you, and then we develop a plan and a strategy on how to achieve your goals. You shouldn’t just be happy when your new website goes live."}
      endText={"You shall love working and growing with it for a long time!"}
    />
    <HeroImage 
      titleLeft={"What to consider when building a website?"}
      desc={"Building a website yourself is not very difficult nowadays, but like many things, it requires investing a lot of time to learn the basics, what is important and how the tool works. Here we list some things that are important when building a website:"}
      image={image}
    />
    <Cards3 
      title1={"Purpose and target group"}
      desc1={`
      <p class=" pl-10 cards-under-desc text-white pt-4">
        Before getting started, the most important questions are “What is the purpose of the website?” and “Who will use it?”. This is in order to focus on the problem the website should solve and to make it more relevant and user-friendly.
      </p>
      `}

      title2={"Availability"}
      desc2={`
      <p class=" pl-5 cards-under-desc text-white pt-4">
      When working with websites, we often end up with the expression “easy to say, hard to do”. It goes without saying that a website should be equally easy to use and read on both a large screen and a small screen. But that requires doing the work, too. As well as ensuring that images and text can be seen and read without zooming in (or out), buttons and clickable elements may need to be reviewed so that they do their job even on small screens.
      </p>
      `}

      title3={"Speed and charging time"}
      desc3={`
      <p class=" pl-5 cards-under-desc text-white pt-4">
      There are many factors that affect how fast a website loads. What you can do yourself is not to use more “heavy” elements than necessary, e.g. video, images, etc. The images you use should be adapted and compressed before being uploaded to the website. In addition to the content of the site, loading time is affected by hosting (where the website is located), platform (which tool was used to build the website), etc. Please contact us if you would like to know more about how you can make your website load faster. You can also test your website with  
        <a class='text-rose-300' href="https://developers.google.com/speed/pagespeed/insights/" rel="nofollow noopener" target="_blank"> Googles PageSpeed Insights.</a>
      </p>
      `}

      title4={"Security for you and your users"}
      desc4={`
      <p class=" pl-5 cards-under-desc text-white pt-4">
        Would you have entered a shop or a building if you were greeted by a sign that said “This building is not safe. Do you really want to go in?”. Hardly. Reassure your visitors by installing an SSL certificate on your website. Without SSL, you also risk a drop in Google rankings.
      </p>
      <p class=" pl-5 cards-under-desc text-white pt-4">
        For your own security, you should make sure that your website is protected from external attacks and intrusions. The easiest way is to contact your hosting partner or other industry experts.
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
