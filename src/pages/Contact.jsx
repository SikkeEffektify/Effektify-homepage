import React from 'react'
import { Hero} from '../components/Hero'
import ContactForm from '../components/ContactForm'
import video from '../assets/clouds.mp4'
import gif from '../assets/pong_light_version.gif'

export default function Contact() {
  return (
    <>
  <Hero
    title={"Redo att starta din resa?"}
    videoLink={video}
    />
    <img src={gif} class="md:pt-10 mx-auto md:w-1/2" alt="" />
  <ContactForm 
    title={"Vad kul att du har hittat till oss!"}
    desc={"Har du frågor eller är redo att starta din digitala resa redan nu, är du välkommen att fylla i några rader eller maila oss på "}
    company={"Företag"}
    name={"Namn"}
    phone={"Telefon"}
    email={"E-post"}
    text={"Vad kan vi hjälpa dig med?"}
    buttonText={"Skicka"}
  />
    </>
  )
}
