import * as React from "react";
import { SVGProps } from "react";

const Mxc = (props: SVGProps<SVGSVGElement>) => (
  <svg
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 400 443.19"
    {...props}
  >
    <defs>
      <linearGradient
        id="a"
        x1={-1103.34}
        y1={588.27}
        x2={-1102.96}
        y2={588.27}
        gradientTransform="matrix(312.47 0 0 -61.3 345134.98 36239.09)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#00ffd9" />
        <stop offset={0.85} stopColor="#09006e" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={-1103.37}
        y1={588.27}
        x2={-1102.32}
        y2={588.27}
        gradientTransform="matrix(119.55 -207.07 -53.09 -30.65 163399.08 -210136.07)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.08} stopColor="#00ffd9" />
        <stop offset={0.68} stopColor="#064e8f" />
        <stop offset={1} stopColor="#09006e" />
      </linearGradient>
    </defs>
    <circle
      cx={200}
      cy={243.19}
      r={200}
      style={{
        fill: "#09006e",
      }}
    />
    <rect
      x={167.91}
      y={143.5}
      width={330.66}
      height={64.87}
      rx={32.44}
      transform="rotate(-60 283.645 205.032)"
      style={{
        fill: "url(#a)",
      }}
    />
    <path
      style={{
        fill: "#00ffd9",
      }}
      d="m264.13 351.13-.64-101.27-48.25 81.27h-33.02l-48.25-77.78v97.78H65.71V128.91h61.59l72.38 118.41 70.48-118.41h61.59l.63 222.22h-68.25z"
    />
    <path
      data-name="Rectangle"
      d="m246.2 261.82 94.08-162.94A32.42 32.42 0 0 1 384.58 87a32.43 32.43 0 0 1 11.88 44.3l-94.08 162.95a32.44 32.44 0 0 1-44.31 11.88 32.45 32.45 0 0 1-11.87-44.31Z"
      transform="translate(-50 -28.4)"
      style={{
        fill: "url(#b)",
      }}
    />
  </svg>
);

export default Mxc;
