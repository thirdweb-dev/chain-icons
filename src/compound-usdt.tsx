import * as React from "react";
import { SVGProps } from "react";

const CompoundUsdt = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    style={{
      enableBackground: "new 0 0 256 256",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <circle
      cx={128.1}
      cy={128.2}
      r={127.9}
      style={{
        fill: "#edf0f2",
      }}
    />
    <linearGradient
      id="a"
      gradientUnits="userSpaceOnUse"
      x1={92.094}
      y1={243.655}
      x2={132.188}
      y2={21.361}
      gradientTransform="matrix(1 0 0 -1 0 258)"
    >
      <stop
        offset={0}
        style={{
          stopColor: "#27d3a2",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#9388fd",
        }}
      />
    </linearGradient>
    <path
      d="M209.3 226.9c-19.5 16.1-43.4 26-68.6 28.4-33.7 3.3-67.4-6.9-93.7-28.4C20.8 205.4 4.2 174.4.8 140.6c-2.5-25.2 2.5-50.5 14.4-72.8 11.9-22.3 30.2-40.6 52.5-52.5C90 3.4 115.3-1.7 140.5.8c25.2 2.5 49 12.3 68.6 28.4l-25.8 31.5C170 49.8 153.7 43 136.5 41.4c-17.2-1.7-34.4 1.8-49.6 9.9-15.2 8.1-27.6 20.6-35.8 35.8-8.1 15.2-11.5 32.5-9.8 49.6 2.3 23 13.6 44.2 31.5 58.8 17.9 14.7 40.9 21.6 63.9 19.3 17.2-1.7 33.4-8.5 46.7-19.4l25.9 31.5z"
      style={{
        fill: "url(#a)",
      }}
    />
    <path
      d="M128.5 232.9c57.7 0 104.4-46.8 104.4-104.4C232.9 70.8 186.2 24 128.5 24S24 70.8 24 128.5s46.8 104.4 104.5 104.4z"
      style={{
        fill: "#fff",
      }}
    />
    <path
      d="M137.9 131.3c-.6 0-3.4.2-9.8.2-5.1 0-8.7-.2-10-.2-19.7-.9-34.3-4.2-34.3-8.3 0-4.1 14.7-7.4 34.3-8.3V128c1.3.1 5 .3 10.1.3 6.1 0 9.2-.3 9.7-.3v-13.2c19.6.9 34.3 4.2 34.3 8.3 0 4-14.6 7.4-34.3 8.2zm0-17.9v-11.8h27.4v-18H90.8v18h27.4v11.8c-22.3 1-39 5.4-39 10.6s16.7 9.6 39 10.6v37.9H138v-37.9c22.2-1 38.9-5.4 38.9-10.6 0-5.2-16.7-9.6-39-10.6zm0 0z"
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
        fill: "#283947",
      }}
    />
  </svg>
);

export default CompoundUsdt;