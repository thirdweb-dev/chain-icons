import * as React from "react";
import { SVGProps } from "react";

const Mimblewimblecoin = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 88 44"
    {...props}
  >
    <linearGradient
      id="a"
      x1={213.909}
      x2={15.427}
      y1={20.075}
      y2={20.075}
      gradientTransform="matrix(1 0 0 -1 0 42.15)"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset={0} stopColor="#3600c9" />
      <stop offset={1} stopColor="#9e00e7" />
    </linearGradient>
    <path
      fill="url(#a)"
      d="M40.5 27.9 25.8 42.6c-2.1 2.1-5.5 2.1-7.6 0L1.6 25.9c-2.1-2.1-2.1-5.5 0-7.6L18.3 1.6c2.1-2.1 5.5-2.1 7.6 0l14.7 14.7c2.1 2.1 5.5 2.1 7.6 0L62.8 1.6c2.1-2.1 5.5-2.1 7.6 0L87 18.3c2.1 2.1 2.1 5.5 0 7.6L70.4 42.6c-2.1 2.1-5.5 2.1-7.6 0L48.1 27.9c-2.1-2.1-5.5-2.1-7.6 0z"
    />
  </svg>
);

export default Mimblewimblecoin;
