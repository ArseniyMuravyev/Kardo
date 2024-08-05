import { ReactNode } from "react";

export type SliderItem = {
  id: number;
  image: string;
};

export type DirectionsItem = {
  title: string;
  image: string;
};

export type Tab = {
  title: string;
  link: string;
  icon: ReactNode;
};

export type Contest = {
  title: string;
  description: string;
  additionalDescription?: string;
  link: string;
};
