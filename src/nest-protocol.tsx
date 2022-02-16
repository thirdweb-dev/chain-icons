import * as React from "react";
import { SVGProps } from "react";

const NestProtocol = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" {...props}>
    <path
      fillRule="evenodd"
      d="M500 0c276.1 0 500 223.9 500 500s-223.9 500-500 500S0 776.1 0 500 223.9 0 500 0z"
      clipRule="evenodd"
    />
    <path
      fill="#fff"
      d="M714.5 432.3C737.3 324.1 687 269 592.1 269c-57 0-104.4 20.9-147.2 59.8l9.5-43.7s-15.2-6.6-45.6-6.6c-33.2 0-49.4 6.6-49.4 6.6L268 714.4s13.3 6.6 46.5 6.6c30.4 0 48.4-6.6 48.4-6.6l65.8-307.7c33.2-38 78.8-60.8 120.6-60.8 60.8 0 81.6 30.4 70.3 83.6l-61.1 284.9s14.2 6.6 46.5 6.6c31.3 0 48.4-6.6 48.4-6.6l61.1-282.1z"
    />
  </svg>
);

export default NestProtocol;
