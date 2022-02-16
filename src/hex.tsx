import * as React from "react";
import { SVGProps } from "react";

const Hex = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 338 297" {...props}>
    <defs>
      <linearGradient
        id="a"
        x1={84.63}
        x2={253.89}
        y1={295.19}
        y2={2.04}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#ffdc00" />
        <stop offset={0.33} stopColor="#e58e2f" />
        <stop offset={0.67} stopColor="#db2d72" />
        <stop offset={1} stopColor="#f0f" />
      </linearGradient>
    </defs>
    <path
      fill="url(#a)"
      d="m79.56 290.47-22.92-39.7a5.28 5.28 0 0 1 0-4.65l25.45-44.07a5.24 5.24 0 0 1 4.06-2.35h50.89a5.26 5.26 0 0 1 4.07 2.35l25.45 44.07a5.32 5.32 0 0 1 0 4.7l-25.45 44.07a5.33 5.33 0 0 1-4 2.34H91.36a15.43 15.43 0 0 1-11.8-6.76Zm165.27-90.69L194.13 112a7.21 7.21 0 0 0-5.56-3.21H87.17a7.21 7.21 0 0 0-5.56 3.21l-50.7 87.82a7.18 7.18 0 0 0 0 6.42L45.77 232l26-45a8.22 8.22 0 0 1 6.43-3.72H145a8.22 8.22 0 0 1 6.43 3.72l33.41 57.86a8.24 8.24 0 0 1 0 7.43l-26 45h29.7a7.19 7.19 0 0 0 5.56-3.22l50.7-87.81a7.18 7.18 0 0 0 .03-6.48Zm92-58.09L259.06 6.93a15.37 15.37 0 0 0-12-6.93H91.45a15.37 15.37 0 0 0-12 6.93L1.65 141.69a15.36 15.36 0 0 0 0 13.85l17.83 30.88 51.7-89.56a10.14 10.14 0 0 1 7.94-4.58h117.41a10.14 10.14 0 0 1 7.94 4.58l58.71 101.69a10.13 10.13 0 0 1 0 9.16l-51.69 89.52h35.57a15.37 15.37 0 0 0 12-6.93l77.8-134.76a15.36 15.36 0 0 0 0-13.85Z"
      data-name="Layer 2"
    />
  </svg>
);

export default Hex;
