import * as React from "react";
import { SVGProps } from "react";

const Zel = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" {...props}>
    <path
      fill="#2b61d1"
      d="M15.46 0A15.36 15.36 0 1 1 0 15.36 15.36 15.36 0 0 1 15.46 0Z"
    />
    <g fill="#fff">
      <path d="m17.29 24.27-1.76 1-3.78-2.18 1.72-1h.07Zm6.76-13.74v2.05l-3.72-2.15-1-.58-1 .58-4.74 2.74-1 .58V15l-1.85-1.1-1-.58-1 .58-1.74.99v-4.36l8.52-4.91Z" />
      <path d="M24.05 14.91v5.47l-4.73 2.73-4.73-2.73v-5.47l4.74-2.73Zm-11.59 2.31v3.15l-2.73 1.57L7 20.37v-3.15l2.72-1.57Z" />
    </g>
  </svg>
);

export default Zel;
