import * as React from "react";
import { SVGProps } from "react";

const Torex = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 67.37 67.25" {...props}>
    <g data-name="Layer 2">
      <g data-name="Layer 1">
        <rect width={67.37} height={67.25} rx={20} />
        <rect
          data-name="b"
          width={67.37}
          height={67.25}
          rx={20}
          style={{
            fill: "#2cc981",
          }}
        />
        <path
          d="m45.73 10.43 10.84 11.21h-22Zm-23 22.86L11.14 21.74l11.24-11.21 34.26 34.34-11.35 11.19-11.21-11.19-11.29 11.27-11.37-11.35Z"
          style={{
            fill: "#fff",
            fillRule: "evenodd",
          }}
        />
      </g>
    </g>
  </svg>
);

export default Torex;
