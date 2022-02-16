import * as React from "react";
import { SVGProps } from "react";

const Stacks = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 159 159" {...props}>
    <circle cx={79.9} cy={79.9} r={79.9} fill="#5546ff" />
    <path
      fill="#fff"
      d="M112.5 122 95.3 95H120V84.8H39V95h24.7l-17.2 27h12.8l20.2-31.7L99.7 122h12.8zm7.5-47.1V64.7H95.8l17-26.7H99.9L79.5 70.2 59.1 38H46.2l17 26.7H39V75l81-.1z"
    />
  </svg>
);

export default Stacks;
