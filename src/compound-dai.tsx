import * as React from "react";
import { SVGProps } from "react";

const CompoundDai = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 256 256"
    {...props}
  >
    <circle cx={128.1} cy={128.2} r={127.9} fill="#edf0f2" />
    <linearGradient
      id="a"
      x1={92.094}
      x2={132.188}
      y1={243.655}
      y2={21.361}
      gradientTransform="matrix(1 0 0 -1 0 258)"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset={0} stopColor="#27d3a2" />
      <stop offset={1} stopColor="#9388fd" />
    </linearGradient>
    <path
      fill="url(#a)"
      d="M209.3 226.9c-19.5 16.1-43.4 26-68.6 28.4-33.7 3.3-67.4-6.9-93.7-28.4C20.8 205.4 4.2 174.4.8 140.6c-2.5-25.2 2.5-50.5 14.4-72.8 11.9-22.3 30.2-40.6 52.5-52.5C90 3.4 115.3-1.7 140.5.8c25.2 2.5 49 12.3 68.6 28.4l-25.8 31.5C170 49.8 153.7 43 136.5 41.4c-17.2-1.7-34.4 1.8-49.6 9.9-15.2 8.1-27.6 20.6-35.8 35.8-8.1 15.2-11.5 32.5-9.8 49.6 2.3 23 13.6 44.2 31.5 58.8 17.9 14.7 40.9 21.6 63.9 19.3 17.2-1.7 33.4-8.5 46.7-19.4l25.9 31.5z"
    />
    <path
      fill="#fff"
      d="M128.5 232.9c57.7 0 104.4-46.8 104.4-104.4C232.9 70.8 186.2 24 128.5 24S24 70.8 24 128.5s46.8 104.4 104.5 104.4z"
    />
    <linearGradient
      id="b"
      x1={129}
      x2={129}
      y1={178.712}
      y2={83.1}
      gradientTransform="matrix(1 0 0 -1 0 258)"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset={0} stopColor="#283947" />
      <stop offset={1} stopColor="#657786" />
    </linearGradient>
    <path
      fill="url(#b)"
      d="M174 115h-9.7c-5.3-14.8-19.6-24.9-38.5-24.9h-31V115H84v8.9h10.8v9.4H84v8.9h10.8v24.6h31c18.6 0 32.8-10 38.3-24.6h9.9v-8.9h-7.7c.2-1.6.3-3.2.3-4.8v-.2c0-1.5-.1-2.9-.2-4.3h7.6v-9zm-70.5-16.9h22.3c13.8 0 24.1 6.8 28.9 16.9h-51.2V98.1zm22.3 60.7h-22.3v-16.6h51.2c-4.8 10-15.1 16.6-28.9 16.6zm31.8-30.1c0 1.6-.1 3.1-.3 4.6h-53.8v-9.4h53.8c.2 1.5.3 3 .3 4.5v.3z"
    />
  </svg>
);

export default CompoundDai;
