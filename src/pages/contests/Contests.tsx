import { FC } from "react";
import { Layout } from "../../components/layout/Layout";
import { Heading } from "../../ui-kit/heading/Heading";
import { ContestCards } from "../../components/contests/contest-cards/ContestCards";

export const ContestsPage: FC = () => {
  return (
    <Layout>
      <Heading type="h1">Конкурсы</Heading>
      <ContestCards />
    </Layout>
  );
};
