import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router'

const Home = () => {
  return (
    <main className='h-svh'>

        <Navbar />

        <div className='h-[90svh] w-full bg-[url(/heroMobile.jpg)] lg:bg-[url(/heroBG2.png)] bg-cover bg-no-repeat bg-center'>
          <div className="left w-full lg:w-2/3 h-full py-40 sm:py-0 lg:py-40 flex flex-col justify-center lg:justify-start items-center lg:items-start gap-3">
            <h1 className='text-[var(--primary-color)] text-4xl sm:text-6xl  xl:text-7xl text-center lg:text-start sm:leading-16 lg:leading-none uppercase font-bold lg:px-10'>Know Your Fit. <br /> Close Your Gaps. <br /> Get Job-Ready.</h1>
            <p className='text-sm sm:text-lg text-[var(--text-color)] text-center lg:text-start mx-10 lg:mr-60'>Analyze your resume against any job description to uncover your match score, skill gaps, and a personalized preparation plan.</p>
            <Link to={"/home"} className='bg-[var(--primary-color)] sm:text-lg text-[var(--background-color)] px-6 py-2 rounded-full my-2 shadow-lg active:scale-95 transition duration-200 text-center mx-10'>Get Started</Link>
          </div>
        </div>

    </main>
  )
}

export default Home