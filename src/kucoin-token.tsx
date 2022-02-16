import * as React from "react";
import { SVGProps } from "react";

const KucoinToken = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
    <circle
      cx={16}
      cy={16}
      r={16}
      fill="#0093dd"
      fillRule="evenodd"
      clipRule="evenodd"
    />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="m13.5 16 5.2 5.3L22 18c.6-.6 1.5-.6 2 0 .6.6.6 1.6 0 2.2l-4.3 4.4c-.6.6-1.5.6-2.1 0l-6.2-6.4V22c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5V10c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5v3.8l6.2-6.4c.6-.6 1.5-.6 2.1 0l4.3 4.4c.6.6.6 1.6 0 2.2-.6.6-1.5.6-2 0l-3.3-3.4-5.2 5.4zm5.2-1.5c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5-1.5-.7-1.5-1.5.7-1.5 1.5-1.5z"
      clipRule="evenodd"
    />
  </svg>
);

export default KucoinToken;
