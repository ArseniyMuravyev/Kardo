import * as yup from "yup";
import { ERROR_MESSAGE } from "../../../../config/message-error.config";

export const schema = yup.object().shape({
    firstName: yup.string().required(ERROR_MESSAGE.REQUIRED_FIELD),
    lastName: yup.string().required(ERROR_MESSAGE.REQUIRED_FIELD),
    checkbox: yup.bool(),
    middle_name: yup.string().when("checkbox", (checkbox, schema) => {
      if(!checkbox[0]) return schema.required(ERROR_MESSAGE.REQUIRED_FIELD)
      return schema
    }),
    birthday: yup.string().required(ERROR_MESSAGE.REQUIRED_FIELD),
  });