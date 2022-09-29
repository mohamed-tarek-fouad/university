import User from "../../helpers/db/user.db.js";
import { okResponse } from "./../../helpers/functions/ResponseHandlers.js";
export function getUserId(req, res, next) {
  try {
    const { id } = req.params;
    const userIndex = User.findIndex((user) => user.id === parseInt(id));
    if (userIndex === -1) {
      return badRequestResponse(res, "user not found");
    }
    return okResponse(res, "User fetched succesfully", User[userIndex]);
  } catch (err) {
    next(err);
  }
}
