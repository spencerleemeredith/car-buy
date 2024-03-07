import React, { useState } from "react";

function Selling() {
  const [plate, setPlate] = useState(true);

  const vinForm = () => {
    setPlate(false);
  };

  const plateForm = () => {
    setPlate(true);
  };

  return (
    <section className="bg-[url('https://static.fastly.carvana.io/stc-home-ui/next/images/backgroundw1400.webp')] bg-cover lg:h-[600px] h-[800px] bg-no-repeat bg-center lg:mt-0 mt-16">
      <div className="container mx-auto h-full flex justify-center items-center lg:flex-row flex-col gap-[140px]">
        <div className="flex flex-col gap-4">
          <div className="w-6 h-[3px] bg-orange-500"></div>
          <h1 className="text-white text-7xl font-bold">
            Get a Real
            <br /> Offer In
            <br /> 2 Minutes
          </h1>
          <p className="text-white text-xl">
            We pick up your car. You get paid on
            <br /> the spot.
          </p>
        </div>
        <div className="flex flex-col justify-between items-center bg-white xl:w-[475px] w-[400px] h-[250px] py-6 rounded">
          <div className="flex items-center gap-[12px]">
            {plate ? (
              <p className="text-xs text-gray-500">
                Enter Your License Plate
                <br /> to Get a Real Offer
              </p>
            ) : (
              <p className="text-xs text-gray-500">
                Enter Your Vin
                <br /> to Get a Real Offer
              </p>
            )}
            <div className="flex gap-6 border rounded-full">
              <button
                onClick={plateForm}
                className={`${
                  plate ? "border rounded-full text-black" : "text-blue-400"
                } font-semibold px-8 py-2`}
              >
                Plate
              </button>
              <button
                onClick={vinForm}
                className={`${
                  plate ? "text-blue-400" : "border rounded-full"
                } font-semibold px-8 py-2`}
              >
                VIN
              </button>
            </div>
          </div>
          {plate ? (
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="LICENSE PLATE"
                className="outline-none border px-2 py-4 w-[286px]"
              />
              <select className="border w-[60px] outline-none">
                <option>AK</option>
                <option>AL</option>
                <option>AR</option>
                <option>AZ</option>
                <option>CA</option>
                <option>CO</option>
                <option>CT</option>
                <option>FL</option>
                <option>GA</option>
                <option>HI</option>
                <option>IA</option>
                <option>ID</option>
                <option>IL</option>
                <option>IN</option>
                <option>KS</option>
                <option>KY</option>
                <option>LA</option> 
                <option>MA</option>
                <option>MD</option>
                <option>TX</option>

              </select>
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              <input
                type="text"
                placeholder="VIN"
                className="outline-none border w-[350px] py-4 px-2"
              />
              <p className="text-blue-400 hover:underline cursor-pointer text-xs">
                Where is my VIN?
              </p>
            </div>
          )}
          <button className="uppercase font-semibold text-gray-500 bg-gray-300 rounded py-4 px-32 cursor-default">
            Get My Offer
          </button>
        </div>
      </div>
    </section>
  );
}

export default Selling;
