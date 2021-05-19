import React from "react";
import CardHomeScreen from "../Card Components/CardHomeScreen";
import imagemc from "C:/Users/danja/React Projects/Portfolio SiteSS/xtp/src/b820af3c-a0dd-499d-986f-0283dcd54415.png";
import img2 from "C:/Users/danja/React Projects/Portfolio SiteSS/xtp/src/b7c2ba48-a757-4bda-af17-f7b57bed1e72.png";

function HeaderBlock() {
  return (
    <>
      <div className="flex justify-center pt-6 text-2xl">
        <h1>Explore Live Projects</h1>
      </div>
      <div className="pt-2">
        <hr className="border-gray-400 flex justify-center m-auto border-4 w-32" />
      </div>
      <div className="flex flex-row gap-x-12 justify-center pt-10 pb-20">
        <a
          rel="noopener noreferrer"
          href="https://yoga-mountain.vercel.app/"
          target="_blank"
        >
          <CardHomeScreen info="Yoga Mountain Web App" image={imagemc} />
        </a>

        <a
          rel="noopener noreferrer"
          href="https://macdonald-s-app.vercel.app/"
          target="_blank"
        >
          <CardHomeScreen info="McDonald's Web App" image={img2} />
        </a>
      </div>
    </>
  );
}

export default HeaderBlock;
