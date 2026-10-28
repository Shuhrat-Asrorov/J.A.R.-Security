import * as React from "react";

const MailIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 32 23"
    {...props}
  >
    <path
      fill="currentColor"
      d="M27.429 0H4.57C2.051 0 0 2.063 0 4.6v13.8C0 20.937 2.05 23 4.571 23H27.43C29.949 23 32 20.937 32 18.4V4.6C32 2.063 29.95 0 27.429 0M4.57 2.3H27.43a2.295 2.295 0 0 1 2.285 2.3v.462L16 12.494 2.286 5.062V4.6c0-1.267 1.024-2.3 2.285-2.3M27.43 20.7H4.57a2.28 2.28 0 0 1-1.616-.674 2.3 2.3 0 0 1-.67-1.626V7.675l13.173 7.137a1.14 1.14 0 0 0 1.084 0l13.172-7.137V18.4c0 .61-.24 1.195-.67 1.626a2.28 2.28 0 0 1-1.615.674"
    ></path>
  </svg>
);

export default MailIcon;
