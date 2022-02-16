import * as React from "react";
import { SVGProps } from "react";

const Komodo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    viewBox="0 0 148 148"
    {...props}
  >
    <defs>
      <linearGradient
        id="a"
        x1={129.11}
        x2={19.11}
        y1={130.39}
        y2={21.89}
        gradientTransform="matrix(1 0 0 -1 0 150)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.09} stopColor="#00edd3" />
        <stop offset={0.41} stopColor="#1b456e" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={129.14}
        x2={52.14}
        y1={131.85}
        y2={53.85}
        gradientTransform="matrix(1 0 0 -1 0 150)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.4} stopColor="#00edd3" />
        <stop offset={0.89} stopColor="#1b456e" />
      </linearGradient>
    </defs>
    <path
      fill="url(#a)"
      d="M0 73.93a74 74 0 0 0 148 .25v-.56a72.67 72.67 0 0 0-2-16.9 7.95 7.95 0 0 0-15.47 3.63 58.22 58.22 0 1 1-43.06-42.9 7.94 7.94 0 0 0 9.53-5.9 7.83 7.83 0 0 0-5.85-9.49A73.91 73.91 0 0 0 2 56.72a75.71 75.71 0 0 0-2 17.21Z"
    />
    <path
      fill="url(#b)"
      d="M111.58 19.47c-.13.13-.19.26-.26.32a11.86 11.86 0 0 0-3.18 7.07v1.27c0 .32-.06.57-.06.89A21.33 21.33 0 0 1 84.7 48.18a20.63 20.63 0 0 1-2.8-.44 12 12 0 0 1-1.6-.45 25.36 25.36 0 0 0-6.94-.76A27.89 27.89 0 0 0 55 53.91c-.25.25-.57.45-.83.76a27.74 27.74 0 1 0 39.19 39.21 28.21 28.21 0 0 0 3.12-3.75 27.8 27.8 0 0 0 4.21-22.34 14.3 14.3 0 0 1-.39-1.53c0-.07-.06-.13-.06-.26a21.35 21.35 0 0 1 16.05-25.65 16 16 0 0 1 3-.44l.44-.07a10 10 0 0 1 1.34-.06h.13a12 12 0 0 0 7.32-3.44c.45-.51.9-1 1.28-1.53a11.85 11.85 0 0 0-2.87-16.61 12 12 0 0 0-15.35 1.27Z"
    />
  </svg>
);

export default Komodo;
