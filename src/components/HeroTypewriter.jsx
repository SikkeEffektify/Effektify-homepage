import React from 'react'
import './Hero.css'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

export const HeroTypewriter = ({title, typeWrite1, typeWrite2, typeWrite3, typeWrite4, typeWrite5, typeWrite6, videoLink}) => {
  const [text] = useTypewriter({
    words: [typeWrite1, typeWrite2, typeWrite3, typeWrite4, typeWrite5],
    loop: {},
  });
  
  return (
<section>
   <div className='hero'>
    <div className="vidOverlay"></div>
    <video class="min-w-full min-h-full absolute object-cover" src={videoLink} autoPlay loop muted />
    <div class="vidContent ">
        <h1 class="md:text-5xl drop-shadow-xl">{title}</h1>
        <h1 class="md:text-5xl drop-shadow-xl">{text}<Cursor/></h1>
    </div>
   </div>
    </section>
  )
}
