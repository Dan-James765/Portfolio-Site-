import React from "react";

import { Fade } from "react-awesome-reveal";

function ProjectsMC2() {
  return (
    <>
      <Fade>
        <div className="flex justify-center pt-6 text-2xl">
          <h1>Mcdonald's Web App</h1>
        </div>
        <div className="pt-2 pb-6">
          <hr className="border-gray-400 flex justify-center m-auto border-4 w-32" />
        </div>
      </Fade>
      <Fade>
        <div className="flex justify-center gap-28 pb-12">
          <div className="rounded overflow-hidden pt-3">
            <img
              className="max-w-3xl"
              src="https://raw.githubusercontent.com/Dan-James765/Portfolio-Site-/main/src/b7c2ba48-a757-4bda-af17-f7b57bed1e72.png"
              alt=""
            />
          </div>

          <div className="flex justify-center pt-3 gap-5   ">
            <div className="h-full w-96 p-4 border-2 rounded shadow-lg transform hover:scale-105 delay-75">
              <h1 className="flex justify-center font-semibold ">
                Code Explained
              </h1>
              <div className="text-xs text-justify">
                <li className="pb-1">
                  The header animations were created via Tailwind CSS & Flexbox.
                  Naturally, the align, flex and justify properties were used to
                  create the spacing.
                </li>
              </div>
            </div>
          </div>
        </div>
      </Fade>
      <Fade>
        <div className="flex justify-center gap-28 pb-12">
          <div className="rounded overflow-hidden pt-3">
            <img
              className="max-w-3xl"
              src="https://raw.githubusercontent.com/Dan-James765/Portfolio-Site-/main/src/scrnli_5_18_2021_4-05-35%20PM.png"
              alt=""
            />
          </div>

          <div className="flex justify-center pt-3 gap-5   ">
            <div className="h-full w-96 p-4 border-2 rounded shadow-lg transform hover:scale-105 delay-75">
              <h1 className="flex justify-center font-semibold ">
                Code Explained
              </h1>
              <div className="text-xs text-justify">
                <li className="pb-1">
                  The two banners were created via utilising object contain
                  properties and max width properties as well. This ensured that
                  the photos will be the same size.
                </li>
                <li className="pb-1">
                  The buttons seen also linked to the menu page for the user. I
                  also used the hover property to improve the UX as well.
                </li>
              </div>
            </div>
          </div>
        </div>
      </Fade>
      <Fade>
        <div className="flex justify-center gap-28 pb-12">
          <div className="rounded overflow-hidden pt-3">
            <img
              className="max-w-3xl"
              src="https://raw.githubusercontent.com/Dan-James765/Portfolio-Site-/main/src/scrnli_5_18_2021_4-06-01%20PM.png"
              alt=""
            />
          </div>

          <div className="flex justify-center pt-3 gap-5   ">
            <div className="h-full w-96 p-4 border-2 rounded shadow-lg transform hover:scale-105 delay-75">
              <h1 className="flex justify-center font-semibold ">
                Code Explained
              </h1>
              <div className="text-xs text-justify">
                <li className="pb-1">
                  The cards seen on the screen were created as separate
                  components, which allowed for easy duplication.
                </li>
                <li className="pb-1">
                  I used various width and height properties to ensure that the
                  photos would all remain the same size.
                </li>
                <li className="pb-1">
                  The shadow property and transform scale property was also used
                  to create a nice expansion hover effect. These cards link to
                  the menu page and therefore give a seamless UI for the user.
                </li>
              </div>
            </div>
          </div>
        </div>
      </Fade>
      <Fade>
        <div className="flex justify-center gap-28 pb-12">
          <div className="rounded overflow-hidden pt-3">
            <img
              className="max-w-3xl"
              src="https://raw.githubusercontent.com/Dan-James765/Portfolio-Site-/main/src/scrnli_5_18_2021_4-06-31%20PM.png"
              alt=""
            />
          </div>

          <div className="flex justify-center pt-3 gap-5   ">
            <div className="h-full w-96 p-4 border-2 rounded shadow-lg transform hover:scale-105 delay-75">
              <h1 className="flex justify-center font-semibold ">
                Code Explained
              </h1>
              <div className="text-xs text-justify">
                <li className="pb-1">
                  The menu page was created via the same cards that were used in
                  the home page.
                </li>
                <li className="pb-1">
                  I used the same component and merely changed the photo and
                  title, which I allowed me to create this page quite quickly.
                  Once the appropriate padding is added the page can be created
                  efficiently.
                </li>
              </div>
            </div>
          </div>
        </div>
      </Fade>
      <Fade>
        <div className="flex justify-center gap-28 pb-12">
          <div className="rounded overflow-hidden pt-3">
            <img
              className="max-w-3xl"
              src="https://raw.githubusercontent.com/Dan-James765/Portfolio-Site-/main/src/scrnli_5_18_2021_4-07-16%20PM.png"
              alt=""
            />
          </div>

          <div className="flex justify-center pt-3 gap-5   ">
            <div className="h-full w-96 p-4 border-2 rounded shadow-lg transform hover:scale-105 delay-75">
              <h1 className="flex justify-center font-semibold ">
                Code Explained
              </h1>
              <div className="text-xs text-justify">
                <li className="pb-1">
                  The footer was also created via flex properties.
                </li>
                <li className="pb-1">
                  I also used hover properties to improve the UI as well.
                </li>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
}

export default ProjectsMC2;
