import React from 'react'
import { HeadingCareer } from '../components/HeadingCareer'
import { Hero } from '../components/Hero'
import { HeadingCareerEN } from '../components/HeadingCareerEN'

/* Videos */
import heroImage from '../assets/career-clouds.mp4'
export default function CareerEN() {
  return (
    <>
    <Hero 
    title={"Become one of us"}
    videoLink={heroImage}
    />
    <HeadingCareerEN />
    </>
  )
}
