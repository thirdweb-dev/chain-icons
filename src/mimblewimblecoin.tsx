import * as React from "react";
import { SVGProps } from "react";

const Mimblewimblecoin = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 88.5 44.1"
    style={{
      enableBackground: "new 0 0 88.5 44.1",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <linearGradient
      id="a"
      gradientUnits="userSpaceOnUse"
      x1={213.909}
      y1={20.075}
      x2={15.427}
      y2={20.075}
      gradientTransform="matrix(1 0 0 -1 0 42.15)"
    >
      <stop
        offset={0}
        style={{
          stopColor: "#3600c9",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#9e00e7",
        }}
      />
    </linearGradient>
    <path
      d="M40.5 27.9 25.8 42.6c-2.1 2.1-5.5 2.1-7.6 0L1.6 25.9c-2.1-2.1-2.1-5.5 0-7.6L18.3 1.6c2.1-2.1 5.5-2.1 7.6 0l14.7 14.7c2.1 2.1 5.5 2.1 7.6 0L62.8 1.6c2.1-2.1 5.5-2.1 7.6 0L87 18.3c2.1 2.1 2.1 5.5 0 7.6L70.4 42.6c-2.1 2.1-5.5 2.1-7.6 0L48.1 27.9c-2.1-2.1-5.5-2.1-7.6 0z"
      style={{
        fill: "url(#a)",
      }}
    />
  </svg>
);

export default Mimblewimblecoin;
