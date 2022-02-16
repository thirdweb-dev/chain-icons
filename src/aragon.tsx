import * as React from "react";
import { SVGProps } from "react";

const Aragon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 64 64"
    {...props}
  >
    <defs>
      <linearGradient
        id="b"
        x1={32}
        x2={32}
        y1={43.61}
        y2={1.16}
        gradientTransform="matrix(1 0 0 -1 0 66)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#01e8f8" />
        <stop offset={1} stopColor="#01e8f8" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="a"
        x1={51.9}
        x2={53.32}
        y1={41.83}
        y2={24.86}
        gradientTransform="matrix(1 0 0 -1 0 66)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#01e8f7" />
        <stop offset={1} stopColor="#00c2ff" />
      </linearGradient>
      <linearGradient
        id="c"
        x1={23.95}
        x2={40.43}
        y1={50.95}
        y2={24.79}
        gradientTransform="matrix(1 0 0 -1 0 66)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#01e8f7" />
        <stop offset={1} stopColor="#00b3ec" />
      </linearGradient>
      <linearGradient
        xlinkHref="#a"
        id="d"
        x1={30.63}
        x2={32.1}
        y1={38.76}
        y2={-3.46}
      />
    </defs>
    <g data-name="Layer 2">
      <g data-name="Layer 1">
        <circle cx={32} cy={32} r={32} fill="url(#b)" fillOpacity={0.05} />
        <path
          fill="url(#a)"
          d="M57 29.88c.22-4.61-3-7.67-6.64-9.77L48 34a3.42 3.42 0 0 1 2.73.82 2.38 2.38 0 0 1 .18 3.2c2.28-.38 5.83-2.57 6.09-8.14Z"
        />
        <path
          fill="url(#c)"
          fillRule="evenodd"
          d="m26 13.73-2.8-2.83c4.24-.52 15.43.14 26.26 6.93a5.67 5.67 0 0 1 0 1.83l.91.46a10.58 10.58 0 0 1 1.18 8.12C50.61 32 49 33.66 48.28 34c-1.45 0-3.92.84-4.72 4.56s-2.34 4.53-3 4.47l-16 .19L14 37l-1.52-12.87 3-4 5.36-4.38 3.82-1.56ZM44.91 19a6.05 6.05 0 0 1-1.56 1.19c-4.11-.88-5.6-3-5.6-3a19.23 19.23 0 0 1 10 2.46 18.44 18.44 0 0 0-2.84-.65Z"
        />
        <path
          fill="url(#d)"
          fillRule="evenodd"
          d="M43.42 38.56a22.17 22.17 0 0 1-9.76 2.19c-10.09 0-18.26-6.34-18.26-14.15 0-5.78 4.46-10.74 10.85-12.94-12.16.7-21.94 10.47-21.94 22.53 0 13.92 12.41 25.42 27.69 25.42a29.88 29.88 0 0 0 25.94-15.49c-6.85 1.54-14.94-1.39-14.52-7.56Z"
        />
      </g>
    </g>
  </svg>
);

export default Aragon;
