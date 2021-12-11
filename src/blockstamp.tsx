import * as React from "react";
import { SVGProps } from "react";

const Blockstamp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 36 36"
    {...props}
  >
    <defs>
      <mask
        id="a"
        x={18}
        y={0}
        width={18}
        height={36}
        maskUnits="userSpaceOnUse"
      >
        <path
          style={{
            fill: "#fff",
            fillRule: "evenodd",
          }}
          d="M18 0h18v36H18V0z"
        />
      </mask>
      <mask
        id="b"
        x={0}
        y={18}
        width={18}
        height={18}
        maskUnits="userSpaceOnUse"
      >
        <path
          style={{
            fill: "#fff",
            fillRule: "evenodd",
          }}
          d="M0 18h18v18H0V18z"
        />
      </mask>
    </defs>
    <g
      style={{
        mask: "url(#a)",
      }}
    >
      <path
        d="M18 36a18 18 0 0 0 0-36v2.19a15.81 15.81 0 0 1 0 31.62Z"
        style={{
          fill: "#ffbc00",
          fillRule: "evenodd",
        }}
      />
    </g>
    <g
      style={{
        opacity: 0.30000001192092896,
      }}
    >
      <g
        style={{
          mask: "url(#b)",
        }}
      >
        <path
          d="M2.19 18H0a18 18 0 0 0 18 18v-2.19A15.82 15.82 0 0 1 2.19 18"
          style={{
            fill: "#ffbc00",
            fillRule: "evenodd",
          }}
        />
      </g>
    </g>
    <path
      d="M6.42 18a11.58 11.58 0 0 0 23.16 0h2.19a13.77 13.77 0 0 1-27.54 0Z"
      style={{
        fill: "#ffbc00",
        fillRule: "evenodd",
      }}
    />
    <path
      d="M18 6.42V4.23A13.79 13.79 0 0 0 4.23 18h2.19A11.59 11.59 0 0 1 18 6.42"
      style={{
        fill: "#ffbc00",
        fillRule: "evenodd",
        opacity: 0.30000001192092896,
        isolation: "isolate",
      }}
    />
    <path
      d="M18 10.64a7.36 7.36 0 0 0 0 14.72v2.19a9.55 9.55 0 0 1 0-19.1"
      style={{
        fill: "#ffbc00",
        fillRule: "evenodd",
      }}
    />
    <path
      d="M18 8.45v2.19A7.37 7.37 0 0 1 25.36 18h2.19A9.57 9.57 0 0 0 18 8.45"
      style={{
        fill: "#ffbc00",
        fillRule: "evenodd",
        opacity: 0.30000001192092896,
        isolation: "isolate",
      }}
    />
    <path
      d="M18 12.68a5.32 5.32 0 0 1 0 10.64v-2.19a3.13 3.13 0 0 0 0-6.26"
      style={{
        fill: "#ffbc00",
        fillRule: "evenodd",
      }}
    />
    <path
      d="M18 12.68A5.33 5.33 0 0 0 12.68 18h2.19A3.13 3.13 0 0 1 18 14.87Z"
      style={{
        fill: "#ffbc00",
        fillRule: "evenodd",
        opacity: 0.30000001192092896,
        isolation: "isolate",
      }}
    />
    <path
      d="m24.71 24.77-1.55-1.55A7.34 7.34 0 0 1 21 24.7l.92 2a9.74 9.74 0 0 0 2.76-1.92M10.42 1.67a17.83 17.83 0 0 0-5.19 3.62l1.5 1.6a15.55 15.55 0 0 1 4.61-3.23ZM30.46 12.25a13.54 13.54 0 0 0-2.77-4L26.11 9.8a11.17 11.17 0 0 1 2.36 3.37Z"
      style={{
        fill: "#ffbc00",
        fillRule: "evenodd",
      }}
    />
  </svg>
);

export default Blockstamp;
