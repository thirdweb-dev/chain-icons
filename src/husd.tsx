import * as React from "react";
import { SVGProps } from "react";

const Husd = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 2000 2000"
    style={{
      enableBackground: "new 0 0 2000 2000",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <path
      d="m280.8 923.5 307.4-730.7 873.2 100.6 178.8 539.3-89.4 746c-128.5 137.9-210.5 206.8-245.9 206.8-35.4 0-303.6-48.9-804.7-146.7l-219.3-542.1-.1-173.2z"
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
        fill: "#f9f9f9",
      }}
    />
    <defs>
      <filter
        id="a"
        filterUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={2000}
        height={2000}
      >
        <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" />
      </filter>
    </defs>
    <mask
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={2000}
      height={2000}
      id="b"
    >
      <path
        d="M0 0h2000v2000H0V0z"
        style={{
          fillRule: "evenodd",
          clipRule: "evenodd",
          fill: "#fff",
          filter: "url(#a)",
        }}
      />
    </mask>
    <g
      style={{
        mask: "url(#b)",
      }}
    >
      <path
        d="M1419 1579.4h-212.9v-366.5c0-58.7-47.5-106.4-106.2-106.4H793.8c-117.5 0-212.8-95.3-212.8-212.8v-473h212.8v366.6c0 58.7 47.6 106.4 106.3 106.4h306c117.5.1 212.7 95.3 212.8 212.8l.1 472.9zm-617.8 0H588.3V1222c117.5 0 212.8 95.2 212.8 212.8l.1 144.6zm397.6-1158.8h212.8v357.6c-117.6 0-212.8-95.3-212.8-212.8V420.6zM1000 0C447.7 0 0 447.8 0 1000s447.7 1000 1000 1000 1000-447.7 1000-1000S1552.3 0 1000 0z"
        style={{
          fillRule: "evenodd",
          clipRule: "evenodd",
          fill: "#005ffa",
        }}
      />
    </g>
  </svg>
);

export default Husd;
