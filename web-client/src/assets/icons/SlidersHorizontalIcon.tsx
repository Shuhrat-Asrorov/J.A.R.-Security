import * as React from "react";

const SlidersHorizontalIcon: React.FC<React.SVGProps<SVGSVGElement>> = (
  props,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 32 32"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M1 4.333h15m15 0h-8.333m0 0V1m0 3.333v3.334M1 16h11.667m0 0v-3.333m0 3.333v3.333M31 16H19.333M1 27.667h11.667m18.333 0H19.333m0 0v-3.334m0 3.334V31"
    ></path>
  </svg>
);

export default SlidersHorizontalIcon;
