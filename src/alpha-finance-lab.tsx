import * as React from "react";
import { SVGProps } from "react";

const AlphaFinanceLab = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 32 32"
    {...props}
  >
    <linearGradient
      id="a"
      x1={4.686}
      x2={27.314}
      y1={4.576}
      y2={27.204}
      gradientTransform="matrix(1 0 0 -1 0 31.89)"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset={0} stopColor="#102054" />
      <stop offset={1} stopColor="#1a45b8" />
    </linearGradient>
    <path
      fill="url(#a)"
      d="M16 32c8.8 0 16-7.2 16-16S24.8 0 16 0 0 7.2 0 16s7.2 16 16 16z"
    />
    <linearGradient
      id="b"
      x1={19.392}
      x2={19.392}
      y1={25.615}
      y2={8.421}
      gradientTransform="matrix(1 0 0 -1 0 31.89)"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset={0} stopColor="#fff" />
      <stop offset={1} stopColor="#fff" stopOpacity={0.6} />
    </linearGradient>
    <path
      fill="url(#b)"
      d="M16 6.3v6.3l1.1 2.9-1.1-1v3.1c1.8 2.3 4.1 4.2 6.8 5.6L16 6.3z"
    />
    <linearGradient
      id="c"
      x1={12.608}
      x2={12.608}
      y1={8.541}
      y2={25.415}
      gradientTransform="matrix(1 0 0 -1 0 31.89)"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset={0} stopColor="#fff" />
      <stop offset={1} stopColor="#fff" stopOpacity={0.6} />
    </linearGradient>
    <path
      fill="url(#c)"
      d="M16 6.3v6.3l-1.1 2.9 1.1-1v3.1c-1.8 2.3-4.1 4.2-6.8 5.6L16 6.3z"
    />
    <path
      fill="#f5cc02"
      d="M16 21.5c.9 0 1.5-.7 1.5-1.5 0-.9-.7-1.5-1.5-1.5-.9 0-1.5.7-1.5 1.5s.6 1.5 1.5 1.5z"
    />
  </svg>
);

export default AlphaFinanceLab;
