import * as React from "react";
import { SVGProps } from "react";

const Hedgetrade = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    viewBox="0 0 71 90"
    {...props}
  >
    <defs>
      <linearGradient
        id="a"
        x1={9.51}
        x2={61.57}
        y1={72.74}
        y2={20.67}
        gradientTransform="matrix(1 0 0 -1 0 92)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#a6ff33" />
        <stop offset={1} stopColor="#13afbc" />
      </linearGradient>
    </defs>
    <path
      fill="url(#a)"
      d="m52.8 15.54-4.28 24.28H24.49l4.28-24.28H13.23L2.74 75.05 0 90.59l18.28-15.54 4.02-22.83h24.03L42.3 75.05h15.54l10.5-59.51L71.08 0 52.8 15.54z"
    />
  </svg>
);

export default Hedgetrade;
