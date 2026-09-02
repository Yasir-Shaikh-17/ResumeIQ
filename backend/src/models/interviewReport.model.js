const mongoose = require("mongoose");

/**
 * - JOB DESCRIPTION SCHEMA : String
 * - RESUME TEXT : String
 * - SELF DESCRIPTION : String
 *
 * - MATCH-SCORE : number
 *
 * - TECHNICAL QUESTIONS :
 *      [{
 *          question: "",
 *          intention: "",
 *          answer: "",
 *              }]
 *
 * - BEHAVIORAL QUESTION :
 *      [{
 *          question: "",
 *          intention: "",
 *          answer: "",
 *              }]
 *
 * - SKILL GAPS :
 *          [{
 *          skill: "",
 *          severity: "",
 *          type: String,
 *          enum: ["low", "medium", "high"],
 *              }]
 *
 * - PREPERATION PLAN :
 *          [{
 *          day: number,
 *          focus: String,
 *          task: [String],
 *              }]
 */

const technicalQuestionSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: [true, "Technical Question is required"],
    },

    intention: {
      type: String,
      required: [true, "intention is required"],
    },

    answer: {
      type: String,
      required: [true, "Answer is required"],
    },
  },
  {
    _id: false,
  },
);

const behavioralQuestionSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: [true, "Technical Question is required"],
    },

    intention: {
      type: String,
      required: [true, "intention is required"],
    },

    answer: {
      type: String,
      required: [true, "Answer is required"],
    },
  },
  {
    _id: false,
  },
);

const skillGapSchema = new mongoose.Schema({
  skill: {
    type: String,
    required: [true, "Skill is required"],
  },

  severity: {
    type: String,
    enum: ["low", "medium", "high"],
    required: [true, "Severity is required"]
  },

},{
    _id: false
});


const preparationPlanSchema = new mongoose.Schema({
    day: {
        type: Number,
        required: [true, "Day is required"],
    },

    focus: {
        type: String,
        required: [true, "Focus is required"]
    },

    tasks: [{
        type: String,
        required: [true, "Task is required"]
    }]

})


const interviewReportSchema = new mongoose.Schema({
  jobDescription: {
    type: String,
    required: [true, "Job description is required"],
  },

  resume: {
    type: String,
  },

  selfDescription: {
    type: String,
  },

  matchScore: {
    type: Number,
    min: 0,
    max: 100,
  },

  technicalQuestions: [technicalQuestionSchema],
  behavioralQuestions: [behavioralQuestionSchema],
  skillGap: [skillGapSchema],
  preparationPlan: [preparationPlanSchema],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users"
  },
  title:{
    type: String,
    required: [true, "Job title is required"]
  },
  matchPara: {
    type: String,
  }

},{
    timestamps: true
});


const interviewReportModel = mongoose.model("interviewReport", interviewReportSchema)

module.exports = interviewReportModel