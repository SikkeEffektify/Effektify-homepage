
import { Cards } from '../components/Cards'
import { ImageCards } from '../components/ImageCards'
import { CardsVideo } from '../components/CardsVideo'
import { Heading } from '../components/Heading'
import { Heading2 } from '../components/Heading2'
import { Hero } from '../components/Hero'
import SmallVideo from '../components/SmallVideo'
import Splat from '../components/Splat'
import { HeroButton } from '../components/HeroButton'
import { HeroTypewriter } from '../components/HeroTypewriter'


/* Videos */
import videoHero from '../assets/City-By-Night-low.mp4'
import videoHeroButton from '../assets/spaceloop2.mp4'


export default function HomeEN() {
  return (
    <>
    <HeroTypewriter 
     videoLink={videoHero}
     title={"We love"}
     typeWrite1={"Marketing"}
     typeWrite2={"Social Media"}
     typeWrite3={"Growth"}
     typeWrite4={"Transparency"}
     typeWrite5={"SEO"}
     typeWrite6={"Our Clients"}
    />
    <Heading
      textColor={"text-white"}
      title={"We help our clients increase their sales through digital channels"}
      desc={"With experience and expertise combined with the latest technology, we offer solutions that simplify your growth journey. We streamline growth and profitability through clear strategies, high quality delivery and full transparency at all stages."}
    />
    <Cards 
    underTitle1={"SEO"}
    underDesc1={"With SEO we help your company appear higher on search engines, on the keywords that are important to you."}
    underTitle2={"Google Ads"}
    underDesc2={"With relevant and properly targeted campaigns and advertisements, we increase your visibility on the search engines."}
    underTitle3={"Wordpress"}
    underDesc3={"The world's largest system to create websites with, which is currently used by over 27% of all websites on the internet."}
    underTitle4={"Shopify"}
    underDesc4={"A complete commerce platform that allows businesses to launch, develop and sell products and services online."}
    />
    <Heading2 
      title={"It takes a strategy to grow"}
      desc={"We believe in long-term partnerships and therefore it is important to build on a good strategic foundation, both in the short and long term. "}
      descRose={"We streamline growth and profitability through clear strategies, high quality delivery and full transparency at all stages."}
      desc2={"We will help you with this plan and adapt the work to your business objectives. Whether you have a local business in Sweden or you want to grow internationally, we can help you -"}
      centerBottomDesc={"Are you ready to take the leap and take your digital presence to the next level? Your goals are our driving force, no dream is too big."}
    />
    <HeroButton 
    title={"We're ready for takeoff"}
    title2={"are you?"}
    buttonLink={"/en/contact-us"}
    buttonText={"Launch"}
    videoLink={videoHeroButton}
    />
    <SmallVideo
    videoLink={"https://player.vimeo.com/progressive_redirect/playback/640269040/rendition/360p/file.mp4?loc=external&signature=d0e1d5c738b95a755a14180899b17e383d9330d980a2e4d2a0fd01f98017b49c"}
    />
    <Heading
      bg={"bg-white"}
      textColor={"text-black"} 
      title={"More services through partnerships"}
      desc={"Thanks to our large network of partners, we can offer a range of other services, such as photography and motion graphics, both in Sweden and abroad. We only work with the best, so you can feel confident with our recommendations."}
    />
    <Splat 
    headingText={"Through established partners, we also offer complete solutions in"}
    text={"Business plan ● Brand profile"}
    text2={"Graphic profile ● Photo & film "}
    buttonLink={"/en/contact-us"}
    buttonText={"Ready for takeoff"}
    />
    <Heading
      titlePosition={"text-center"}
      bg={""}
      textColor={"text-white"} 
      title={"The world is our playground"}
      desc={"Here are some examples of our partners that we help to streamline their growth. Today we help over 250 companies represented in Sweden, the rest of the Nordic countries, Germany and the Netherlands."} 
    />
    <ImageCards 
    title1={"Pooltime"}
    desc1={"Pools & accessories"}
    title2={"Ekstrands"}
    desc2={"Doors & windows"}
    title3={"Gipsholm"}
    desc3={"Home Textiles"}
    title4={"Swedish TableTennis-Federation"}
 
    />
    <Heading 
    titlePosition={"text-center uppercase"}
    bg={"bg-white"}
    textColor={"text-black text-2xl"} 
    title={"It is with wholehearted commitment that we help companies achieve the digital presence required today"}
    desc={""} 
    />
    <CardsVideo 
    title={"Let's talk strategies"}
    desc={"Together we create a customized solution so that you can sit back and see the results you have been waiting for"}
    buttonLink={"/en/contact-us"}
    buttonText={"Play Ball"}
    />
    </>
  )
}
