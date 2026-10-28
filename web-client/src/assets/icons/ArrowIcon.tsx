import * as React from "react";

const ArrowIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 26 15"
    {...props}
  >
    <path
      fill="currentColor"
      d="M0 7.364v1h25v-2H0zm25.707.707a1 1 0 0 0 0-1.414L19.343.293a1 1 0 1 0-1.414 1.414l5.657 5.657-5.657 5.657a1 1 0 0 0 1.414 1.414z"
    ></path>
  </svg>
);

export default ArrowIcon;
