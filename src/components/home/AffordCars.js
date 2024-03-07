import React from "react";

import { RiPriceTag3Line } from "react-icons/ri";
import { BsBookmarkHeart, BsTruck } from "react-icons/bs";
import { TbGasStation } from "react-icons/tb";

function AffordCars() {
  return (
    <section>
      <div className="container mx-auto flex lg:flex-row flex-col mt-8 items-center justify-center gap-5 lg:py-8 p-8">
        <div className="flex items-center border lg:w-[700px] w-[420px] rounded gap-8">
          <img
            src="https://assets.fastly.carvana.io/home-assets/pivot-2022/top-tiles/mother_mobile.png?width=130"
            alt="Daughter and mother smiling"
            className="w-[150px]"
          />
          <div className="flex flex-col items-center gap-6">
            <div>
              <h2 className="font-semibold text-lg">Get Pre-Qualified</h2>
              <p className="font-thin text-lg">
                See your actual monthly payment.
              </p>
            </div>
            <button className="font-semibold text-sm uppercase text-blue-400 border border-blue-400 lg:px-16 px-12 py-2 rounded hover:bg-blue-400 hover:text-white transition-all">
              Get Pre-Qualified
            </button>
          </div>
        </div>
        <div className="flex items-center border lg:w-[700px] w-[420px] rounded gap-8">
          <img
            src="https://assets.fastly.carvana.io/home-assets/pivot-2022/top-tiles/handshake_mobile.png?width=130"
            alt="Two men shaking hands"
            className="w-[150px]"
          />
          <div className="flex flex-col items-center gap-6">
            <div>
              <h2 className="font-semibold text-lg">Sell or Trade Your Car</h2>
              <p className="font-thin text-lg">
                Get an offer in just 2 minutes.
              </p>
            </div>
            <button className="font-semibold text-sm uppercase text-blue-400 border border-blue-400 px-16 py-2 rounded hover:bg-blue-400 hover:text-white transition-all">
              Get an Offer
            </button>
          </div>
        </div>
      </div>
      <h1 className="text-center lg:text-3xl text-xl font-semibold text-gray-600 mt-6 mb-6">
        Affordable Cars Available Now
      </h1>
      <div className="container mx-auto flex lg:flex-row flex-col justify-center items-center gap-2 py-6">
        <div className="bg-carvana-gray flex flex-col items-center justify-center py-4 px-10 w-[370px] h-[116px] gap-2 cursor-pointer">
          <RiPriceTag3Line className="text-3xl text-blue-400" />
          <p className="font-semibold text-md">Cars Under $20,000</p>
        </div>
        <div className="bg-carvana-gray flex flex-col items-center justify-center py-4 px-10 w-[370px] h-[116px] gap-2 cursor-pointer">
          <BsBookmarkHeart className="text-3xl text-blue-400" />
          <p className="font-semibold text-md">Shop Great Deals</p>
        </div>
        <div className="bg-carvana-gray flex flex-col items-center justify-center py-4 px-10 w-[370px] h-[116px] gap-2 cursor-pointer">
          <BsTruck className="text-3xl text-blue-400" />
          <p className="font-semibold text-md">Delivery by Friday</p>
        </div>
        <div className="bg-carvana-gray flex flex-col items-center justify-center py-4 px-10 w-[370px] h-[116px] gap-2 cursor-pointer">
          <TbGasStation className="text-3xl text-blue-400" />
          <p className="font-semibold text-md">Shop Fuel Efficient</p>
        </div>
      </div>
    </section>
  );
}

export default AffordCars;
