import joi from "joi";
import { joiPasswordExtendCore } from "joi-password";
const joiPassword = joi.extend(joiPasswordExtendCore);
const registerSchema = joi.object({
  email: joi.string().email().required().messages({
    "string.email": "email must be a valid email",
    "string.empty": "email cant be empty",
    "any.required": "email is required",
  }),
  name: joi.string().min(5).max(32).required().messages({
    "string.min": "name must be at least 8 charcters",
    "string.max": "name can't be longer than 32 charcters",
    "string.empty": "name can't be empty",
    "any.required": "name is required",
  }),
  password: joiPassword
    .string()
    .min(8)
    .minOfLowercase(1)
    .minOfUppercase(1)
    .minOfNumeric(1)
    .required()
    .messages({
      "string.min": "Password must be at least 8 characters",
      "password.minOfLowercase":
        "Password must contain at least 1 lowercase character",
      "password.minOfUppercase":
        "Password must contain at least 1 uppercase character",
      "password.minOfNumeric":
        "Password must contain at least 1 numeric character",
      "string.empty": "Password can't be empty",
      "any.required": "Password is required",
    }),
  phoneNumber: joi.number().min(10).required().messages({
    "number.base": "phoneNumber must be number",
    "number.min": "phonerNumber is at least 10 numbers",
    "any.required": "phoneNumber is required",
  }),
  role: joi.string().required().messages({
    "string.empty": "role can't be empty",
    "any.required": "role is required",
  }),
});
export default registerSchema;
