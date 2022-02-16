import * as React from "react";
import { SVGProps } from "react";

const Tellor = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" {...props}>
    <defs>
      <linearGradient
        id="b"
        x1={88.62}
        x2={104.7}
        y1={867.19}
        y2={929.41}
        gradientTransform="translate(0 -798)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#00ff8f" />
        <stop offset={0.43} stopColor="#53fdb2" />
        <stop offset={1} stopColor="#68fcbb" />
      </linearGradient>
      <clipPath id="a">
        <path fill="none" d="M0 0h200v200H0z" />
      </clipPath>
    </defs>
    <g data-name="Layer 2">
      <g clipPath="url(#a)" data-name="Layer 1">
        <circle cx={100} cy={100} r={100} />
        <path
          fill="url(#b)"
          d="M164.8 77.5c4.4 17.2-82.3 59.7-121.6 69.8s76-39.7 71.5-56.9-96.4-3.1-57.1-13.2 102.8-16.9 107.2.3Z"
        />
      </g>
    </g>
  </svg>
);

export default Tellor;
