import React from "react";
import { GiGraduateCap } from "react-icons/gi";

function WorkBlockItem({ jobtitle, date, project, companyname, grade }) {
  return (
    <>
      <div className="flex flex-col">
        <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow flex flex-col items-center">
          <h1>{jobtitle}</h1>
          <h1>{companyname}</h1>
          <GiGraduateCap />
        </button>

        <h1 className="justify-center flex pt-2">{project}</h1>
        <h2 className="flex justify-center pt-2 text-xs text-gray-500">
          {date}
        </h2>
        <h2 className="flex justify-center pt-2 text-lg font-semibold">
          {grade}
        </h2>
      </div>
    </>
  );
}

export default WorkBlockItem;
