import * as React from "react";
import { SVGProps } from "react";

const ThetaFuel = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    id="Layer_1"
    x={0}
    y={0}
    viewBox="0 0 1000 1000"
    {...props}
  >
    <style>{".st1{fill:#fff}"}</style>
    <linearGradient
      id="SVGID_2_"
      x1={0}
      x2={1000}
      y1={500}
      y2={500}
      gradientTransform="matrix(1 0 0 -1 0 1000)"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset={0} stopColor="#ffa50d" />
      <stop offset={1} stopColor="#fe5413" />
    </linearGradient>
    <path
      id="SVGID_1_"
      fill="url(#SVGID_2_)"
      d="M500 0c276.1 0 500 223.9 500 500s-223.9 500-500 500S0 776.1 0 500 223.9 0 500 0z"
    />
    <path
      id="SVGID_4_"
      d="M692 347c-6.3 7.5-5.9 24.1-16 19 0 0-70.3-26.9-27-106 11.7-18.3 23.8-19.5 22-64 10.8 16.4 46.2 49.3 49 101 2.8 34.5-17.8 39.1-28 50z"
      className="st1"
    />
    <path
      id="SVGID_5_"
      d="M636 470c17.3-5.8 45.3-15 47-74 26.7 40.9 117.3 98.3 74 274-17.6 68.5-83.2 101.8-145 127-38.6 16.4-78 43.8-94 85 0 0-292.1-36.9-283-327 7.3-150.5 148.3-208 208-318 31.8-69.4 21-139 21-139s186 115.7 102 294c-27.3 63 37.9 84.3 70 78z"
      className="st1"
    />
    <linearGradient
      id="SVGID_3_"
      x1={349}
      x2={652}
      y1={622}
      y2={622}
      gradientUnits="userSpaceOnUse"
    >
      <stop offset={0} stopColor="#ffa50d" />
      <stop offset={1} stopColor="#fe5413" />
    </linearGradient>
    <path
      id="SVGID_6_"
      fill="url(#SVGID_3_)"
      d="M349 522v97h103v103h97V619h103v-97z"
    />
  </svg>
);

export default ThetaFuel;
