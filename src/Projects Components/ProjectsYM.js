import React from "react";

import { Fade } from "react-awesome-reveal";

function ProjectsMC() {
  return (
    <>
      <Fade>
        <div className="flex justify-center pt-6 text-2xl">
          <h1>Yoga Mountain</h1>
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
              src="https://raw.githubusercontent.com/Dan-James765/Portfolio-Site-/main/src/scrnli_5_18_2021_2-43-19%20PM.png"
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
                  The background home site was created via CSS & HTML
                  fundamentals.CSS Hover was used in order to improve the UI. I
                  also installed and used React icons for the logo.
                </li>
                <li className="pb-1">
                  The header was also created via flexbox and appropriate use of
                  gap, margin and padding property.
                </li>
                <li className="pb-1">
                  The background was imported via a URL function in CSS from the
                  net. I also centered the logo with the appropriate justify and
                  flex properties.
                </li>
                <li className="pb-1">
                  The buttons were created via HTML button property and styled
                  via CSS. I used the gap property to create the appropriate
                  spacing between the two buttons.
                </li>
              </div>
            </div>
          </div>
        </div>
      </Fade>
      <Fade>
        <div className="flex justify-center gap-28 pb-12">
          <div className=" rounded overflow-hidden pt-3">
            <img
              className="max-w-3xl"
              src="https://raw.githubusercontent.com/Dan-James765/Portfolio-Site-/main/src/scrnli_5_18_2021_2-41-23%20PM.png"
              alt=""
            />
          </div>

          <div className="flex justify-center pt-3 gap-5">
            <div className="h-full w-96 p-4 border-2 rounded shadow-lg transform hover:scale-105 delay-75">
              <h1 className="flex justify-center font-semibold ">
                Code Explained
              </h1>
              <div className="text-xs text-justify">
                <li className="pb-1">
                  The side nav bar was created via UseState & CSS. Namely, I
                  used an OnClick Function and a UseState hook to manage the
                  change of icons from bars to an x.
                </li>
                <li className="pb-1">
                  Moreover, I then used the visibility property in CSS to manage
                  when the navbar would appear. Naturally, it would appear when
                  the icon was clicked.
                </li>
                <li className="pb-1">
                  Lastly, I used flexbox and flex columns to create the
                  respective column feel.
                </li>
              </div>
            </div>
          </div>
        </div>
      </Fade>
      <Fade>
        <div className="flex justify-center gap-28 pb-12">
          <div className=" rounded overflow-hidden pt-3">
            <img
              className="max-w-3xl object-contain"
              src="https://raw.githubusercontent.com/Dan-James765/Portfolio-Site-/main/src/scrnli_5_18_2021_2-51-42%20PM.png"
              alt=""
            />
          </div>

          <div className="flex justify-center pt-3 gap-5  ">
            <div className="h-full w-96 p-4 border-2 rounded shadow-lg transform hover:scale-105 delay-75">
              <h1 className="flex justify-center font-semibold ">
                Code Explained
              </h1>
              <div className="text-xs text-justify">
                <li className="pb-1">
                  The parts of the sign in page which deserve further inspection
                  are the input fields and the backend.
                </li>
                <li className="pb-1">
                  In regards to the input field, this was created with a simple
                  HTML input class and styled appropriately.
                </li>
                <li className="pb-1">
                  In terms of the backend, I used firebase to connect the site
                  to users. I also used the useHistory & useDispatch hooks to
                  connect the user to the backend and ensured that when the user
                  logged in, it persisted.
                </li>
                <li className="pb-1">
                  I used the Email&Password authentication that is produced via
                  firebase, and also used the catch function to invariably catch
                  any errors that may have arisen.
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
              src="https://raw.githubusercontent.com/Dan-James765/Portfolio-Site-/main/src/scrnli_5_18_2021_2-56-41%20PM.png"
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
                  This page was created off of the back of the Sign In page.
                  React allows the programmer to easily duplicate and alter
                  components. Therefore, I made sure to use past components
                  rather than repeating work.
                </li>
                <li className="pb-1">
                  The useState hook was used for all the different input fields
                  in addition to the useHistory hook and the useDispatch hook.
                </li>
                <li className="pb-1">
                  I also used the 'e.prevent default' function to stop the
                  buttons on the page from constantly refreshing the page rather
                  than handling the change in the input field.
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
              src="https://raw.githubusercontent.com/Dan-James765/Portfolio-Site-/main/src/scrnli_5_18_2021_3-01-25%20PM.png"
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
                  This page acts as the account page that user will see after
                  they have successfully logged in. The useHistory hook was used
                  in order to have the user's information persist as they
                  navigate through the site.
                </li>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
}

export default ProjectsMC;
