import User from "../../helpers/db/user.db.js";
import bcrypt from "bcrypt";
import {
  badRequestResponse,
  okResponse,
} from "../../helpers/functions/responseHandlers.js";
export function register(req, res, next) {
  try {
    const { name, email, password, phoneNumber, role } = req.body;
    if (User.some((user) => user.email === email)) {
      return badRequestResponse(res, "email already exists");
    }
    if (role != "student" && role != "teacher") {
      return badRequestResponse(res, "role should be student or teacher");
    }
    const encryptedPassword = bcrypt.hashSync(password, 10);
    const user = {
      id: User.length + 1,
      name,
      email,
      phoneNumber,
      role,
      password: encryptedPassword,
    };
    User.push(user);
    return okResponse(res, "user registerd successfully", user);
  } catch (err) {
    next(err);
  }
}
