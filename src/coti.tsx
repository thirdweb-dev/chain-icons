import * as React from "react";
import { SVGProps } from "react";

const Coti = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 3500 3500"
    {...props}
  >
    <path
      fill="#00467a"
      d="M1750 0c966.5 0 1750 783.5 1750 1750s-783.5 1750-1750 1750S0 2716.5 0 1750 783.5 0 1750 0z"
    />
    <linearGradient
      id="a"
      x1={1480.345}
      x2={1252.889}
      y1={249.463}
      y2={1538.512}
      gradientTransform="matrix(1 0 0 -1 0 2554)"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset={0.1} stopColor="#194aad" />
      <stop offset={0.5} stopColor="#248fcb" />
      <stop offset={0.8} stopColor="#2bbfdf" />
    </linearGradient>
    <path
      fill="url(#a)"
      d="M762.6 1521.6c-35.1 0-50.7 15.6-50.7 46.8v803.7c0 35.1 15.6 46.8 50.7 46.8 386.3 3.9 858.3-339.4 1248.5-608.6V881.7c-386.2 265.3-870 643.8-1248.5 639.9z"
    />
    <linearGradient
      id="b"
      x1={3511.147}
      x2={3811.925}
      y1={-1272.658}
      y2={432.942}
      gradientTransform="matrix(-1 0 0 1 5851.79 2174.83)"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset={0.1} stopColor="#194aad" />
      <stop offset={0.5} stopColor="#248fcb" />
      <stop offset={0.8} stopColor="#2bbfdf" />
    </linearGradient>
    <path
      fill="url(#b)"
      d="M2795.3 1884.4c35.1 0 50.7-15.6 50.7-46.8v-803.7c0-35.1-15.6-46.8-50.7-46.8-390.2-3.9-858.3 339.4-1248.5 608.6v924.7c386.3-265.3 870.1-643.8 1248.5-636z"
    />
    <path
      fill="#194aad"
      d="M2011.1 1810.3v-530.6c-160 101.4-319.9 210.7-468.2 312.1v530.6c163.9-101.4 320-210.7 468.2-312.1z"
    />
  </svg>
);

export default Coti;
