import { FC } from "react";
import { Form } from "../../../../ui-kit/form/Form";
import { Field } from "../../../../ui-kit/field/Field";
import { Input } from "../../../../ui-kit/input/Input";
import { Button } from "../../../../ui-kit/button/Button";
import { Checkbox } from "../../../../ui-kit/checkbox/Checkbox";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./schema";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { setStepRegistration, setUser } from "../../../../store/slices/user-slice/UserSlice";
import { getSixYearsAgo } from "../../../../utils/helper";
import useFormPersist from "react-hook-form-persist";

interface StepTwoForm {
  firstName: string
  lastName: string
  middle_name?: string
  birthday: string
  checkbox?: boolean
}

interface Props {
  onChange: (n: string) => void
}

export const StepTwo: FC<Props> = ({onChange}) => {
  const {user} = useAppSelector((state) => state.user)
  const dispatch = useAppDispatch();
  const { handleSubmit, control, formState: { errors }, setError, watch, setValue } = useForm<StepTwoForm>({
    resolver: yupResolver(schema),
    defaultValues: {
      firstName: user.firstName,
      lastName: user.lastName,
      middle_name: user.middle_name,
      checkbox: user.middle_name === "" ? true : false
    },
  })

  useFormPersist("stepTwo", { watch, setValue });

  const submit: SubmitHandler<StepTwoForm> = data => {
    if(new Date(data.birthday).getTime() > new Date(getSixYearsAgo()).getTime()) {
      setError('birthday', {type: 'custom', message: "Регистрация доступна для людей старше 6 лет"})
      return
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {checkbox, ...info} = data
    dispatch(setStepRegistration(3))
    dispatch(setUser(info))
    onChange('3')
  }

  return (
    <Form name="stepTwo">
      <Field
        label="Имя"
        error={errors.firstName?.message}
      >
        <Controller
          name="firstName"
          control={control}
          render={({ field: { value, onChange } }) => (
            <Input
              placeholder="Арсений"
              type="text"
              value={value}
              onChange={onChange}
            />
          )}
        />
      </Field>
      <Field
        label="Фамилия"
        error={errors.lastName?.message}
      >
        <Controller
          name="lastName"
          control={control}
          render={({ field: { value, onChange } }) => (
            <Input
              placeholder="Сидоров"
              type="text"
              value={value}
              onChange={onChange}
            />
          )}
        />
      </Field>
      <Field
        label="Отчество"
        error={errors.middle_name?.message}
      >
        <Controller
          name="middle_name"
          control={control}
          render={({ field: { value, onChange } }) => (
            <Input
              placeholder="Алексадрович"
              type="text"
              value={value}
              onChange={onChange}
              required
            />
          )}
        />
        <Controller
          name="checkbox"
          control={control}
          render={({ field: { value, onChange } }) => (
            <Checkbox
              label="Нет отчества"
              checked={value}
              onChange={e => onChange(e.target.checked)}
            />
          )}
        />
      </Field>
      <Field
        label="Дата рождения"
        error={errors.birthday?.message}
      >
        <Controller
          name="birthday"
          control={control}
          render={({ field: { value, onChange } }) => (
            <Input
              type="date"
              value={value}
              onChange={onChange}
              max={getSixYearsAgo()}
              placeholder="дд.мм.гггг"
              defaultValue={getSixYearsAgo()}
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
