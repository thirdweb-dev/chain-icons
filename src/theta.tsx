import * as React from "react";
import { SVGProps } from "react";

const Theta = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    data-name="Layer 1"
    viewBox="0 0 433 433"
    {...props}
  >
    <defs>
      <linearGradient
        id="a"
        x1={112.27}
        x2={320.73}
        y1={112.27}
        y2={320.73}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#2ab8e6" />
        <stop offset={0.53} stopColor="#29cad2" />
        <stop offset={1} stopColor="#2ee4be" />
      </linearGradient>
      <linearGradient
        xlinkHref="#a"
        id="b"
        x1={175.55}
        x2={258.18}
        y1={175.91}
        y2={258.54}
      />
    </defs>
    <path fill="#1b1f2b" d="M0 0h433v433H0z" />
    <path
      fill="#1b1f2b"
      stroke="url(#a)"
      strokeLinejoin="bevel"
      strokeWidth={27.222}
      d="M145.06 93.1h142.89v246.81H145.06z"
    />
    <path
      fill="url(#b)"
      d="M259.8 255.47h-29.59v31h-26.7v-31h-29.59v-26.7h85.88zm0-76.5h-29.59v-31h-26.7v31h-29.59v26.7h85.88z"
    />
  </svg>
);

export default Theta;
