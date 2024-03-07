import React from "react";

function CardsGreatValue() {
  return (
    <div className="container mx-auto flex items-center justify-center xl:flex-row flex-col gap-4">
      <div className="flex flex-col items-center gap-4">
        <div className="bg-white rounded lg:w-[700px] md:w-[500px] w-[400px] flex items-center justify-between px-8 cursor-pointer shadow hover:shadow-lg transition-all">
          <h2 className="font-semibold text-xl">Honda Civic</h2>
          <img
            className="w-[200px] hover:scale-110 transition-all duration-700"
            src="https://vexstockimages.fastly.carvana.io/stockimages/2020_HONDA_CIVIC_LX SEDAN 4D_SILVER_stock_desktop_1920x1080.png?v=1645587519.072?height=auto&width=275"
            alt="Honda Civic"
          />
        </div>
        <div className="bg-white rounded lg:w-[700px] md:w-[500px] w-[400px] flex items-center justify-between px-8 cursor-pointer shadow hover:shadow-lg transition-all">
          <h2 className="font-semibold text-xl">Toyota Camry</h2>
          <img
            className="w-[200px] hover:scale-110 transition-all duration-700"
            src="https://vexstockimages.fastly.carvana.io/stockimages/2020_TOYOTA_CAMRY_SE NIGHTSHADE EDITION SEDAN 4D_BLUE_stock_desktop_1920x1080.png?v=1645587464.941?height=auto&width=275"
            alt="Toyota Camry"
          />
        </div>
        <div className="bg-white rounded lg:w-[700px] md:w-[500px] w-[400px] flex items-center justify-between px-8 cursor-pointer shadow hover:shadow-lg transition-all">
          <h2 className="font-semibold text-xl">Nissan Altima</h2>
          <img
            className="w-[200px] hover:scale-110 transition-all duration-700"
            src="https://vexstockimages.fastly.carvana.io/stockimages/2020_Nissan_Altima_2.5 S Sedan 4D_WHITE_stock_desktop_1920x1080.png?height=auto&width=275"
            alt="Nissan Altima"
          />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="bg-white rounded lg:w-[700px] md:w-[500px] w-[400px] flex items-center justify-between px-8 cursor-pointer shadow hover:shadow-lg transition-all">
          <h2 className="font-semibold text-xl">Ford F-150</h2>
          <img
            className="w-[200px] hover:scale-110 transition-all duration-700"
            src="https://vexstockimages.fastly.carvana.io/stockimages/2020_FORD_F150 REGULAR CAB_XL PICKUP 2D 6 1/2 FT_WHITE_stock_desktop_1920x1080.png?v=1645590388.697?height=auto&width=275"
            alt="Ford F-150"
          />
        </div>
        <div className="bg-white rounded lg:w-[700px] md:w-[500px] w-[400px] flex items-center justify-between px-8 cursor-pointer shadow hover:shadow-lg transition-all">
          <h2 className="font-semibold text-xl">Chevrolet Equinox</h2>
          <img
            className="w-[200px] hover:scale-110 transition-all duration-700"
            src="https://vexstockimages.fastly.carvana.io/stockimages/2020_Chevrolet_Equinox_LT Sport Utility 4D_BLACK_stock_desktop_1920x1080.png?height=auto&width=275"
            alt="Chevrolet Equinox"
          />
        </div>
        <div className="bg-white rounded lg:w-[700px] md:w-[500px] w-[400px] flex items-center justify-between px-8 cursor-pointer shadow hover:shadow-lg transition-all">
          <h2 className="font-semibold text-xl">Ford Mustang</h2>
          <img
            className="w-[200px] hover:scale-110 transition-all duration-700"
            src="https://vexstockimages.fastly.carvana.io/stockimages/2020_FORD_MUSTANG_GT PREMIUM COUPE 2D_ORANGE_stock_desktop_1920x1080.png?v=1645589228.182?height=auto&width=275"
            alt="Ford Mustang"
          />
        </div>
      </div>
    </div>
  );
}

export default CardsGreatValue;
