import * as React from "react";
import { SVGProps } from "react";

const Peercoin = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 1280" {...props}>
    <path fill="none" d="M0 0h1280v1280H0V0z" />
    <circle
      cx={640}
      cy={640}
      r={640}
      fill="#3cb054"
      fillRule="evenodd"
      clipRule="evenodd"
    />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M727 979.8c-11.4 1-20.4 1.2-25.9 1.2-180.3.4-326.7-146.4-326.7-326.8V298.9c109.4-1.7 379.5 22.1 528.4 229.3 38.6 53.6 61.3 119.4 61.3 190.4 0 42.6-8.2 83.4-23.1 120.7l-.1-.1c-9.5 25.3-34.9 77.5-101.2 110.7-10.7 5.3-21.6 9.8-32.3 13.5 47.6-182.1-14.6-445.8-290.8-572.6 167.6 104 300.1 365.9 210.4 589z"
      clipRule="evenodd"
    />
  </svg>
);

export default Peercoin;
