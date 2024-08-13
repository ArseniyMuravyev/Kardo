import * as yup from "yup";
import { ERROR_MESSAGE } from "../../../../config/message-error.config";

export const schema = yup.object().shape({
    email: yup.string().email(ERROR_MESSAGE.INCORRECT_FORMAT_EMAIL).required(ERROR_MESSAGE.REQUIRED_FIELD),
    password: yup.string().min(8, ERROR_MESSAGE.LENGTH_PASSWORD).max(32).required(ERROR_MESSAGE.REQUIRED_FIELD).matches(
      // eslint-disable-next-line no-useless-escape
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      ERROR_MESSAGE.INCORRECT_FORMAT_PASSWORD
    ),
    confirm_password: yup.string().min(8, ERROR_MESSAGE.LENGTH_PASSWORD).max(32).required(ERROR_MESSAGE.REQUIRED_FIELD).matches(
      // eslint-disable-next-line no-useless-escape
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      ERROR_MESSAGE.INCORRECT_FORMAT_PASSWORD
    ).when('password', (password, schema) => {
      return schema.test({
        test: (confirm_password) => password[0] === confirm_password,
        message: ERROR_MESSAGE.DIFFERENT_PASSWORD,
      });
    }),
  });