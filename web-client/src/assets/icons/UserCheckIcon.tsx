import * as React from "react";

const UserCheckIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 25 22"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M1 21a8.889 8.889 0 0 1 14.769-6.667"
    ></path>
    <path
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M9.889 12.111A5.556 5.556 0 1 0 9.889 1a5.556 5.556 0 0 0 0 11.111"
    ></path>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M16.556 18.778 18.778 21l4.444-4.445"
    ></path>
  </svg>
);

export default UserCheckIcon;
