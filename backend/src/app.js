const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const authRouter = require("./routes/auth.routes");
const interviewRouter = require("./routes/interview.routes");

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:5173", "https://resume-iq-nine-sigma.vercel.app", "https://resume-iq-5.vercel.app"],
    credentials: true,
  }),
);
app.use("/api/auth", authRouter);
app.use("/api/interview", interviewRouter);

module.exports = app;
