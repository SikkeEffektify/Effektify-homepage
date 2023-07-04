import React from 'react'
import overlay from '../assets/empty-layer-2.webp'

export default function SmallVideo({videoLink}) {
  return (
    <div >
        
        <video class="" src={videoLink} autoPlay loop muted />
    </div>
  )
}
