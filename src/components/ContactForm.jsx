import React from 'react'
import './ContactForm.css'

export default function ContactForm() {
  return (
    <section class='contact-form-container  text-white'>
        <div class="contact-form-heading pt-10">
        <h1 class='font-black text-3xl pt-5'>Vad kul att du har hittat till oss!</h1>
        <p class='pt-5 text-base font-medium'>Har du frågor eller är redo att starta din digitala resa redan nu, är du välkommen att fylla i några rader eller maila oss på <br /> 
        <a href="mailto:letsdance@effektify.com" target="_blank" rel="noopener">letsdance@effektify.com </a> 
        så hör vi av oss inom kort!   
        </p>
        </div>
        <div class="contact-form">
  <div class="py-8 lg:py-16  mx-auto max-w-screen-md">
      
      <form action="#" class="space-y-4 float">
          <div>
              <input type="text" id="company" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded border shadow-sm " placeholder="Företag" required />
          </div>
          <div>
              <input type="text" id="company" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded border shadow-sm  " placeholder="Namn" required />
          </div>
          <div>
              <input type="tel" id="company" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded border shadow-sm " placeholder="Telefon" required />
          </div>
          <div>
              <input type="email" id="email" class="shadow-sm p-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded  block w-full  " placeholder="E-post" required />
          </div>
          <div class="sm:col-span-2">
              <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded shadow-sm border border-gray-300 " placeholder="Vad kan vi hjälpa dig med?"></textarea>
          </div>
          <button type="submit" class="text-xl contact-form-button py-2 px-5 font-medium text-center text-white  sm:w-fit ">Skicka</button>
      </form>
  </div>
        </div>
    </section>
  )
}
