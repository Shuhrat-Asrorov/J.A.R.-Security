import * as React from "react";

const CircleParkingIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 37 37"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M36 18.5C36 28.165 28.165 36 18.5 36S1 28.165 1 18.5 8.835 1 18.5 1 36 8.835 36 18.5"
    ></path>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M13.25 27.25v-7m0 0V9.75h7a5.25 5.25 0 1 1 0 10.5z"
    ></path>
  </svg>
);

export default CircleParkingIcon;
