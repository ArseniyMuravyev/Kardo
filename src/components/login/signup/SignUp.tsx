import { FC, useState } from "react";
import { TabList } from "./tab-list/TabList";
import { StepOne } from "./step-one/StepOne";
import { StepTwo } from "./step-two/StepTwo";
import { StepThree } from "./step-three/StepThree";
import { useAppSelector } from "../../../store/hooks";
import { Option, Register } from "../../../types";

interface Props {
  regisration: (data: Register) => void
}

const optionsStep: Option[] = [
  {
    id: '1',
    name: '1',
  },
  {
    id: '2',
    name: '2',
  },
  {
    id: '3',
    name: '3',
  },
]

export const SignUp: FC<Props> = ({regisration}) => {
  const [page, setPage] = useState<string | number>('1')
  const {stepRegistration} = useAppSelector((state) => state.user)

  const handleStep = (id: Option['id']) => {
    if(+id > stepRegistration) return
    setPage(id)
  }

  const onChangePage = (n: string) => setPage(n)

  return (
    <>
      <TabList options={optionsStep} activeTab={page} onChange={(id: Option['id']) => handleStep(id)} />
      {page === "1" && <StepOne onChange={onChangePage}/>}
      {page === "2" && <StepTwo onChange={onChangePage}/>}
      {page === "3" && <StepThree regisration={regisration} />}
    </>
  );
};
