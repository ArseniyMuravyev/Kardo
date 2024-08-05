import { FC } from "react";

type Props = {
  disabled?: boolean;
  grey?: boolean;
  white?: boolean;
};

export const ArrowRight: FC<Props> = ({ disabled, grey, white }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 6L16 12.5L9 19"
      stroke={
        disabled ? "#313131" : grey ? "#313113" : white ? " #ffffff" : "#ff4310"
      }
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
