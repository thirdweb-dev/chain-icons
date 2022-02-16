import * as React from "react";
import { SVGProps } from "react";

const Livepeer = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 640 680"
    {...props}
  >
    <path
      fill="#000"
      d="M520 400V280h120v120zM260 260V140h120v120zm0 280V420h120v120zM0 680V560h120v120zm0-280V280h120v120zm0-280V0h120v120z"
    />
  </svg>
);

export default Livepeer;
