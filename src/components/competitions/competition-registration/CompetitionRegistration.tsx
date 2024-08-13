import { FC, useEffect, useState } from "react";
import styles from "./CompetitionRegistration.module.css";
import { TabList } from "../../../ui-kit/tab-list/TabList";
import { Competition, Option, RegisterCompetition } from "../../../types";
import { ParticipantForm } from "./forms/participant/ParticipantForm";
import { ViewerForm } from "./forms/viewer/ViewerForm";
import { useParams } from "react-router-dom";
import { CompetitionsService } from "../../../services/competitions.service";
import { useAppDispatch } from "../../../store/hooks";
import { setModalInfo } from "../../../store/slices/modal-info-slice/ModalInfoSlice";

export const CompetitionRegistration: FC = () => {
  const dispatch = useAppDispatch()
  const [role, setRole] = useState<string | number>(1)
  const [competition, setCompetition] = useState<Competition>()
  const params = useParams();
  const id = parseInt(params.id!)

  function getRole(roleId: number | string) {
    return competition?.participationTypes.find((i) => i.id === roleId)
  }

  function getCompetition(id: number) {
    return CompetitionsService
      .getCompetition(id)
      .then((res) => {
        setCompetition(res)
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
      .finally(() => {
      })
  }

  function registerCompetition(data: RegisterCompetition) {
    return CompetitionsService
      .registerCompetition(data)
      .then(() => {
        dispatch(setModalInfo({
          isActive: true,
          title: 'Заявка отправлена!',
          subtitle: 'Результаты обработки заявки появятся в твоем профиле в течение 24 часов',
          replace: '/'
        }))
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
      .finally(() => {
      })
  }

  useEffect(() => {
    getCompetition(id)
  }, [id])

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Заявка на регистрацию</h2>
      <div className={styles.container}>
        <>
          {competition?.participationTypes.length === 2 && <TabList options={competition.participationTypes} activeTab={role} onChange={(id: Option['id']) => setRole(id)} />}
          {getRole(role)?.name === "Участник" && <ParticipantForm data={competition!} register={registerCompetition} />}
          {getRole(role)?.name === "Зритель" && <ViewerForm data={competition!} register={registerCompetition} />}
        </>
      </div>
    </section>
  );
};
