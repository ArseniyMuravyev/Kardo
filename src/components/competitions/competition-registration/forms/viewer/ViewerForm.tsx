import { FC } from "react";
import styles from "./ViewerForm.module.css";
import { Form } from "../../../../../ui-kit/form/Form";
import { Field } from "../../../../../ui-kit/field/Field";
import { Input } from "../../../../../ui-kit/input/Input";
import { Button } from "../../../../../ui-kit/button/Button";
import { Select } from "../../../../../ui-kit/select/Select";
import { Info } from "../../info/Info";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./schema";
import { Checkbox } from "../../../../../ui-kit/checkbox/Checkbox";
import { GENDER_OPTIONS } from "../../../../../config/options-select.config";
import { useAppSelector } from "../../../../../store/hooks";
import { Competition, Option, RegisterCompetition } from "../../../../../types";
import { getSixYearsAgo } from "../../../../../utils/helper";
import useFormPersist from "react-hook-form-persist";

interface IViewerForm {
  competitionId: number
  userId: number
  applicationType: string
  city: Option
  firstName: string
  lastName: string
  middleName?: string
  email: string
  phone: string
  gender: string
  birthday: string
  citizenship: string
  checkbox?: boolean
  directions: string[],
}

interface Props {
  data: Competition
  register: (data: RegisterCompetition) => void
}

export const ViewerForm: FC<Props> = ({ data: competition, register }) => {
  const { user } = useAppSelector((state) => state.user)

  const { handleSubmit, control, formState: { errors }, watch, setValue  } = useForm<IViewerForm>({
    resolver: yupResolver(schema),
    defaultValues: {
      competitionId: competition.id,
      userId: user.id!,
      applicationType: "Зритель",
      city: competition.locations[0],
      email: user.email,
      gender: "Мужской",
      firstName: user.firstName,
      lastName: user.lastName,
      middleName: user.middle_name,
      phone: user.phone,
      birthday: user.birthday,
      citizenship: user.citizenship || '',
      directions: ["BMX"],
      checkbox: user.middle_name === "" ? true : false
    }
  })

  useFormPersist("viewerForm", { watch, setValue });

  const submit: SubmitHandler<IViewerForm> = data => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { checkbox, email, ...dataCompetition } = data
    register({ ...dataCompetition, city: data.city.name, })
  }

  return (
    <Form className={styles.form} name="viewerForm">
      <Field
        label="Страна или регион"
      >
        <Controller
          name="city"
          control={control}
          render={({ field: { onChange } }) => (
            <Select options={competition.locations} onChange={onChange} />
          )}
        />
      </Field>
      <Info
        startDate={competition.startDate}
        endDate={competition.endDate}
        competitionType={competition.competitionType}
        location={watch("city").name}
      />
      <p className={styles.hint}>При изменении ранее внесенных данных они также обновятся в профиле</p>
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
        error={errors.middleName?.message}
      >
        <Controller
          name="middleName"
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
        label="Email (логин)"
        hint="Логин изменить нельзя"
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
              disabled
            />
          )}
        />
      </Field>
      <Field
        label="Телефон"
        error={errors.phone?.message}
      >
        <Controller
          name="phone"
          control={control}
          render={({ field: { value, onChange } }) => (
            <Input 
            value={value} 
            onChange={onChange} 
            type="tel" 
            placeholder="+7 (999) 666-66-66" />
          )}
        />
      </Field>
      <Field
        label="Пол"
      >
        <Controller
          name="gender"
          control={control}
          render={({ field: { onChange } }) => (
            <Select options={GENDER_OPTIONS} onChange={onChange} />
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
            />
          )}
        />
      </Field>
      <Field
        label="Гражданство"
        error={errors.citizenship?.message}
      >
        <Controller
          name="citizenship"
          control={control}
          render={({ field: { value, onChange } }) => (
            <Input
              placeholder="Россия"
              value={value}
              onChange={onChange}
            />
          )}
        />
      </Field>
      <div style={{ display: 'flex', marginTop: 8, marginBottom: -12, flexDirection: 'column' }}>
        <Button children="Отправить заявку" variant="filled" size="large" onClick={handleSubmit(submit)} />
      </div>
    </Form >
  );
};
