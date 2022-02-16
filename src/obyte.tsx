import * as React from "react";
import { SVGProps } from "react";

const Obyte = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
    <g fill="none" fillRule="evenodd">
      <circle cx={16} cy={16} r={16} fill="#302C2C" fillRule="nonzero" />
      <circle cx={16} cy={16} r={11} fill="#FFF" />
    </g>
  </svg>
);

export default Obyte;
