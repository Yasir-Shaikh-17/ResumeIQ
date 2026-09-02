import React, { useState, useRef } from "react";
import stars from "../../../assets/stars.svg";
import infoSvg from "../../../assets/info.svg";
import cloudArrowDown from "../../../assets/cloudArrowDown.svg";
import { useInterview } from "../hooks/useInterview";
import { Link, useNavigate } from "react-router";
import Navbar from "../components/Navbar";
import InterviewHomeSkeleton from "../components/InterviewHomeSkeleton";
import InterviewSkeleton from "../../interview/components/InterviewSkeleton";

const InterviewHome = () => {
  const { loading, generateReport, reports, deleteReport } = useInterview();
  const [jobDescription, setJobDescription] = useState("");
  const [selfDescription, setSelfDescription] = useState("");
  const [generatingReport, setGeneratingReport] = useState(false);
  const [resumeFile, setResumeFile] = useState(null);
  const resumeInputRef = useRef();
  const navigate = useNavigate();

  const handleGenerateReport = async () => {
    setGeneratingReport(true);
    try {
      const resumeFile = resumeInputRef.current.files[0];
      const data = await generateReport({
        jobDescription,
        selfDescription,
        resumeFile,
      });
      navigate(`/interview/${data._id}`);
    } catch (err) {
      console.log(err);
    } finally {
      generatingReport(false);
    }
  };

  const handleDeleteReport = async (e) => {
    await deleteReport(e);
  };

  if (generatingReport) {
    return <InterviewSkeleton />;
  }

  if (loading) {
    return <InterviewHomeSkeleton />;
  }

  return (
    <div>
      <Navbar />

      <main className=" py-10 px-10 sm:px-24 flex justify-center items-center flex-col gap-8 transition duration-200">
        <div className="h-125 md:h-[70svh] w-full p-4 rounded-lg bg-[#FFFFFF] border-2 border-[#E5E7EB] shadow-lg main-container flex flex-col gap-4 transition duration-200 shrink-0">
          <div className="top h-[85%] flex flex-col md:flex-row justify-center items-center rounded gap-2">
            {/* LEFT */}
            <div className="left h-1/2 md:h-full w-full md:w-1/2 rounded-lg transition duration-200 shrink-0">
              <textarea
                onChange={(e) => {
                  setJobDescription(e.target.value);
                }}
                name="jobDescription"
                id="jobDescription"
                placeholder="Enter Job Description"
                className="bg-transparent placeholder:text-[var(--text-color)] h-full w-full resize-none text-[var(--text-color)] p-2 rounded-lg border-2 border-[#E5E7EB] outline-0 transition duration-200 resize-none"
              ></textarea>
            </div>

            {/* RIGHT */}
            <div className="right h-1/2 md:h-full w-full md:w-1/2 flex flex-col gap-2 rounded-lg transition duration-200">
              <textarea
                onChange={(e) => {
                  setSelfDescription(e.target.value);
                }}
                name="selfDescription"
                id="selfDescription"
                className="bg-transparent border-2 border-[#E5E7EB] text-[var(--text-color)] 
                placeholder:text-[var(--text-color)] p-2 rounded-lg min-h-[50%] md:min-h-[65%] min-h-[50%] md:min-h-[65%] max-h-[50%] md:max-h-[65%] outline-0 transition duration-200 resize-none"
                placeholder="Enter Self Description"
              ></textarea>

              <label
                htmlFor="resume"
                className="bg-[#c7d2fe] hover:bg-[#a5b4fc] h-[50%] md:min-h-[35%] rounded-lg flex flex-col cursor-pointer items-center justify-center transition duration-200"
              >
                <img className="h-8 md:h-12" src={cloudArrowDown} alt="" />

                {resumeFile ? (
                  <p className="text-sm md:text-base text-[var(--text-color)] text-center px-4 truncate max-w-full">
                    {resumeFile.name}
                  </p>
                ) : (
                  <p className="text-sm md:text-base text-[var(--text-color)]">
                    Upload your resume
                  </p>
                )}
              </label>

              <input
                ref={resumeInputRef}
                type="file"
                accept=".pdf"
                name="resume"
                id="resume"
                className="hidden"
                onChange={(e) => {
                  setResumeFile(e.target.files[0]);
                }}
              />
            </div>
          </div>

          {/* BOTTOM */}
          <div className="bottom h-[15%] rounded-lg flex justify-center md:justify-between items-center px-2">
            <div className="hidden md:flex items-center gap-1">
              <img className="h-8" src={infoSvg} alt="" />
              <p className="text-[var(--text-color)]">
                provide both resume and self description for better result
              </p>
            </div>

            <div>
              <button
                onClick={handleGenerateReport}
                className="bg-[#4F46E5] px-6 py-2 rounded flex justify-center items-center gap-2 cursor-pointer active:scale-95 transition duration-200 font-bold transition duration-200"
              >
                <img className="h-8" src={stars} alt="stars" />
                <p>Generate</p>
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2 w-full">
          <h1 className="text-3xl md:text-4xl uppercase font-bold text-[var(--text-color)] text-center">
            Recent Interview reports
          </h1>

          {reports.length > 0 && (
            <ul className="flex gap-2 lg:gap-4 w-full p-2 rounded flex-wrap">
              {reports.map((e, ind) => {
                let a = new Date(e.createdAt);
                return (
                  <div
                    key={e._id}
                    className="relative w-full sm:w-[48%] lg:w-[32%]"
                  >
                    <Link
                      to={`/interview/${e._id}`}
                      className="bg-[var(--background-color)] border border-[var(--border-color)] p-3 rounded flex flex-col gap-4 shadow-lg"
                    >
                      <div className="w-2/3 flex justify-between items-center truncate">
                        <h3 className="text-[var(--text-color)] text-lg font-semibold">
                          {e.title || "Untitled position"}
                        </h3>
                      </div>

                      <div className="flex flex-col gap-2">
                        <div className="flex justify-between text-[var(--text-color)]">
                          <p>Generated at</p>
                          <p>{a.toLocaleDateString()}</p>
                        </div>
                        <div className="flex justify-between text-[var(--text-color)]">
                          <p>Match score</p>
                          <p>{e.matchScore}%</p>
                        </div>
                      </div>
                    </Link>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#FF0000"
                      className="size-6 z-30 absolute top-0 right-0 m-4 cursor-pointer"
                      onClick={() => {
                        console.log(e._id);
                        handleDeleteReport(e._id);
                      }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                      />
                    </svg>
                  </div>
                );
              })}
            </ul>
          )}

          {reports.length == 0 && (
            <div className="flex justify-between items-center">
              <h2 className="text-[var(--text-color)] text-4xl">
                No Reports to show
              </h2>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default InterviewHome;
