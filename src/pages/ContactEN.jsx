import React from 'react'
import { Hero} from '../components/Hero'
import ContactForm from '../components/ContactForm'
import video from '../assets/clouds.mp4'
import gif from '../assets/pong_light_version.gif'
export default function ContactEN() {
  return (
    <>
    <Hero 
    title={"Ready to start your journey?"}
    videoLink={video}
    />
    <img src={gif} class="md:pt-10 mx-auto md:w-1/2" alt="" />
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
