import React from 'react'

export default function CarouselCards({caption, imageLink}) {
  return (
    <div className="w-1/2 rounded-lg overflow-hidden shadow-lg m-7 mx-auto">
    <img src={imageLink} alt={caption} className="w-full" />
  </div>
  )
  }
