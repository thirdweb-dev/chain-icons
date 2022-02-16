import * as React from "react";
import { SVGProps } from "react";

const Lympo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    viewBox="0 0 48 34"
    {...props}
  >
    <defs>
      <linearGradient
        id="a"
        x1={10.96}
        x2={25.63}
        y1={483.27}
        y2={515.41}
        gradientTransform="translate(0 -479.89)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#f26659" />
        <stop offset={1} stopColor="#b52a53" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={25.64}
        x2={40.39}
        y1={514.96}
        y2={490.05}
        gradientTransform="translate(0 -479.89)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#f26659" />
        <stop offset={1} stopColor="#ee1c4e" />
      </linearGradient>
    </defs>
    <path
      fill="url(#a)"
      d="M17.2 32.81.2 3.41S-1.1 0 2.9 0h11a3.48 3.48 0 0 1 3.3 1.7c1.2 2 18.1 31.4 18.1 31.4l-14.6 1.8a4 4 0 0 1-3.5-2.09Z"
    />
    <path
      fill="url(#b)"
      d="m20.7 28.41 10.2-17.7A3.6 3.6 0 0 1 34.3 9h10.9s4.5.1 2.8 3.1S36 33 36 33s-.7 1.9-3.5 1.9H19.3s-2.5-.1-.6-3.1 2-3.39 2-3.39Z"
    />
  </svg>
);

export default Lympo;
