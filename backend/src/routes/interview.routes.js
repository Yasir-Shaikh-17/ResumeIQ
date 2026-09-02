const express = require("express");
const authMiddleware = require("../middlewares/auth.middleware");
const interviewController = require("../controllers/interview.controller");
const upload = require("../middlewares/file.middleware");

const interviewRouter = express.Router();

/**
 * @route POST /api/interview
 * @description generate new interview report on the basis of user self description resume pdf and job description
 * @access private
 */

interviewRouter.post("/", authMiddleware.authUser, upload.single("resume"), interviewController.generateInterviewReportController,
);

/**
 * @route GET /api/interview/report/:interviewId
 * @description Get interview report by interview id
 * @access private 
 */
interviewRouter.get("/report/:interviewId", authMiddleware.authUser, interviewController.getInterviewReportByIdController)


/**
 * @route GET /api/interview
 * @description get all interview reports of logged in user
 * @access private
 */
interviewRouter.get("/", authMiddleware.authUser, interviewController.getAllInterviewReportsController)

/**
 * @route POST /api/interview/resume/pdf
 * @description generate resume pdf on the basis of user self description, resume and job description
 * @access private
 */

interviewRouter.post("/resume/pdf/:interviewReportId", authMiddleware.authUser, interviewController.generateResumePdfController)



interviewRouter.post("/:interviewId", authMiddleware.authUser, interviewController.deleteReportByIdController)


module.exports = interviewRouter;
