import bcrypt from "bcrypt";
import User from "../../helpers/db/user.db.js";
import {
  okResponse,
  badRequestResponse,
} from "../../helpers/functions/responseHandlers.js";
export function login(req, res, next) {
  try {
    const { email, password } = req.body;
    const user = User.find((u) => u.email === email);
    if (!user) {
      return badRequestResponse(res, "email does not exits");
    }
    const isValid = bcrypt.compare(password, user.password);
    if (!isValid) {
      return badRequestResponse(res, "incorrect password");
    }
    return okResponse(res, "user has logged in successfully", user);
  } catch (err) {
    next(err);
  }
}
