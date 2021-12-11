import * as React from "react";
import { SVGProps } from "react";

const Velas = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 42 37"
    style={{
      enableBackground: "new 0 0 42 37",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <path
      d="M28.9 13.9 21 27.7l-7.9-13.9h15.8zm7.9-4.7H5.2L21 37 36.8 9.2zM0 0l2.6 4.6h36.7L42 0H0z"
      style={{
        fill: "#0037c1",
      }}
    />
  </svg>
);

export default Velas;
