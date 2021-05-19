import React from "react";
import HeaderItem from "./HeaderItem";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import { GoFlame } from "react-icons/go";
import { MdWork } from "react-icons/md";
import { RiContactsBook2Fill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="flex shadow-md justify-center">
        <div className="flex pt-2">
          <Link to="/">
            <HeaderItem Title="Home" Icon={AiFillHome} />
          </Link>
          <Link to="/workexperience">
            <HeaderItem Title="Work Experience & Education" Icon={MdWork} />
          </Link>
          <Link to="/programmingskills">
            <HeaderItem Title="Programming Skills" Icon={FaReact} />
          </Link>

          <Link to="/projects">
            <HeaderItem Title="Projects" Icon={GoFlame} />
          </Link>

          <Link to="/details">
            <HeaderItem Title="Details" Icon={RiContactsBook2Fill} />
          </Link>

          <a
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/dan-james-52532914a/"
            target="_blank"
          >
            <HeaderItem Title="LinkedIn" Icon={AiFillLinkedin} />
          </a>

          <a
            rel="noopener noreferrer"
            href="https://github.com/Dan-James765"
            target="_blank"
          >
            <HeaderItem Title="GitHub" Icon={AiFillGithub} />
          </a>
        </div>
      </header>
    </>
  );
}

export default Header;
