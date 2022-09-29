import express from "express";
import dotenv from "dotenv";
import AuthRouter from "./controller/auth.controller.js";
import errorHandler from "./helpers/middlewares/errorHandler.js";
import UserRouter from "./controller/user.controller.js";
import LectureRouter from "./controller/lecture.controller.js";

dotenv.config();
const app = express();
app.use(express.json());

app.use("/auth", AuthRouter);
app.use("/users", UserRouter);
app.use("/lecture", LectureRouter);

app.use(errorHandler);
const port = 3000;
app.listen(port, () => {
  console.log(`server is running on port :${port}`);
  console.log(`http://localhost:${port}`);
});
export default app;
