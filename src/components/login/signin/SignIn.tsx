import { FC } from "react";
import styles from "./SignIn.module.css";
import { Form } from "../../../ui-kit/form/Form";
import { Field } from "../../../ui-kit/field/Field";
import { Input } from "../../../ui-kit/input/Input";
import { Password } from "../../../ui-kit/password/Password";
import { Button } from "../../../ui-kit/button/Button";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver} from "@hookform/resolvers/yup";
import { schema } from "./schema";
import { Auth } from "../../../types";

interface SignInForm {
  email: string
  password: string
}

interface Props {
  authorization: (data: Auth) => void
}

export const SignIn: FC<Props> = ({authorization}) => {
  const { handleSubmit, control, formState: { errors } } = useForm<SignInForm>({
    resolver: yupResolver(schema),
  })

  const auth: SubmitHandler<SignInForm> = data => {
    authorization({username: data.email, password: data.password})
  }

  return (
    <Form>
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
            />
          )}
        />

      </Field>
      <Field
        label="Пароль"
        hint="Не менее 6 символов"
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
            />
          )}
        />
      </Field>
      <div className={styles.buttons}>
        <Button children="Войти" variant="filled" size="medium" onClick={handleSubmit(auth)} />
        <Button children="Забыли пароль?" variant="text" size="medium" color="secondary" />
      </div>
    </Form>
  );
};
