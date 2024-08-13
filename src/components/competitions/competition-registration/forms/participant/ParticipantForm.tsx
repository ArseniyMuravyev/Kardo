import { FC, useState } from "react";
import styles from "./ParticipantForm.module.css";
import { Form } from "../../../../../ui-kit/form/Form";
import { Field } from "../../../../../ui-kit/field/Field";
import { Input } from "../../../../../ui-kit/input/Input";
import { Button } from "../../../../../ui-kit/button/Button";
import { Select } from "../../../../../ui-kit/select/Select";
import { Info } from "../../info/Info";
import { Checkbox } from "../../../../../ui-kit/checkbox/Checkbox";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./schema";
import { GENDER_OPTIONS } from "../../../../../config/options-select.config";
import { Competition, Option, RegisterCompetition } from "../../../../../types";
import { useAppSelector } from "../../../../../store/hooks";
import { getSixYearsAgo } from "../../../../../utils/helper";
import useFormPersist from "react-hook-form-persist";

interface IParticipantForm {
  competitionId: number
  userId: number
  applicationType: string
  city: Option
  directions: string[]
  firstName: string
  lastName: string
  middle_name?: string
  email: string
  phone: string
  gender: string
  birthday: string
  citizenship: string
  video: string
  checkbox?: boolean
}

interface Props {
  data: Competition
  register: (data: RegisterCompetition) => void
}

export const ParticipantForm: FC<Props> = ({data: competition, register}) => {
  const {user} = useAppSelector((state) => state.user)
  const [activCheckbox, setActivCheckbox] = useState(0)
  const [direction, setDirection] = useState<string[]>([])

  const { handleSubmit, control, formState: { errors }, watch, setValue, setError } = useForm<IParticipantForm>({
    resolver: yupResolver(schema),
    defaultValues: {
      competitionId: competition.id,
      userId: user.id!,
      applicationType: "Участник",
      city: competition.locations[0],
      directions: direction,
      email: user.email,
      gender: "Мужской",
      firstName: user.firstName,
      lastName: user.lastName,
      middle_name: user.middle_name,
      phone: user.phone,
      birthday: user.birthday,
      citizenship: user.citizenship || '',
      checkbox: user.middle_name === "" ? true : false
    }
  })

  useFormPersist("participantForm", { watch, setValue });

  const toggleCheckbox = (e: { target: { checked: boolean; }; }) => {
    if (activCheckbox === 2 && e.target.checked === true) {
      e.target.checked = false
    } else {
      e.target.checked === true ? setActivCheckbox((prev) => prev + 1) : setActivCheckbox((prev) => prev - 1)
    }
  }

  const onChangeCheckBox = (e: { target: { checked: boolean; }; }, value: string) => {
    if (activCheckbox === 2 && e.target.checked === true) return direction
    if (direction?.includes(value)) {
      setDirection(prev => prev?.filter((i) => i !== value))
      return direction.filter((i) => i !== value)
    } else {
      setDirection([...direction!, value])
      return [...direction!, value]
    }
  }

  const submit: SubmitHandler<IParticipantForm> = data => {
    if(direction.length < 1) {
      setError('directions', {type: 'custom', message: "Выберите хотя бы одно направление"})
      return
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {checkbox, email, ...dataCompetition} = data
    register({ ...dataCompetition, city: data.city.name,})
  }

  return (
    <Form className={styles.form} name="participantForm">
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
      <Field
        label="Направление"
        error={errors.directions?.message}
      >
        <p className={styles.hint}>Можно выбрать не более двух направдений</p>
        <div className={styles.container}>
          {
            competition.directions.map((i) => (
              <Controller
              key={i.id}
              name="directions"
              control={control}
              render={({ field: { onChange } }) => (
                <Checkbox shape="rectangle" label={i.name} onChange={(e) => {
                  onChange(onChangeCheckBox(e, i.name))
                  toggleCheckbox(e)
                }} />
              )}
            />
            ))
          }
        </div>
      </Field>
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
      <Field
        label="Видео"
        error={errors.video?.message}
      >
        <Controller
          name="video"
          control={control}
          render={({ field: { value, onChange } }) => (
            <Input
              placeholder="Ссылка"
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
