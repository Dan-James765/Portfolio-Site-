import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

function Footer() {
  return (
    <>
      <Fade>
        <footer className="py-10">
          <hr className="w-full border-gray-300-800 flex justify-center m-auto border opacity-70" />
          <div className="flex flex-row justify-center pt-10 ">
            <div className="flex flex-col max-w-lg px-5">
              <h1 className="cursor-pointer font-bold hover:text-gray-800">
                Information
              </h1>
              <ul className="cursor-pointer text-xs py-1 hover:text-gray-500">
                Download CV
              </ul>
              <Link to="/details">
                <ul className="cursor-pointer text-xs py-1 hover:text-gray-500">
                  Details
                </ul>
              </Link>
              <Link to="/programmingskills">
                <ul className="cursor-pointer text-xs py-1 hover:text-gray-500">
                  Programming Skills
                </ul>
              </Link>
            </div>
            <div className="flex flex-col max-w-lg px-5">
              <h1 className="cursor-pointer font-bold hover:text-gray-800">
                Projects
              </h1>
              <a
                rel="noopener noreferrer"
                href="https://yoga-mountain.vercel.app/"
                target="_blank"
              >
                <ul className="cursor-pointer text-xs py-1 hover:text-gray-500">
                  Yoga Mountain Web App
                </ul>
              </a>
              <a
                rel="noopener noreferrer"
                href="https://macdonald-s-app.vercel.app/"
                target="_blank"
              >
                <ul className="cursor-pointer text-xs py-1 hover:text-gray-500">
                  Macdonald's Web App
                </ul>
              </a>
            </div>

            <div className=" flex text-3xl ">
              <a
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/dan-james-52532914a/"
                target="_blank"
              >
                <div className="hover:text-gray-400">
                  <AiFillLinkedin />
                </div>
              </a>
              <a
                rel="noopener noreferrer"
                href="https://github.com/Dan-James765"
                target="_blank"
              >
                <div className="hover:text-gray-400">
                  <AiFillGithub />
                </div>
              </a>
            </div>
          </div>
        </footer>
      </Fade>
    </>
  );
}

export default Footer;
