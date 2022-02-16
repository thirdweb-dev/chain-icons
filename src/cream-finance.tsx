import * as React from "react";
import { SVGProps } from "react";

const CreamFinance = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75 75" {...props}>
    <defs>
      <clipPath id="a">
        <path fill="none" d="M0 0h75v75H0z" />
      </clipPath>
    </defs>
    <g data-name="Layer 2">
      <g clipPath="url(#a)" data-name="Layer 1">
        <path
          fill="#69e2dc"
          d="m40.52 39.27 13.15 13.15a2.51 2.51 0 0 1-.25 3.76 23.76 23.76 0 1 1 .09-37.3 2.48 2.48 0 0 1 .16 3.69L40.51 35.73a2.5 2.5 0 0 0-.54.81 2.65 2.65 0 0 0-.19 1 2.46 2.46 0 0 0 .2 1 2.4 2.4 0 0 0 .54.81ZM37.5 0A37.5 37.5 0 1 0 75 37.5 37.5 37.5 0 0 0 37.5 0Z"
        />
      </g>
    </g>
  </svg>
);

export default CreamFinance;
