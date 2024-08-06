import { FC } from "react";

type Props = {
  disabled?: boolean;
  isGrey?: boolean;
  isWhite?: boolean;
};

export const ArrowRight: FC<Props> = ({ disabled, isGrey, isWhite }) => {
  let color;

  switch (true) {
    case disabled:
      color = "#313131";
      break;
    case isGrey:
      color = "#313113";
      break;
    case isWhite:
      color = "#FFFFFF";
      break;
    default:
      color = "#ff4310";
  }

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 6L16 12.5L9 19"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
