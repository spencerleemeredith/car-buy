import React from "react";

import { BsStarFill, BsStarHalf } from "react-icons/bs";

function Testimonials() {
  return (
    <section className="bg-carvana-gray h-[600px] lg:mt-28 mt-16">
      <div className="container mx-auto h-full w-full flex flex-col items-center justify-center gap-4">
        <div className="flex flex-col items-center text-center gap-2">
          <div className="w-8 h-[4px] bg-orange-500"></div>
          <h1 className="text-5xl text-blue-950 font-bold uppercase">
            What our customers are
            <br /> saying
          </h1>
          <p className="text-gray-500">
            We've purchased more than 2 million cars from customers and received
            a<br /> lot of great feedback. See what's behind our 5.0 star
            average rating.
          </p>
        </div>
        <div className="flex items-center gap-10 lg:flex-row flex-col">
          <div className="flex flex-col gap-1">
            <h1 className="text-blue-400 text-8xl">5.0</h1>
            <div className="flex items-center gap-2 text-blue-400">
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
            </div>
            <p className="font-bold text-xs uppercase ">
              Customer Rating
              <br /> For sell & trade-
              <br />
              in
            </p>
            <p className="text-gray-500 text-xs">97,500+ reviews</p>
            <p className="text-blue-400 hover:underline text-xs cursor-pointer">
              See All Reviews
            </p>
          </div>
          <div className="h-[230px] w-[1px] bg-gray-300 lg:block hidden"></div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-yellow-400 text-sm">
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
            </div>
            <h2 className="text-3xl text-blue-900">
              "Selling my Bugatti to Carbuy was
              <br /> definitely the best way to go."
            </h2>
            <div className="flex items-center gap-2">
              <p className="font-semibold">James K.</p>
              <div>|</div>
              <p className="text-gray-400">March 5, 2021</p>
            </div>
            <p className="text-blue-400 hover:underline cursor-pointer">Read Full Review</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
