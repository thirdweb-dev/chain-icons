import * as React from "react";
import { SVGProps } from "react";

const Decentraland = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" {...props}>
    <defs>
      <linearGradient
        id="a"
        x1="85.355%"
        x2="14.645%"
        y1="14.645%"
        y2="85.355%"
      >
        <stop offset="0%" stopColor="#FF2D55" />
        <stop offset="100%" stopColor="#FFBC5B" />
      </linearGradient>
      <linearGradient id="b" x1="49.966%" x2="49.966%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#A524B3" />
        <stop offset="100%" stopColor="#FF2D55" />
      </linearGradient>
    </defs>
    <g fill="none" fillRule="evenodd">
      <circle cx={200} cy={200} r={200} fill="url(#a)" />
      <path
        fill="url(#b)"
        d="M125.7 0v150h125z"
        transform="translate(16 130)"
      />
      <path fill="#FFF" d="M16.7 280h125V130z" />
      <path
        fill="#FC9965"
        d="M40 320c11.4 15.1 24.9 28.6 40 40h240c15.1-11.4 28.6-24.9 40-40H40z"
      />
      <path
        fill="#FF2D55"
        d="M80 360c33.4 25.1 75 40 120 40s86.6-14.9 120-40H80z"
      />
      <path
        fill="url(#b)"
        d="M252.3 0v110H344z"
        transform="translate(16 210)"
      />
      <path
        fill="#FFBC5B"
        d="M268.3 280H16.7c6.2 14.3 14.1 27.7 23.3 40h228.4v-40h-.1z"
      />
      <path fill="#FFF" d="M176.7 320h91.6V210z" />
      <circle cx={268.3} cy={130} r={50} fill="#FFC95B" />
      <circle cx={141.7} cy={75} r={25} fill="#FFC95B" />
    </g>
  </svg>
);

export default Decentraland;
