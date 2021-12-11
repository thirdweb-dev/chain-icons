import * as React from "react";
import { SVGProps } from "react";

const Polybius = (props: SVGProps<SVGSVGElement>) => (
  <svg
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 130.2 104.2"
    {...props}
  >
    <path
      style={{
        fill: "#069dd8",
      }}
      d="M60.7 0h34.7v34.7H60.7zM60.7 69.5h34.7v34.7H60.7z"
    />
    <path
      style={{
        fill: "#1f7995",
      }}
      d="M95.5 34.7h34.7v34.7H95.5z"
    />
    <path
      transform="rotate(-45 24.536 52.137)"
      style={{
        fill: "#a4be39",
      }}
      d="M7.19 34.79h34.7v34.7H7.19z"
    />
  </svg>
);

export default Polybius;
