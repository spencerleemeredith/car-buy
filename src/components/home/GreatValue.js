import React from "react";

import CardsGreatValue from "./CardsGreatValue";

function GreatValue() {
  return (
    <section className="bg-carvana-gray xl:h-[700px] py-12">
      <h1 className="text-center lg:text-3xl text-xl font-semibold text-gray-600 mt-4 mb-12">
        Shop Great Values
      </h1>
      <CardsGreatValue />
    </section>
  );
}

export default GreatValue;
