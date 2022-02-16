import * as React from "react";
import { SVGProps } from "react";

const Salt = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
    <g fill="none">
      <circle cx={16} cy={16} r={16} fill="#1BEEF4" />
      <path
        fill="#FFF"
        d="m16.5 10.445 5.804 12.214H10.696L16.5 10.445zM16.5 5 7 25h19L16.5 5z"
      />
    </g>
  </svg>
);

export default Salt;
