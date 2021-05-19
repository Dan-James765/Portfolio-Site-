import React from "react";
import ProgrammingSkillsItem from "./ProgrammingSkillsItem";

import { GrReactjs } from "react-icons/gr";
import { SiHtml5, SiNextDotJs } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io";
import { Fade } from "react-awesome-reveal";

function ProgrammingSkillsBlock() {
  return (
    <>
      <Fade>
        <div className="flex justify-center pt-6 text-2xl">
          <h1>Programming Skills</h1>
        </div>
        <div className="py-2">
          <hr className="border-gray-400 flex justify-center m-auto border-4 w-32" />
        </div>
        <div className="flex justify-center pt-6">
          <ProgrammingSkillsItem jobtitle="React" Icon={<GrReactjs />} />
        </div>
      </Fade>

      <Fade>
        <div className="flex justify-center py-4">
          <h1 className="text-xs justify-center text-justify max-w-md italic text-gray-600">
            React JS has been the primary tool that I have been using for web
            development. I thoroughly enjoy the power that React givers to the
            developer as it is fairly easy to create some quite complicated
            projects. Even this site, in merely a weekend I was able to create
            this web application. This would naturally be far more difficult
            with vanilla Javascript. Moving forward I am hoping to become
            increasingly better with React until I can build very complicated
            projects with little issue. Lots of work to be done!
          </h1>
        </div>
        <div className="flex justify-center pt-3 gap-5 ">
          <div className=" h-96 w-96 p-4 border-2 rounded shadow-lg transform hover:scale-105 delay-75">
            <h1 className="flex justify-center font-semibold ">Skills</h1>
            <div className="text-xs text-justify">
              <li className="pb-1">Fluent use of ES7</li>
              <li className="pb-1">Good understanding of JavaScript.</li>
              <li className="pb-1">
                Familiarity in working with HTTP(S), RESTful APIs.
              </li>
              <li className="pb-1">Experience with front-end build tools.</li>
              <li className="pb-1">Strong React fundamentals</li>
            </div>
          </div>

          <div className=" h-96 w-96 p-4 border-2 rounded shadow-lg transform hover:scale-105 delay-75">
            <h1 className="flex justify-center font-semibold ">
              Project Highlights
            </h1>
            <div className="text-xs text-justify">
              <li className="pb-1">
                Built <span className="invisible">a</span>
                <a
                  rel="noopener noreferrer"
                  href="https://yoga-mountain.vercel.app/"
                  target="_blank"
                  className="cursor-pointer text-xs hover:text-gray-500 underline"
                >
                  Yoga Mountain Web App
                </a>
                <span className="invisible">a</span> from scratch utilising
                numerous React tools. This included, React Router, React Icons
                and Firebase. This greatly honed my react skills and has now
                given me to utilise these tools without further direction from
                Stack Overflow or Google.
              </li>
              <li className="pb-1">
                Built this portfolio site from scratch in 48 hours. Utilised the
                skills that I developed from the{" "}
                <a
                  rel="noopener noreferrer"
                  href="https://yoga-mountain.vercel.app/"
                  target="_blank"
                  className="cursor-pointer text-xs hover:text-gray-500 underline"
                >
                  Yoga Mountain Web App
                </a>{" "}
                <a
                  rel="noopener noreferrer"
                  href="https://macdonald-s-app.vercel.app/"
                  target="_blank"
                  className="cursor-pointer text-xs py-1 hover:text-gray-500 underline"
                >
                  Macdonald's Web App.
                </a>{" "}
                <span className="invisible">a</span>
              </li>
              <li className="pb-1">
                Utilised a number of React Hooks in{" "}
                <a
                  rel="noopener noreferrer"
                  href="https://yoga-mountain.vercel.app/"
                  target="_blank"
                  className="cursor-pointer text-xs hover:text-gray-500 underline"
                >
                  Yoga Mountain Web App
                </a>
                <span className="invisible">a</span>project. This included, Use
                History, Use State & UseDispatch. Therefore improving my
                understanding of React as a whole.
              </li>
            </div>
          </div>
        </div>
      </Fade>

      <Fade>
        <div className="flex justify-center pt-6">
          <ProgrammingSkillsItem jobtitle="NEXT JS" Icon={<SiNextDotJs />} />
        </div>

        <div className="flex justify-center py-4">
          <h1 className="text-xs justify-center text-justify max-w-md italic text-gray-600">
            NEXT JS is a tool that I have been learning how to use as of
            February 2021. NEXT Js is an excellent tool and already love the
            functionality that it offers. Notably, I love how it has static and
            dynamic routing integrated. It also has improved SEO performance for
            sites as well. With this considered I am going to spend a lot of
            time mastering NEXT JS as I believe developers will begin to utilise
            universally in the forthcoming years.
          </h1>
        </div>
        <div className="flex justify-center pt-3 gap-5 ">
          <div className=" h-96 w-96 p-4 border-2 rounded shadow-lg transform hover:scale-105 delay-75">
            <h1 className="flex justify-center font-semibold ">Skills</h1>
            <div className="text-xs text-justify">
              <li className="pb-1">
                Use of cutting edge technology in NEXT JS.
              </li>
            </div>
          </div>

          <div className=" h-96 w-96 p-4 border-2 rounded shadow-lg transform hover:scale-105 delay-75">
            <h1 className="flex justify-center font-semibold ">
              Project Highlights
            </h1>
            <div className="text-xs text-justify">
              <li className="pb-1">
                Utilised NEXT JS in Hulu project (not yet deployed). This
                improved my understanding of NEXT js and its potential benefits
                beyond React.
              </li>
            </div>
          </div>
        </div>
      </Fade>
      <Fade>
        <div className="flex justify-center pt-6">
          <ProgrammingSkillsItem
            jobtitle="Tailwind CSS"
            Icon={<SiTailwindcss />}
          />
        </div>

        <div className="flex justify-center py-4">
          <h1 className="text-xs justify-center text-justify max-w-md italic text-gray-600">
            Every programmer begins with CSS and learns the basics of CSS in
            order to improve as a web developer. Nonetheless, I tried tailwind
            CSS on one of my projects and have never looked back since. Tailwind
            CSS offers developers more functionality with less code and is also
            much easier to learn as a whole. Companies are yet to catch on but I
            believe that more and more developers will begin to migrate to
            Tailwind CSS.
          </h1>
        </div>
        <div className="flex justify-center pt-3 gap-5 ">
          <div className=" h-96 w-96 p-4 border-2 rounded shadow-lg transform hover:scale-105 delay-75">
            <h1 className="flex justify-center font-semibold ">Skills</h1>
            <div className="text-xs text-justify">
              <li className="pb-1">Fluent use of Tailwind CSS.</li>
              <li className="pb-1">
                Improved understanding of CSS as a whole.
              </li>
            </div>
          </div>

          <div className=" h-96 w-96 p-4 border-2 rounded shadow-lg transform hover:scale-105 delay-75">
            <h1 className="flex justify-center font-semibold ">
              Project Highlights
            </h1>
            <div className="text-xs text-justify">
              <li className="pb-1">
                Used Tailwind CSS in this portfolio site and in{" "}
                <a
                  rel="noopener noreferrer"
                  href="https://macdonald-s-app.vercel.app/"
                  target="_blank"
                  className="cursor-pointer text-xs py-1 hover:text-gray-500 underline"
                >
                  Macdonald's Web App.
                </a>{" "}
                <span className="invisible">a</span>
              </li>
              <li className="pb-1">
                Used animations in{" "}
                <a
                  rel="noopener noreferrer"
                  href="https://macdonald-s-app.vercel.app/"
                  target="_blank"
                  className="cursor-pointer text-xs py-1 hover:text-gray-500 underline"
                >
                  Macdonald's Web App
                </a>{" "}
                <span className="invisible">a</span> and portfolio site in
                header and throughout project.
              </li>
              <li className="pb-1">
                Built cards FROM scratch and implemented transform and
                transition from own understanding of tailwind CSS.
              </li>
              <li className="pb-1">
                Created seamless UX via tailwind CSS, utilising conventions such
                as shadow, border, transform, hover, focus and more to create an
                excellent experience.
              </li>
            </div>
          </div>
        </div>
      </Fade>
      <Fade>
        <div className="flex justify-center pt-6">
          <ProgrammingSkillsItem jobtitle="CSS" Icon={<IoLogoCss3 />} />
        </div>

        <div className="flex justify-center py-4">
          <h1 className="text-xs justify-center text-justify max-w-md italic text-gray-600">
            As outlined in the tailwind CSS section, tailwind is my primary tool
            for writing CSS code. Nonetheless, writing tailwind CSS code hones
            your CSS skills greatly. With this considered, I feel confident as
            ever using CSS.
          </h1>
        </div>
        <div className="flex justify-center pt-3 gap-5 ">
          <div className=" h-96 w-96 p-4 border-2 rounded shadow-lg transform hover:scale-105 delay-75">
            <h1 className="flex justify-center font-semibold ">Skills</h1>
            <div className="text-xs text-justify">
              <li className="pb-1">Fluent use of CSS.</li>
              <li className="pb-1">Strong understanding of CSS conventions.</li>
              <li className="pb-1">Can actually center a div!</li>
            </div>
          </div>

          <div className=" h-96 w-96 p-4 border-2 rounded shadow-lg transform hover:scale-105 delay-75">
            <h1 className="flex justify-center font-semibold ">
              Project Highlights
            </h1>
            <div className="text-xs text-justify">
              <li className="pb-1">
                Used CSS in Yoga Mountain Web app to create a seamless
                experience.
              </li>
            </div>
          </div>
        </div>
      </Fade>
      <Fade>
        <div className="flex justify-center pt-6">
          <ProgrammingSkillsItem jobtitle="HTML" Icon={<SiHtml5 />} />
        </div>

        <div className="flex justify-center py-4">
          <h1 className="text-xs justify-center text-justify max-w-md italic text-gray-600">
            Using React has greatly improved my HTML skills. Namely, the best
            programmers that are excellent with HTM, fluently understand how
            different HTML conventions can be utilised. As of January 2021, my
            understanding of HTML remains strong. Nonetheless, I want to learn
            numerous different HTML conventions as I believe ti will make me a
            better programmer.
          </h1>
        </div>
        <div className="flex justify-center pt-3 gap-5 ">
          <div className=" h-96 w-96 p-4 border-2 rounded shadow-lg transform hover:scale-105 delay-75">
            <h1 className="flex justify-center font-semibold ">Skills</h1>
            <div className="text-xs text-justify">
              <li className="pb-1">Fluent use of HTML.</li>
              <li className="pb-1">
                Strong understanding of HTML conventions.
              </li>
            </div>
          </div>

          <div className=" h-96 w-96 p-4 border-2 rounded shadow-lg transform hover:scale-105 delay-75">
            <h1 className="flex justify-center font-semibold ">
              Project Highlights
            </h1>
            <div className="text-xs text-justify">
              <li className="pb-1">
                Naturally, used HTML in all previous projects.
              </li>
            </div>
          </div>
        </div>
      </Fade>
      <Fade>
        <div className="flex justify-center pt-6">
          <ProgrammingSkillsItem
            jobtitle="Javascript"
            Icon={<SiJavascript />}
          />
        </div>

        <div className="flex justify-center py-4">
          <h1 className="text-xs justify-center text-justify max-w-md italic text-gray-600">
            Using react has improved my understanding of Javascript greatly.
            Namely, having great Javascript basics is key as I want to
            understand the language as a whole just in case a different
            framework such as Angular or a new technology that utilises
            Javascript becomes prominent.
          </h1>
        </div>
        <div className="flex justify-center pt-3 gap-5 ">
          <div className=" h-96 w-96 p-4 border-2 rounded shadow-lg transform hover:scale-105 delay-75">
            <h1 className="flex justify-center font-semibold ">Skills</h1>
            <div className="text-xs text-justify">
              <li className="pb-1">Strong understanding of Javascript.</li>
            </div>
          </div>

          <div className=" h-96 w-96 p-4 border-2 rounded shadow-lg transform hover:scale-105 delay-75">
            <h1 className="flex justify-center font-semibold ">
              Project Highlights
            </h1>
            <div className="text-xs text-justify">
              <li className="pb-1">
                Utilised Javascript for sidenav component in Yoga Mountain Web
                App project.
              </li>
              <li className="pb-1">
                Created many vanilla Javascript projects to hone Javascript
                skills.
              </li>
            </div>
          </div>
        </div>
      </Fade>
      <Fade>
        <div className="flex justify-center pt-6">
          <ProgrammingSkillsItem jobtitle="Redux" Icon={<SiRedux />} />
        </div>

        <div className="flex justify-center py-4">
          <h1 className="text-xs justify-center text-justify max-w-md italic text-gray-600">
            As of February 2021 my understanding of Redux remains at a
            fundamental level. Having used Redux in one of my projects I am
            planning to use it more to hone my understanding of Redux as a state
            management tool.
          </h1>
        </div>
        <div className="flex justify-center pt-3 gap-5 ">
          <div className=" h-96 w-96 p-4 border-2 rounded shadow-lg transform hover:scale-105 delay-75">
            <h1 className="flex justify-center font-semibold ">Skills</h1>
            <div className="text-xs text-justify">
              <li className="pb-1">Fundamental understanding of Redux.</li>
            </div>
          </div>

          <div className=" h-96 w-96 p-4 border-2 rounded shadow-lg transform hover:scale-105 delay-75">
            <h1 className="flex justify-center font-semibold ">
              Project Highlights
            </h1>
            <div className="text-xs text-justify">
              <li className="pb-1">
                Used Redux in Macdonald's Web App. Improving my understanding of
                state Management.
              </li>
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
}

export default ProgrammingSkillsBlock;
