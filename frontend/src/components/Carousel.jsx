import React from 'react'
import Slider from 'react-slick'
import carousel from '../data/carousel.json'
import CarouselCards from './CarouselCards'

export default function Reviews() {

    const data = carousel.carousel

    var settings = {
        dots: false,
        infinite: true,
        speed: 1000, 
        slidesToShow: 1, 
        slidesToScroll: 1,
        autoplay: true, 
        autoplaySpeed: 3000, 
    }

  return (
    <div className='p-16 z-0'>
        <link
            rel="stylesheet"
            type="text/css"
            charset="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />

        <div className=''>
            <Slider {...settings}>
            
                {data.map((dataset) => (
                    <CarouselCards
                    caption={dataset.caption}
                    imageLink={dataset.image}
                    />
                ))}

            </Slider> 
        </div>
    </div>
  )
}
