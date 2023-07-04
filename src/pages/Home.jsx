
import { Cards } from '../components/Cards'
import { ImageCards } from '../components/ImageCards'
import { CardsVideo } from '../components/CardsVideo'
import { Heading } from '../components/Heading'
import { Heading2 } from '../components/Heading2'
import { Hero } from '../components/Hero'
import SmallVideo from '../components/SmallVideo'
import Splat from '../components/Splat'
import { HeroButton } from '../components/HeroButton'


import videoHero from '../assets/City-By-Night-low.mp4'
import videoHeroButton from '../assets/spaceloop2.mp4'


export default function Home() {
  return (
    <>
    <Hero 
    videoLink={videoHero}
    title={"We love"}
    titlePink={"marketing"}
    />
    <Heading
      textColor={"text-white"}
      title={"Vi hjälper våra kunder att öka sin försäljning genom digitala kanaler"}
      desc={"Med erfarenhet och expertis kombinerat med den senaste tekniken erbjuder vi lösningar som förenklar er tillväxtresa. Vi effektivserar tillväxt och lönsamhet genom tydliga strategier, högkvalitativ leverans och full transparens i alla led."}
    />
    <Cards />
    <Heading2 
      title={"Det krävs en strategi för att växa"}
      desc={"Vi tror på långsiktiga samarbeten och därför är det viktigt att bygga på en bra strategisk grund, både kortsiktigt och långsiktigt. "}
      descRose={"Vi effektiviserar tillväxt och lönsamhet genom tydliga strategier, högkvalitativ leverans och full transparens i alla led."}
      desc2={"Denna plan hjälper vi er med och anpassar arbetet efter era affärsmål. Oavsett om ni har en lokal verksamhet i Sverige eller om ni vill växa internationellt så hjälper vi er -"}
      centerBottomDesc={"Är ni redo att ta klivet och ta er digitala närvaro till nästa nivå? Era mål är vår drivkraft, ingen dröm är för stor."}
    />
    <HeroButton 
    title={"We're ready for takeoff"}
    title2={"are you?"}
    buttonLink={"/kontakt"}
    buttonText={"Launch"}
    videoLink={videoHeroButton}
    />
    <SmallVideo
    videoLink={"https://player.vimeo.com/progressive_redirect/playback/640269040/rendition/360p/file.mp4?loc=external&signature=d0e1d5c738b95a755a14180899b17e383d9330d980a2e4d2a0fd01f98017b49c"}
    />
    <Heading
      bg={"bg-white"}
      textColor={"text-black"} 
      title={"Fler tjänster genom partnerskap"}
      desc={" Tack vare vårt stora nätverk av samarbetspartners kan vi erbjuda en rad andra tjänster, såsom fotografering och motion graphics, både i Sverige och utomlands. Vi samarbetar bara med de bästa, så att du kan känna dig trygg med våra rekommendationer."}
    />
    <Splat 
    headingText={"Via etablerade partners erbjuder vi även helhetslösningar inom"}
    text={"Affärsplan ● Varumärkesprofil"}
    text2={"Grafisk Profil ● Foto & film"}
    buttonLink={"/kontakt"}
    buttonText={"Ready for takeoff"}
    />
    <Heading
      titlePosition={"text-center"}
      bg={""}
      textColor={"text-white"} 
      title={"The world is our playground"}
      desc={"Här följer några exempel på våra partners som vi hjälper med att effektivisera sin tillväxt. Idag hjälper vi över 250 företag som finns representerade i Sverige, övriga Norden, Tyskland och Nederländerna."} 
    />
    <ImageCards />
    <Heading 
    titlePosition={"text-left"}
    bg={"bg-white"}
    textColor={"text-black"} 
    title={"Digital Anonsering"}
    desc={"Med en av våra persoliga specialister har annonsering aldrig varit enklare. Vi skräddarsyr en strategi baserat på djupgående analyser av önskade sökord och konkurrens för att kunna erbjuda en lösning som passar din bransch och ditt företag."} 
    />
    <CardsVideo 
    title={"Let's talk strategies"}
    desc={"Tillsammans skapar vi en anpassad lösning för att du ska kunna luta dig tillbaka och se resultaten du väntat på"}
    buttonLink={"/kontakt"}
    buttonText={"Play Ball"}
    />
    </>
  )
}
