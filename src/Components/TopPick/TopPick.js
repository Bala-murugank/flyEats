import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import { topPicks } from "../../data/data";

const TopPick = () => {
  return (
    <>
      <h1 className="text-2xl text-orange-400 text-center">Top Picks</h1>

      <div className=" flex  md:flex-col  lg:flex w-full m-auto p-2">
        <Splide
          options={{
            perPage: 4,
            mediaQuery: "max",
            breakpoints: {
              578: {
                perPage: 1,
              },
              680: {
                perPage: 2,
              },
              768: {
                perPage: 3,
              },
            },
            gap: "0.5rem",
            arrows: false,
          }}
        >
          {topPicks.map((item) => (
            <SplideSlide key={item.id}>
              <div className="rounded-3xl relative">
                <div className="absolute w-full h-full bg-black/50 text-white rounded-3xl">
                  <p className="text-2xl px-2 pt-3 font-bold">{item.title}</p>
                  <span className="px-2 ">{item.price}</span>
                  <button className="border-dotted border-white mx-2 absolute bottom-4">
                    Add To Cart
                  </button>
                </div>
                <div>
                  <img
                    src={item.img}
                    alt={item.title}
                    className="h-[200px] w-full rounded-3xl cursor-pointer hover:scale-105 ease-out duration-300"
                  />
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </>
  );
};

export default TopPick;
