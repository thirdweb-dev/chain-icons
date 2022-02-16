import * as React from "react";
import { SVGProps } from "react";

const Torn = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 39 40" {...props}>
    <path
      fill="#94febf"
      fillRule="evenodd"
      d="M29.4 8.6c5.7.5 10.2 5.1 10.5 10.8-.3-9.4-8.1-16.9-17.6-16.6-5.6.2-10.8 3-13.8 7.7C9 4.8 13.6.3 19.3 0 9.8.4 2.5 8.5 2.9 18c.2 5.4 3 10.4 7.5 13.4C4.7 30.9.3 26.3 0 20.6.2 30 8.1 37.5 17.5 37.3c5.6-.1 10.7-3 13.8-7.6-.5 5.6-5.1 10-10.7 10.3 9.4-.3 16.8-8.2 16.5-17.7-.2-5.5-3-10.7-7.7-13.7zm-9.5 18.6c-1.9 0-3.7-.7-5-2.1-2.8-2.8-2.7-7.3 0-10s7.3-2.7 10 0 2.7 7.3 0 10c-1.3 1.4-3.1 2.1-5 2.1z"
      clipRule="evenodd"
    />
  </svg>
);

export default Torn;
