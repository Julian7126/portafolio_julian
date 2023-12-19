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
  const commonSettings = {
    infinite: true,
    speed: 10000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0.5,
    arrows: false, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplaySpeed: 1000
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          speed: 500,
          autoplaySpeed: 200
        },
      },
    ],
  };

  const settings = {
    ...commonSettings,
    className: "mx-auto p-5 mt-10",
  };

  const settingsSecondCarousel = {
    ...commonSettings,
    className: "mx-auto mt-10",
    rtl: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          speed: 500,
          autoplaySpeed: 200
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          speed: 500,
          autoplaySpeed: 200
        },
      },
    ],
  };

  const settingsThirdCarousel = {
    ...commonSettings,
    className: "mx-auto p-5",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          speed: 500,
          autoplaySpeed: 200
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          speed: 500,
          autoplaySpeed: 200
        },
      },
    ],
  };

  return (
    <div className="w-full p-5">
      <div className="bg-purple-300 h-1 w-full" />
      <br />
      <h2 className="text-center mb-4 text-3xl p-2 sm:text-4xl md:text-5xl lg:text-4xl">Technologies Skills</h2>

      {/* Primer Carrusel */}
      <Slider {...settings}>
        {carouselData1.map((item) => (
          <div key={item.id} className="carousel-column">
            <img src={item.src} alt={`Tecnologia ${item.id}`} className="mx-auto max-w-full h-auto max-h-32" />
          </div>
        ))}
      </Slider>

      <div className="my-8" />

      {/* Segundo Carrusel */}
      <Slider {...settingsSecondCarousel}>
        {carouselData2.map((item) => (
          <div key={item.id} className="carousel-column">
            <img src={item.src} alt={`Tecnologia ${item.id}`} className="mx-auto max-w-full h-auto max-h-32" />
          </div>
        ))}
      </Slider>

      <div className="my-8" />

      {/* Tercer Carrusel */}
      <Slider {...settingsThirdCarousel}>
        {carouselData3.map((item) => (
          <div key={item.id} className="carousel-column">
            <img src={item.src} alt={`Tecnologia ${item.id}`} className="mx-auto max-w-full h-auto max-h-32" />
          </div>
        ))}
      </Slider>

      <h2 className="text-center mt-4 text-3xl p-5 sm:text-4xl md:text-5xl lg:text-2xl">Specialized in covering many areas</h2>
      <br />
      <div className="bg-purple-300 h-1" />
    </div>
  );
};

export default Tecnologias;