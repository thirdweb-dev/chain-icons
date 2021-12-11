import * as React from "react";
import { SVGProps } from "react";

const NervosNetwork = (props: SVGProps<SVGSVGElement>) => (
  <svg
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 271.2 227.6"
    {...props}
  >
    <path
      style={{
        fill: "#424242",
      }}
      d="M0 0v136.6h45.5V0H0zM225.7 91v136.6h45.5V91h-45.5zM134.6 0v89.1l45.5 45.5V45.5L134.6 0zM91.1 93v89.1l45.5 45.5v-89.1L91.1 93z"
    />
    <path d="M134.6 0h45.5l91.1 91h-45.5L134.6 0zM0 136.6h45.5l91.1 91H91.1L0 136.6z" />
    <path
      style={{
        fill: "#3cc68a",
      }}
      d="M180.1 45.5V134L45.5 0v136.6l45.6 45.5V93.6l134.6 134V91l-45.6-45.5z"
    />
  </svg>
);

export default NervosNetwork;
