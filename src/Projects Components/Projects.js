import React from "react";
import CardHomeScreen from "../Card Components/CardHomeScreen";
import img1 from "C:/Users/danja/React Projects/Portfolio SiteSS/xtp/src/b7c2ba48-a757-4bda-af17-f7b57bed1e72.png";
import img2 from "C:/Users/danja/React Projects/Portfolio SiteSS/xtp/src/b820af3c-a0dd-499d-986f-0283dcd54415.png";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <>
      <Fade>
        <div className="flex justify-center pt-6 text-2xl">
          <h1>Project Code Explained</h1>
        </div>
        <div className="pt-2">
          <hr className="border-gray-400 flex justify-center m-auto border-4 w-32" />
        </div>
        <div className="flex flex-row gap-x-12 justify-center pt-10 pb-20">
          <div>
            <Link to="/yogamountain">
              <CardHomeScreen info="Yoga Mountain Web App" image={img1} />
            </Link>
          </div>
          <div>
            <Link to="/mcdonald's">
              <CardHomeScreen info="McDonald's Web App" image={img2} />
            </Link>
          </div>
        </div>
      </Fade>
    </>
  );
}

export default Projects;
