import React from 'react'
import ContactForm from '../components/ContactForm'
import gif from '../assets/PONG_Light_version2.gif'
import LinkedInComponent from '../components/LinkedInComponent'


export default function LinkedInAdsEN() {
  return (
    <>
    
    <LinkedInComponent />

    <img src={gif} alt="" />
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
