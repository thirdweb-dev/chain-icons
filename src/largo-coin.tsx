import * as React from "react";
import { SVGProps } from "react";

const LargoCoin = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 62 62"
    {...props}
  >
    <linearGradient
      id="a"
      x1={9.088}
      x2={52.913}
      y1={-881.087}
      y2={-924.913}
      gradientTransform="matrix(1 0 0 -1 0 -872)"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset={0} stopColor="#324bcd" />
      <stop offset={1} stopColor="#3dba8a" />
    </linearGradient>
    <path
      fill="url(#a)"
      d="M31 62C13.9 62 0 48.1 0 31S13.9 0 31 0s31 13.9 31 31-13.9 31-31 31zm0-59.4C15.3 2.6 2.6 15.3 2.6 31S15.3 59.4 31 59.4 59.4 46.7 59.4 31 46.7 2.6 31 2.6z"
    />
    <linearGradient
      id="b"
      x1={22.044}
      x2={34.512}
      y1={-889.133}
      y2={-910.73}
      gradientTransform="matrix(1 0 0 -1 0 -872)"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset={0} stopColor="#3dffef" />
      <stop offset={1} stopColor="#a80de9" />
    </linearGradient>
    <path
      fill="url(#b)"
      d="M34.6 12.4c2.8 1.2 4.2 4.4 3 7.3l-8.9 21.8c-1.2 2.9-4.4.2-7.2-1s-4.2-.4-3-3.3l8.9-21.8c1.1-2.8 4.3-4.2 7.2-3z"
    />
    <linearGradient
      id="c"
      x1={20.785}
      x2={38.524}
      y1={-901.535}
      y2={-919.274}
      gradientTransform="matrix(1 0 0 -1 0 -872)"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset={0} stopColor="#50d3ee" />
      <stop offset={1} stopColor="#324bcd" />
    </linearGradient>
    <path
      fill="url(#c)"
      d="M38.4 45.1H23.3c-3 0-5.5-2.4-5.5-5.5 0-.7.1-1.4.4-2.1l4-9.5s-.3 6 6.1 6.1h10.1c3 0 5.5 2.4 5.5 5.5s-2.5 5.5-5.5 5.5z"
    />
  </svg>
);

export default LargoCoin;
