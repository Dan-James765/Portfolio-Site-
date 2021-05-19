import React from "react";
import WorkBlockItem from "./WorkBlockItem";
import WorkBlockItem2 from "./WorkBlockItem2";
import { Fade } from "react-awesome-reveal";
function WorkBlock() {
  return (
    <>
      <Fade>
        <div className="flex justify-center pt-6 text-2xl">
          <h1>Work Experience & Education</h1>
        </div>
        <div className="py-2">
          <hr className="border-gray-400 flex justify-center m-auto border-4 w-32" />
        </div>
        <div className="flex justify-center pt-6">
          <WorkBlockItem
            jobtitle="Management Consultant"
            companyname="PA Consulting Group"
            date="January 2021 - Present"
            project="NHS Test & Trace"
          />
        </div>
        <div className="flex justify-center py-4">
          <h1 className="text-xs justify-center text-justify max-w-md italic text-gray-600">
            As of January 2021 I have been developing how NHS's test & trace
            operates. In particular I have been working on how Buckinghamshire
            can improve their system design. I have helped via creating org
            charts, running workshops and developing design principles which can
            be implemented for a smoother operating system.
          </h1>
        </div>
        <div className="flex justify-center pt-3 gap-5 ">
          <div className=" h-96 w-96 p-4 border-2 rounded shadow-lg transform hover:scale-105 delay-75">
            <h1 className="flex justify-center font-semibold ">
              Skills Developed
            </h1>
            <div className="text-xs text-justify">
              <li className="pb-1">Data science programming skills</li>
              <li className="pb-1">Business presentation skills</li>
              <li className="pb-1">
                Improved understanding of large scale systems and how they are
                integrated.
              </li>
              <li className="pb-1">Improved Powerpoint skills.</li>
              <li className="pb-1">Business understanding.</li>
            </div>
          </div>

          <div className=" h-96 w-96 p-4 border-2 rounded shadow-lg transform hover:scale-105 delay-75">
            <h1 className="flex justify-center font-semibold ">
              Project Achievements
            </h1>
            <div className="text-xs text-justify">
              <li className="pb-1">
                Developed the business design principles that would be utilised
                in the Buckinghamshire area of test and trace which improved my
                ability to understand business design in large scale frameworks.
              </li>
              <li className="pb-1">
                Led 8 workshops in regards to the various issues with 119 and
                helped to implement resolutions in the next phase of test &
                trace as per of May 17th.
              </li>
              <li className="pb-1">
                Utilised Python data science skills to evaluate data and
                concluded that forecasting was a major issue for many of the use
                cases as data indicated to a fall in production after
                organisation enrollment.{" "}
              </li>
              <li className="pb-1">
                Helped to develop and present org charts which highlighted how
                Use Cases could better communicate. Sharpening Powerpoint and
                business communication skills.
              </li>
            </div>
          </div>
        </div>
      </Fade>

      <Fade>
        <div className="flex justify-center pt-6">
          <WorkBlockItem
            jobtitle="Management Consultant"
            companyname="PA Consulting Group"
            date="November 2020 - January 2021"
            project="Frimley Data Lab"
          />
        </div>
        <div className="flex justify-center py-4">
          <h1 className="text-xs justify-center text-justify max-w-md italic text-gray-600">
            I collaborated in a team of 3 to analyse Frimley's cancer data.
            Notably, this data was novel and therefore allowed me to manipulate
            it freely and draw new insights for Frimley.
          </h1>
        </div>

        <div className="flex justify-center pt-3 gap-5 ">
          <div className=" h-96 w-96 p-4 border-2 rounded shadow-lg transform hover:scale-105 delay-75">
            <h1 className="flex justify-center font-semibold ">
              Skills Developed
            </h1>
            <div className="text-xs text-justify">
              <li className="pb-1">Data science programming skills.</li>
              <li className="pb-1">Workshop skills.</li>
              <li className="pb-1">
                Presenting technical outputs in a digestible manner for all to
                understand.
              </li>
              <li className="pb-1">Business communication skills.</li>
              <li className="pb-1">
                Learned about the backend to complex systems.
              </li>
            </div>
          </div>

          <div className=" h-96 w-96 p-4 border-2 rounded shadow-lg transform hover:scale-105 delay-75">
            <h1 className="flex justify-center font-semibold ">
              Project Achievements
            </h1>
            <div className="text-xs text-justify">
              <li className="pb-1">
                Implemented and improved programming skills to garner new
                insights in relation to the NHS’s Frimley cancer data.{" "}
              </li>
              <li className="pb-1">
                Spearheaded two workshop which outlined how to better utilise
                Frimley’s data and the respective frameworks that would allow
                for the greatest number of insights to be gained.
              </li>
            </div>
          </div>
        </div>
      </Fade>
      <Fade>
        <div className="flex justify-center pt-6">
          <WorkBlockItem
            jobtitle="Management Consultant"
            companyname="PA Consulting Group"
            date="October 2020 - November 2020"
            project="Somerset Local Authority"
          />
        </div>
        <div className="flex justify-center py-4">
          <h1 className="text-xs justify-center text-justify max-w-md italic text-gray-600">
            I collaborated in a team of 6 to help improve Somerset's Local
            Authority case bid for Somerset Stronger. Somerset Stronger being a
            government proposal that would greatly improve the domestic economy
            of Somerset.
          </h1>
        </div>

        <div className="flex justify-center pt-3 gap-5 ">
          <div className=" h-96 w-96 p-4 border-2 rounded shadow-lg transform hover:scale-105 delay-75">
            <h1 className="flex justify-center font-semibold ">
              Skills Developed
            </h1>
            <div className="text-xs text-justify">
              <li className="pb-1">Data science programming skills.</li>
              <li className="pb-1">Workshop skills.</li>
              <li className="pb-1">
                Improved understanding of large scale systems and how they are
                integrated.
              </li>
              <li className="pb-1">Improved Powerpoint skills.</li>
              <li className="pb-1">Business communication skills.</li>
            </div>
          </div>

          <div className=" h-96 w-96 p-4 border-2 rounded shadow-lg transform hover:scale-105 delay-75">
            <h1 className="flex justify-center font-semibold ">
              Project Achievements
            </h1>
            <div className="text-xs text-justify">
              <li className="pb-1">
                Assimilated and analysed data in relation to Somerset’s
                performance as a local authority which was utilised in their
                successful proposition to the government.
              </li>
              <li className="pb-1">
                Led 1 workshop which dived into the detail of how Somerset's
                financial and operating model would need to be updated for a
                successfull bid. This highlighted the importance of being able
                to listen to client need and respond quickly.
              </li>
              <li className="pb-1">
                Utilised Python data science skills to evaluate the various IMD
                data and how Somerset could use the data to illustrate why the
                bid would be so beneficial to the local community. Namely,
                presenting my findings remained to tbe the most interesting part
                as it required me to handle difficult questions and explain my
                conclusions in an open forum.
              </li>
              <li className="pb-1">
                Utilized data science skills to create reports and spreadsheets
                which outlined areas of potential weaknesses and strengths in
                Somerset’s KPI’s, which allowed for the team to make more
                informed decisions in relation to the proposition.
              </li>
            </div>
          </div>
        </div>
      </Fade>
      <Fade>
        <div className="flex justify-center pt-6">
          <WorkBlockItem
            jobtitle="Business Analyst"
            date="July 2019 - October 2020"
            companyname="Houzen"
          />
        </div>
        <div className="flex justify-center py-4">
          <h1 className="text-xs justify-center text-justify max-w-md italic text-gray-600">
            Internship at a technology startup that focused on the real estate
            industry. A large portion of my time was spent either looking at the
            front end and helping to improve their service or talking about how
            the platform can help clients. This was an especially useful
            experience as it honed my business communication skills greatly.
          </h1>
        </div>

        <div className="flex justify-center pt-3 gap-5 ">
          <div className=" h-96 w-96 p-4 border-2 rounded shadow-lg transform hover:scale-105 delay-75">
            <h1 className="flex justify-center font-semibold ">
              Skills Developed
            </h1>
            <div className="text-xs text-justify">
              <li className="pb-1">Front end react skills.</li>
              <li className="pb-1">Business communication skills. </li>
              <li className="pb-1">
                Understanding of how customers utilise technology
              </li>
              <li className="pb-1">Improved presentation skills.</li>
            </div>
          </div>

          <div className=" h-96 w-96 p-4 border-2 rounded shadow-lg transform hover:scale-105 delay-75">
            <h1 className="flex justify-center font-semibold ">
              Project Achievements
            </h1>
            <div className="text-xs text-justify">
              <li className="pb-1">
                Exhibited leadership by spearheading the research project
                regarding one of the failing accounts, as a result of these six
                weeklong processes I was able to identify the key issues and
                administer new strategies that led to a 43% improvement upon the
                account.
              </li>
              <li className="pb-1">
                Implemented great customer service skills to help Houzen’s
                customers find the right online platforms according to their
                needs, during my internship I was tasked with consulting over 24
                customers daily, which greatly improved my problem-solving
                skills and confidence.
              </li>
            </div>
          </div>
        </div>
      </Fade>
      <Fade>
        <div className="flex justify-center pt-6">
          <WorkBlockItem
            jobtitle="Founder"
            date="August 2017 - January 2019"
            companyname="Camping Business - Ares"
          />
        </div>
        <div className="flex justify-center py-4">
          <h1 className="text-xs justify-center text-justify max-w-md italic text-gray-600">
            Created a camping business whilst at university. This was an
            excellent experience as it honed my business communication skills
            and highlighted the importance of being able to run workshops and
            presentations.
          </h1>
        </div>

        <div className="flex justify-center pt-3 gap-5 ">
          <div className=" h-96 w-96 p-4 border-2 rounded shadow-lg transform hover:scale-105 delay-75">
            <h1 className="flex justify-center font-semibold ">
              Skills Developed
            </h1>
            <div className="text-xs text-justify">
              <li className="pb-1">Sales skills.</li>
              <li className="pb-1">Business communication skills. </li>
              <li className="pb-1">
                Understanding of how customers utilise technology
              </li>
            </div>
          </div>

          <div className=" h-96 w-96 p-4 border-2 rounded shadow-lg transform hover:scale-105 delay-75">
            <h1 className="flex justify-center font-semibold ">
              Project Achievements
            </h1>
            <div className="text-xs text-justify">
              <li className="pb-1">
                Spearheaded the formulation and orchestration of a camping
                business that sold over £8,000 worth of camping equipment in
                only 10 months as a new entrant, this followed because of great
                collaboration and a willingness to listen and learn from each
                member of staff.
              </li>
              <li className="pb-1">
                Streamlined the production process as I was able to slash fixed
                costs by 30% as a result of negotiating pricing and fees with
                vendors while ensuring the continuation and enhancements of
                services.
              </li>
              <li className="pb-1">
                Implemented unique ways to market to clients which included 4th
                wall breaking video graphic content which propelled the average
                monthly revenue by 35%
              </li>
            </div>
          </div>
        </div>
      </Fade>
      <Fade>
        <div className="flex justify-center pt-6">
          <WorkBlockItem2
            jobtitle="MSc Entrepreneurship & Business Management "
            date="2019 - 2020"
            grade="Pass"
            companyname="Durham University"
          />
        </div>
        <div className="flex justify-center pt-6">
          <WorkBlockItem2
            jobtitle="BA Philosophy (Hons)"
            date="2016 – 2019
          "
            grade="2.1"
            companyname="Warwick University"
          />
        </div>
        <div className="flex justify-center pt-6">
          <WorkBlockItem2
            jobtitle="A Levels"
            date="2014 – 2016
          "
            grade="AAB"
            companyname="Caterham School"
          />
        </div>
        <div className="flex justify-center pt-6">
          <WorkBlockItem2
            jobtitle="GCSE's"
            date="2012 – 2014
          "
            grade="8A*'s 3A's"
            companyname="Whitgift School"
          />
        </div>
      </Fade>
    </>
  );
}

export default WorkBlock;
