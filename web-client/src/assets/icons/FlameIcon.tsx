import * as React from "react";

const FlameIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 28 37"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M14 1q1.857 7.369 7.429 11.974Q27 17.579 27 23.105c0 3.42-1.37 6.7-3.808 9.118A13.05 13.05 0 0 1 14 36a13.05 13.05 0 0 1-9.192-3.777A12.84 12.84 0 0 1 1 23.105c0-1.993.652-3.932 1.857-5.526 0 1.221.49 2.393 1.36 3.256a4.66 4.66 0 0 0 3.283 1.35 4.66 4.66 0 0 0 3.283-1.35 4.59 4.59 0 0 0 1.36-3.256c0-3.684-2.786-5.526-2.786-9.21Q9.357 4.683 14 1"
    ></path>
  </svg>
);

export default FlameIcon;
