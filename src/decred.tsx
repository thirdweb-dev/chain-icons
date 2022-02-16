import * as React from "react";
import { SVGProps } from "react";

const Decred = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 102 79"
    {...props}
  >
    <linearGradient
      id="a"
      x1={-7558.051}
      x2={-7500.722}
      y1={912.335}
      y2={912.335}
      gradientTransform="translate(7603.2 -872.83)"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset={0} stopColor="#62d0c9" />
      <stop offset={1} stopColor="#7de2ac" />
    </linearGradient>
    <path
      fill="url(#a)"
      d="M45.1 49.1h25.3c9.4 0 17.1-7.6 17.1-17.1s-7.6-17-17-17h-8.1L45.1 0h25.3c17.7-.1 32.1 14.2 32.1 31.9.1 13.1-7.9 24.9-20.1 29.8l20 17.3H79.6L45.1 49.1z"
    />
    <path
      fill="#4971fa"
      d="M57.5 30H32.2c-9.4 0-17.1 7.6-17.1 17.1s7.6 17.1 17.1 17.1h8.1l17.2 15H32.2C14.5 79.2.1 64.9 0 47.3c-.1-13.2 7.9-25 20.1-29.9L.1 0H23l34.5 30z"
    />
    <linearGradient
      id="b"
      x1={-7603.021}
      x2={-7545.691}
      y1={912.381}
      y2={912.381}
      gradientTransform="translate(7603.2 -872.83)"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset={0} stopColor="#3268fb" />
      <stop offset={1} stopColor="#4795fa" />
    </linearGradient>
    <path
      fill="url(#b)"
      d="M57.5 30H32.2c-9.4 0-17.1 7.6-17.1 17.1s7.6 17.1 17.1 17.1h8.1l17.2 15H32.2C14.5 79.2.1 64.9 0 47.3c-.1-13.2 7.9-25 20.1-29.9L.1 0H23l34.5 30z"
    />
  </svg>
);

export default Decred;
