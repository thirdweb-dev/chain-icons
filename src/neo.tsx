import * as React from "react";
import { SVGProps } from "react";

const Neo = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 333 368" {...props}>
    <path
      fill="#00e599"
      d="M0 64.6v246.5l160 57.4V120l173.1-63.8L176 0 0 64.6z"
    />
    <path fill="#00af92" d="M173.1 127.1v134.8l160 57.4V67.9l-160 59.2z" />
  </svg>
);

export default Neo;
