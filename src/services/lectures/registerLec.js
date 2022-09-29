import Lecture from "../../helpers/db/lectures.db.js";
import User from "../../helpers/db/user.db.js";
import {
  okResponse,
  badRequestResponse,
} from "../../helpers/functions/responseHandlers.js";
export function registerLec(req, res, next) {
  const { lectureID, id } = req.body;
  const student = User.find((u) => u.id == id);
  const studentIndex = User.findIndex((u) => u.id == id);
  const lecIndex = Lecture.find((l) => l.name == lectureID);
  if (!lecIndex) {
    return badRequestResponse(res, "lecture does not exist");
  }
  if (!student) {
    return badRequestResponse(res, "user does not exist");
  }
  if (student.role != "student") {
    return badRequestResponse(res, "User should be student");
  }
  if (!User[studentIndex].lectures) {
    User[studentIndex] = { ...student, lectures: [{ lecture: lectureID }] };
    return okResponse(
      res,
      "registerd lecture successfully",
      User[studentIndex]
    );
  }
  if (User[studentIndex].lectures.some((lect) => lect.lecture == lectureID)) {
    return badRequestResponse(
      res,
      "student has already registerd this lecture"
    );
  }
  User[studentIndex].lectures.push({ lecture: lectureID });
  return okResponse(res, "registerd lecture successfully", User[studentIndex]);
}
