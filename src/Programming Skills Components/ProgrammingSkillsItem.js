import React from "react";

function ProgrammingSkillsItem({ jobtitle, Icon }) {
  return (
    <>
      <div className="flex flex-col">
        <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow flex flex-col items-center">
          <h1>{jobtitle}</h1>
          {Icon}
        </button>
      </div>
    </>
  );
}

export default ProgrammingSkillsItem;
