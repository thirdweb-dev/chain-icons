import * as React from "react";
import { SVGProps } from "react";

const TheSandbox = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 50 50"
    {...props}
  >
    <linearGradient
      id="a"
      x1={25.214}
      x2={25.837}
      y1={1024.822}
      y2={1024.119}
      gradientTransform="matrix(50 0 0 -50 -1250 51250)"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset={0} stopColor="#00adef" />
      <stop offset={1} stopColor="#0084ff" />
    </linearGradient>
    <circle cx={25} cy={25} r={25} fill="url(#a)" />
    <path
      fill="#fff"
      d="m16.6 11.8-2.7 2.7v10.7l2.7 2.7h10.7v5.4H22v-2.7h-8.1V36l2.7 2.7h16.1l2.7-2.7V25.2l-2.7-2.7H22v-5.4h5.4v2.7h8.1v-5.4l-2.7-2.7H16.6z"
    />
  </svg>
);

export default TheSandbox;
