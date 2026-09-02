const { GoogleGenAI } = require("@google/genai");
const { z } = require("zod");
const { zodToJsonSchema } = require("zod-to-json-schema");
const puppeteer = require("puppeteer");

const ai = new GoogleGenAI({
  apiKey: process.env.GOOGLE_GENAI_API_KEY,
});

async function invokeGeminiAi() {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: "Hello Gemini! Explain what is interview",
  });

  console.log(response.text);
}

const interviewReportSchema = z.object({
  matchScore: z
    .number()
    .describe(
      "A score between 0 and 100 indicating how well the candidate's profile matches the job description",
    ),

  technicalQuestions: z
    .array(
      z.object({
        question: z
          .string()
          .describe("The technical question can be asked in interview"),
        intention: z
          .string()
          .describe("The intention of interviewer behind asking this question"),
        answer: z
          .string()
          .describe(
            "How to answer this question, what points to cover, what approach to take etc.",
          ),
      }),
    )
    .describe(
      "Technical questions that can be asked in interview along with their intention and how to asnwer them",
    ),

  behavioralQuestions: z
    .array(
      z.object({
        question: z
          .string()
          .describe("The technical question can be asked in interview"),
        intention: z
          .string()
          .describe("The intention of interviewer behind asking this question"),
        answer: z
          .string()
          .describe(
            "How to answer this question, what points to cover, what approach to take etc.",
          ),
      }),
    )
    .describe(
      "Behavioral questions that can be asked in interview along with their intention and how to asnwer them",
    ),

  skillGap: z
    .array(
      z.object({
        skill: z.string().describe("The skill that the candidate is lacking."),
        severity: z
          .enum(["low", "medium", "high"])
          .describe("The severity of skill gap."),
      }),
    )
    .describe(
      "The list of skill gaps in candidate's profile along with their sevirity.",
    ),

  preparationPlan: z
    .array(
      z.object({
        day: z
          .number()
          .describe("The day number in preparation plan, starting from 1"),
        focus: z
          .string()
          .describe("The main focus of this day in preparation plan."),
        tasks: z
          .array(z.string())
          .describe(
            "List of tasks to be done on this day in preparation plan.",
          ),
      }),
    )
    .describe(
      "A 7 day plan for the candidate to follow in order to prepare for the interview effectively",
    ),

  title: z
    .string()
    .describe(
      "The title of the job for which the interview report is generated",
    ),

  matchPara: z.string().describe("A line which tells if the candidate is strong or weak candidate for the following job role based on his matchScore please keep it punchy like you need much improvement or you need improvement or you are a strong candidate for this role keep it under 8 words max.")
  
});

async function generateInterviewReport({
  resume,
  selfDescription,
  jobDescription,
}) {
  const prompt = `Generate an interview report for a candidate with following details:
                    Resume: ${resume}
                    Self Description: ${selfDescription}
                    Job Description: ${jobDescription}`;

  const response = await ai.models.generateContent({
    model: "gemini-3.1-flash-lite",
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseJsonSchema: z.toJSONSchema(interviewReportSchema),
    },
  });

  return JSON.parse(response.text);
}

async function generatePdfFromHtml(htmlContent) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setContent(htmlContent, { waitUntil: "networkidle0" });

  const pdfBuffer = await page.pdf({ format: "A4", margin: { 
    top: "12mm",
    bottom: "12mm",
    left: "8mm",
    right: "8mm"
   } });
  await browser.close();

  return pdfBuffer;
}

async function generateResumePdf({ resume, selfDescription, jobDescription }) {
  const resumePdfSchema = z.object({
    html: z
      .string()
      .describe(
        "The HTML content of the resume which can be converted to PDF using any library like puppeteer",
      ),
  });

  const prompt = `Generate resume for a candidate with following details:
                  Resume: ${resume}
                  Self Description: ${selfDescription}
                  Job Description: ${jobDescription}

                  the response should be a JSON object with a single field "html" which contains the HTML content of the resume which can be converted to PDF using any library like puppeteer.
                  The resume should be tailored for the given job description and should highlight the candidate's strengths and relevant experience. The HTML content should be well-formatted and structured, making it easy to read and visual appealing.
                  The content of resume should be not sound like it's generated by AI and should be as close as possible to a real human-written resume.
                  You can highlight content using some colors and different font styles but overall design should be simple and professional.
                  The content should be ATS friendly, i.e. it should easily parsable by ATS systems without losing important information.
                  The resume should not be so lengthy , it should ideally be 1-2 pages long when converted to PDF. Focus on quality rather than quantity and make sure to include all the relevant informaton that can increase the candidate's chances of getting an interview call for the given job description.
                  `;

  const response = await ai.models.generateContent({
    model: "gemini-3.1-flash-lite",
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: zodToJsonSchema(resumePdfSchema),
    },
  });

  const jsonContent = JSON.parse(response.text);

  const pdfBuffer = await generatePdfFromHtml(jsonContent.html);

  return pdfBuffer;
}

module.exports = { generateInterviewReport, generateResumePdf };
