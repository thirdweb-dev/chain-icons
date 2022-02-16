import * as React from "react";
import { SVGProps } from "react";

const YearnFinance = (props: SVGProps<SVGSVGElement>) => (
  <svg
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    x={0}
    y={0}
    viewBox="0 0 100 100"
    style={{
      enableBackground: "new 0 0 100 100",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <style>{".st1{fill-rule:evenodd;clip-rule:evenodd;fill:#fff}"}</style>
    <linearGradient
      id="SVGID_1_"
      gradientUnits="userSpaceOnUse"
      x1={0}
      y1={99.89}
      x2={100}
      y2={-0.11}
      gradientTransform="matrix(1 0 0 -1 0 99.89)"
    >
      <stop
        offset={0}
        style={{
          stopColor: "#0077fc",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#095eb5",
        }}
      />
    </linearGradient>
    <path
      d="M100 50c0-6.5-1.3-13.1-3.8-19.1S90 19.3 85.4 14.6C80.7 10 75.2 6.3 69.1 3.8S56.5 0 50 0 36.9 1.3 30.9 3.8 19.3 10 14.6 14.6C10 19.3 6.3 24.8 3.8 30.9S0 43.5 0 50s1.3 13.1 3.8 19.1S10 80.7 14.6 85.4c4.6 4.6 10.2 8.3 16.2 10.8S43.5 100 50 100s13.1-1.3 19.1-3.8S80.7 90 85.4 85.4c4.6-4.6 8.3-10.2 10.8-16.2S100 56.5 100 50z"
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
        fill: "url(#SVGID_1_)",
      }}
    />
    <path className="st1" d="M47.4 27.4h5.2v45.2h-5.2V27.4z" />
    <path
      className="st1"
      d="M44.5 48.7v-5.4c-4.1-2-7-6.3-7-11.2 0-6.9 5.6-12.5 12.5-12.5 7.8 0 13.4 5.6 13.4 12.5 0 1.7-.4 3.4-1.2 5.4L60 30.3l-4.4 1.4 3.9 14.9L74.7 41l-1.9-4.4-5.7 1.9c1-2.2 1.2-3.9 1.2-6.5 0-9.7-7.8-17.5-18.4-17.5-9.7 0-17.5 7.8-17.5 17.5.1 7.8 5.1 14.4 12.1 16.7zM55.5 51.3v5.4c4.1 2 7 6.3 7 11.2 0 6.9-5.6 12.5-12.5 12.5-7.8 0-13.4-5.6-13.4-12.5 0-1.7.4-3.4 1.2-5.4l2.2 7.2 4.4-1.4-3.9-14.9L25.3 59l1.9 4.4 5.7-1.9c-1 2.2-1.2 3.9-1.2 6.5 0 9.7 7.8 17.5 18.4 17.5 9.7 0 17.5-7.8 17.5-17.5-.1-7.8-5.1-14.4-12.1-16.7z"
    />
  </svg>
);

export default YearnFinance;
