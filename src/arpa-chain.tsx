import * as React from "react";
import { SVGProps } from "react";

const ArpaChain = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" {...props}>
    <path
      fill="#263145"
      fillRule="evenodd"
      d="M500 0c276.1 0 500 223.9 500 500s-223.9 500-500 500S0 776.1 0 500 223.9 0 500 0z"
      clipRule="evenodd"
    />
    <path
      fill="#ccd9e2"
      fillRule="evenodd"
      d="M530.7 177h-69.9L172 680h514.8L650 620H276z"
      clipRule="evenodd"
    />
    <path
      fill="#aaa"
      fillRule="evenodd"
      d="m785.3 739 35.7-60.5L529.7 177 275 620h70l185.7-323.5z"
      clipRule="evenodd"
    />
    <path
      fill="#5a5967"
      fillRule="evenodd"
      d="m172 680 35.7 59h577.6L530.7 295.1l-35.2 62L684.4 680z"
      clipRule="evenodd"
    />
  </svg>
);

export default ArpaChain;
