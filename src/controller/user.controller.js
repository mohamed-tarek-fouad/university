import { Router } from "express";
import * as UsersService from "../services/users/index.js";
const router = Router();

router.get("/", UsersService.allUsers);
router.get("/:id", UsersService.getUserId);

export default router;
