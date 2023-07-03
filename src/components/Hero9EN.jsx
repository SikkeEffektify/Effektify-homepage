import React from 'react'
import './Hero.css'
import videoBg from '../assets/trafic.mp4'
import divider from '../assets/whitedivider.svg'
export const Hero9EN = () => {
  return (
<section>
   <div className='hero'>
    <div className="vidOverlay"></div>
    <video class="min-w-full min-h-full absolute object-cover" src={videoBg} autoPlay loop muted />
    <div class="vidContent pt-20 text-center ">
        <h1>Increase traffic to your website with SEO</h1>
    </div>
   </div>
   <section class="pt-10 text-lg font-black text-center text-white heading-container pb-10">
    <h2 class="uppercase">Grow with seo / search engine optimization</h2>
    <p class="font-light pt-5 text-sm">
    Search engine optimization, or SEO as it is also known, is a type of digital marketing where the aim is to increase your visibility in the search engines’ organic results. Search engine optimization is therefore about appearing well in the results that are not paid ads on search engines such as Google, Bing and Yahoo. If done correctly, SEO will result in your website appearing high up in search engine results for relevant searches. This SEO work means that you get more visitors to your website, which you can then hopefully convert into customers.
    </p>
   </section>

   <section>

    <div className='hero'>
    <div className="vidOverlay"></div>
    <video class="min-w-full min-h-full absolute object-cover" src="https://player.vimeo.com/progressive_redirect/playback/714795502/rendition/1080p/file.mp4?loc=external&signature=f10571525f87060048a4f457365b416995804594ef77eb283e82fe660968d63e" autoPlay loop muted />
    <div class="vidContent2 text-center heading-container ">
        <p class="text-base uppercase font-light">We let the results speak for themselves</p>
        <h1 class="uppercase text-2xl pt-5 pb-5">We have until now helped companies to be visible in Sweden & abroad with</h1>
        <div class="ring-4 ring-yellow-400 pr-5 pl-5 pt-10 pb-10 rounded-full"> 
        <span>1047</span>
        </div>
        <h3 class='text-2xl pt-5 pb-5'>keywords in top 3</h3>
        <div class="ring-4 ring-green-400 pr-5 pl-5 pt-10 pb-10 rounded-full"> 
        <span>1832</span>
        </div>
        <h3 class='text-2xl pt-5 pb-5'>keywords in top 10</h3>
        <div class="ring-4 ring-pink-500 pr-5 pl-5 pt-10 pb-10 rounded-full"> 
        <span>2408</span>
        </div>
        <h3 class='text-2xl pt-5 pb-5'>keywords in  top 20</h3>
    </div>
   </div>
   </section>
    </section>
  )
}
