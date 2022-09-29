import User from "../../helpers/db/user.db.js";
import Lecture from "../../helpers/db/lectures.db.js";
import {
  okResponse,
  badRequestResponse,
} from "../../helpers/functions/responseHandlers.js";
export function assignLecture(req, res, next) {
  try {
    const { lecture, id } = req.body;
    const teacher = User.find((u) => u.id == id);
    const teacherIndex = User.findIndex((u) => u.id === parseInt(id));
    const lecIndex = Lecture.find((l) => l.name == lecture);
    if (!lecIndex) {
      return badRequestResponse(res, "lecture does not exist");
    }
    if (!teacher) {
      return badRequestResponse(res, "user does not exist");
    }
    if (teacher.role != "teacher") {
      return badRequestResponse(res, "User should be teacher");
    }
    if (!User[teacherIndex].lecture) {
      User[teacherIndex] = { ...teacher, lecture: [{ lecture: lecture }] };
      return okResponse(
        res,
        "assigned lecture successfully",
        User[teacherIndex]
      );
    }
    if (User[teacherIndex].lecture.some((lect) => lect.lecture == lecture)) {
      return badRequestResponse(
        res,
        "teacher has already registerd this lecture"
      );
    }
    User[teacherIndex].lecture.push({ lecture: lecture });
    return okResponse(res, "assigned lecture successfully", User[teacherIndex]);
  } catch (err) {
    next(err);
  }
}
