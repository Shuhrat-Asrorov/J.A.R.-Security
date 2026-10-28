import * as React from "react";

const TimerIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 30 36"
    {...props}
  >
    <path
      fill="currentColor"
      d="M27.273 20.455a12.272 12.272 0 1 0-24.545 0 12.272 12.272 0 0 0 24.545 0m2.727 0a15 15 0 1 1-30 0 15 15 0 0 1 30 0"
    ></path>
    <path
      fill="currentColor"
      d="M19.49 14.036a1.366 1.366 0 0 1 1.929 1.93l-5.455 5.455a1.366 1.366 0 0 1-1.928-1.93zM18.635 0a1.363 1.363 0 1 1 0 2.727h-7.272a1.363 1.363 0 1 1 0-2.727z"
    ></path>
    <path
      fill="currentColor"
      d="M16.363 1.364v5.454h-2.727V1.364zm9.945 5.854a1.365 1.365 0 0 1 1.929 1.93l-2.63 2.63-.963-.967-.967-.962z"
    ></path>
  </svg>
);

export default TimerIcon;
