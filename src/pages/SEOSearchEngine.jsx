import React from "react";
import { Heading7 }    from "../components/Heading7";
import { HeroButton }  from "../components/HeroButton";
import { Headinglist } from "../components/Headinglist";
import { HeadingSEO }  from "../components/HeadingSEO";
import { HeadingSEO2 } from "../components/HeadingSEO2";
import   ContactForm   from "../components/ContactForm";
import { HeadingCity } from "../components/HeadingCity";
import { HeadingSEO3 } from "../components/HeadingSEO3";
import { HeadingSEO4 } from "../components/HeadingSEO4";
import { HeadingSEO5 } from "../components/HeadingSEO5";
import { HeadingSEO6 } from "../components/HeadingSEO6";
import { HeadingSEO7 } from "../components/HeadingSEO7";
import { HeadingSEO8 } from "../components/HeadingSEO8";
import { HeadingSEO9 } from "../components/HeadingSEO9";
import { Heading } from "../components/Heading";
import { StatsHero }   from "../components/StatsHero";

/* Videos */
import videoHero from "../assets/trafic.mp4";
import videoHeroButton from "../assets/spaceloop2.mp4";

/* Images for stats */
import img from "../assets/stats1.webp";
import img2 from "../assets/stats2.webp";
import img3 from "../assets/stats3.webp";

export default function SEOSearchEngine() {
  return (
    <>
      <StatsHero
        title1={"Increase traffic to you website with SEO"}
        videoLink={videoHero}
        title2={"Grow with seo / search engine optimization"}
        desc={
          "Search engine optimization, or SEO as it is also known, is a type of digital marketing where the aim is to increase your visibility in the search engines’ organic results. Search engine optimization is therefore about appearing well in the results that are not paid ads on search engines such as Google, Bing and Yahoo. If done correctly, SEO will result in your website appearing high up in search engine results for relevant searches. This SEO work means that you get more visitors to your website, which you can then hopefully convert into customers."
        }
        title3={"We let the result speak for it self"}
        title4={
          "We have until now helped companies to be visible in Sweden & abroad with"
        }
        stats1={"1047"}
        underStats1={"Keywords in top 3"}
        stats2={"1832"}
        underStats2={"Keywords in top 10"}
        stats3={"2408"}
        underStats3={"Keywords in top 20"}
        videoLink2={
          "https://player.vimeo.com/progressive_redirect/playback/714795502/rendition/1080p/file.mp4?loc=external&signature=f10571525f87060048a4f457365b416995804594ef77eb283e82fe660968d63e"
        }
      />

      <Heading7
        smallTitle={"If you are not seen, you do not exist"}
        title={"Exampel of how we have helped businesses grow"}
        desc={
          "Google is by far Sweden’s largest search engine and 95% of all searches today are made via their platform. In Sweden, more than 50 million searches are made on Google every day. With numbers like these, you probably realize the importance of appearing high up in the search results that Google shows. Competition between companies that want to rank high is extremely high today as many understand the importance of what a good position means."
        }
        img={img}
        img2={img2}
        img3={img3}
      />

      <HeroButton
        title={"We're ready for takeoff"}
        title2={"are you?"}
        buttonLink={"/en/contact-us"}
        buttonText={"Launch"}
        videoLink={videoHeroButton}
      />

      <Headinglist
        smallTitle={"For those who want to know more about search engine optimization"}
        mainTitle={"The most frequently asked questions about SEO"}
        title1={"What is SEO?"}
        desc1={`
      <p class="mb-2 text-sm tracking-wider  text-white">
        Search engine optimization is better known as SEO. Optimization is the foundation of all things SEO.   
        <strong class='text-rose-300'> When your brand is well optimized, you increase its online visibility. </strong>
        With the help of SEO, your website will be more likely to find its way to the first page of search engine results. This way, your customers will also find your company much faster.
      </p> `}
        title2={"How does SEO work?"}
        desc2={`
      <p class="mb-2 text-sm tracking-wider  text-white">
        SEO is what you do to make your website more relevant to search engines like Google and Bing. <br/> The search engines scan your website to understand what it’s about. 
        <strong class='text-rose-300'> SEO increases the amount of organic traffic and the quality of your visitors without having to pay for advertising. </strong> 
        Organic traffic therefore does not include paid channels, paid placements or direct traffic to your website. With a
        good SEO-strategy, Google will identify your website as a trustworthy site and in turn point visitors towards it.
      </p>
      `}
        title3={"How long does SEO take?"}
        desc3={`
      <p class="mb-2 text-sm tracking-wider  text-white">
      The time it takes SEO to affect your ranking 
        <strong class='text-rose-300'> depends very much on your goals and the strategy you use. </strong>
        Many SEO practitioners would say that it takes about four to six months before you start seeing the effects of it. Of course, this also depends on the type of competition your keywords have,
        i.e. what other types of operators want to appear on the same keywords as you, and how many users are searching for what you offer.
      </p>
      `}
        title4={"How do I find the right keywords to use for SEO?"}
        desc4={`
      <p class="mb-2 text-sm tracking-wider  text-white">
        Doing a  <em>keyword analysis </em>
        will give you a better idea of which keywords are worth focusing on. To find the best keywords for your industry, you must first 
        <strong class='text-rose-300'> understand the situation of your target audience. </strong>
        By searching for what you want to be seen for yourself, you’ll get a better idea of how others search for what you offer.
      </p>
      <p class="mb-2 text-sm tracking-wider" >
      It is important to know who your target audience is and to be specific about their needs. If your content is about animals, it’s too vague to just use the word “animals” as a keyword. If your website is about “the most popular pets”, the use of this keyword phrase will be more relevant to what your target audience is looking for.
      </p>
      <p class="mb-2 text-sm tracking-wider" >
      Once you have identified some possible keywords and phrases that are relevant to your target audience, it is important to do further analysis around them. 
        <strong class='text-rose-300'> If you use keywords that are too popular, it can be difficult for your website to rank well against your competitors’ websites. </strong>
        Instead, using keywords that are not popular at all may mean that few people will ever search for the keywords in question.
      </p >
      <p class="mb-2 text-sm tracking-wider" >
      It is therefore essential that you examine the search volume and potential competition for all the keywords you are considering. One way to do this is to use the  <em>Google Trends</em> tool.
      </p> 
      `}
        title5={"Do I need to use different strategies for different search engines?"}
        desc5={`
      <p class="mb-2 tracking-wider text-sm text-white">
      There are small differences between the different search engines.
        <strong class='text-rose-300'> However, it is recommended to focus on Google in your SEO strategy, </strong>
        as most visitors use this leading search engine, and the majority of the organic traffic you will get to your website will come from Google itself.
      </p>
      `}
        title6={"How much does SEO cost?"}
        desc6={`
      <p class="mb-2 tracking-wider text-sm text-white">
      It is recommended to hire an experienced SEO agency to get the job done right, and this cost should be included in your marketing budget. 
      <em> The cost of the work is relative, </em>
      adapted to the scope of the work required for your particular industry. 
      <strong class='text-rose-300'> Different industries require different types of strategies and work, </strong>
      as competition varies enormously between them.
      </p>
      <p class="mb-2 text-sm tracking-wider text-white">
      A good SEO agency will make an offer after analysing the scope of the project and your expectations. The average hourly rate for hiring an agency or SEO expert is around SEK 1,500 per hour.
      </p> 
      `}
        title7={"Cand I do SEO on my own?"}
        desc7={`
      <p class="mb-2 tracking-wider text-sm text-white">
      <strong class="text-rose-300">Absolutely! </strong>   However, it takes knowledge, time and money to learn how to do it. It will take many attempts and many mistakes to succeed, but it is possible to implement a basic SEO strategy yourself.
      </p>
      <p class='mb-2 tracking-wider text-sm text-white'>
      However, SEO is time-consuming and to do it properly you need to take into account things like 
      <em> analytics, technical SEO, on-page SEO and off-page SEO. </em>
      You also need to keep up to date with the algorithm changes of the different search engines that visitors use.
      </p>
      `}
        title8={"What affects my rank?"}
        desc8={`
      <p class="mb-2 tracking-wider text-sm text-white">
        The three biggest factors that directly affect your SEO ranking are:
      </p>
      <p class="mb-2 tracking-wider text-sm text-white"><strong class="text-rose-300">Page load time </strong>
        – If your site loads too slowly, your visitors are likely to go to a competitor’s site. Search engines rank your website lower because of a slow page load time.
      </p>
      <p class="mb-2 tracking-wider text-sm text-white"><strong class="text-rose-300">Keyword selection</strong>
        – Keywords must be chosen carefully for your website to be considered relevant to what your ideal customer is looking for.
      <p class="mb-2 tracking-wider text-sm text-white"><strong class="text-rose-300">Content creation </strong>
        – If you create high quality content on your website, visitors are more likely to find your site and stay on it longer. Making your page relevant to search will improve its ranking on search engines.
      </p>
      `}
        title9={"Is SEO better than paid advertising?"}
        desc9={`
        <p class="mb-2 tracking-wider text-sm text-white">
        <strong class='text-rose-300 text-base'>SEO and SEM work together to strengthen your website and position your brand.</strong>
        </p>
        <p class="mb-2 tracking-wider text-sm text-white"> 
        <em>SEM </em> starts as soon as you start paying for advertising, while  <em> SEO </em>   often provides a much better return on your investment. However, this does not mean that SEO is cheap and easy. SEO it takes a lot of time and resources, but 
        <strong class='text-rose-300'> the long-term rewards are greater and more sustainable in the long run. </strong>
        </p>
        <p class="mb-2 tracking-wider text-sm text-white">
        For the most part, SEO and paid ads will work together to provide the best results.
        </p>
      `}
      />
      <HeadingSEO
        mainTitle1={"What is SEO?"}
        mainDesc1={`
        <p class="text-sm text-left pb-5">
        SEO requires creativity and technical understanding to improve a company’s rankings on Google and other search engines, and to drive traffic to the website. There are many different factors that influence the ranking of a website. This can depend on everything from the content of the website, i.e. the copy, to the number of other websites linking to your site.
        </p>
        <p class="text-sm text-left pb-5">
        Something to keep in mind is that search engine optimization is a continuous process if you want to be visible on the first page of the search engines and to keep doing it once you get there. It’s vital to make search engine optimization part of your business, and just as your business will stall if you don’t continually drive it forward, so will SEO.
        </p>
      `}
        cardTitle={"SEO helps you rank higher on Google"}
        cardDesc={`
        <p class="text-sm text-white pb-5">
        Google's search engine uses a large number of factors to determine which websites are most relevant to display and in search results. Some factors play a greater role than others and what is considered most important for ranking high today may have less importance in a month. It is therefore extremely important to stay up-to-date when it comes to what Google and other search engines consider relevant in order to optimize a website in the best way.
        </p>
        <p class="text-sm text-white pb-5">
        If you are interested in increasing traffic to your website and growing your customer base, it is important that your website has the right opportunities to rank high on Google when potential customers search for what you and your company offer.
        </p>
        <h1 class="text-center text-lg pb-10 text-white"> Search engine optimization is the key to succeeding in this.</h1>
      `}
        smallDesc1={`
        <h1 class="text-center pt-5 text-xl pb-5">What does SEO actually mean?</h1>
        <p class='text-sm pb-5'>SEO is an abbreviation for Search Engine Optimization. In other words, SEO and search engine optimization are the same thing.</p>

        <h1 class="text-center text-xl pb-5 pt-5">Why should I be visible on Google?</h1>
        <p class='text-sm pb-5'>
        Google is the largest search engine in Sweden and according to several surveys, Google has a market share of about 95% This means that it’s important that your website is visible on Google if you want to reach as many customers as possible.
        </p>

        <h1 class="text-center text-xl pb-5 pt-5">Increase traffic to your website</h1>
        <p class='text-sm pb-5'>
        Having good visibility on Google gives your business a better chance of reaching potential customers who are looking for the products you offer. In other words, search engine optimization (SEO) is vital for your business to be seen online, get more visitors and do more business.
        </p>
    
        <h1 class="text-center text-xl pb-5 pt-5">The importance of good SEO</h1>
        <p class='text-sm pb-5'>As we use the internet more and more to find companies that sell what we want to buy, it is of great importance to be visible where the visitors are. As important as it once was to be visible in traditional media such as the local press or the telephone directory, it is now just as important to be visible online. You do this with the help of SEO.</p>
      `}
        mainTitle2={"What makes SEO on the website so important?"}
        mainDesc2={
          "Google looks at the content of the page to determine if it is relevant to the search being made. Part of this process is searching for important keywords. If these keywords are found on your page, in headings or in body text, the information is considered more relevant to the search in question."
        }
        mainDesc3={`
      
        <p class="text-sm pt-10 pb-5">
        What makes on-page SEO so important is that it helps search engines understand your website and the content on it, to identify if it is relevant to the search being made. What Google does is to simply understand what users are actually looking for when they search, also called search intent, and to then deliver a search result that meets the intent behind the search.
        </p>
        <p class="text-sm pb-5">
        Keeping up to date on what the requirements are for Google to consider you relevant is extremely important, partly so that you can continue to be visible to users, but also because this is the part of the optimization that you can actually control, unlike from the part governed by factors outside the page.
        </p>

        <p class="text-base pb-5">Read more about on-page SEO <a class="text-rose-300" href="/en/on-page-seo">here</a></p>
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
      <HeadingSEO2
        mainTitle1={"What is SEM?"}
        mainDesc={`
          <p class="text-sm text-left pb-5">
          When it comes to digital marketing and appearing high in search results, in addition to working with SEO, you can also work with SEM, or Search Engine Marketing. Unlike using search engine optimization to appear in the organic results, advertising through 
          <a class='text-rose-300' href="/en/google-ads/"> Goggle Ads </a>
          allows you to appear high up in the search results.
          </p> 
          <h1 class="text-center pt-5 text-lg pb-5 uppercase">
          As with SEO, you need to analyze and optimize your ads correctly so that you appear higher than your competitors on the keywords you want to appear on.
          </h1>
          <p class='text-sm pb-5 text-left'>
          Together, SEO and SEM are now an essential part of increasing traffic to your website and getting more visitors and customers. Approximately 70% of all visitor traffic comes from the organic results using SEO. The remaining 30% reaches your website through clicks from ads and is therefore a good complement for those who want to increase your relevance in the eyes of search engines and thus increase your sales.
          </p>
          <p class='text-sm pb-5 text-left'>
          In addition to SEO and SEM, there are a number of other factors that are important when search engines evaluate your website to determine whether it is more relevant to display than your competitors’ pages. Some of these factors are:
          </p>
  
          <ul class="list-disc heading-container">
          <li class=" pt-5 uppercase text-left text-rose-300 text-xl">
          On-page SEO
          </li>
          <p class='text-left pt-2 text-sm'>
          Relevant texts, images and other content on your website that is optimized for the search engines with the help of SEO.
          </p>
  
          <li class=" pt-5 uppercase text-left text-rose-300 text-xl">
          On-page SEO
          </li>
          <p class='text-left pt-2 text-sm'>
          Activities that you and others do outside of your website that increase the ranking of your page in search engines.
          </p>
  
          <li class=" pt-5 uppercase text-left text-rose-300 text-xl">
          External Links
          </li>
          <p class='text-left pt-2 text-sm'>
          Recommendations from other websites that point to your website and make it increase in ranking.
          </p>
          </ul>
      `}
        buttonText={"Ready For Take Off"}
        buttonLink={"/en/contact-us"}
        mainTitle2={"Paid search does not improve organic results"}
        mainDesc2={`
          <p class='text-sm pb-5 text-left'>
          There is no obvious relationship between organic positions and paid positions. They produce results in different ways. The organic search results come from the index database, while the PPC sponsored links are based on your bid and total investment.
          </p>
          <p class='text-sm pb-5 text-left'>
          With paid ads, you can target more keywords and easily test different campaigns. More importantly, you can strengthen your brand identity when your paid ad appears above the search results. In this way, you therefore capture traffic to your site both organically and from your paid advertisements.
          </p>
      `}
        cardTitle={"GAIN BETTER INSIGHT INTO WHAT PEOPLE ARE LOOKING FOR"}
        cardDesc={`
          <p class="text-sm text-white pb-5">
          Paid marketing can help define and refine the keywords you target organically, using accurate data. After all, it is much easier to measure the return of a link to a paid search than of a free organic listing. In addition, the click-through rate on paid ads gives you insight into which keywords are best to optimize, in order to then create a better organically optimized result.
          </p>
          <p class="text-sm text-white pb-5">
          Therefore, there is no doubt that paid search can help to improve the conversion rate of organic results, but it will not directly help your organic position.
          </p>   
      `}
      />
      <HeadingCity
        title={"do you need help with search engine optimization in your city?"}
        desc={
          "At effektify, we stay up-to-date and develop strategies to help companies stand out in their specific industry. Together we’ll draw up a plan to make your business more visible in the area where you operate."
        }
        button1={"SEO i Stockholm"}
        buttonStyle1={"pl-5 pr-5"}
        buttonLink1={"/seo-sokmotoroptimering-stockholm"}
        button2={"SEO i Göteborg"}
        buttonStyle2={"pl-7 pr-7"}
        buttonLink2={"/seo-sokmotoroptimering-goteborg"}
        button3={"SEO i Malmö"}
        buttonStyle3={"pl-11 pr-11"}
        buttonLink3={"/seo-sokmotoroptimering-malmo"}
        button4={"SEO i Uppsala"}
        buttonStyle4={"pl-9 pr-9"}
        buttonLink4={"/seo-sokmotoroptimering-uppsala"}
        button5={"SEO i Halmstad"}
        buttonStyle5={"pl-4 pr-4"}
        buttonLink5={"/seo-sokmotoroptimering-halmstad"}
      />
      <HeadingSEO3 
        mainTitle1={"On-page SEO"}
        mainDesc1={`
          <p class="text-sm text-left pb-5">
          On-page SEO means optimization that you do on the website so that it ranks higher on search engines to in turn increase traffic, i.e. the number of visitors who search for what the website conveys.
          </p>
          <p class="text-sm text-left pb-5">
          Approximately 70% of those who visit your website come from the very organic result that is displayed, which shows how important it is to end up as high as possible on search engines such as Google, Bing & Yahoo.
          </p>
          <p class="text-sm text-left pb-5">
          On-page SEO has a very big impact on whether your website is seen online or not. On-page is the visible part of the SEO work, and includes everything from fixing technical aspects on your website to the information that is on your website (text, images, videos, etc.), as well as how this information is structured. Some factors that are important to optimize for search are the loading speed of the website, the titles of the pages, the headings of the pages, the images of the pages, the URL of the pages and copy.
          </p>
    
          <h1 class="text-center pt-5 text-lg pb-5 uppercase">ON-PAGE SEO CONSISTS OF MANY PARTS</h1>
          <p class='text-sm pb-5 text-left'>
          There are many parts to consider when optimizing your website on-page. Everything from titles and headlines to security and speed together determine how relevant you are in the eyes of search engines. It's also good to know the difference between the content on the page and the information seen elsewhere.
          </p>
          <p class='text-sm pb-5 text-left'>
          When you talk about on-page SEO, you mainly talk about:
          </p>
    
            <ul class="list-disc heading-container">
            <li class=" pt-5 uppercase text-left text-rose-300 text-xl">
            Metadata
            </li>
            <p class='text-left pt-2 text-sm'>
            Describes the content of web pages for search engines and explains how this content should be interpreted.
            </p>
    
            <li class=" pt-5 uppercase text-left text-rose-300 text-xl">
            Content
            </li>
            <p class='text-left pt-2 text-sm'>
            Content in the form of texts, images, sounds, videos and other things that are on your website, and that explain what the page is about.
            </p>
    
            <li class=" pt-5 uppercase text-left text-rose-300 text-xl">
            Internal Links
            </li>
            <p class='text-left pt-2 text-sm'>
            Links that direct visitors and search engines to other pages on the same domain.
            </p>
            </ul> 
        `}

        mainDesc2={`
          <p class="text-sm">
          These elements, along with factors such as website authority, security and loading speed will improve your website's ranking in search results and thus make it more visible to potential visitors or customers searching for what your website offers. The website must speak to the visitor and its needs, it must appeal purely aesthetically and be easy to navigate and maintain a look that reflects the industry. Services and products are the main thing in website marketing and when you build a site, the result must be complete from several perspectives: seo, design and marketing. All of this should present a unified content so that it becomes an alternative when searching on Google where everyone is searching.
          </p>
          <h1 class="text-lg pt-10 pb-5 uppercase text-center">
          Homepage Loading Speed
          </h1>
          <p class="text-sm pb-5">
          One of the factors that affects Google's assessment of your website is how quickly the browser loads your website. Google avoids displaying websites that load slowly and therefore it is to your great disadvantage if your website has a poor loading speed.
          </p>
          <p class="text-sm pb-5">
          Google has created a tool that you can use to find out your website's loading speed. The tool shows how fast the website loads, both on the mobile and the computer. If the tool should show lower than 50 points, you should review what you can do to improve the loading speed.
          </p>
          <p class="text-sm pb-5">
          The faster your website loads, the more you improve user-friendliness for visitors, while the search engines see the page as better optimized. It is an easy way to improve the search results and in turn to get more visitors. The easiest way to increase speed is to keep down the size of the images you use on the page.
          </p>
          <p class="text-sm pb-5">
          If you don't have access to programs that give you the opportunity to compress your images, there are lots of free tools online that you can use.
          </p>
          <p class="text-sm pb-5">
          A tip is that while you are compressing your images, also take care to directly save the images with names that improve your on-page SEO, which brings us to the next step in the optimization.
          </p>
        `}

        smallTitle1={"Homepage Titles"}
        smallDesc1={"One of the most important factors in basic SEO is a website's title. This is because the title of the page shows Google what the page is about, so you should also optimize all the titles on your website."}
        smallDesc2={` 
          <p class="text-sm pb-5">
          The page title, or page title, is the title that is displayed as a link in the organic search result on Google. Apart from being visible at the top of the browser window after clicking on it, this title is not visible on the homepage, but is specifically designed to attract visitors.
          </p>
          <p class="text-sm pb-5">
          Considering that it is this title that will attract "free" visitors, it is one of the most important texts that needs to be specified. It has a big impact on your website's ranking and must not be longer than 65 characters to be considered correctly written.
          </p>
          <p class="text-sm pb-5">
          For good results, a page title must contain important keywords while attracting visitors to click on it. Search engines examine the title to find out what the page is about, which makes it important to keep it relevant, to include important keywords while keeping the short text natural and user-friendly.
          </p>

          <h1 class="text-lg pt-10 pb-5 uppercase text-center">Meta Descriptions</h1>
          <p class="text-sm pb-5">
          By entering a selling and descriptive text yourself, you increase the chances of standing out and being more visible to potential customers who are looking for what you offer. If you do not enter a description, Google itself chooses which text is displayed for the page, which often means that you miss out on these potential customers.
          </p>
        `}
        smallDesc3={`
        
          <p class="text-sm pb-5">
          To give the page a good metadescription, you should always include the keyword that you want to appear on, and preferably as early in the text as possible. The better information you include in the description, the more clicks you get from visitors who consider your page to be more relevant than that of your competitors.
          </p>
          <p class="text-sm pb-5">
          If the description would be too long, Google chooses to cut it off with 3 points, which means that your well-formed text is not displayed in its entirety. To avoid this, try to keep it to a maximum of 158 characters. Test your way until you have a meta description that is displayed the way you want it to be displayed while at the same time giving a clear and distinct picture of what you offer. Make sure the text is selling and relevant.
          </p>
    
          <h1 class="text-lg pt-10 pb-5 uppercase text-center">Website Texts</h1>
          <p class="text-sm pb-5">
          Google finds it important that the text on your website is structured and of high quality. Google also carefully checks what your text is about. Avoiding strange sentences and spelling mistakes is to your and your website's advantage.
          </p>


          <h1 class="text-lg pt-10 pb-5 uppercase text-center">OPTIMIZATION OF WEBSITE IMAGES</h1>
          <p class="text-sm pb-5">
          Another important and fundamental factor in SEO is a website's images. Google cannot "see" what images represent, instead the search engine reads code, therefore it is of great importance that the image files have the right content in the form of information that is optimized.
          </p>
          <p class="text-sm pb-5">
          Since search engines cannot see images, it is important to describe the images with the right information so that they can read them. You do this partly by naming the images in a descriptive way, preferably with the keyword included, but also by entering a relevant alt text. This visible text is only visible in the source code for the website, which means that it is often forgotten.
          </p>
        `}


        listDesc={`
          <ul class="list-disc heading-container">
          <li class=" pt-5 uppercase text-left text-rose-300 text-xl">
          Name images correctly
          </li>
          <p class='text-left pt-2 text-sm'>
          When you name images correctly <b> you show Google what the images are about </b> which in turn helps make the page better suited for keywords you want to appear on.
          </p>
          <p class='text-left pt-2 text-sm'>When naming your images you should:</p>
          <ol class='text-sm pt-5 list-decimal space-y-1 heading-container'>
          <li class=''>
          Be descriptive
          </li>
          <li>
          Be concise
          </li>
          <li>    
          Use keywords  
          </li>
          <li>
          Use dashes between words
          </li>
          </ol>
          <p class="text-left pt-2 text-sm">
          For example, if you want to post a picture of your black cat, you should name it black-cat.jpg. This makes it easy for Google to form an idea of ​​what the image represents.
          </p>

          <li class=" pt-5 uppercase text-left text-rose-300 text-xl">
          Use descriptive alt text
          </li>
          <p class='text-left pt-2 text-sm'><strong>Alt texts provide additional information about what images represent, </strong> 
          which in turn allows you to add relevant keywords here as well. Alt tags that contain important keywords
          <strong> increases your chances of ranking higher </strong> in, for example, image searches.
          </p>
          <p class='text-left pt-2 text-sm'>When entering alt text you should:</p>
          <ol class='text-sm pt-5 list-decimal space-y-1 heading-container'>
          <li>
            Be descriptive
          </li>
          <li>
            Be concise
          </li>
          <li>
            Use keywords  
          </li>
          <li>
            Write naturally
          </li>
          </ol>
          <p class='text-left pt-2 text-sm'>
          According to Google themselves, you should focus on <strong> providing useful, informative text that uses keywords in a natural way </strong>
          and which is in context with the content on the page.
          </p>
          </ul>
        `}

        imageText={"An example of how to correctly enter information for an image is:"}
        endDesc={`
        
        <h1 class="text-lg pt-10 pb-5 uppercase text-center">WEBSITE URL INFLUENCES YOUR SEARCH ENGINE OPTIMIZATION</h1>
        <p class='text-sm pb-5'>
        In addition to good content that is relevant on all landing pages, the website's URL/web address is also important in SEO. The website's URLs are the first thing that search engines encounter and they explain what a website is about, so it is beneficial to make it clear and ensure that it describes the website's content. Each landing page on a website has a unique URL.
        </p>
        <p class='text-sm pb-5'>
        Search engine optimization is about being able to find the website and then relevant content is needed. The home page's URLs (landing pages) must be relevant and contain keywords linked to seo. The URL is thus what is written in the browser's address field, for example https://effektify.com/seo-sokmotoroptimizing/, where you can clearly see what that particular landing page is about, which in this case is SEO and search engine optimization.
        </p>
        `}


      />
      <HeadingCity
        title={"Do you need help with search engine optimization in your city?"}
        button1={"SEO i Borås"}
        buttonStyle1={"pl-14 pr-14"}
        buttonLink1={"/seo-sokmotoroptimering-boras"}
        button2={"SEO i Eskilstuna"}
        buttonStyle2={"pl-7 pr-7"}
        buttonLink2={"/seo-sokmotoroptimering-eskilstuna"}
        button3={"SEO i Falkenberg"}
        buttonStyle3={"pl-6 pr-6"}
        buttonLink3={"/seo-sokmotoroptimering-falkenberg"}
        button4={"SEO i Gävle"}
        buttonStyle4={"pl-14 pr-14"}
        buttonLink4={"/seo-sokmotoroptimering-gavle"}
        button5={"SEO i Helsingborg"}
        buttonStyle5={"pl-2 pr-2"}
        buttonLink5={"/seo-sokmotoroptimering-helsingborg"}
      />
      <HeadingSEO4 
        mainTitle1={"Good content produces good results"}
        mainDesc1={`
          <p class="text-sm text-left pb-5">
          Content is something Google finds increasingly important. Google strives to display websites that they believe provide their users with the best possible answers. For those of you who have a website, this means that the content of your website is important for whether or not you appear on Google when someone googles what you offer.
          </p>
  
          <h1 class="text-lg pt-5 uppercase text-center pb-5">
          In Sweden, more than 50 million searches are made on the Internet every day. Does your website appear in these searches today?
          </h1> 
          <p class="text-sm text-left pb-5">
          Filling your website with easy-to-read and user-friendly texts that contain keywords, will help Google and other search engines consider the page more relevant.
          </p>
      
          <h1 class="text-lg pt-5 uppercase text-center pb-5">
          RIGHT CONTENT FOR RIGHT TARGET GROUP = GOOD SEARCH ENGINE OPTIMIZATION
          </h1>
          <p class="text-sm text-left pb-5">
          When Google's algorithms read through the information of a web page, it looks at the textual content to find out what it is about, and then matches it to the searches made on the subject in question. Should the text on the page match the search being made, the page is considered relevant. The more criteria your website fulfills, the more relevant it is and therefore ranks higher.
          </p>
          <p class="text-sm text-left pb-5">
          What determines how well the content on your website compares to competitors' pages depends on a number of elements that all weigh differently in Google's eyes. Not all text is considered equally important when it comes to increasing your relevance, which makes it important to know which elements matter the most.
          </p>
  
          `}

          cardTitle1={"NATURAL & USER-FRIENDLY CONTENT HELPS SEO"}
          cardDesc1={`
            <p class="text-sm text-white pb-5">
            Elements such as main heading (H1), sub-headings (H2, H3, etc.), lists and bold words all affect how relevant your page is and by using keywords in these important positions, you significantly strengthen your web page's relevance and improve results.
            </p>
            <p class="text-sm text-white pb-5">
            If a keyword that you want to rank for is used only a few times on the website, it is not considered likely that it is about what the search refers to. The more text there is, the more times the search term needs to be included for the text to be relevant. If, on the other hand, you use search terms unnaturally, Google sees it as "keyword spamming", which can cause the page's ranking to deteriorate instead.
            </p>
            <p class="text-sm text-white pb-5">
            By analyzing and using content that is natural and user-friendly, you keep both visitors and search engines happy, which usually pays off in the long run when looking at the search results.
            </p>
          `}


          mainTitle2={"Internal links make you more relevant"}
          mainDesc2={`
            <p class='text-sm text-left pb-5'>
            An internal link is when a page's content also consists of links, meaning you refer to another page on the same website. As an example, we link here to our page for Google Ads from here, which is a tool that acts as an internal link. Since many pages point with links to the same page, this page becomes more relevant, which makes it rank better on Google.
            </p>
            <p class='text-sm text-left pb-5'>
            By using relevant keywords in the link text for the internal link, the relevance of the target page that the link points to also increases. This allows you to use important keywords in the link text to tell Google that the landing page it points to is relevant to the searches made on the keyword.
            </p>
            <p class='text-sm text-left pb-5'>
            Together with metadata, content & headers on the website, each internal link helps to further increase the relevance of the landing page, and makes it rank higher on the search engines.
            </p>
          `}

          underImageDesc={"Marketing your services and products with an seo, i.e. optimization or search engine optimization that is carried out by professional and experienced seo technicians who have the right tools and know-how creates results in the search engines. We know that search engines like links on a site, because few links are less good, we know that words in texts about services and products within the business are important, we know that seo in search requires quality content and we know to drive traffic to a site by optimizing it can give it a better position than other websites in online searches. Optimization is the obvious partner of a site."}
          underImageButton={"Ready for takeoff"}
          underImageLink={"/en/contact-us"}

          mainTitle3={"Off-page SEO strengthens your positions"}
          mainDesc3={`
            <p class='text-sm text-left pb-5'>
            Another important part of SEO is off-page. Off-page is the continuous work that must be carried out after the work with on-page is finished on the website, you can say that it is the maintenance required to get your website to maintain its position on Google. Off-page SEO strengthens your positions.
            </p>
      
            <p class='text-sm text-left pb-5'>
            When Google makes an assessment of whether your website is relevant in terms of specific keywords, the search engine looks over the content of the website. However, it is not only the content that Google looks over, but the search engine also looks over which websites link to your website.
            </p>
            </div>
      
            <div class='pt-20 text-center text-black bg-white'>
            <h1 class="text-xl uppercase pb-5">GOOD RECOMMENDATIONS GIVE GOOD POSITIONS</h1>
      
            <p class='text-sm text-left pb-5'>
            In the same way that we humans base many of our purchase decisions on recommendations, Google bases its rankings of websites on "recommendations" from other websites. These recommendations are important to get your website as high as possible on Google. Google considers "links" from other websites to be "recommendations" to your website.
            </p>
            <p class='text-sm text-left pb-5'>
            When Google has to decide whether your website is relevant to display on the first page, the search engine takes into account whether there are other websites that link to yours, and "listens" to this. What this means is that backlinks are a ranking factor and thus affect the ability to appear on the first page of Google. It can be said that having an effective link strategy is a fundamental part of SEO.
            </p>
          `}

          cardTitle2={"GOOD RECOMMENDATIONS SELL YOUR PRODUCT EASIER"}
          cardDesc2={`
            <p class="text-sm text-white pb-5">
            An example that can be applied to this is if you plan to change the roof of your house and are looking for a construction company that can carry this out. You have two friends, one who works as a carpenter, and one who works as an accountant. They both recommend two different construction companies, whose recommendation will you listen to? It is most likely the carpenter because he has more knowledge in the subject.
            </p>
            <p class="text-sm text-white pb-5">
            Google works the same way, the search engine listens to relevant "recommendations" where there are the right keywords that are linked to your business. Therefore, it is important to make sure that the links to your website are relevant. If you run a construction company and get links from a blog that deals with construction and carpentry, Google considers that link to have more weight than one that comes from a food blog, for example. Search engine optimization is about creating or improving search results for websites and it is done with texts after thorough analysis.
            </p>
          `}



      />
      <HeadingCity
        title={"Do you need help with search engine optimization in your city?"}
        button1={"SEO i Huddinge"}
        buttonStyle1={"pl-12 pr-12"}
        buttonLink1={"/seo-sokmotoroptimering-huddinge"}
        button2={"SEO i Jönköping"}
        buttonStyle2={"pl-10 pr-10"}
        buttonLink2={"/seo-sokmotoroptimering-kalmar"}
        button3={"SEO i Kalmar"}
        buttonStyle3={"pl-14 pr-14"}
        buttonLink3={"/seo-sokmotoroptimering-kalmar"}
        button4={"SEO i kristianstad"}
        buttonStyle4={"pl-7 pr-7"}
        buttonLink4={"/seo-sokmotoroptimering-kristianstad"}
        button5={"SEO i Kungsbacka"}
        buttonStyle5={"pl-5 pr-5"}
        buttonLink5={"/seo-sokmotoroptimering-kungsbacka"}
      />
      <HeadingSEO5 
        mainTitle1={"How does Google find your content and index it?"}
        mainDesc1={`
          <p class="text-sm text-left pb-5">
          Crawl optimization is important when it comes to search engine optimization. It's largely about things you can do to help Google easily discover, crawl and index the content you provide on your site.
          </p>
          <p class="text-sm text-left pb-5">
          Search engine bots are constantly looking for relevant content. Once your new text is live, Google then needs to find it and index your article for it to be of any use. However, that doesn't mean the bots will find it, crawl and index it without your input. Especially not if you want it to go fast. Without helping the search spiders on their way, it can take up to two days before your topic.
          </p>
          <p class="text-sm text-left pb-5">
          To make everything go faster, you can start by installing a Google XML sitemap generator plugin for WordPress. You don't need to do anything once you install the plugin. The moment you press the "publish" button, a new XML sitemap is generated and sent to the search engines and directories. This helps Google index your new content as quickly as possible, while your existing link profile is crawled and indexed.
          </p>
        `}

        cardTitle1={"USE SOCIAL MEDIA TO BE FOUND FASTER"}
        cardDesc1={`
          <p class="text-sm text-white pb-5">
          By updating your social profiles, you also get your new content indexed faster. By sharing the link on your Facebook page or on Twitter, you create more routes to your website, and make it easier for search engines to find, crawl and index it.
          </p>    
        `}

        afterCardText={"Another simple tool that works very well is Pingomatic. It allows you to quickly ping a bunch of web services to notify them of your new content. By using this free service, you get your fresh, high-quality content indexed in a significantly shorter time than it would otherwise have taken."}
        afterCardButton={"Ready for takeoff"}
        afterCardLink={"/en/contact-us"}
        
        mainTitle2={"Is guest blogging good for SEO?"}
        mainDesc2={`
          <p class="text-sm text-left pb-5">
          There was an outcry in 2014 when Matt Cutts said that "if you're using guest blogging as a way to get links ... stop". Many who didn't understand exactly what that statement meant immediately started preaching against guest blogging.
          </p>
          <p class="text-sm text-left pb-5">
          There is no technical difference between guest blogging and other types of content. Guest blogging simply means that a guest has contributed content that then links to your site.
          </p>
          <p class="text-sm text-left pb-5">
          What Matt Cutts meant by his statement is don't link bad content on blogs from an outside author. But even when the author was the site's owner, Google's Panda update had already started penalizing low-quality content.
          </p>
        `}


        cardTitle2={"GOOD LINKS MAKE YOU MORE TRUSTWHORTY"}
        cardDesc2={`
          <p class="text-sm text-white pb-5">
          Digital marketing relies on high-quality content with a strong link profile. The search engines index billions of web pages from different domain names, IP addresses, locations, etc., all owned by different people. Linking with these creates relevance for you and a strong link profile.
          </p>    
        `}

        endDesc={`
          <p class="text-sm pb-5">
          When it comes to external links, it's not the author or the content that's the problem, but the context. As long as the article is from a reliable source, and the content of the article is relevant and of high quality, the link definitely works as a good recommendation that strengthens your website's authority.
          </p>
          <p class="text-sm pb-5">
          We believe that guest blogging is not dead. And it will never die, because Google can't decipher exactly what a "guest post" is, especially when the author's link is directly in the text and not in the author profile.
          </p>
          </div>
        
          <div class="heading-container pt-10 text-black">
          <h1 class="text-lg uppercase text-center pb-5">WE STILL RECOMMEND GUEST BLOGGING</h1>
          <p  class='text-sm pb-5'>
          At least as long as you follow these simple tips:  
          </p>
    
          <p  class=' text-rose-300 text-base pb-2 '>
          Don't call them "guest posts"
          </p>
          <p  class='text-sm pb-5'>
          This is important. Google can find the text "this is a guest post". Instead, write as if you are an internal employee. It doesn't matter where the visitor comes from, as long as the post is useful and relevant to your website.
          </p>
    
          <p  class=' text-rose-300 text-base pb-2 '>
          Build relationships, not links
          </p>
          <p  class='text-sm pb-5'>
          Don't try to get your guest post published on a trusted blog just for the sake of the link. If you think like that, you will miss out on the relationship.
          </p>
    
          <p  class=' text-rose-300 text-base pb-2 '>
          Build your brand
          </p>
          <p  class='text-sm pb-5'>
          Use your brand name or URL as anchor text for natural link building. Contextual links: As far as possible, try to keep your links within the content, not in the author profile where they don't have equal weight. Use guest blogging with caution and focus on the end users. Create high-quality content that makes them think – that resonates with them and solves their problems. Engage them, respond to comments and build your email list.
          </p>
    
        `}

      />
      <HeadingCity
        title={"Do you need help with search engine optimization in your city?"}
        button1={"SEO i Linköping"}
        buttonStyle1={"pl-9 pr-9"}
        buttonLink1={"/seo-sokmotoroptimering-linkoping"}
        button2={"SEO i Luleå"}
        buttonStyle2={"pl-14 pr-14"}
        buttonLink2={"/seo-sokmotoroptimering-lulea"}
        button3={"SEO i Lund"}
        buttonStyle3={"pl-14 pr-14"}
        buttonLink3={"/seo-sokmotoroptimering-lund"}
        button4={"SEO i Nacka"}
        buttonStyle4={"pl-12 pr-12"}
        buttonLink4={"/seo-sokmotoroptimering-nacka"}
        button5={"SEO i Norrköping"}
        buttonStyle5={"pl-1 pr-1"}
        buttonLink5={"/seo-sokmotoroptimering-norrkoping"}
      />
      <HeadingSEO6 
        mainTitle1={"Keyword analysis"}
        mainDesc1={`
          <p class="text-sm text-left pb-5">
          A keyword analysis is important in order to select words that are relevant to your business and to optimize your website accordingly. A good and relevant keyword for your business will generate money. The keyword analysis is done to find out how high the search volume is for the keyword, how high the competition is for that particular keyword, and what the search intent of the keyword is so that it is definitely relevant to you and your business.
          </p>
          <p class="text-sm text-left pb-5">
          It is important to find out what the search volume is for a keyword in order to know the business case for appearing on that particular keyword. It is also very important to assess the difficulty of appearing on the keyword in question. Since there are only ten positions on the first page of Google, you need to be able to “push down” one of the websites that already has one of these positions. This means that there is constant competition for first page rankings, and your website must therefore be better than the website whose ranking you want.
          </p>
          <p class="text-sm text-left pb-5">
          Therefore, it is important to find out what the competition for a specific keyword looks like. In addition, it is also important to assess the search intent for a specific keyword. Google is constantly trying to understand what kind of information their users want to find when they make a specific search. Based on what Google believes is the intent of the search, it displays websites that Google believes best match the user’s search intent.
          </p>
          <p class="text-sm text-left pb-5">
          Another good thing to know is that there are three basic types of searches, information searches, navigation searches and transaction searches. An information search is made when the user wants to know more about something, how it works or how to do something. A navigation search is made when the user knows what they are looking for and uses Google to navigate them to the right website. A transaction search is often made when the user is ready to make a purchase decision.
          </p>
        `}


        mainTitle2={"How secure is your website?"}
        mainDesc2={`
          <p class="text-sm text-left pb-5">
          Search engines prefer homepages/websites that are secure and like to avoid displaying pages in the search results that are not considered to be so. By installing a so-called SSL certificate, the visitors' communication is protected while the security helps your on-page SEO because it then ranks higher in the organic search.
          </p>
          <p class="text-sm text-left pb-5">
          By using a secure website, you also show your visitors that they feel safe when, for example, they shop or fill in forms on your website. In other words, a secure website brings more customers.
          </p>
    
          <h1 class="text-lg uppercase pb-5">HOW TO KNOW IF A SITE IS SECURE?</h1>
          <p class="text-sm text-left pb-5">
          Find out if a website is secure by checking security information about the website. Chrome warns you if the website or connection to it is not secure or private.
          </p>
        `}

        cardTitle1={"WHAT IS SSL?"}
        cardDesc1={`
          <p class="text-sm text-white pb-5">
          SSL is an abbreviation for Secure Sockets Layer whose goal is to create authenticated and encrypted links between network computers, between a web server and a browser. It enables organizations and businesses to protect online transactions and keeps customers' information secure and private.
          <p class="text-sm text-white pb-5">
          An SSL certificate is a digital document that binds the identity of a website to a cryptographic key pair that is a private key and a public key. The certificate also contains identifying information about a website that includes the domain name and.
          </p>
          <p class="text-sm text-white pb-5">
          In summary, SSL protects Internet connections and prevents the information transferred between two systems from being read or changed by criminals. When there is a padlock icon next to the URL in the browser's address bar, it means that SSL protects the website you are on. The vast majority of websites today have SSL.
          </p>
        `}

        endTitle={"HOW DO YOU KNOW THAT A SITE IS SECURE?"}
        endList={`
        
          <ol class="list-decimal text-sm"> 
          <li>
           Open a page in Chrome
          </li>
          <li>
            Look at the symbol to the left of the URL
          </li>
          </ol>
        `}
        endText={"To view information about the site and what permissions it has, click the icon. Then a summary of how private the connection is according to Chrome is displayed."}
      />
      <HeadingCity
        title={"Do you need help with search engine optimization in your city?"}
        button1={"SEO i Norrtälje"}
        buttonStyle1={"pl-4 pr-4"}
        buttonLink1={"/seo-sokmotoroptimering-norrtalje"}
        button2={"SEO i Skellefteå"}
        buttonStyle2={"pl-3 pr-3"}
        buttonLink2={"/seo-sokmotoroptimering-skelleftea"}
        button3={"SEO i Södertälje"}
        buttonStyle3={"pl-2 pr-2"}
        buttonLink3={"/seo-sokmotoroptimering-sodertalje"}
        button4={"SEO i Sollentuna"}
        buttonStyle4={"pl-1 pr-1"}
        buttonLink4={"/seo-sokmotoroptimering-sollentuna"}
        button5={"SEO i Sundsvall"}
        buttonStyle5={"pl-0 pr-0"}
        buttonLink5={"/seo-sokmotoroptimering-sundsvall"}
      />
      <HeadingSEO7 
        mainTitle1={"What is Google Analytics?"}
        mainDesc1={`
          <p class="text-sm text-left pb-5">
          The first thing you should do when it comes to search engine optimization and digital marketing in general is to set a goal. What are you working towards? Many times the goal is to increase traffic to the website or increase the conversions that occur. To do this, you also need a tool that tracks these numbers, and that's where Google Analytics comes into play.
          </p>
          <p class="text-sm text-left pb-5">
          Google Analytics is a free tool and is a website tracking platform that collects data about how users interact on your website. Once the data is collected, Google Analytics sorts it into easy-to-read reports, which is what we see on the platform.
          </p> 
        `}

        cardTitle1={"What is SSL?"}
        cardDesc1={`
          <p class="text-sm text-white pb-5">
          Data on websites has not always been pretty and easy to read. Originally, if you wanted to know what kind of traffic a website was getting, you had to read the server log. The server's log would provide a list of information for every action performed on the website. Although the information was valuable, it was difficult to understand.
          </p>
          <p class="text-sm text-white pb-5">
          To make things a little easier, companies started compiling log files and creating reports based on the available information. A company called Urchin made reports from the log files and grew in popularity very quickly. So much so that in 2005 Google acquired Urchin and began to build and trademark Google Analytics.
          </p>
        `}



        underCard1Desc={`
          <h1 class="text-center text-xl pt-5 pb-5 text-black">GOOGLE ANALYTICS</h1>
          <p class="text-sm pb-10">
          Google Analytics, the original platform, was a simple visualization tool created to make log file data easier to read. It is similar to the platform we use today, but with much less data. Google at this time did not store and sell all the personal information about users as it does today.
          </p>
    
          <h1 class="text-center text-xl pt-5 pb-5 text-black">UNIVERSAL ANALYTICS</h1>
          <p class="text-sm pb-10">
          Universal Analytics became standard in 2014 when it came out as a beta version. Universal Analytics became a must as the diversity of user devices increased. The rise of mobile devices and tablets led to a greater need to track users across the internet and across devices.
          </p>
    
          <h1 class="text-center text-xl pt-5 pb-5 text-black">GOOGLE ANALYTICS 4</h1>
          <p class="text-sm pb-5">
          The newest version of the Google Analytics platform was released in October 2020. Google Analytics 4 is a new take on App + Web properties and all data flows in one flow. GA4 also relies much more heavily on machine learning and aims to help analysts forecast with a more predictive analysis.
          </p>
          <p class="text-sm pb-5">
          This version of Google Analytics is still very new and has yet to be widely adopted. However, we recommend installing GA4 as soon as possible, as GA4 does not bring historical data from Universal Analytics into GA4.
          </p>
        `}


    

        mainTitle2={"How does Google Analytics work?"}
        mainDesc2={`
          <p class="text-sm text-left pb-5">
          To get data from your website into Google Analytics, you must first place the tag on your website. As soon as the tag is correctly placed, Google Analytics starts collecting data. The data is then entered into reports consisting of metrics and dimensions.
          </p>
          <p class="text-sm text-left pb-5">
          Metrics are what produce the numbers you find in the platform. Anything that can be measured with a number is a metric. Worth looking at are the number of users, the number of purchases, the value of conversions, average time on the site, etc.
          </p>
        `}

        cardTitle2={"WHY SHOULD YOU CHOOSE GOOGLE ANALYTICS?"}
        cardDesc2={`
          <p class="text-sm text-white pb-5">
          Perhaps the most appealing thing about Google Analytics is that it's free. This makes the platform available to anyone with a website, which in turn creates a larger community of users who can share information and guidance. There are plenty of resources on how to use Google Analytics, making it accessible to users of all levels.
          </p>
          <p class="text-sm text-white pb-5">
          Another advantage is that Google Analytics is very helpful for analysts of all skill levels. With Google Analytics, you can achieve a more basic analysis of the website's performance, while there is also the possibility of more advanced analysis.
          </p>
        `}
        underCard2Desc={`
          <p class="text-sm text-left pb-5">
          Not only do you get information on which marketing channels are driving traffic to your website, but you can also see which websites users are coming from at different times of the day, which landing page they landed on and how long it took them to load the page.
          </p>
          <h1 class="text-lg uppercase pb-5"> WHO WOULDN'T WANT INFORMATION ABOUT THEIR WEBSITE FROM THE LARGEST SEARCH ENGINE ON THE INTERNET? </h1>
          <p class="text-sm text-left pb-5">
          As a marketer of search services, a large part of the work is focused on satisfying Google. Having a platform that can tell you some of the information Google tracks on websites is incredibly beneficial for strategic planning. Using the numbers in Google Analytics allows you to make changes to your website with a data-driven strategy instead of relying solely on intuition.
          </p>
          <p class="text-sm text-left pb-10">
          Finally, as marketers we use many Google tools: Search Console, Google Ads, Data Studio, Google Tag Manager, Google Optimize and more. All these tools integrate smoothly with Google Analytics.
          </p>

          <h1 class="text-2xl uppercase pb-5">Better control with Google Search Console</h1>
          <p class="text-sm text-left pb-5">
          Google offers a free tool called Google Search Console. Google Search Console helps
          <strong class="text-rose-300"> track the website's performance and to find any problems with the website's pages </strong>
          so that these can be remedied. It is a powerful but complex tool.
          </p>
          <p class="text-sm text-left pb-5">
          Google Search Console is something we strongly recommend using if you want
          <strong class="text-rose-300"> better control and be able to influence what happens on their site. </strong> 
          The platform also allows you to follow the activity of the visitors who came to the page, which page they landed on and how they then navigated their way through the various landing pages.
          </p>
        `}

        cardTitle3={"How do you get started with GSC?"}
        cardDesc3={`
          <p class="text-sm text-white pb-5">
          To start using Google Search Console, simply go to
          <a href="https://search.google.com/search-console" class="text-green-400"> its website </a> 
          and log in with your Google account - preferably the one you already use for Google Analytics and any Google services you already use, so that you have everything gathered under one and the same account.
          </p>
          <p class="text-sm text-white pb-5">
          Once you have registered on the platform, you start by filling in your website URL, after which you will receive a code to be placed on your website. After Search Console verifies that the code is on your website, it may take a few days for sufficient data to be collected.
          </p>  
        `}
        underCard3Desc={`
          <div class='pt-5 heading-container text-black bg-white'>
          <h1 class="text-xl text-center uppercase pb-5">What kind of information does Google Search Console collect?</h1>
          <p class="text-sm text pb-5">
          The tool gives you an overview of how your website appears on search engine results pages, including
          <em> total number of clicks, impressions, position, click rate </em>  and
          <em> which searches your website appears for. </em> With filters, you can sort the data based on
          <em> location, date, type of search </em>and much more. This information is essential to
          <strong class="text-rose-300"> understand the impact of your search engine optimization. </strong> 
          </p>
          </div>
    
          <div class="heading-container">
          <p class="text-sm pb-5">
          Information you can get is:
          </p>
          <ul class="list-disc text-sm text-gray-600">
          <li class="pb-5 ">
            <strong class="text-base">
            Report on index coverage
            </strong>
            <br />
    
            This report gives you information about the URLs that
            <strong class="text-rose-300"> Google has attempted to index your website, </strong>
            and about any problems Google has had with this indexing. As bots crawl the internet, it processes each page it finds to
            <strong class="text-rose-300"> compile an index </strong>
            on every word it sees on every website. It also looks at content tags and attributes such as titles and alt texts.
          </li>
          <li class="pb-5">
            <strong class=" text-base">
            Sitemap
            </strong>
            <br />
    
            In GSC under "
            <em>Sitemaps</em>
            ” you can see information about your site's sitemap, if there is one, and when it was last updated. Should you find that it has been a while since your sitemap was downloaded, it may be a good idea to resubmit your sitemap to update the number of URLs downloaded. This will help you to
              <strong class="text-rose-300"> keep track of how Google reads your sitemap and whether all the pages you want to be seen are displayed as they should. </strong>
            </li>
    
            <li class="pb-5">
            <strong class="text-base">
            removals
            </strong>
            <br />
    
            If for any reason you temporarily need
            <strong class="text-rose-300"> block a page from Google search results </strong>
            you go to
            <em> removals. </em>
            You can hide a page for about 90 days before it expires. Should you wish to permanently remove a page from Google's search, you must do so on your website.
            </li>
    
            <li class="pb-5">
            <strong class=" text-base">
            Core Website Vitals
            </strong>
            <br />
    
            The most important values ​​of a website are
            <strong class="text-rose-300"> those that affect your search ranking. </strong>
            They include
            <em> speed, usability </em>
            and
            <em> visual stability. </em>
            These are now ranking signals and are something you should pay attention to.
            </li>
    
    
            <li class="pb-5">
            <strong class=" text-base">
            AMP / Accelerated Mobile Pages
            </strong>
            <br />
    
            <em> AMP </em>
            is an open source initiative designed to provide fast-loading mobile websites that work even on slow connection speeds. Go here to start creating a front page if you don't already have one. This gives you a standard encoding that you can then customize further.
            
            </li>
    
    
            <li class="pb-5">
            <strong class=" text-base">
            Links to you website
            </strong>
            <br />
    
            Are you curious about yours?
            <em> external links? </em>
            GSC shows
            <strong class="text-rose-300"> which domains that links to your website, </strong>
            and
    
            <strong class="text-rose-300"> which pages on the website get the most links to them. </strong>
            By scrolling down in the left sidebar and clicking on to "links". to get a full report on all the links pointing to your site. This is probably
            <strong class="text-rose-300"> the most comprehensive list of the external and internal links </strong>
            which you can find without having to pay. It is a powerful tool that allows you to get an overall view of how the content on your website is used and what works best in Google's eyes.
            </li>
    
    
    
            <li class="pb-5">
            <strong class=" text-base">
            Manual Actions
            </strong>
            <br />
    
            Under the tab
            <em> Manual Actions </em>
            you can find out if any of your pages
            <strong class="text-rose-300"> does not meet Google's guidelines </strong>
            for webmaster quality. These measures are a good way to find out if it is happening
            <em> spaming </em>
            , and allows you to take action against it.
    
            </li>
    
    
            <li class="pb-5">
            <strong class=" text-base">
            Mobile Usability
            </strong>
            <br />
    
            Under the tab
            <em> usability on mobile devices </em>
            you can check that all pages on the website comply with Google's guidelines to
            <strong class="text-rose-300"> correctly display on mobile devices. </strong>
            Some of the things that Google can react to include:
            <em> text size, display settings </em>
            or even
            <em> proximity to clickable elements. </em>
            Things like these can negatively affect the ranking of one's mobile site and cause the site to end up lower on the results page. Finding and fixing these errors will
            <strong class="text-rose-300"> improve user experience and results. </strong>
            Also, be sure to check your website's mobile speed as the number of users using their phone to surf is constantly increasing.
            </li>
    
            <li class="pb-5">
            <strong class=" text-base">
            Crawl stats
            </strong>
            <br />
    
            do you want a more in-depth analysis of
            <strong class="text-rose-300"> how often search bots crawl your website </strong>
            can you use the report for this sub
            <em> Settings {'>'} Crawl statistics. </em>
            Here you can see
            <strong class="text-rose-300"> how often the pages of the website are crawled, </strong>
            and
            <strong class="text-rose-300"> what download times the website has. </strong>
            According to Google, there is no "good" number of crawls, but they still provide good insight into sudden peaks or troughs in the crawl rate.
            </li>
    
    
            <li class="pb-5">
            <strong class=" text-base">
            URL Inspection
            </strong>
            <br />
    
    
            This tool is useful as it allows you to
            <strong class="text-rose-300"> do a test run on how Google goes through and displays a specific URL on the website </strong>
            in question. It's a good way to ensure bots get access to a page that might otherwise be overlooked. If you want access to the code for the website, go to "Show tested page". Here you get a screenshot of
            The <em> HTML code </em>
            and any tracking errors. This was previously shown as a separate report, but is now in the URL inspection below
            <em> “Coverage”</em>
            .
            </li>
    
            <li class="pb-5">
            <strong class=" text-base">
            Robots.txt Tests
            </strong>
            <br />
    
            If you use a
            <em> robot.txt file </em>
            in order to
            <strong class="text-rose-300"> block Google crawlers from a specific resource, </strong>
            With this tool, you can double check that everything is working. For example, should you have an image that you do not want to appear in one
            <em> Google Image Search, </em>
            can you test your robot.txt here to make sure the image doesn't appear where you don't want it to appear. By testing this you will either get the message
            <em> “Accepted” </em>
            or
            <em> “Blocked” </em>
            , and can then edit accordingly.
            </li>
    
    
            <li class="pb-5">
            <strong class=" text-base">
            URL Parameters
            </strong>
            <br />
    
            Google recommends using this tool with caution, as an incorrect URL parameter can have a negative impact on how the website is crawled. Using this allows you to
            <strong class='text-rose-300'> keep track of address performance </strong>
            and make sure they don't point the bots in the wrong direction.
    
            </li>
    
    
    
          </ul>
    
          <p class="text-sm text pb-5">
          As you understand, Google Search Console provides
          <strong class='text-rose-300'> a good insight into how your website works and performs in the eyes of search engines. </strong>
          It lets you know what you can do to keep Google's attention and how you should
          <strong class="text-rose-300"> make your site both more user-friendly. </strong>
          Once you've learned the basics of how the tool works, you can then move on to using the data collected to improve your website and increase your traffic.
          </p>
    
          </div>
        `}

        mainTitle3={"Why should you hire an SEO agency?"}
        mainDesc3={`
        <p class="text-sm pb-10">If you have money in your digital marketing budget, there are many good reasons to hire an SEO agency to help with things like meta keyword phrases, strengthening your link profile and creation of good content:</p>
        <ul class="list-disc text-base pb-10">
        <li>
        You don't have time to manage your website.
        </li>
        <li>
        You want to stay up-to-date in the SEO industry.
        </li>
        <li>
        You want help searching for keywords that produce results.
        </li>
        <li>
        You want to increase your organic traffic to the website.
        </li>
        <li>
        You want to keep costs down with well-optimized ads.
        </li>
        <li>
        You want to be trained by an agency that knows search engine optimization.
        </li>
        </ul>
        <p class="text-sm pb-5">
        But you should not hire an SEO agency that promises to get you top rankings quickly. Even if they somehow manage to get your site to the top spot, your rankings will drop without a solid foundation to stand on, and you'll end up losing more than you've won.
        </p>
        <p class="text-sm pb-5">
        SEO is for long-term digital entrepreneurs who are determined to help users find the answers they need, as well as to increase long-term growth.
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
      <HeadingSEO8 
      mainTitle1={"Increase sales with Google My Business"}
      mainDesc1={`
        <p class="text-sm text-left pb-5">
        One of the best ways to get traffic and new customers is to solicit and optimize your
        Google My Business (GMB). </em>
        Google My Business is a list of information about your business
        <em> company operations, reviews, photos, posts </em>
        and much more.
        </p>
  
        <p class="text-sm text-left pb-5">
        Some things that are good to keep in mind when it comes to Google My Business are:
        </p>
  
        <ul class="list-disc text-sm text-left pb-10">
          <li>
          What do your customers find when they search for your business online?
          </li>
          <li>
          How quickly can they access your phone number if they need it?
          </li>
          <li>
          If they want to know if you have parking spaces, how will they find out?
          </li>
        </ul>
        <p class="text-sm text-left pb-5">
        You must ensure that
        <strong class="text-rose-300"> consumers have access to this information even before they reach your website. </strong>
        Although most of this information is on your website, Google My Business indexes the content you provide to
        <strong class="text-rose-300"> create a unified structure in Google Search and Google Maps </strong>
        (Google Local Guides can also review and edit one's listings for consistency).
        </p>
      `}


      cardTitle1={"What is Google My Business?"}
      cardDesc1={`
        <p class="text-sm text-white pb-5">
        GMB is not just a place where people can find basic information about your business. When Google My Business is used correctly, it is
        <strong> a powerful tool that can increase your revenue and provide valuable insights about your customers.</strong>
        </p>
        <p class="text-sm text-white pb-5">
        About 95% of all searches today take place on Google. The search engine simply dominates when it comes to searching the web.
        <strong> Every second of the day people are looking for new things to buy. </strong>
        You who have a product to sell simply cannot risk not being seen on the platform.
      </p>
      `}
      underCard1Desc={`
        <p class="text-sm pb-5">
        To put things into perspective
        <strong class="text-rose-300"> approximately 3.5 billion searches are made every day. </strong>
        However, most users do not get further than Google's first page of search results. One study examined the number of clicks for each Google search result, and found that the number of clicks decreased exponentially on just page two.
        </p>
        <p class="text-sm pb-5">
        In other words, your potential customer will find the product they are looking for on the first page of Google. Although there are other ways to get your business on the first page of Google,
        <strong class="text-rose-300"> is Google My Business an incredibly valuable </strong>
        (and easy)
        <strong class="text-rose-300"> tools </strong>
        which can help you immensely.
        </p>
        <p class="text-sm pb-5">By using GMB you can:</p>

        <p class="text-sm pb-5">1. Check, index and display relevant business information.</p>
        <p class="text-sm pb-5">2. Interact with potential customers and manage your reputation in online reviews.</p>
        <p class="text-sm pb-5">3. Collect photos, videos and other user-generated content from customers.</p>
        <p class="text-sm pb-5">4. Gather insights on how your customers arrive at your website.</p>
      `}
      underCard1Desc2={`
        <h1 class="text-center text-xl pt-5 pb-5 ">Claiming your GMB increases traffic</h1>
        <p class="text-sm pb-5">
        Google My Business are official business listings that contain your business's phone number and address.
        <strong class="text-rose-300"> Claiming your local Google My Business is very important. </strong>
        With your GMB, you basically tell Google to list your company in the area where you have the most customers or clients.
        </p>
        <p class="text-sm pb-5">
        However, simply listing your business in Google Local will not increase your rankings organically. Some of the things you need to do to get the rankings you want are the following:
        </p>
          
        <ul class="text-sm list-disc">
        <li class="text-base">
        Stay consistent
        </li>
        <p class="pb-5">
        Neither Google nor Bing is happy with inconsistency. Thus, to remain consistent in content marketing, you should
        <strong class="text-rose-300"> use the same data </strong>
        as you do on guest blogs, on your social media profiles, and in any other place online where your business appears.
        <strong class="text-rose-300"> This makes it much easier for search engines to link everything together. </strong>
        </p>

        <li class="text-base">
        Encourage interactions
        </li>
        <p class="pb-5">
        Get people talking about your business. Ask them to link to your local GMB. You can always use
        <em>Link Explorer</em>
        to find out who linked to their site and notify them of your business listing.
        <strong class="text-rose-300"> the more people talks about your business, </strong>
        with reviews and links from own pages or social media,
        <strong class="text-rose-300"> the greater chance you have of getting better positions with the search engines. </strong>
        </p>
        </ul>

        <h1 class="text-center text-xl pt-5 pb-5 ">Search Engine Optimization Myths You Should Never Hear</h1>
        <h2 class="text-center pt-5 pb-5 ">HOW TO INCREASE YOUR TRAFFIC BY OVER 13% IN JUST 30 DAYS?</h2>
        <p class="text-sm pb-5">
        A proven SEO strategy is followed. A strategy that finds a searching market, you create in-depth content backed by statistics and data, you solve a concrete problem and market blog posts. This strategy seems basic, but that's how you win in the long run with SEO.
        </p>
        <p class="text-sm pb-5">
        The reality is that organic traffic converts 9% better than social media traffic. These SEO myths tend to prevent hard working marketers and bloggers from improving their traffic and position online.
        </p>
        <p class="text-sm pb-5">
        Many who work with search engines claim that they are affiliated with Google. This is most certainly not true, as Google does not disclose who their SEO partners and affiliates are. So if an SEO consultant or SEO agency promises you top positions for a "low" price per month, you should worry instead of nagging. No one can guarantee top positions in Google search engines.
        </p>
        <p class="text-sm pb-5">
        We at Effektify have found out the most common myths about search engine optimization that you should ignore. We give tips on what advice you should follow for a smart SEO strategy and safe digital marketing.
        </p>

        <h2 class="text-center pt-5 pb-5 ">”AN XML SITEMAP WILL IMPROVE YOUR POSITION”</h2>
        <p class="text-sm pb-5">
        Although it may not be the most important thing for your rankings, an XML sitemap is essential if you want to build a searchable website. Every time you create a new post or edit an existing post, the Google XML sitemap generator creates an updated sitemap with your new landing pages. This sitemap is then sent to Google and other search engines. What we do know is that an XML sitemap helps search engines crawl and index new pages faster. But does it improve search engine rankings?
        </p>
        <p class="text-sm pb-5">
        Back in 2008, Trevor Foucher and Susan Moskwa of the Webmaster Tools team, part of the sitemaps panel, spoke at Search Engine Strategies in Chicago. One of the many questions they were asked was: "Will a sitemap help me get a better placement?". Trevor's answer was that a sitemap really does not affect the ranking of your web pages. Sitemaps are like a tool – a guide that gives Google more information about your website. They ensure that all your URLs are indexed, to facilitate the search. It doesn't really form the foundation of digital marketing, they make sure it gets indexed quickly.
        </p>
        <p class="text-sm pb-5">
        Although this was ten years ago, the same applies today. A sitemap can lead to increased visibility for your website eventually, when the URLs on the site are prioritized. But that's no guarantee. If you are not already using the Google XML Sitemaps generator on your WordPress site, you should install it now. There is no guarantee that your placements will improve. But it will help Google discover your content faster.
        </p>

        <h2 class="text-center pt-5 pb-5 ">”METATAGS HAVE NO GREATER IMPORTANCE”</h2>
        <p class="text-sm pb-5">
        Meta tags are HTML tags that are located between the opening and closing tags. They are used to show previews of a particular web page in the search results.
        </p>
        <p class="text-sm pb-5">
        The three elements of a meta tag are:
        </p>
        <ul class="text-sm list-disc pb-5">
          <li>
          The title tag
          </li>
          <li>
          The meta description
          </li>
          <li>
          Meta keywords or phrases
          </li>
        </ul>
        <p class="text-sm pb-5">
        The title tag appears in the section of a web page, and is a necessary page element. The meta description and keywords, on the other hand, are optional page elements. However, without the meta description, Google can pull text from the page's content as preview snippets. Even if Google doesn't use the keyword meta tag in page ranking, keyword descriptions in the meta tag are still relevant and it's wise to spend time on them.
        </p>
        <p class="text-sm pb-5">
        Meta tags also make your search results attractive, which can attract more clicks from users who feel your site has high-quality content that meets their needs. This is where your digital marketing starts to improve and give you higher search engine rankings.
        </p>
        <p class="text-sm pb-5">
        You can take care of meta keyword phrases, title tags and descriptions with the All In One SEO WordPress plugin.
        </p>

        <h1 class="text-center text-xl pt-5 pb-5 ">Use these tips to create rich meta descriptions:</h1>
        <ul class="text-sm list-disc pb-5 space-y-5 ">
          <li>
            <strong class="text-base">Make them descriptive </strong>
            - Enter keywords that are relevant to the article. If you like formulas, ask “Who? What? Why? When? Where? How?" It is a formula journalists use to report. It works just as well when writing descriptions for search engine optimization
          </li>
          <li>
            <strong class="text-base">Make them unique </strong>
            - Each meta description should be different from your other pages' descriptions
          </li>
          <li>
            <strong class="text-base">Make them short </strong>
            - Google limits meta descriptions to 160 characters or less. Writing more than that is not good as they are not considered to follow the standard and are cut down.
          </li>
        </ul>


        <h1 class="text-center text-xl pt-5 pb-5 ">"USE THE META ROBOT TAG TO SPECIFY INDEXABLE PAGES"</h1>
        <p class="text-sm  pb-5">
        The Robots.txt file tells search engine bots which parts (pages, links, etc.) of your website to crawl and index and which to ignore. One can easily set noindex and nofollow tags with the help of WordPress plugins Yoast or All in One SEO.
        </p>
        <h1 class="text-lg pt-5 pb-5 "><i class="fa-regular fa-square-check text-green-500 fa-xl text-left"></i> Robots Meta NOINDEX</h1>
        <h1 class="text-lg pt-5 pb-10  "><i class="fa-regular fa-square-check text-green-500 fa-xl text-left"></i> Robots Meta NOFOLLOW</h1>
        <p class="text-sm pb-5">
        You should only select the NOINDEX button if you are sure that you want the page to be private and not visible to the public. However, this does not mean that Google won't find your new pages if you do not specify the meta robots tag. You do not need to specify which pages Google should index. If you don't want to make specific pages private, there's really no reason to go through the trouble.
        </p>
        <p class="text-sm pb-5">
        One can use the Robot.txt file to block all browsers from all content, a specific folder or a specific web page. But if you don't need to block browsers, you don't need to worry about it. Save time and channel it into something more important in your content marketing and SEO strategy.
        </p>


        <h1 class="text-center text-xl pt-5 pb-5 ">
        "TOP DOMAINS IMPROVE THE RANKING"
        </h1>
        <p class="text-sm  pb-5">
        A top domain has the highest position in the hierarchical domain name system. Most searchers recognize .com as a website extension, but may be confused when they find .biz or .guru. This is partly because 98% of the search results when you type a keyword phrase into Google search are .com domain names.
        </p>
        <p class="text-sm  pb-5">
        The only exception is domains that can be targeted to geographic audiences. If I live in Canada but have a .com domain name, Google assumes that my audience is global and shows my web pages in its search results for the global audience. On the other hand, a Canadian website in the same industry with a .ca extension will appear primarily to searchers from that country.
        </p>
      `}

      cardTitle2={"MEMORABLE AND PROFESSIONAL DOMAIN NAME"}
      cardDesc2={`
        <p class="text-sm text-white pb-5">
        In 2007, before the updates to Google's algorithms, ICANN introduced new generic TLDs – such as .guru, .club, .company and .email. But after more than 10 years, .com is still superior to all of these names in terms of global usage. The most important factor in whether TLDs have an effect on SEO content marketing is whether or not the domain contains keywords.
        </p>
        <p class="text-sm text-white pb-5">
        This information should not scare you, but rather guide you. Now you know that when choosing top-level domains, what matters is the long-term brand and the benefits of registering a memorable and professional domain name. If you have not yet registered a domain name, we recommend you choose top-level domain names (.com and .net). However, if you already own a website, you should focus on offering tremendous value, creating high-quality content, and using social media to connect with influencers who can help you promote your content. We've seen domain names with weird extensions do well in searches.
        </p>
      `}
      />
      <Heading
      bg={"bg-white"}
      textColor={"text-black"}
      title={"INCLUDING A KEYWORD IN ITS ANCHOR TEXT IS NO LONGER MEANINGFUL FOR SEO"}
      descCustomHtml={`
      <p class="text-sm text-left pb-5">
      Anchor text is the clickable text in a hyperlink. When clicking on the phrase, it takes the user to the landing page that is linked. Many industry experts believe that anchor text will remain a ranking factor forever, no matter what changes come with the next Google update.</p>
      <p class="text-sm text-left pb-5">
      The goal of each update or change to the algorithm is to help searchers find the right websites that contain the information they need in a user-friendly way. Over-optimization can get you penalized by Google. Before Google Penguin came along, you could use keyword-rich anchor text in your blog posts, both for internal linking and external linking (ie linking to other websites). The search engines have now discovered this trick and are penalizing you.</p>
      <p class="text-sm text-left pb-5">
      However, there is a slight change now. Contextual links 5-10 times more ranking power than regular blog links that appear in your guest posts, for example, but excessive use of keyword-rich anchor text can potentially negatively affect the ranking of your site. Cross-linking with rich anchor text is equally risky and should therefore also be avoided. However, saying that anchor text containing keywords will no longer be relevant in search engine rankings is not correct, and in other words, a myth.
      </p>
      <p class="text-sm text-left pb-5">
      Change your approach. Vary the anchor text and make sure your primary and secondary keywords, your meta keyword phrases, and your brand, URL, and generic keywords are used as anchor texts.
      </p>
      <p class="text-sm text-left pb-5">
      We like to build natural links, because that's what Google wants. You can't be smarter than those who spend their working days making the algorithm work better. Instead, focus on high-quality content and avoid penalties from Google and other search engines. After the Penguin update, most sites with optimized anchor text were penalized. On the other hand, a website with diversified anchor text experienced a boost and only a few of them were negatively affected.
      </p>
      <p class="text-sm text-left pb-5">
      There are several types of anchor text you can use, but branding is the easiest way to stand out positively in Google's eyes.
      </p>

      <h1 class="text-lg text-left uppercase pb-5">So you can follow this anchor text strategy:</h1>
      <p class="text-base text-left pb-5">1. Natural anchor text</p>
      <p class="text-sm text-left pb-5">It can be an anchor text with keywords, brand or URL. It should flow naturally with the rest of the content. These are mostly editorial links and will definitely affect your rankings.</p>

     
      <p class="text-base text-left pb-5">2. Anchor text for the brand or brand URL</p>
      <p class="text-sm text-left pb-5">If you can create more branding or URL anchor text, you should be fine. Aim to have branded anchor text in about 90% of your links.</p>
      <p class="text-sm text-left pb-5">There are thousands of keywords that you could use in your link profile to build links, without diluting your website strategy. Instead, most anchor texts pointing to one's own landing pages are usually either brand names, branded URLs, or pure URLs . Of course, you cannot control what anchor text a visitor uses to link to your site. But if you have the opportunity, either through guest blogging or interviews, you should avoid keyword-rich anchor text. This is part of digital marketing. Or better yet, use your brand + keywords. You can also use brand URLs as anchor text.</p>

      <p class="text-base text-left pb-5">3. Generic anchor text</p>
      <p class="text-sm text-left pb-5">Do not use it too much, as it may turn out to be over-optimized. At least 5% of your anchor links should be generic, especially when linking to or from an irrelevant page. Understand your link profile. For example, if you want to link to a sports website from a digital marketing blog, it's best to use generic keywords.</p>

      <h1 class="text-lg uppercase pb-5">You can follow this anchor text strategy:</h1>
      <p class="text-base text-left pb-5">
      This myth is dangerous to listen to. When it comes to digital marketing and search engine optimization, you cannot afford to ignore high-quality keyword analysis for your website.
      </p>
      <p class="text-base text-left pb-5">
      What you should avoid is over-optimization, excessive use of keyword-rich anchor texts and Exact Match Domain updates. Focus on ROI, instead of top rankings for that keyword. After all, whether you rank 1 or 5, what matters is what you get back.
      </p>
      <p class="text-base text-left pb-5">
      Keyword analysis is still very much relevant. But to be safe, you should focus on the user's intent behind the search, not just the keywords themselves, which also applies to the meta keyword phrases.
      </p>
      `}
      />

      <HeadingSEO9 
      mainTitle={"For those who need local search engine optimization"}
      listButton={"Select your city from the list below"}
      city1={"Umeå"}
      city1Link={"/seo-sokmotoroptimering-umea/"}
      city2={"Upplands väsby"}
      city2Link={"/seo-sokmotoroptimering-upplands-vasby/"}
      city3={"Uppsala"}
      city3Link={"/seo-sokmotoroptimering-uppsala/"}
      city4={"Varberg"}
      city4Link={"/seo-sokmotoroptimering-varberg/"}
      city5={"Västerås"}
      city5Link={"/seo-sokmotoroptimering-vasteras/"}
      city6={"Växjö"}
      city6Link={"/seo-sokmotoroptimering-vaxjo/"}
      city7={"Örebro"}
      city7Link={"/seo-sokmotoroptimering-orebro/"}
      city8={"Östersund"}
      city8Link={"/seo-sokmotoroptimering-ostersund/"}
      />
      
    </>
  );
}
