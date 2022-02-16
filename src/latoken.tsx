import * as React from "react";
import { SVGProps } from "react";

const Latoken = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 111 111" {...props}>
    <path fill="#161f37" d="M61.7 60.8H73l-5.6-15.7-5.7 15.7z" />
    <path
      fill="#161f37"
      d="M55.7 0a55.7 55.7 0 1 0 55.7 55.7A55.78 55.78 0 0 0 55.7 0Zm24.9 82.1-3.8-10.7H57.9l-3.8 10.7h-34L39 29.4h11.3l-15.1 42h11.3l15.1-42H73l19 52.7Z"
    />
  </svg>
);

export default Latoken;
