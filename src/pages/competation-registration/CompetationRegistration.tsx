import { FC } from "react";
import { Layout } from "../../components/layout/Layout";
import { CompetitionRegistration } from "../../components/competitions/competition-registration/CompetitionRegistration";

export const CompetitionRegistrationPage: FC = () => {
  return (
    <Layout>
      <CompetitionRegistration />
    </Layout>
  );
};
