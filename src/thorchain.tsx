import * as React from "react";
import { SVGProps } from "react";

const Thorchain = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 253 290"
    {...props}
  >
    <linearGradient
      id="a"
      x1={-321.725}
      x2={-320.725}
      y1={644.281}
      y2={644.281}
      gradientTransform="matrix(253.26 0 0 -290.5 81479.977 187309)"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset={0} stopColor="#0cf" />
      <stop offset={1} stopColor="#3f9" />
    </linearGradient>
    <path
      fill="url(#a)"
      d="m0 290.5 202.8-85.4-64.2-65.1L0 290.5zM74.5 75l64.2 65L253.3 0 74.5 75z"
    />
  </svg>
);

export default Thorchain;
