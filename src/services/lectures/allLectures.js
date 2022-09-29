import Lecture from "../../helpers/db/lectures.db.js";
import { okResponse } from "./../../helpers/functions/ResponseHandlers.js";
export function allLectures(req, res, next) {
  try {
    return okResponse(res, "Lecture fetched succesfully", Lecture);
  } catch (err) {
    next(err);
  }
}
