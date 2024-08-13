import * as yup from "yup";
import { ERROR_MESSAGE } from "../../../../config/message-error.config";

export const schema = yup.object().shape({
    country: yup.string().required(ERROR_MESSAGE.REQUIRED_FIELD),
    region: yup.string().required(ERROR_MESSAGE.REQUIRED_FIELD),
    city: yup.string().required(ERROR_MESSAGE.REQUIRED_FIELD),
  });