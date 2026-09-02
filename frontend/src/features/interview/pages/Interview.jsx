import React, { useEffect, useState } from "react";
import bulb from "../../../assets/bulb.svg";
import user from "../../../assets/user.svg";
import roadmap from "../../../assets/roadmap.svg";
import { Link } from "react-router";
import TechnicalQuestions from "../components/TechnicalQuestions";
import BehavioralQuestion from "../components/BehavioralQuestion";
import Roadmap from "../components/Roadmap";
import { useInterview } from "../hooks/useInterview";
import { useParams, useNavigate } from "react-router";
import stars from "../../../assets/stars.svg";
import { logout } from "../services/interview.api";
import Navbar from "../../../components/Navbar";
import hamburger from "../../../assets/hamburger.svg"
import cross from "../../../assets/cross.svg"
import InterviewSkeleton from "../components/InterviewSkeleton";

const Interview = () => {
  const [selectedTab, setSelectedTab] = useState("Technical Questions");
  const [selectedHeading, setSelectedHeading] = useState(selectedTab);
  const { report, getReportById, loading, getResumePdf } = useInterview();
  const { interviewId } = useParams();
  const [generatingResume, setGeneratingResume] = useState(false)

  const selectTab = (e) => {
    setSelectedTab(e);
  };
  useEffect(() => {
    setSelectedHeading(selectedTab);
  }, [selectedTab]);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const sideBarHandler = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleGeneratingResume = async ()=>{
    setGeneratingResume(true)
    try{
      await getResumePdf(interviewId)
    } catch (err){
      console.log(err)
    } finally{
      setGeneratingResume(false)
    }
  }

  console.log(report)

  if (loading || !report) {
    return (
      <InterviewSkeleton />
    );
  }

  return (
    <main className="h-full w-full bg-[var(--background-color)]">
      <Navbar />

      <div className="h-[90dvh] p-5 hidden lg:block">
        <div className="main-container h-full w-full bg-[var(--card-color)] border-2 border-[var(--border-color)] shadow-xl flex justify-center rounded-lg">
          {/* LEFT SIDE */}
          <div className="left h-full w-1/4 p-6 flex flex-col justify-between">
            <div>
              <div className="w-full">
                <h2 className="uppercase text-[var(--text-color)] font-semibold text-lg">
                  sections
                </h2>
                <div className="w-full border-2 border-[var(--border-color)]"></div>
              </div>

              <div className="sections">
                <ul className="flex flex-col w-full gap-0.5">
                  <li
                    onClick={(e) => {
                      selectTab(e.currentTarget.children[1].textContent);
                    }}
                    className={`flex items-center gap-1 px-1 py-2 rounded transition-all duration-300 cursor-pointer
                  ${
                    selectedTab == "Technical Questions"
                      ? "bg-[var(--primary-color)]/70 text-[var(--text-color)]"
                      : "text-[var(--secondary-text-color)] font-medium"
                  }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke={`${selectedTab == "Technical Questions" ? "#1e1b4b" : "#6b7280"}`}
                      className="size-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                      />
                    </svg>

                    <p>Technical Questions</p>
                  </li>

                  <li
                    onClick={(e) => {
                      selectTab(e.currentTarget.children[1].textContent);
                    }}
                    className={`flex items-center gap-1 px-1 py-2 rounded transition-all duration-200 cursor-pointer
                  ${
                    selectedTab == "Behavioural Questions"
                      ? "bg-[var(--primary-color)]/70 text-[var(--text-color)]"
                      : "text-[var(--secondary-text-color)] font-medium"
                  }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke={`${selectedTab == "Behavioural Questions" ? "#1e1b4b" : "#6b7280"}`}
                      className="size-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                    </svg>

                    <p>Behavioural Questions</p>
                  </li>

                  <li
                    onClick={(e) => {
                      selectTab(e.currentTarget.children[1].textContent);
                    }}
                    className={`flex items-center gap-1 px-1 py-2 rounded transition-all duration-200 cursor-pointer
                  ${
                    selectedTab == "Roadmap"
                      ? "bg-[var(--primary-color)]/70 text-[var(--text-color)]"
                      : "text-[var(--secondary-text-color)] font-medium"
                  }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke={`${selectedTab == "Roadmap" ? "#1e1b4b" : "#6b7280"}`}
                      className="size-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                      />
                    </svg>

                    <p>Roadmap</p>
                  </li>
                </ul>
              </div>
            </div>

            {/* GENERATE RESUME */}
            <div className="w-full flex justify-center">
              <button
                onClick={() => {
                  handleGeneratingResume()
                }}
                className="text-[var(--background-color)] w-4/5 bg-[var(--primary-color)] p-3 rounded cursor-pointer active:scale-95 transition duration-200 font-semibold flex items-center justify-center gap-2"
              >
                <img src={stars} alt="stars" className="h-8" />
                <p>{!generatingResume? "Generated resume": "Generating..."}</p>
              </button>
            </div>
          </div>

          {/* CENTER */}
          <div className="center h-full w-2/4 border-r-2 border-l-2 border-[var(--border-color)]">
            <div className="h-[10%] flex items-center px-4 border-b border-[var(--border-color)] shadow-lg">
              <h1 className="text-[var(--text-color)] text-4xl font-bold">
                {selectedHeading}
              </h1>
            </div>

            <div className="h-[90%] overflow-y-auto p-4 scrollbar-thumb-[var(--secondary-text-color)]/80 scrollbar-thin">
              {selectedTab == "Technical Questions" ? (
                <TechnicalQuestions
                  questions={report?.technicalQuestions || []}
                />
              ) : selectedTab == "Behavioural Questions" ? (
                <BehavioralQuestion
                  questions={report?.behavioralQuestions || []}
                />
              ) : selectedTab == "Roadmap" ? (
                <Roadmap plan={report?.preparationPlan || []} />
              ) : (
                ""
              )}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="right h-full w-1/4 flex flex-col gap-2">
            <div className="match-score flex flex-col justify-center items-center gap-2 h-[50%] p-6">
              <h2 className="uppercase text-[var(--text-color)] font-semibold text-lg">
                match score
              </h2>

              <div
                className="circle rounded-full flex flex-col justify-center items-center border-4 
            border-[var(--text-color)] h-45 w-45"
              >
                <h2 className="text-6xl text-[var(--text-color)]">
                  {report.matchScore}
                  <span className="text-3xl">%</span>
                </h2>
              </div>

              <p className="text-[var(--text-color)] text-lg font-semibold text-center">
                {report.matchPara}
              </p>
            </div>

            <div className="w-full border-2 border-[var(--border-color)]"></div>

            <div className="skill-gaps h-[50%] p-2">
              <h2 className="uppercase text-[var(--text-color)] font-semibold text-lg h-[10%] flex items-center">
                Skill gaps{" "}
              </h2>

              <ul className="h-[90%] overflow-y-auto scrollbar-thumb-[var(--secondary-text-color)]/80 scrollbar-thin">
                {report?.skillGap?.map((e) => {
                  return (
                    <li
                      key={e.skill}
                      className={`my-3 font-semibold text-lg px-2 
                      border-l-4 py-1 rounded text-[var(--text-color)]
                      ${
                        e.severity === "high"
                          ? "border-l-red-500 bg-red-500/40"
                          : e.severity === "medium"
                            ? "border-l-orange-500 bg-orange-500/40"
                            : "border-l-green-500 bg-green-500/40"
                      }
                      `}
                    >
                      {e.skill}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="block lg:hidden h-[90dvh] px-4 pt-14 relative">

        <div onClick={()=>{setIsSidebarOpen(true)}} className={`sidebarOpen absolute top-0 left-0 mx-4 my-2 z-10`}>
            <img src={hamburger} alt="hamburger" className="h-8"/>
          </div>
        {/* LEFT */}
        <div
          className={`left w-4/5 sm:w-2/4 h-full overflow-y-auto absolute top-0 z-20 
          bg-[var(--background-color)] ${isSidebarOpen ? "left-0" : "-left-full"} transition-all ease-in-out duration-800 border-2 border-[var(--border-color)]`}
        >
          <div
            onClick={() => {
              sideBarHandler();
            }}
            className="cross text-4xl p-2 absolute top-0 right-0"
          >
            <img src={cross} alt="cross" className="h-8"/>
          </div>
          
          {/* SECTIONS */}
          <div className="p-4">
            <div className="w-full">
              <h2 className="uppercase text-[var(--text-color)] font-semibold text-lg">
                sections
              </h2>
              <div className="w-full border-2 border-[var(--border-color)]"></div>
            </div>

            <div className="sections">
              <ul className="flex flex-col w-full gap-0.5">
                <li
                  onClick={(e) => {
                    selectTab(e.currentTarget.children[1].textContent);
                    setIsSidebarOpen(false)
                  }}
                  className={`flex items-center gap-1 px-1 py-2 rounded transition-all duration-300 cursor-pointer
                  ${
                    selectedTab == "Technical Questions"
                      ? "bg-[var(--primary-color)]/70 text-[var(--text-color)]"
                      : "text-[var(--secondary-text-color)] font-medium"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke={`${selectedTab == "Technical Questions" ? "#1e1b4b" : "#6b7280"}`}
                    className="size-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                    />
                  </svg>

                  <p>Technical Questions</p>
                </li>

                <li
                  onClick={(e) => {
                    selectTab(e.currentTarget.children[1].textContent);
                    setIsSidebarOpen(false)
                  }}
                  className={`flex items-center gap-1 px-1 py-2 rounded transition-all duration-200 cursor-pointer
                  ${
                    selectedTab == "Behavioural Questions"
                      ? "bg-[var(--primary-color)]/70 text-[var(--text-color)]"
                      : "text-[var(--secondary-text-color)] font-medium"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke={`${selectedTab == "Behavioural Questions" ? "#1e1b4b" : "#6b7280"}`}
                    className="size-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>

                  <p>Behavioural Questions</p>
                </li>

                <li
                  onClick={(e) => {
                    selectTab(e.currentTarget.children[1].textContent);
                    setIsSidebarOpen(false)
                  }}
                  className={`flex items-center gap-1 px-1 py-2 rounded transition-all duration-200 cursor-pointer
                  ${
                    selectedTab == "Roadmap"
                      ? "bg-[var(--primary-color)]/70 text-[var(--text-color)]"
                      : "text-[var(--secondary-text-color)] font-medium"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke={`${selectedTab == "Roadmap" ? "#1e1b4b" : "#6b7280"}`}
                    className="size-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>

                  <p>Roadmap</p>
                </li>
              </ul>
            </div>
          </div>

          {/* MATCH SCORE AND  */}
          <div className="match-score flex flex-col justify-center items-center gap-2 h-[50%] p-6">
            <h2 className="uppercase text-[var(--text-color)] font-semibold text-lg">
              match score
            </h2>

            <div
              className="circle rounded-full flex flex-col justify-center items-center border-4 
            border-[var(--text-color)] h-45 w-45"
            >
              <h2 className="text-6xl text-[var(--text-color)]">
                {report.matchScore}
                <span className="text-3xl">%</span>
              </h2>
            </div>

            <p className="text-[var(--text-color)] text-lg font-semibold text-center">
              {report.matchPara}
            </p>
          </div>

          <div className="skill-gaps p-2">
            <h2 className="uppercase text-[var(--text-color)] font-semibold text-lg h-[10%] flex items-center">
              Skill gaps{" "}
            </h2>

            <ul className="overflow-y-auto scrollbar-thumb-[var(--secondary-text-color)]/80 scrollbar-thin">
              {report?.skillGap?.map((e) => {
                return (
                  <li
                    key={e.skill}
                    className={`my-3 font-semibold text-lg px-2 
                      border-l-4 py-1 rounded text-[var(--text-color)]
                      ${
                        e.severity === "high"
                          ? "border-l-red-500 bg-red-500/40"
                          : e.severity === "medium"
                            ? "border-l-orange-500 bg-orange-500/40"
                            : "border-l-green-500 bg-green-500/40"
                      }
                      `}
                  >
                    {e.skill}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* GENERATE RESUME */}
          <div className="w-full flex justify-center pb-4">
            <button
              onClick={() => {
                getResumePdf(interviewId);
              }}
              className="text-[var(--background-color)] w-4/5 bg-[var(--primary-color)] p-3 rounded cursor-pointer active:scale-95 transition duration-200 font-semibold flex items-center justify-center gap-2"
            >
              <img src={stars} alt="stars" className="h-8" />
              <p>Generated resume</p>
            </button>
          </div>
        </div>

        {/* CONTAINER */}
        <div className="h-full w-full rounded flex">
          {/* RIGHT */}
          <div className="right w-full h-full ">
            <div className="center h-full w-full border-r-2 border-l-2 border-[var(--border-color)]">
              <div className="h-[10%] flex items-center px-4 border-b border-[var(--border-color)] shadow-lg">
                <h1 className="text-[var(--text-color)] text-2xl sm:text-4xl font-bold">
                  {selectedHeading}
                </h1>
              </div>

              <div className="h-[90%] overflow-y-auto p-4 scrollbar-thumb-[var(--secondary-text-color)]/80 scrollbar-thin">
                {selectedTab == "Technical Questions" ? (
                  <TechnicalQuestions
                    questions={report?.technicalQuestions || []}
                  />
                ) : selectedTab == "Behavioural Questions" ? (
                  <BehavioralQuestion
                    questions={report?.behavioralQuestions || []}
                  />
                ) : selectedTab == "Roadmap" ? (
                  <Roadmap plan={report?.preparationPlan || []} />
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Interview;
