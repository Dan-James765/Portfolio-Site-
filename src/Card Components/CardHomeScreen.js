import React from "react";

function CardHomeScreen({ info, image }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg transform hover:scale-105 delay-75">
      <img src={image} className="" alt="" />
      <div className="px-6 py-4">
        <h1 className="font-semibold text-lg mb-2 text-center">{info}</h1>
      </div>
    </div>
  );
}

export default CardHomeScreen;
