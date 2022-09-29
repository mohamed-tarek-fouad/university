import User from "../../helpers/db/user.db.js";
import { okResponse } from "../../helpers/functions/responseHandlers.js";
export function allUsers(req, res, next) {
  try {
    return okResponse(res, "Users fetched succesfully", User);
  } catch (err) {}
}
