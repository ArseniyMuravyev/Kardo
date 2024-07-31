import { FC } from "react";
import { Hero } from "../../components/home/hero/Hero";
import { Layout } from "../../components/layout/Layout";
import { AboutUs } from "../../components/home/about-us/AboutUs";

export const Home: FC = () => {
  return (
    <Layout>
      <Hero />
      <AboutUs />
    </Layout>
  );
};
