import * as React from "react";
import { SVGProps } from "react";

const TheSandbox = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 50 50"
    style={{
      enableBackground: "new 0 0 50 50",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <linearGradient
      id="a"
      gradientUnits="userSpaceOnUse"
      x1={25.214}
      y1={1024.822}
      x2={25.837}
      y2={1024.119}
      gradientTransform="matrix(50 0 0 -50 -1250 51250)"
    >
      <stop
        offset={0}
        style={{
          stopColor: "#00adef",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#0084ff",
        }}
      />
    </linearGradient>
    <circle
      cx={25}
      cy={25}
      r={25}
      style={{
        fill: "url(#a)",
      }}
    />
    <path
      d="m16.6 11.8-2.7 2.7v10.7l2.7 2.7h10.7v5.4H22v-2.7h-8.1V36l2.7 2.7h16.1l2.7-2.7V25.2l-2.7-2.7H22v-5.4h5.4v2.7h8.1v-5.4l-2.7-2.7H16.6z"
      style={{
        fill: "#fff",
      }}
    />
  </svg>
);

export default TheSandbox;
