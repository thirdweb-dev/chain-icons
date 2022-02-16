import * as React from "react";
import { SVGProps } from "react";

const EightEightMph = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 250 250"
    {...props}
  >
    <circle cx={125} cy={125} r={125} />
    <linearGradient
      id="a"
      x1={124.655}
      x2={124.655}
      y1={52.323}
      y2={189.503}
      gradientTransform="matrix(1 0 0 -1 0 252)"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset={0} stopColor="#ffe600" />
      <stop offset={0.307} stopColor="#faad14" />
      <stop offset={0.672} stopColor="#f7169c" />
      <stop offset={1} stopColor="#3435f5" />
    </linearGradient>
    <path
      fill="url(#a)"
      fillRule="evenodd"
      d="M137.6 193.1h-25.8c6.3 8.8 19.5 8.8 25.8 0zm4.7-8.1H107l-9.3-16.3h53.8l-9.2 16.3zm-49.2-24.5h63.1l9.3-16.3H83.9l9.2 16.3zM79.2 136 70 119.7h109.3L170 136H79.2zm-13.8-24.5H184l10.9-19.3H54.4l11 19.3zM49.9 84.1C45.7 73.8 53.2 62 64.7 62h119.8c11.6 0 19.1 11.8 14.8 22.1H49.9z"
      clipRule="evenodd"
    />
  </svg>
);

export default EightEightMph;
