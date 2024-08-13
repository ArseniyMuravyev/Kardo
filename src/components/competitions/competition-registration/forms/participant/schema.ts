import * as yup from "yup";
import { ERROR_MESSAGE } from "../../../../../config/message-error.config";

export const schema = yup.object().shape({
  competitionId: yup.number().required(),
  userId: yup.number().required(),
  applicationType: yup.string().required(),
  city: yup.object({
    id: yup.lazy((value) => 
      typeof value === 'number'
        ? yup.number().required()
        : yup.string().required()
    ),
    name: yup.string().required(),
  }).required(),
  directions: yup.array().of(yup.string().required("Выберите хотя бы одно направление")).required("Выберите хотя бы одно направление"),
  firstName: yup.string().required(ERROR_MESSAGE.REQUIRED_FIELD),
  lastName: yup.string().required(ERROR_MESSAGE.REQUIRED_FIELD),
  middle_name: yup.string().when("checkbox", (checkbox, schema) => {
    if(!checkbox[0]) return schema.required(ERROR_MESSAGE.REQUIRED_FIELD)
    return schema
  }),
  email: yup.string().email(ERROR_MESSAGE.INCORRECT_FORMAT_EMAIL).required(ERROR_MESSAGE.REQUIRED_FIELD),
  phone: yup.string().required(ERROR_MESSAGE.REQUIRED_FIELD),
  gender: yup.string().required(),
  birthday: yup.string().required(ERROR_MESSAGE.REQUIRED_FIELD),
  citizenship: yup.string().required(ERROR_MESSAGE.REQUIRED_FIELD),
  video: yup.string().url("Не правильный формат URL").required(ERROR_MESSAGE.REQUIRED_FIELD),
  checkbox: yup.bool(),
  });