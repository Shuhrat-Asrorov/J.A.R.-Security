import * as React from "react";

const AwardIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 22 24"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M10.864 4.966a4.035 4.035 0 1 0 0 8.07 4.035 4.035 0 0 0 0-8.07M8.69 9.001a2.173 2.173 0 1 1 4.345 0 2.173 2.173 0 0 1-4.345 0"
      clipRule="evenodd"
    ></path>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M10.864 0a9.001 9.001 0 0 0-7.528 13.938L.124 19.5a.931.931 0 0 0 .987 1.378l3.246-.638 1.069 3.129a.93.93 0 0 0 1.688.165l3.203-5.548q.546.034 1.093 0l3.203 5.548a.93.93 0 0 0 1.689-.167l1.065-3.136 3.248.646a.931.931 0 0 0 .988-1.378l-3.21-5.561A9 9 0 0 0 10.862 0m-7.14 9.001a7.139 7.139 0 1 1 14.279 0 7.139 7.139 0 0 1-14.278 0m4.637 8.649a9 9 0 0 1-3.759-2.181l-1.84 3.187 2.033-.4a.93.93 0 0 1 1.06.612l.67 1.96zm6.838 3.173-1.832-3.173a9 9 0 0 0 3.758-2.181l1.837 3.182-2.033-.405a.93.93 0 0 0-1.063.614z"
      clipRule="evenodd"
    ></path>
  </svg>
);

export default AwardIcon;
