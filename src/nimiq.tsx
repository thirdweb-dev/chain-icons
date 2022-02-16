import * as React from "react";
import { SVGProps } from "react";

const Nimiq = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 64 56"
    {...props}
  >
    <radialGradient
      id="a"
      cx={46.003}
      cy={6.38}
      r={59.47}
      gradientTransform="matrix(1 0 0 -1 0 58)"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset={0} stopColor="#ec991c" />
      <stop offset={1} stopColor="#e9b213" />
    </radialGradient>
    <path
      fill="url(#a)"
      d="M63.3 25.4 50 2.6C49 1 47.2 0 45.3 0H18.7c-1.9 0-3.7 1-4.6 2.6L.7 25.4c-1 1.6-1 3.6 0 5.3L14 53.4c1 1.6 2.7 2.6 4.6 2.6h26.7c1.9 0 3.7-1 4.7-2.6l13.3-22.8c.9-1.6.9-3.6 0-5.2z"
    />
  </svg>
);

export default Nimiq;
