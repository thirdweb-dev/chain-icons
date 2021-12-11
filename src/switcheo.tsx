import * as React from "react";
import { SVGProps } from "react";

const Switcheo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 62 62"
    style={{
      enableBackground: "new 0 0 62 62",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <path
      d="M0 0h62v62H0V0z"
      style={{
        fill: "#063c4f",
      }}
    />
    <path
      d="M53 9v44h-8.6V24.4L15.8 52.9l-6.7-6.7 28.6-28.6H9V9h44z"
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
        fill: "#e2fca4",
      }}
    />
  </svg>
);

export default Switcheo;
