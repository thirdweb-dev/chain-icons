import * as React from "react";
import { SVGProps } from "react";

const LargoCoin = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 62 62"
    style={{
      enableBackground: "new 0 0 62 62",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <linearGradient
      id="a"
      gradientUnits="userSpaceOnUse"
      x1={9.088}
      y1={-881.087}
      x2={52.913}
      y2={-924.913}
      gradientTransform="matrix(1 0 0 -1 0 -872)"
    >
      <stop
        offset={0}
        style={{
          stopColor: "#324bcd",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#3dba8a",
        }}
      />
    </linearGradient>
    <path
      d="M31 62C13.9 62 0 48.1 0 31S13.9 0 31 0s31 13.9 31 31-13.9 31-31 31zm0-59.4C15.3 2.6 2.6 15.3 2.6 31S15.3 59.4 31 59.4 59.4 46.7 59.4 31 46.7 2.6 31 2.6z"
      style={{
        fill: "url(#a)",
      }}
    />
    <linearGradient
      id="b"
      gradientUnits="userSpaceOnUse"
      x1={22.044}
      y1={-889.133}
      x2={34.512}
      y2={-910.73}
      gradientTransform="matrix(1 0 0 -1 0 -872)"
    >
      <stop
        offset={0}
        style={{
          stopColor: "#3dffef",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#a80de9",
        }}
      />
    </linearGradient>
    <path
      d="M34.6 12.4c2.8 1.2 4.2 4.4 3 7.3l-8.9 21.8c-1.2 2.9-4.4.2-7.2-1s-4.2-.4-3-3.3l8.9-21.8c1.1-2.8 4.3-4.2 7.2-3z"
      style={{
        fill: "url(#b)",
      }}
    />
    <linearGradient
      id="c"
      gradientUnits="userSpaceOnUse"
      x1={20.785}
      y1={-901.535}
      x2={38.524}
      y2={-919.274}
      gradientTransform="matrix(1 0 0 -1 0 -872)"
    >
      <stop
        offset={0}
        style={{
          stopColor: "#50d3ee",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#324bcd",
        }}
      />
    </linearGradient>
    <path
      d="M38.4 45.1H23.3c-3 0-5.5-2.4-5.5-5.5 0-.7.1-1.4.4-2.1l4-9.5s-.3 6 6.1 6.1h10.1c3 0 5.5 2.4 5.5 5.5s-2.5 5.5-5.5 5.5z"
      style={{
        fill: "url(#c)",
      }}
    />
  </svg>
);

export default LargoCoin;
