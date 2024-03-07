import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

function Hero() {
  return (
    <header className="bg-[url('https://assets.fastly.carvana.io/home-assets/pivot-2022/hero-pivot-v2-desktop.jpg?width=1800&smart')] xl:h-[800px] h-[600px] bg-no-repeat bg-cover bg-center">
      <div className="container mx-auto h-full flex justify-center items-center">
        <div className="flex flex-col items-center gap-4">
          <h1 className="lg:text-6xl text-4xl font-bold text-white uppercase">
            Right Car. Right Price.
          </h1>
          <h2 className="lg:text-3xl text-2xl font-semibold text-white">
            Financing made easy
          </h2>
          <div className="flex items-center justify-between bg-white rounded lg:w-[600px] py-1 px-2">
            <div className="flex items-center gap-2">
              <label className="p-1">
                <AiOutlineSearch className="text-2xl" />
              </label>
              <input
                placeholder="Search Make, Model, or Keyword"
                className="lg:w-[500px] outline-none"
              />
            </div>
            <button className="text-white py-2 px-3 bg-blue-400 rounded">Go</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;
