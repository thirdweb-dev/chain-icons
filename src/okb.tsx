import * as React from "react";
import { SVGProps } from "react";

const Okb = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 212 212" {...props}>
    <circle cx={106} cy={48} r={48} fill="#88bdf3" />
    <circle cx={106} cy={164} r={48} fill="#3075ee" />
    <circle cx={164} cy={106} r={48} fill="#5795f1" />
    <circle cx={48} cy={106} r={48} fill="#205fec" />
    <path
      fill="#134bef"
      d="M94.7 94.7a48 48 0 0 1-35.3-35.3 48.31 48.31 0 0 1 35.3 35.3Z"
    />
    <path
      fill="#0932e8"
      d="M59.3 152.7a48 48 0 0 1 35.3-35.3 48.31 48.31 0 0 1-35.3 35.3Z"
    />
    <path
      fill="#164bea"
      d="M117.3 117.3a48 48 0 0 1 35.3 35.3 48.31 48.31 0 0 1-35.3-35.3Z"
    />
    <path
      fill="#3170f1"
      d="M152.7 59.3a48 48 0 0 1-35.3 35.3 48.31 48.31 0 0 1 35.3-35.3Z"
    />
  </svg>
);

export default Okb;
