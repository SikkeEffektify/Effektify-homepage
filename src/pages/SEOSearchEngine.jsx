import React from 'react'
import { Hero9EN } from "../components/Hero9EN";
import { Heading7 } from '../components/Heading7'
import { HeroButton } from '../components/HeroButton'
import { Headinglist } from '../components/Headinglist'
import { HeadingSEO } from '../components/HeadingSEO'
import { HeadingSEO2 } from '../components/HeadingSEO2'
import ContactForm from '../components/ContactForm'
import { HeadingCity } from '../components/HeadingCity'
import { HeadingSEO3 } from '../components/HeadingSEO3'
import { HeadingCity2 } from '../components/HeadingCity2'
import { HeadingSEO4 } from '../components/HeadingSEO4'
import { HeadingCity3 } from '../components/HeadingCity3'
import { HeadingSEO5 } from '../components/HeadingSEO5'
import { HeadingCity4 } from '../components/HeadingCity4'
import { HeadingSEO6 } from '../components/HeadingSEO6'
import { HeadingCity5 } from '../components/HeadingCity5'
import { HeadingSEO7 } from '../components/HeadingSEO7'
import { HeadingSEO8 } from '../components/HeadingSEO8'
import { HeadingSEO9 } from '../components/HeadingSEO9'
import { Heading7EN } from '../components/Heading7EN';
import { HeadinglistEN } from '../components/HeadinglistEN';
import { HeadingSEOEN } from '../components/HeadingSEOEN';
import { HeadingSEO2EN } from '../components/HeadingSEO2EN';
import { HeadingCityEN } from '../components/HeadingCityEN';
import { HeadingSEO4EN } from '../components/HeadingSEO4EN';
import { HeadingCity3EN } from '../components/HeadingCity3EN';
import { HeadingSEO9EN } from '../components/HeadingSEO9EN';


export default function SEOSearchEngine() {
  return (
    <>
    <Hero9EN />    
    <Heading7EN />
    <div className='bg-white pb-20'></div>
    <HeroButton/>
    <HeadinglistEN />
    <HeadingSEOEN/>
    <ContactFormEN />
    <HeadingSEO2EN/>
    <HeadingCityEN/>
    <HeadingSEO4EN />
    <HeadingCity3EN />
    
    <section>
    <div class='pt-20 heading-container text-center text-black bg-white'>
    <h1 class="text-3xl uppercase pb-5">Off-page SEO</h1>
    <p class="text-sm text-left pb-5">
    Another important part of SEO is off-page. Off-page is the ongoing work that needs to be done after the on-page work is done on the website, you could say that it is the maintenance required to keep your website ranking on Google.
    </p>
    <p class="text-sm text-left pb-5">
    When Google assesses whether your website is relevant to specific keywords, it reviews the content of your website. However, it’s not just the content that Google looks at, it also looks at the websites that link to yours.
    </p>
    <p class="text-sm text-left pb-5">
    Just as we humans base many of our buying decisions on recommendations, Google based its rankings of websites on “recommendations” from other websites. These recommendations are important to get your website as high as possible on Google. Google considers “links” from other websites to be “recommendations” for your website. When Google decides whether your website is relevant to appear on the first page, it takes into account whether there are other websites linking to yours, and “listens” to this. What this means is that inbound links are a ranking factor and therefore affect the possibility of appearing on Google’s first page. You could say that having an effective link strategy is a fundamental part of SEO.
    </p>
    <p class="text-sm text-left pb-5">
    An example that can be applied to this is if you are planning to replace the roof on your house and are looking for a contractor to do this. You have two friends, one who works as a carpenter, and one who works as an accountant. They both recommend two different construction companies, whose recommendation will you listen to? It is most likely to be the carpenter, as he has more knowledge of the subject. Google works the same way, the search engine listens to relevant “recommendations”. Therefore, it is important to make sure that the links to your website are relevant. If you run a construction company and get links from a blog about construction and carpentry, Google considers that link to carry more weight than one that comes from a food blog, for example.
    </p>


    </div>
    </section>

    <HeadingSEO9EN />

    </>
  )
}
