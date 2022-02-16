import * as React from "react";
import { SVGProps } from "react";

const Iqeon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Logo color"
    viewBox="0 0 88 98"
    {...props}
  >
    <defs>
      <linearGradient
        id="a"
        x1={4.94}
        x2={24.49}
        y1={29.33}
        y2={63.19}
        gradientTransform="matrix(1 0 0 -1 0 100.1)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#00dad9" />
        <stop offset={1} stopColor="#095fa7" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={30.7}
        x2={53.24}
        y1={94.14}
        y2={55.1}
        gradientTransform="matrix(1 0 0 -1 0 100.1)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#0bf7df" />
        <stop offset={1} stopColor="#0095ff" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={94.84}
        x2={14.39}
        y1={64.66}
        y2={8.33}
        gradientTransform="matrix(1 0 0 -1 0 100.1)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#00fcc6" />
        <stop offset={1} stopColor="#0095ff" />
      </linearGradient>
    </defs>
    <path
      fill="url(#a)"
      d="M.1 30.55a8.59 8.59 0 0 1 10.3-1.5l35.2 20-35.3 20A8.61 8.61 0 0 1 0 67.55c.1 0 .1-39.4.1-37Z"
    />
    <path
      fill="url(#b)"
      d="M83.9 20.35a8.12 8.12 0 0 1-3.9 9.2l-34.4 19.5-35.3-20A8.61 8.61 0 0 0 0 30.55a12.12 12.12 0 0 1 6.3-10.5l32.4-18.4a12.66 12.66 0 0 1 12.5 0Z"
    />
    <path
      fill="url(#c)"
      d="M10.3 69.05 80 29.55c3.3-1.9 4.1-5.7 3.2-9.2 3.7 2.2 5.2 6.2 5.2 10.4v36.7c0 4.4-1.7 8.4-5.5 10.6l-32 18.3a12.29 12.29 0 0 1-12.3 0L6.2 78.05A12.45 12.45 0 0 1 0 67.55a8.61 8.61 0 0 0 10.3 1.5Z"
    />
  </svg>
);

export default Iqeon;
