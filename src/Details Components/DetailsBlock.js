import React from "react";
import { Fade } from "react-awesome-reveal";

function DetailsBlock() {
  return (
    <>
      <Fade>
        <div>
          <div className="flex justify-center pt-6 text-2xl">
            <h1>Contact Details</h1>
          </div>
          <div className="pt-2">
            <hr className="border-gray-400 flex justify-center m-auto border-4 w-32" />
          </div>
          <div className="flex justify-center pt-8">
            <h2 className="flex flex-row text-xl">
              Contact Email:{" "}
              <h3 className="px-3 font-semibold">
                {" "}
                danieljames765@outlook.com
              </h3>
            </h2>
          </div>
          <div className="flex justify-center pt-8">
            <h2 className="flex flex-row text-xl">
              Contact Number:{" "}
              <h3 className="px-3 font-semibold"> +447590545960</h3>
            </h2>
          </div>
        </div>
      </Fade>
    </>
  );
}

export default DetailsBlock;
