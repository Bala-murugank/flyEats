import React from "react";

import { Carousel } from "react-bootstrap";

const HomeCarousel = () => {
  const carouselSlide = [
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672076/NetflixApp/burger_emxbtv.jpg",
    },
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672452/NetflixApp/pizza_osjb4f.jpg",
    },
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672612/NetflixApp/ric_a4ewxo.jpg",
    },
  ];

  return (
    <div className="w-full p-3 h-[500px] rounded-3xl relative">
      <Carousel
        nextIcon={false}
        prevIcon={true}
        style={{ width: "100%", height: 500 }}
        className="rounded-lg duration-300"
      >
        {carouselSlide.map((Item,index) => (
          <Carousel.Item key={index} interval={1000} className="rounded-3xl">
            <img
              src={Item.url}
              style={{ height: 500 }}
              className="rounded-3xl w-full"
              alt="Home carousel"
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default HomeCarousel;
