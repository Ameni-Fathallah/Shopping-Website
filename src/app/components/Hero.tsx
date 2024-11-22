"use client";

import React from 'react'
import Slider from 'react-slick';//Functionality: Provides a full-featured, flexible carousel/slider component.

import Slide from './Slide';//Custom component defining the structure and styling of an individual slide.
const Hero = () => {

     
    var settings={
        dots:true,
        infinite:true,
        slidesToShow:1,
        slidesToScroll:1,
        autoplay:true,
        pauseOnHover:false,
    }
 
    //SLIDE DATA 
    const slideData=[
    { id:0,
        img:"/banner-1.jpg",
        title:"Trending Item",  
        mainTitle:"WOMEN'S LATEST FASHION SALE",
        price:"$20",
    },
    {
        id:1,
        img:"/banner-2.jpg",
        title:"Trending Accessories",  
        mainTitle:"MODERN SUNGLASSES",
        price:"$15",
    },
    {
        id:2,
        img:"/banner-3.jpg",
        title:"Sale Offer",  
        mainTitle:"NEW FASHION SUMMER SALE  ",
        price:"$30",
    }]



  return (
    <div className='container pt-6 lg:pt-0'>
        <Slider {...settings}>
            {/* Mapping Slide Data :Iterates over the slideData array*/}
            {slideData.map((item)=>(
                <Slide
                // Renders a custom Slide component for each item in the slideData array.

                key={item.id}
                img={item.img}
                title={item.title}
                mainTitle={item.mainTitle}
                price={item.price}/>
            
           ))}
        </Slider>
        </div>

)
}

export default Hero

// Container: Wraps the slider with a container that has responsive padding.
// Slider: Uses the react-slick slider component configured with settings.
// Mapping: Iterates over slideData to create multiple Slide components.
// Props: Passes the necessary data (img, title, mainTitle, price) from slideData to each Slide component.
// This structure ensures that each slide in the carousel is generated dynamically based on the data provided in slideData, and the slider itself is configured with customizable settings.