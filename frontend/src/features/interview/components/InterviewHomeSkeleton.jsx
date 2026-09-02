import React from 'react'
import NavbarSkeleton from './NavbarSkeleton'

const InterviewHomeSkeleton = () => {
  return (
    <div>
      <NavbarSkeleton />

      <main className=" py-10 px-10 sm:px-24 flex justify-center items-center flex-col gap-8 transition duration-200">

        <div className="h-[70svh] w-full p-4 rounded-lg bg-gray-400 shadow-lg main-container flex flex-col gap-4 transition duration-200 animate-pulse">
          <div className="top h-[85%] flex flex-col md:flex-row justify-center items-center rounded gap-2">
            {/* LEFT */}
            <div className="left h-[50%] md:h-full w-full md:w-1/2 rounded-lg transition duration-200">
              <div
                className="bg-gray-300 placeholder:text-[var(--text-color)] min-h-full w-full text-[var(--text-color)] p-2 rounded-lg outline-0 transition duration-200"
              ></div>
            </div>

            {/* RIGHT */}
            <div className="right h-[50%] md:h-full w-full md:w-1/2 flex flex-col gap-2 rounded-lg transition duration-200">
              <div className="bg-gray-300 p-2 rounded-lg h-[50%] md:min-h-[65%]"></div>

              <div
                className="bg-gray-300 h-[50%] md:min-h-[35%] rounded-lg flex flex-col items-center justify-center  animate-pulse"
               >
                {/* <img className="h-12" src={cloudArrowDown} alt="" /> */}
                <p className="h-4 rounded w-1/2 flex bg-gray-400"></p>
              </div>
            </div>
          </div>

          {/* BOTTOM */}
          <div className="bottom h-[15%] rounded-lg flex justify-center md:justify-between items-center px-2">
            <div className="hidden md:flex items-center gap-1 w-full">
              {/* <img className="h-8" src={infoSvg} alt="" /> */}
              <p className="h-4 w-1/4 rounded bg-gray-300">
                
              </p>
            </div>

            <div>
              <button
                className="bg-gray-300 w-28 px-4 py-4 rounded flex justify-center items-center gap-2 cursor-pointer active:scale-95 transition duration-200 font-bold transition duration-200 animate-pulse"
              >
                {/* <img className="h-8" src={stars} alt="stars" /> */}
                <p className='h-2 w-full bg-gray-400 rounded'></p>
              </button>
            </div>
          </div>
        </div>
      </main>

    </div>
  )
}

export default InterviewHomeSkeleton