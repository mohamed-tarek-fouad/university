import Lecture from "../../helpers/db/lectures.db.js";
import { okResponse } from "./../../helpers/functions/ResponseHandlers.js";
export function getLectureId(req, res, next) {
  try {
    const { id } = req.params;
    const lectureIndex = Lecture.findIndex(
      (lecture) => lecture.id === parseInt(id)
    );
    if (lectureIndex === -1) {
      return badRequestResponse(res, "lecture not found");
    }
    return okResponse(
      res,
      "lecture fetched succesfully",
      Lecture[lectureIndex]
    );
  } catch (err) {
    next(err);
  }
}
