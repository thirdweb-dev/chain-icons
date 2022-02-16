import * as React from "react";
import { SVGProps } from "react";

const Divi = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 39 39"
    {...props}
  >
    <linearGradient
      id="a"
      x1={39.655}
      x2={0}
      y1={2.345}
      y2={42}
      gradientTransform="matrix(1 0 0 -1 0 42)"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset={0} stopColor="#4b81eb" />
      <stop offset={1} stopColor="#6752f4" />
    </linearGradient>
    <path
      fill="url(#a)"
      fillRule="evenodd"
      d="M19.8 0c11 0 19.8 8.9 19.8 19.8 0 11-8.9 19.8-19.8 19.8C8.9 39.7 0 30.8 0 19.8 0 8.9 8.9 0 19.8 0z"
      clipRule="evenodd"
    />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M9 9.4h11.8c4.8 0 9.7 3.4 9.7 10.3S25.6 30 20.8 30h-8.7V18.9h5.1V25h3.4c2.2 0 4.8-2.5 4.8-5.3s-2.5-5.3-4.8-5.3H15c-2.5 0-4.5-1.7-6-5z"
      clipRule="evenodd"
    />
  </svg>
);

export default Divi;
