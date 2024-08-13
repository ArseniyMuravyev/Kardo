import { ReactNode } from "react";

export type Option = {
  id: number | string
  name: string
}

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
  title: string
  description: string
  additionalDescription?: string
  link: string
};

export type TCompetitionCard = {
  id: number
  competitionType: string
  startDate: string
  endDate: string
};

export type Auth = {
  username: string
  password: string
}

export type Register = {
  email: string
  password: string
  nickname?: string
  firstName: string
  lastName: string
  middle_name?: string
  birthday: string
  country: string
  region: string
  city: string
  phone: string
  photoLink: string
  backgroundLink: string
  pageLink: string
  style: string
  aboutMe: string
}

export type User = {
  id: number | null
  email: string
  password: string
  nickname?: string
  firstName: string
  lastName: string
  middle_name: string
  birthday: string
  country: string
  region: string
  city: string
  phone: string
  photoLink: string
  backgroundLink: string
  pageLink: string
  style: string
  aboutMe: string
  state: string
  citizenship: string | null
}

export type Competition = {
  id: number
  competitionType: string
  startDate: string
  endDate: string
  directions: Option[]
  participationTypes: Option[]
  locations: Option[]
}

export type RegisterCompetition = {
  competitionId: number
  userId: number
  applicationType: string
  city: string
  firstName: string
  lastName: string
  middleName?: string
  phone: string
  gender: string
  birthday: string
  citizenship: string
  directions?: string[]
}

export type Application = {
  id: number
  competitionType: string
  startDate: string
  endDate: string
  applicationType: string
  status: string
  directions: string[]
}
