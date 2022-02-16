import * as React from "react";
import { SVGProps } from "react";

const FeiUsd = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" {...props}>
    <circle cx={9} cy={9} r={9} fill="#22996e" />
    <path
      fill="#fff"
      d="M9 13H4.1c-.7 0-1.1-.7-.7-1.3l2.8-4.4c.2-.3.5-.5.9-.5h3.8c.4 0 .7.2.9.5l2.8 4.4c.4.6 0 1.3-.7 1.3H9zm.5-10 1.2 1.8c.2.4 0 .9-.5.9H7.8c-.5 0-.7-.5-.5-.9L8.5 3c.3-.4.8-.4 1 0z"
    />
  </svg>
);

export default FeiUsd;
