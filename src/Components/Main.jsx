import React from 'react';
import '../App.css'
import '../Components/Components Styles/Main.css';
import Slider from "react-slick";
import testimonial from '../Assests/Testimonials.json';
import Card from './Card';



const Main = () => {

  const settings = {
    dots: true,
    arrows:true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide:0,
    responsive: [
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2
        }
      }
    ]
  };

  return (
    <div id="mainContainer">

      {/* Carousel Container starts */}
      <div id="carouselMain">
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="https://cdn2.storehippo.com/s/573db1519f0d58741f0cc5c1/624454e843508794f8950773/webp/35-2048x2048.png" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="https://cdn2.storehippo.com/s/573db1519f0d58741f0cc5c1/61fa98178516f3d31852f4ae/webp/926f1512-cf8f-4231-8bf5-edf358e9a215-2048x2048.png" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="https://cdn1.storehippo.com/s/573db1519f0d58741f0cc5c1/61fa992d69d3fcd28c181858/webp/image-from-ios-2048x2048.png" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="https://cdn2.storehippo.com/s/573db1519f0d58741f0cc5c1/624454cdbdfa5b955c63d289/webp/34-2048x2048.png" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="https://cdn1.storehippo.com/s/573db1519f0d58741f0cc5c1/61fa98cb69d3fcd28c1812f4/webp/image-from-ios-1--2048x2048.png" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="https://cdn2.storehippo.com/s/573db1519f0d58741f0cc5c1/61fa98573d2dd0d372a599f8/webp/54d9b108-ac6f-4559-b05c-c098cb88c079-2048x2048.png" class="d-block w-100" alt="..." />
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="false"></span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="false"></span>
          </button>
        </div>
      </div>

      {/* Carousel Container Ends */}

      {/* Testimonials Starts */}

      <div id="testimonials">
        <h1> CUSTOMER'S SPEAK </h1>
        <div id='testimonialSlider'>
          <Slider {...settings}>
            <div >
              <Card val={testimonial[0]}/>
            </div>
            <div>
            <Card val={testimonial[1]}/>
            </div>
            <div>
            <Card val={testimonial[2]}/>
            </div>
            <div>
            <Card val={testimonial[3]}/>
            </div>
            <div>
            <Card val={testimonial[4]}/>
            </div>
          </Slider>
        </div>

      </div>

      {/* Testimonial Ends */}


    </div>
  )
}

export default Main