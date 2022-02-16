import * as React from "react";
import { SVGProps } from "react";

const TetherGold = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 611 532" {...props}>
    <defs>
      <linearGradient
        id="a"
        x1={4846.23}
        x2={13324.84}
        y1={-4671.46}
        y2={-4671.46}
        gradientTransform="matrix(.07 0 0 -.07 -348.93 -70.13)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#d8b35d" />
        <stop offset={1} stopColor="#f5e7bf" />
      </linearGradient>
    </defs>
    <g data-name="Layer 2">
      <g data-name="Layer 1">
        <g fillRule="evenodd" data-name="Layer_1">
          <path
            fill="url(#a)"
            d="M112.11 2.71.49 237.12a4.36 4.36 0 0 0 .9 5.23L302.7 531.22a4.72 4.72 0 0 0 6.32 0l301.49-288.87a4.41 4.41 0 0 0 .9-5.23L499.79 2.71a4.12 4.12 0 0 0-4-2.71H116.07a4.49 4.49 0 0 0-4 2.71Z"
          />
          <path
            fill="#fff"
            d="M344.72 261.1c-2.16.18-13.34.9-38.23.9-19.83 0-33.9-.54-38.95-.9-76.63-3.42-133.79-16.77-133.79-32.64s57.16-29.39 133.79-32.81v52.11c5 .36 19.3 1.26 39.13 1.26 23.8 0 35.7-1.08 37.87-1.26v-52.11c76.45 3.42 133.61 16.77 133.61 32.63s-57 29.4-133.43 32.82Zm0-70.68v-46.71h106.75V72.49H160.8v71.22h106.74v46.71c-86.73 4-152 21.09-152 41.83s65.27 37.69 152 41.83v149.49h77.18V274.08c86.55-4 151.65-21.1 151.65-41.65s-65.1-38.05-151.65-42Z"
          />
        </g>
      </g>
    </g>
  </svg>
);

export default TetherGold;
