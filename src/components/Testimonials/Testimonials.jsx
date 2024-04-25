import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Image, Button } from 'react-bootstrap';

function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <div className="next-slick-arrow">→</div>,
    prevArrow: <div className="prev-slick-arrow">←</div>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  };

  return (
    <section>
    <Container>
      <div className="my-4">
        <h2 className='servicetitle1 text-center'>CLIENTS SAY</h2>
        <Slider {...settings}>
          {data.map((d, index) => (
            <div key={index} className="bg-white text-black rounded mx-2" style={{ height: 'auto', padding: '20px' }}>
              <div className="d-flex justify-content-center align-items-center" style={{ height: 'auto' }}>
                <Image src={d.img} alt="" className="rounded-circle" style={{ width: '200px', height: '200px', objectFit: 'cover' }}/>
              </div>
              <div className="d-flex flex-column justify-content-center align-items-center gap-3 p-4">
                <p className="fs-5 fw-bold">{d.name}</p>
                <p>{d.review}</p>
                <Button variant="primary" className="rounded-pill px-4">Read More</Button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </Container>
    </section>
  );
}

const data = [
  {
    name: `Mobile Development`,
    img: `/students/John_Morgan.jpg`,
    review: `Hi! I am Shah Rukh Khan. I have recently got my online profile website from Themezone Academy and got 100% satisfaction with their service. It was excellent job they performed for me`
  },
  {
    name: `Web Development`,
    img: `/students/Ellie_Anderson.jpg`,
    review: `Hi! I am Salman Khan. I have recently got my online Big Boss website from Themezone Academy and got 100% satisfaction with their service. It was excellent job they performed for me`
  },
  {
    name: `Graphic Design`,
    img: `/students/Nia_Adebayo.jpg`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },

];

export default Testimonials;
