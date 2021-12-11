import * as React from "react";
import { SVGProps } from "react";

const EtherZero = (props: SVGProps<SVGSVGElement>) => (
  <svg
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 45.54 63.3"
    {...props}
  >
    <defs>
      <linearGradient
        id="a"
        x1={29.31}
        y1={751.16}
        x2={36.87}
        y2={758.72}
        gradientTransform="translate(-10.36 -723.3)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.03} stopColor="#00fdfa" />
        <stop offset={1} stopColor="#0168e5" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={-912.76}
        y1={638.31}
        x2={-889.99}
        y2={661.07}
        gradientTransform="rotate(-45 -1176.076 -785.673)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.03} stopColor="#00fdfa" />
        <stop offset={1} stopColor="#017ee5" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={17.28}
        y1={770.78}
        x2={48.89}
        y2={739.16}
        gradientTransform="translate(-10.36 -723.3)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.03} stopColor="#00fdfa" />
        <stop offset={1} stopColor="#019ae5" />
      </linearGradient>
    </defs>
    <path
      style={{
        strokeMiterlimit: 10,
        strokeWidth: 2,
        fill: "url(#a)",
        stroke: "url(#linear-gradient-2)",
      }}
      d="m30.24 31.6-7.5 7.6-7.6-7.6 7.6-7.5 7.5 7.5z"
    />
    <path
      transform="rotate(-45 23.962 45.875)"
      style={{
        fill: "none",
        strokeMiterlimit: 10,
        strokeWidth: "1.2000000476837158px",
        stroke: "url(#b)",
      }}
      d="M17.63 19.52h31v31h-31z"
    />
    <path
      style={{
        fill: "none",
        strokeLinecap: "round",
        strokeMiterlimit: 10,
        strokeWidth: "1.2000000476837158px",
        stroke: "url(#c)",
      }}
      d="M22.74 1.2 5.14 31.6l17.6 30.5 17.5-30.5-17.5-30.4z"
    />
  </svg>
);

export default EtherZero;
