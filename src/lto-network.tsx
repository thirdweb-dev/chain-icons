import * as React from "react";
import { SVGProps } from "react";

const LtoNetwork = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    viewBox="0 0 11 10"
    {...props}
  >
    <defs>
      <linearGradient
        id="a"
        x1={-845.05}
        x2={-844.22}
        y1={493.61}
        y2={493.61}
        gradientTransform="matrix(11.85 0 0 -10.29 10018.24 5085.24)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#7cb7ff" />
        <stop offset={1} stopColor="#ba6df6" />
      </linearGradient>
    </defs>
    <path
      fill="url(#a)"
      d="M7.12.1 6 1.22l.23.23a.33.33 0 0 0 .47 0L7.82.33 7.59.1a.33.33 0 0 0-.47 0ZM4.27.1 4 .33l1.17 1.12a.32.32 0 0 0 .46 0l.23-.23L4.73.1a.32.32 0 0 0-.46 0Zm3.91 1.47L6.05 3.7l.43.44a.63.63 0 0 0 .88 0L9.49 2l-.43-.43a.62.62 0 0 0-.87 0Zm-5.39 0L2.36 2l2.13 2.13a.61.61 0 0 0 .88 0l.43-.43-2.13-2.13a.63.63 0 0 0-.88 0Zm2.9-.05-.22.23.46.46.46-.46-.23-.23a.32.32 0 0 0-.46 0Zm4 2.13L6.14 7.19l.71.72a1 1 0 0 0 1.46 0l3.54-3.54-.71-.72a1 1 0 0 0-1.46 0Zm-9 0L0 4.36l3.54 3.55a1 1 0 0 0 1.46 0l.72-.72-3.54-3.54a1 1 0 0 0-1.46 0Zm4.77.62-.43.43.87.87.9-.87-.43-.43a.62.62 0 0 0-.88 0ZM5.2 8.13l-.72.71 1.45 1.45 1.44-1.45-.71-.71a1 1 0 0 0-1.46 0Z"
    />
  </svg>
);

export default LtoNetwork;
