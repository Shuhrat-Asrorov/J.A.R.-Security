import * as React from "react";

const MapPinnedIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      d="m12 18 1.2-2.4V9.43c2.065-.537 3.6-2.4 3.6-4.63C16.8 2.153 14.647 0 12 0a4.805 4.805 0 0 0-4.8 4.8c0 2.23 1.535 4.093 3.6 4.63v6.17zM9.6 4.8c0-1.323 1.076-2.4 2.4-2.4s2.4 1.077 2.4 2.4c0 1.324-1.076 2.4-2.4 2.4a2.4 2.4 0 0 1-2.4-2.4"
    ></path>
    <path
      fill="currentColor"
      d="m17.12 10.276-.64 2.313c3.11.86 5.12 2.512 5.12 4.211 0 2.27-3.942 4.8-9.6 4.8s-9.6-2.53-9.6-4.8c0-1.7 2.01-3.352 5.12-4.212l-.64-2.313C2.637 11.448 0 13.948 0 16.8 0 20.837 5.272 24 12 24s12-3.163 12-7.2c0-2.852-2.636-5.352-6.88-6.524"
    ></path>
  </svg>
);

export default MapPinnedIcon;
