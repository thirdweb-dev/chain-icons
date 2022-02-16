import * as React from "react";
import { SVGProps } from "react";

const Lykke = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 42" {...props}>
    <linearGradient
      id="a"
      x1={-737.59}
      x2={-737.59}
      y1={1153.193}
      y2={1151.688}
      gradientTransform="matrix(23.9584 0 0 -19.5222 17693.492 22530.762)"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset={0} stopColor="#ff0029" />
      <stop offset={1} stopColor="#ab00ff" />
    </linearGradient>
    <path fill="url(#a)" d="m10 42 12-12.2L34 42v-7.3L22 22.5 10 34.7z" />
    <path fill="#ff8f1c" d="M0 17.3h16.9l5.1 5.2H5.1z" />
    <linearGradient
      id="b"
      x1={-735.504}
      x2={-734.247}
      y1={1160.775}
      y2={1159.409}
      gradientTransform="matrix(22.0159 0 0 -22.4778 16209.264 26093.193)"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset={0} stopColor="#ff9100" />
      <stop offset={0.515} stopColor="#ff0029" />
      <stop offset={1} stopColor="#ab00ff" />
    </linearGradient>
    <path fill="url(#b)" d="M44 17.3H27.1V5.2L22 0v22.5h17z" />
  </svg>
);

export default Lykke;
