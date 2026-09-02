import React from "react";
import NavbarSkeleton from "./NavbarSkeleton";

const InterviewSkeleton = () => {
  return (
    <div>
      <NavbarSkeleton />

      <main className="h-full w-full bg-[var(--background-color)]">
        <div className="h-[90dvh] p-5 hidden lg:block animate-pulse">
          <div className="main-container bg-gray-400 h-full w-full bg-[var(--card-color)] border-2 border-[var(--border-color)] shadow-xl flex justify-center rounded-lg">
            {/* LEFT SIDE */}
            <div className="left h-full w-1/4 p-6 flex flex-col justify-between">
              <div className="flex flex-col gap-2">
                <div className="w-full flex flex-col gap-1">
                  <h2 className="h-4 rounded w-1/3 bg-gray-300"></h2>
                  <div className="w-full border-2 border-[var(--border-color)]"></div>
                </div>

                <div className="sections">
                  <ul className="flex flex-col w-full gap-2">
                    <li
                      className={`flex items-center gap-1 px-1 py-2 rounded bg-gray-300`}
                    ></li>
                    <li
                      className={`flex items-center gap-1 px-1 py-2 rounded bg-gray-300`}
                    ></li>
                    <li
                      className={`flex items-center gap-1 px-1 py-2 rounded bg-gray-300`}
                    ></li>
                  </ul>
                </div>
              </div>

              {/* GENERATE RESUME */}
              <div className="w-full flex justify-center">
                <button className="text-[var(--background-color)] w-4/5 bg-gray-300 p-3 py-6 rounded cursor-pointer active:scale-95 transition duration-200 font-semibold flex items-center justify-center"></button>
              </div>
            </div>

            {/* CENTER */}
            <div className="center h-full w-2/4 border-r-2 border-l-2 border-[var(--border-color)]">
              <div className="h-[10%] flex items-center px-4 border-b border-[var(--border-color)] shadow-lg">
                <h1 className="h-8 w-2/3 rounded bg-gray-300"></h1>
              </div>

              <div className="h-[90%] overflow-y-auto p-4 scrollbar-thumb-[var(--secondary-text-color)]/80 scrollbar-thin"></div>
            </div>

            {/* RIGHT SIDE */}
            <div className="right h-full w-1/4 flex flex-col gap-2">
              <div className="match-score flex flex-col justify-center items-center gap-2 h-[50%] p-6">
                <h2 className="h-4 rounded w-1/3 bg-gray-300"></h2>

                <div
                  className="circle rounded-full flex flex-col gap-2 justify-center items-center border-4 
            border-gray-300 h-45 w-45"
                >
                  <h2 className="h-6 px-10 bg-gray-300 rounded"></h2>
                </div>

                <p className="text-lg font-semibold text-center"></p>
              </div>

              <div className="w-full border-2 border-[var(--border-color)]"></div>

              <div className="skill-gaps h-[50%] p-2 flex flex-col gap-4">
                <h2 className="h-4 rounded w-1/3 bg-gray-300"></h2>

                <ul className="h-[90%] flex flex-col gap-2 overflow-y-auto scrollbar-thin">
                  <li className="h-10 w-full bg-gray-300 rounded"></li>
                  <li className="h-10 w-full bg-gray-300 rounded"></li>
                  <li className="h-10 w-full bg-gray-300 rounded"></li>
                  <li className="h-10 w-full bg-gray-300 rounded"></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="block lg:hidden h-[90dvh] px-4 pt-14 relative">
          <div className={`sidebarOpen absolute top-0 left-0 mx-4 my-2 z-10`}></div>
          {/* LEFT */}

          {/* CONTAINER */}
          <div className="h-full w-full rounded flex bg-gray-400 animate-pulse">
            {/* RIGHT */}
            <div className="right w-full h-full ">
              <div className="center h-full w-full border-r-2 border-l-2 border-[var(--border-color)]">
                <div className="h-[10%] flex items-center px-4 border-b border-[var(--border-color)] shadow-lg">
                  <h1 className="h-6 bg-gray-300 w-2/3"></h1>
                </div>

                <div className="h-[90%] overflow-y-auto p-4 flex flex-col gap-2">
                  <div className="flex flex-col gap-4 my-2 w-full">

                    <div className="w-full flex flex-col gap-2">
                      <h2 className="bg-gray-300 h-4 rounded w-1/3 sm:w-1/4"></h2>
                      <p className="h-2 bg-gray-300"></p>
                      <p className="h-2 bg-gray-300"></p>
                      <p className="h-2 bg-gray-300"></p>
                    </div>

                     <div className="w-full flex flex-col gap-2">
                      <h2 className="bg-gray-300 h-4 rounded w-1/3 sm:w-1/4"></h2>
                      <p className="h-2 bg-gray-300"></p>
                      <p className="h-2 bg-gray-300"></p>
                      <p className="h-2 bg-gray-300"></p>
                    </div>

                     <div className="w-full flex flex-col gap-2">
                      <h2 className="bg-gray-300 h-4 rounded w-1/3 sm:w-1/4"></h2>
                      <p className="h-2 bg-gray-300"></p>
                      <p className="h-2 bg-gray-300"></p>
                      <p className="h-2 bg-gray-300"></p>
                    </div>

                    <div className="w-full border-2 border-[var(--border-color)] shadow-lg"></div>
                  </div>

                  <div className="flex flex-col gap-4 my-2 w-full">
                    <div className="w-full flex flex-col gap-2">
                      <h2 className="bg-gray-300 h-4 rounded w-1/3 sm:w-1/4"></h2>
                      <p className="h-2 bg-gray-300"></p>
                      <p className="h-2 bg-gray-300"></p>
                      <p className="h-2 bg-gray-300"></p>
                    </div>

                     <div className="w-full flex flex-col gap-2">
                      <h2 className="bg-gray-300 h-4 rounded w-1/3 sm:w-1/4"></h2>
                      <p className="h-2 bg-gray-300"></p>
                      <p className="h-2 bg-gray-300"></p>
                      <p className="h-2 bg-gray-300"></p>
                    </div>

                     <div className="w-full flex flex-col gap-2">
                      <h2 className="bg-gray-300 h-4 rounded w-1/3 sm:w-1/4"></h2>
                      <p className="h-2 bg-gray-300"></p>
                      <p className="h-2 bg-gray-300"></p>
                      <p className="h-2 bg-gray-300"></p>
                    </div>

                    <div className="w-full border-2 border-[var(--border-color)] shadow-lg"></div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default InterviewSkeleton;
