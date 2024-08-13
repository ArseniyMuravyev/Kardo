import { FC } from "react";
import { Form } from "../../../../ui-kit/form/Form";
import { Field } from "../../../../ui-kit/field/Field";
import { Input } from "../../../../ui-kit/input/Input";
import { Password } from "../../../../ui-kit/password/Password";
import { Button } from "../../../../ui-kit/button/Button";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./schema";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { setStepRegistration, setUser } from "../../../../store/slices/user-slice/UserSlice";
import { authService } from "../../../../services/auth.service";
import { ERROR_MESSAGE } from "../../../../config/message-error.config";
import useFormPersist from "react-hook-form-persist";

interface StepOneForm {
  email: string
  password: string
  confirm_password: string
}

interface Props {
  onChange: (n: string) => void
}

export const StepOne: FC<Props> = ({onChange}) => {
  const {user} = useAppSelector((state) => state.user)
  const dispatch = useAppDispatch();
  const { handleSubmit, control, setError, formState: { errors }, watch, setValue } = useForm<StepOneForm>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: user.email,
      password: user.password,
      confirm_password: user.password
    },
  })

  useFormPersist("stepOne", { watch, setValue });

  function checkMail(email: string) {
    return authService
      .checkEmail(email)
      .then(() => {})
      .catch((err) => {
        setError("email", {type: 'custom', message: ERROR_MESSAGE.UNIQUE_EMAIL})
        console.log(`Ошибка: ${err}`);
      })
      .finally(() => {
      })
  }

  const submit: SubmitHandler<StepOneForm> = (data) => {
    checkMail(data.email)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {confirm_password, ...info} = data
    dispatch(setStepRegistration(2))
    dispatch(setUser(info))
    checkMail(data.email)
    onChange("2")
  }

  return (
    <Form name="stepOne">
      <Field
        label="Имя пользователя"
        error={errors.email?.message}
      >
        <Controller
          name="email"
          control={control}
          render={({ field: { value, onChange } }) => (
            <Input
              placeholder="address@pochta.com"
              type="email"
              value={value}
              onChange={onChange}
              autoComplete="off"
            />
          )}
        />
      </Field>
      <Field
        label="Пароль"
        hint="Не менее 8 символов"
        error={errors.password?.message}
      >
        <Controller
          name="password"
          control={control}
          render={({ field: { value, onChange } }) => (
            <Password
              placeholder="Пароль"
              value={value}
              onChange={onChange}
              required
              autoComplete="off"
            />
          )}
        />
      </Field>
      <Field
        label="Подтверждение пароля"
        hint="Не менее 8 символов"
        error={errors.confirm_password?.message}
      >
        <Controller
          name="confirm_password"
          control={control}
          render={({ field: { value, onChange } }) => (
            <Password
              placeholder="Пароль"
              value={value}
              onChange={onChange}
              required
              autoComplete="off"
            />
          )}
        />

      </Field>
      <div style={{ display: 'flex', marginTop: 16, marginBottom: 28, flexDirection: 'column' }}>
        <Button children="Продолжить" variant="filled" size="medium" onClick={handleSubmit(submit)} />
      </div>
    </Form>
  );
};
