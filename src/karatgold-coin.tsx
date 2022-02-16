import * as React from "react";
import { SVGProps } from "react";

const KaratgoldCoin = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 361" {...props}>
    <linearGradient
      id="a"
      x1={146.706}
      x2={150.039}
      y1={3.921}
      y2={365.254}
      gradientUnits="userSpaceOnUse"
    >
      <stop offset={0} stopColor="#f9f091" />
      <stop offset={0.1} stopColor="#e4c86d" />
      <stop offset={0.135} stopColor="#ddc370" />
      <stop offset={0.2} stopColor="#d5be74" />
      <stop offset={0.21} stopColor="#dbc271" />
      <stop offset={0.234} stopColor="#e2c76e" />
      <stop offset={0.3} stopColor="#e4c86d" />
      <stop offset={0.4} stopColor="#f9f091" />
      <stop offset={0.5} stopColor="#e3c86d" />
      <stop offset={0.6} stopColor="#d5be74" />
      <stop offset={0.7} stopColor="#e3c86d" />
      <stop offset={0.8} stopColor="#f9f091" />
      <stop offset={0.9} stopColor="#e3c86d" />
      <stop offset={1} stopColor="#d5be74" />
    </linearGradient>
    <path
      fill="url(#a)"
      d="m82.8 167.1-62 60V0h62zm164.4 119.7-82.8-115L289.1 0h-22L20.8 239.4V361h62V186.5l112.7 171.7zM251.8 0h-58.3L86.4 163.8zm-46.3 361H300l-47.3-69.9zM14.8 0H0v361h14.8z"
    />
  </svg>
);

export default KaratgoldCoin;
