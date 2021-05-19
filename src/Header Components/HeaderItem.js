import React from "react";

function HeaderItem({ Title, Icon }) {
  return (
    <>
      <div className="flex flex-col items-center cursor-pointer group w-12 sm:w-20  text-gray-900 ">
        <Icon className="h-16 mb-1 pt-6 text-2xl group-hover:text-gray-400" />
        <p className="opacity-0 group-hover:opacity-100 tracking-tight whitespace-nowrap animate-bounce text-bl hover:text-black ">
          {Title}
        </p>
      </div>
    </>
  );
}

export default HeaderItem;
