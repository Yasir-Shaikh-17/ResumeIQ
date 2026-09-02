import { useContext, useEffect } from "react";
import {
  generateInterviewReport,
  getAllInterviewReports,
  getInterviewReportById,
  generateResumePdf,
  deleteReportById
} from "../services/interview.api";
import { InterviewContext } from "../interview.context";
import { useParams } from "react-router";

export const useInterview = () => {
  const context = useContext(InterviewContext);
  const { interviewId } = useParams();

  if (!context) {
    throw new Error("useInterview must be used within as InterviewProvider");
  }

  const { loading, setLoading, report, setReport, reports, setReports } = context;

  // GENERATE REPORT
  const generateReport = async ({
    jobDescription,
    selfDescription,
    resumeFile,
  }) => {
    setLoading(true);
    let response = null;
    try {
      response = await generateInterviewReport({
        jobDescription,
        selfDescription,
        resumeFile,
      });
      setReport(response.interviewReport);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }

    return response.interviewReport;
  };

  // GET REPORT BY ID
  const getReportById = async (interviewId) => {
    setLoading(true);
    let response = null;
    try {
      response = await getInterviewReportById(interviewId);
      setReport(response.interviewReport);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }

    return response.interviewReport;
  };

  // GET ALL REPORTS
  const getReports = async () => {
    setLoading(true);

    try {
      const response = await getAllInterviewReports();
      setReports(response.interviewReports || []);

      return response.interviewReports || [];
    } catch (error) {
      console.log("GET REPORTS ERROR:", error);
      return [];
    } finally {
      setLoading(false);
    }
  };

  // GENERATE RESUME
  const getResumePdf = async (interviewReportId) => {
    let response = null;
    try {
      response = await generateResumePdf({ interviewReportId });
      const url = window.URL.createObjectURL(
        new Blob([response], { type: "application/pdf" }),
      );
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `resume_${interviewReportId}.pdf`);
      document.body.appendChild(link);
      link.click();
    } catch (error) {
    }
  };

  // DELETE REPORT
  const deleteReport = async (interviewId) => {
  setLoading(true);

  try {
    await deleteReportById(interviewId);

    setReports((prevReports) =>
      prevReports.filter((report) => report._id !== interviewId)
    );
  } catch (error) {
    console.log("DELETE REPORT ERROR:", error);
  } finally {
    setLoading(false);
  }
};
  
  useEffect(() => {
    if (interviewId) {
      getReportById(interviewId);
    } else {
      getReports();
    }
  }, [interviewId]);

  return {
    loading,
    report,
    reports,
    generateReport,
    getReportById,
    getReports,
    getResumePdf,
    deleteReport
  };
};
