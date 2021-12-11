import * as React from "react";
import { SVGProps } from "react";

const Livepeer = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={640}
    height={680}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fill="#000"
      d="M520 400V280h120v120zM260 260V140h120v120zM260 540V420h120v120zM0 680V560h120v120zM0 400V280h120v120zM0 120V0h120v120z"
    />
  </svg>
);

export default Livepeer;
