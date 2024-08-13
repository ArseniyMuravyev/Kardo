import { FC } from "react";
import { Form } from "../../../../ui-kit/form/Form";
import { Field } from "../../../../ui-kit/field/Field";
import { Input } from "../../../../ui-kit/input/Input";
import { Button } from "../../../../ui-kit/button/Button";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./schema";
import { useAppSelector } from "../../../../store/hooks";
import { Register } from "../../../../types";
import useFormPersist from "react-hook-form-persist";

interface StepThreeForm {
  country: string
  region: string
  city: string
}

interface Props {
  regisration: (data: Register) => void
}

export const StepThree: FC<Props> = ({regisration}) => {
  const {user} = useAppSelector((state) => state.user)
  const { handleSubmit, control, formState: { errors }, watch, setValue } = useForm<StepThreeForm>({
    resolver: yupResolver(schema),
  })

  useFormPersist("stepThree", { watch, setValue });

  const submit: SubmitHandler<StepThreeForm> = data => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {id, state, nickname, citizenship, ...userInfo} = user
    regisration({...userInfo, ...data})
  }

  return (
    <Form name="stepThree">
      <Field
        label="Страна"
        error={errors.country?.message}
      >
        <Controller
          name="country"
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
        label="Регион"
        error={errors.region?.message}
      >
        <Controller
          name="region"
          control={control}
          render={({ field: { value, onChange } }) => (
            <Input
              placeholder="Московская область"
              value={value}
              onChange={onChange}
            />
          )}
        />
      </Field>
      <Field
        label="Город"
        error={errors.city?.message}
      >
        <Controller
          name="city"
          control={control}
          render={({ field: { value, onChange } }) => (
            <Input
              placeholder="Москва"
              type="text"
              value={value}
              onChange={onChange}
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
