import * as React from "react";
import { SVGProps } from "react";

const PirateChain = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 2000 2000"
    {...props}
  >
    <linearGradient
      id="a"
      x1={0}
      x2={2000}
      y1={-2}
      y2={-2}
      gradientTransform="translate(0 1002)"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset={0} stopColor="#b38c30" />
      <stop offset={1} stopColor="#f2de98" />
    </linearGradient>
    <path
      fill="url(#a)"
      d="M1000 0C447.6 0 0 447.6 0 1000s447.6 1000 1000 1000 1000-447.6 1000-1000S1552.4 0 1000 0zM548.6 741.5c0-123.6 100.2-223.1 224.6-223.1h512.4c58.6 0 114.9 23 156.7 64.1l-262.2 131.9h-361c-40.7 0-73.1 29.4-73.1 64.8v160.5l-196.7 102.5V741.5h-.7zm959.3 333.9c0 123.6-100.2 223.1-223.1 223.1H745.3v190.7c0 32.4-24.1 58.8-52.8 65.6l-67.1 1.5h-76.9v-331.6l257-134.1h431.8c40.7 0 74.6-29.4 74.6-65.6V828.9l195.9-98.7.1 345.2z"
    />
  </svg>
);

export default PirateChain;
