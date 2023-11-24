import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Tecnologias = () => {
  const carouselData1 = [
    { id: 1, src: './HTML.svg' },
    { id: 2, src: './CSS.svg' },
    { id: 3, src: './sass_icon_130835.svg' },
    { id: 4, src: './handlebars.svg' },
    { id: 5, src: './react.svg' },
    { id: 6, src: './nextjs.svg' },
  ];

  const carouselData2 = [
    { id: 7, src: './node.svg' },
    { id: 8, src: './npm.svg' },
    { id: 9, src: './javascript.svg' },
    { id: 10, src: './TYPESCRITP.svg' },
    { id: 11, src: './expressjs.svg' },
    { id: 12, src: './MONGO.svg'  }
   
  ];


  const carouselData3 = [
    { id: 13, src: './jwt-3.svg' },
    { id: 14, src: './Mongoose.svg' },
    { id: 15, src: './dockler.svg' },
    { id: 16, src: './swagger.svg' },
    { id: 17, src: './GITHUB.svg' },
    { id: 18, src: './nodemon.svg' },
   
  ];

  const settings = {
    infinite: true,
    speed: 10000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0.5, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full p-5">
      <h2 className="text-center mb-4 text-3xl p-2 ">Technologies Skills</h2>
      <Slider {...settings} className="mx-auto p-5 mt-10">
        {carouselData1.map((item) => (
          <div key={item.id} className="carousel-column">
            <img src={item.src} alt={`Tecnologia ${item.id}`} className="mx-auto max-w-full h-auto max-h-32 " />
          </div>
        ))}
      </Slider>

      <div className="my-16" />
      
      <Slider {...settings} className="mx-auto mt-25">
        {carouselData2.map((item) => (
          <div key={item.id} className="carousel-column">
            <img src={item.src} alt={`Tecnologia ${item.id}`} className="mx-auto max-w-full h-auto max-h-32 " />
          </div>
        ))}
      </Slider>

      <div className="my-16" />

      <Slider {...settings} className="mx-auto p-5">
        {carouselData3.map((item) => (
          <div key={item.id} className="carousel-column">
            <img src={item.src} alt={`Tecnologia ${item.id}`} className="mx-auto max-w-full h-auto max-h-32 " />
          </div>
        ))}
      </Slider>

      <h2 className="text-center mt-4 text-3xl p-10 ">Specialized in covering many areas</h2>
    </div>
  );
};

export default Tecnologias;
