import * as React from "react";
import { SVGProps } from "react";

const LibraryCredits = (props: SVGProps<SVGSVGElement>) => (
  <svg
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 2499.64 1812"
    {...props}
  >
    <defs>
      <linearGradient
        id="a"
        x1={796.65}
        y1={1303.44}
        x2={256.41}
        y2={1301.64}
        gradientTransform="matrix(8.8 0 0 8.8 -2257.63 -10558.66)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#006149" />
        <stop offset={1} stopColor="#2f4246" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={796.89}
        y1={1319.5}
        x2={256.66}
        y2={1317.69}
        gradientTransform="matrix(8.8 0 0 8.8 -2262.91 -10558.66)"
        xlinkHref="#a"
      />
    </defs>
    <path
      d="M2447.7 561.74v124.14l-1222.09 751-921-451.68 1.76-69.55 915.69 450.79 1164-714.93v-51.03l-1098.82-530L61.63 828.52v339l1160.46 574.06 1211.52-743.13 34.34 52.83L1225.61 1812 0 1206.24V794.18L1283.72 0Z"
      style={{
        fill: "url(#a)",
      }}
    />
    <path
      d="m2431.85 1134 17.61-110.94-107.46-18.45 7-43.14L2499.64 987 2475 1141.08Z"
      style={{
        fill: "url(#b)",
      }}
    />
  </svg>
);

export default LibraryCredits;
