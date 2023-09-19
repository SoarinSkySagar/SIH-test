import React from 'react'

export default function CarouselCards({caption, imageLink}) {
  return (
    <div className="w-1/2 rounded-lg overflow-hidden shadow-lg m-7 mx-auto">
    <img src={imageLink} alt={caption} className="w-full" />
    <div className="px-6 py-4 bg-[#5967E8] items-center text-center">
      <div className="font-bold text-2xl m-5 ">{caption}</div>
    </div>
  </div>
  )
}
