import * as React from "react";
import { SVGProps } from "react";

const Thorchain = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 253.3 290.5"
    style={{
      enableBackground: "new 0 0 253.3 290.5",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <linearGradient
      id="a"
      gradientUnits="userSpaceOnUse"
      x1={-321.725}
      y1={644.281}
      x2={-320.725}
      y2={644.281}
      gradientTransform="matrix(253.26 0 0 -290.5 81479.977 187309)"
    >
      <stop
        offset={0}
        style={{
          stopColor: "#0cf",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#3f9",
        }}
      />
    </linearGradient>
    <path
      d="m0 290.5 202.8-85.4-64.2-65.1L0 290.5zM74.5 75l64.2 65L253.3 0 74.5 75z"
      style={{
        fill: "url(#a)",
      }}
    />
  </svg>
);

export default Thorchain;
