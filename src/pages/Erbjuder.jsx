import React from 'react'
import videoHeroButton from '../assets/spaceloop2.mp4'
import { Heading7 } from '../components/Heading7'
import { HeroButton } from '../components/HeroButton'
import { Headinglist } from '../components/Headinglist'
import { StatsHero } from '../components/StatsHero'
import videoStatsHero from '../assets/City-By-Night-low.mp4'

export default function Erbjuder() {
  return (
    <>
    <StatsHero 
      videoLink={videoStatsHero}
      title1={"Det krävs en strategi för att växa"}
      title2={"MED TYDLIGA STRATEGIER OCH TRANSPARANS EFFEKTIVISERAR vi TILLVÄXT OCH LÖNSAMHET"}
      title3={"Siffrorna talar sitt tydliga språk"}
      title4={"Med strategier som fungerar har vi hjälpt företag att synas med"}
      desc={"Vi hjälper idag över 250 företag i Sverige, övriga Norden, Tyskland och Nederländerna. Ert mål är vår drivkraft, och utifrån full transparens i alla led och med dagens teknik, strävar vi på effektify mot att skapa tillväxt och lönsamhet för er som har en vision och en dröm."}

      stats1={"1047"}
      underStats1={"Sökord i top 3"}
      stats2={"1832"}
      underStats2={"sökord i top 10"}
      stats3={"2408"}
      underStats3={"sökord i top 20"}
    
    
    />
    <Heading7/>
    <Headinglist />
    <HeroButton 
      title={"We're ready for takeoff"}
      title2={"are you?"}
      buttonLink={"/kontakt"}
      buttonText={"Launch"}
      videoLink={videoHeroButton}
    />
    </>
  )
}
