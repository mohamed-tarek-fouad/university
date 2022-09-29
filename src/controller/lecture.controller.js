import { Router } from "express";
import * as UsersService from "../services/lectures/index.js";
const router = Router();
router.post("/register/", UsersService.registerLec);
router.post("/assign/", UsersService.assignLecture);
router.get("/", UsersService.allLectures);
router.get("/:id", UsersService.getLectureId);

export default router;
