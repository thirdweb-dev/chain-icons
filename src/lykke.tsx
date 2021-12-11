import * as React from "react";
import { SVGProps } from "react";

const Lykke = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 44 42"
    width={2500}
    height={2386}
    {...props}
  >
    <linearGradient
      id="a"
      gradientUnits="userSpaceOnUse"
      x1={-737.59}
      y1={1153.193}
      x2={-737.59}
      y2={1151.688}
      gradientTransform="matrix(23.9584 0 0 -19.5222 17693.492 22530.762)"
    >
      <stop offset={0} stopColor="#ff0029" />
      <stop offset={1} stopColor="#ab00ff" />
    </linearGradient>
    <path
      d="m10 42 12-12.2L34 42v-7.3L22 22.5 10 34.7z"
      style={{
        fill: "url(#a)",
      }}
    />
    <path
      d="M0 17.3h16.9l5.1 5.2H5.1z"
      style={{
        fill: "#ff8f1c",
      }}
    />
    <linearGradient
      id="b"
      gradientUnits="userSpaceOnUse"
      x1={-735.504}
      y1={1160.775}
      x2={-734.247}
      y2={1159.409}
      gradientTransform="matrix(22.0159 0 0 -22.4778 16209.264 26093.193)"
    >
      <stop offset={0} stopColor="#ff9100" />
      <stop offset={0.515} stopColor="#ff0029" />
      <stop offset={1} stopColor="#ab00ff" />
    </linearGradient>
    <path
      d="M44 17.3H27.1V5.2L22 0v22.5h17z"
      style={{
        fill: "url(#b)",
      }}
    />
  </svg>
);

export default Lykke;
