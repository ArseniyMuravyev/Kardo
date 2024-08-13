import { FC } from "react";

type Props = {
  isWhite?: boolean;
};

export const ArrowLeft: FC<Props> = ({ isWhite = false }) => (
  <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="m16 19-7-6.5L16 6"
      stroke={isWhite ? "#FFFFFF" : "#FF4310"}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
