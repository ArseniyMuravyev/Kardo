import {
  SliderItem,
  DirectionsItem,
  Tab,
  Contest,
  TCompetitionCard,
  Option,
} from "../types";
import { HomeIcon } from "../ui-kit/icons/home/HomeIcon";
import { NewsIcon } from "../ui-kit/icons/news/NewsIcon";
import { ProfileIcon } from "../ui-kit/icons/profile/ProfileIcon";
import { TrophyIcon } from "../ui-kit/icons/trophy/TropyIcon";

export const mainPageSlider: SliderItem[] = [
  {
    id: 1,
    image: "/images/slider-1.png",
  },
  {
    id: 2,
    image: "/images/slider-2.png",
  },
  {
    id: 3,
    image: "/images/slider-3.png",
  },
];

export const directions: DirectionsItem[] = [
  {
    title: "bmx",
    image: "/images/directions-card-1.png",
  },
  {
    title: "брейкинг",
    image: "/images/directions-card-2.png",
  },
];

export const tabs: Tab[] = [
  {
    title: "Главная",
    link: "/",
    icon: <HomeIcon />,
  },
  {
    title: "Конкурсы",
    link: "/contests",
    icon: <TrophyIcon />,
  },
  {
    title: "Лента",
    link: "/news",
    icon: <NewsIcon />,
  },
  {
    title: "Профиль",
    link: "/profile",
    icon: <ProfileIcon />,
  },
];

export const contests: Contest[] = [
  {
    title: "премия",
    description: `Конкурсное направление международной премии «КАРДО», ориентированное на признание и поощрение сообществ и организаций, которые внесли наибольший вклад в развитие конкретного направления уличной культуры и спорта.`,
    link: "/contests/prize",
  },
  {
    title: "видеоконкурс",
    description: `Конкурс видеороликов в о дном из выбранных направлений: брейкинг, паркур, фриран, воркаут, хип-хоп, граффити, диджеинг, трикинг, скейтбординг, веломотоэкстрим, экстремальный самокат.`,
    link: "/contests/video-contest",
  },
  {
    title: "соревнования",
    description: `Гранд-финал КАРДО [7] представляет из себя формат международного мероприятия уличной культуры, где проходят финальные соревнования по направлениям: хип-хоп, брейкинг, паркур, фриран, воркаут, кикскутинг, трикинг, граффити, скейтбодинг, BMX, диджеинг на специально оборудованных площадках, где участники будут показывать свои навыки для определения лучших.`,
    link: "/contests/competitions",
  },
  {
    title: "дети",
    description: `До этого момента КАРДО поддерживало всех представителей Уличной Культуры старше 16 лет, живущих и болеющих своим делом. Нo время идёт.`,
    additionalDescription: `Вы просили — мы услышали и организовали премию КАРДО-ДЕТИ для участников от 7 до 15 лет.`,
    link: "/contests/kids",
  },
  {
    title: "проекты",
    description: `Мы создаем условия, чтобы любой желающий смог развивать свои проектные идеи и мечты. Каждый может оформить заявку на получение грантовой поддержки, пройти очную защиту на гранд-финале 22-25 августа и получить деньги на реализацию своего проекта!`,
    link: "/contests/projects",
  },
];

export const competitions: TCompetitionCard[] = [
  {
    id: 1,
    competitionType: "Региональные отборы",
    startDate: "2024-04-27",
    endDate: "2024-08-10",
  },
  {
    id: 2,
    competitionType: "Национальные отборы",
    startDate: "2024-01-21",
    endDate: "2024-07-27",
  },
  {
    id: 3,
    competitionType: "Гранд-финал",
    startDate: "2024-08-22",
    endDate: "2024-08-25",
  },
];

export const optionsLang: Option[] = [
  {
    id: 'RU',
    name: 'Русский',
  },
  {
    id: 'EN',
    name: 'English',
  },
  {
    id: 'ES',
    name: 'Español',
  },
  {
    id: 'ZH',
    name: '中文',
  },
  {
    id: 'ar',
    name: 'العربية',
  },
];

export const optionsEvent: Option[] = [
  {
    id: 'signin',
    name: 'Вход',
  },
  {
    id: 'signup',
    name: 'Регистрация',
  }
]
