import * as React from "react";
import { SVGProps } from "react";

const BzxProtocol = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 80 80"
    {...props}
  >
    <linearGradient
      id="a"
      x1={74.8}
      x2={10.8}
      y1={7.2}
      y2={71.2}
      gradientTransform="matrix(1 0 0 -1 0 82)"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset={0.159} stopColor="#003cda" />
      <stop offset={1} stopColor="#33dfcc" />
    </linearGradient>
    <path
      fill="url(#a)"
      d="M0 16C0 7.2 7.2 0 16 0h48c8.8 0 16 7.2 16 16v48c0 8.8-7.2 16-16 16H16C7.2 80 0 72.8 0 64V16z"
    />
    <path
      fill="#fff"
      d="M32 0h-8v18.4h8V0zm13.5 56.7H34.9c-6 0-10.9-4.9-10.9-10.9V38h8v7.7c0 1.6 1.3 2.9 2.9 2.9h10.6c1.6 0 2.9-1.3 2.9-2.9V35.2c0-1.6-1.3-2.9-2.9-2.9H0v-8h45.5c6 0 10.9 4.9 10.9 10.9v10.6c0 6-4.9 10.9-10.9 10.9z"
    />
  </svg>
);

export default BzxProtocol;
