import * as React from "react";
import { SVGProps } from "react";

const Quarkchain = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 50 50"
    {...props}
  >
    <path
      fill="#071630"
      d="M25 0c13.8 0 25 11.2 25 25S38.8 50 25 50 0 38.8 0 25 11.2 0 25 0z"
    />
    <linearGradient
      id="a"
      x1={81.16}
      x2={81.16}
      y1={-2000.92}
      y2={-1976.61}
      gradientTransform="matrix(1 0 0 -1 -55.91 -1963.6)"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset={0} stopColor="#3f5caa" />
      <stop offset={0.2} stopColor="#3f5fac" />
      <stop offset={0.33} stopColor="#4168b2" />
      <stop offset={0.46} stopColor="#4378bd" />
      <stop offset={0.57} stopColor="#468ecc" />
      <stop offset={0.64} stopColor="#48a0d9" />
      <stop offset={0.8} stopColor="#3abbec" />
      <stop offset={0.9} stopColor="#35c6f4" />
    </linearGradient>
    <path
      fill="url(#a)"
      d="M41.1 36.1c0 .7-.6 1.2-1.5 1.2-.8 0-1.4-.5-1.4-1.2V17.8c0-.1 0-.1-.1-.1h-.2L26.4 32.4c-.5.5-1.4.7-2 .3-.2-.1-.3-.2-.4-.3L12.5 17.7h-.2l-.1.1v18.4c0 .7-.7 1.2-1.5 1.2s-1.4-.5-1.4-1.2v-22c0-.4.3-.8.6-1 .7-.4 1.5-.2 2 .3l12.7 16.1c.3.3.7.3 1 .1 0 0 .1 0 .1-.1l12.7-16.1c.3-.4.8-.6 1.3-.6.8 0 1.5.5 1.5 1.2l-.1 22z"
      opacity={0.9}
    />
    <linearGradient
      id="b"
      x1={81.16}
      x2={81.16}
      y1={-2000.94}
      y2={-1976.6}
      gradientTransform="matrix(1 0 0 -1 -55.91 -1963.6)"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset={0} stopColor="#4068b1" />
      <stop offset={0.13} stopColor="#3d7fc1" />
      <stop offset={0.39} stopColor="#39a5dd" />
      <stop offset={0.59} stopColor="#36bdee" />
      <stop offset={0.72} stopColor="#35c6f4" />
    </linearGradient>
    <path
      fill="url(#b)"
      d="M41.1 36.1c0 .6-.6 1.2-1.5 1.2-.5 0-1-.2-1.3-.6L25.7 20.6c-.3-.3-.7-.3-1-.1 0 0-.1.1-.2.3L12 36.8c-.5.6-1.3.7-2 .3-.4-.2-.6-.6-.6-1V14.2c0-.7.6-1.2 1.4-1.2.8 0 1.5.5 1.5 1.2v18.4c0 .1 0 .1.1.1h.2l11.2-14.3c.1-.2.5-.6.7-.7.7-.4 1.5-.3 2 .3l11.4 14.7h.2c.1 0 .1-.1.1-.1V14.2c0-.7.6-1.2 1.4-1.2s1.5.5 1.5 1.2v21.9z"
    />
  </svg>
);

export default Quarkchain;
