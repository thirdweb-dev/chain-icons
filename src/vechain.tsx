import * as React from "react";
import { SVGProps } from "react";

const Vechain = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 1887" {...props}>
    <defs>
      <linearGradient
        id="linear-gradient"
        x2={2000.04}
        y1={-330.01}
        y2={-330.01}
        gradientTransform="translate(0 1274)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#9d4abe" />
        <stop offset={0.03} stopColor="#9055c4" />
        <stop offset={0.15} stopColor="#6b74d6" />
        <stop offset={0.26} stopColor="#4c8fe5" />
        <stop offset={0.39} stopColor="#34a3f0" />
        <stop offset={0.52} stopColor="#22b2f9" />
        <stop offset={0.66} stopColor="#18bafd" />
        <stop offset={0.83} stopColor="#15bdff" />
        <stop offset={1} stopColor="#28bad5" />
      </linearGradient>
      <style>{".cls-2{fill:#fff;opacity:.1;isolation:isolate}"}</style>
    </defs>
    <g id="Layer_2" data-name="Layer 2">
      <g id="Layer_1-2" data-name="Layer 1">
        <path
          fill="url(#linear-gradient)"
          d="M859.79 1803 4.39 60.7C-9.51 32.9 11.39 0 42.19 0h296.4c15.9 0 30.8 9 37.8 22.9l624.7 1264c55.7 113.4 216.8 113.4 272.5 0l622.7-1263c7-13.9 21.9-22.9 37.8-22.9h36.8c21.9 0 35.8 22.9 25.9 41.8L1132.39 1803c-55.7 113.3-216.9 113.3-272.6 0Z"
        />
        <path
          d="M859.79 1803 376.39 23.9C369.39 9 353.49 1 340.59 1H43.19c-32.8 0-51.7 32.8-38.8 60.7Z"
          className="cls-2"
        />
        <path
          d="M1001.09 1287.8 4.39 60.7C-7.51 31.9 10.39 3 38.19 0h301.4c16.9 1 29.8 11.9 35.8 22.9Z"
          className="cls-2"
        />
      </g>
    </g>
  </svg>
);

export default Vechain;
