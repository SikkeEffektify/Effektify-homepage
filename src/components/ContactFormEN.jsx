import React from 'react'
import './ContactForm.css'

export default function ContactFormEN() {
  return (
    <section class='contact-form-container  text-white'>
        <div class="contact-form-heading pt-10">
        <h1 class='font-black text-3xl text-center pt-5'>Let´s play!</h1>
        <p class='pt-5 text-base font-medium text-center'>If you have any questions or are ready to start your digital journey now, feel free to fill in a few lines or email us at<br /> 
        <a href="mailto:letsdance@effektify.com" target="_blank" rel="noopener">letsdance@effektify.com </a> 
        we’ll be in touch shortly!
        </p>
        </div>
        <div class="contact-form">
  <div class="py-8 lg:py-16  mx-auto max-w-screen-md">
      
      <form action="#" class="space-y-4 float">
          <div>
              <input type="text" id="company" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded border shadow-sm " placeholder="Company" required />
          </div>
          <div>
              <input type="text" id="company" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded border shadow-sm  " placeholder="Name" required />
          </div>
          <div>
              <input type="tel" id="company" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded border shadow-sm " placeholder="Phone" required />
          </div>
          <div>
              <input type="email" id="email" class="shadow-sm p-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded  block w-full  " placeholder="Email" required />
          </div>
          <div class="sm:col-span-2">
              <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded shadow-sm border border-gray-300 " placeholder="What can we do for you?"></textarea>
          </div>
          <button type="submit" class="text-xl contact-form-button py-2 px-5 font-medium text-center text-white  sm:w-fit ">Send</button>
      </form>
  </div>
        </div>
    </section>
  )
}
