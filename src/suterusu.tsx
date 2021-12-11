import * as React from "react";
import { SVGProps } from "react";

const Suterusu = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.22 31.02" {...props}>
    <defs>
      <mask
        id="mask"
        x={0.61}
        y={0}
        width={12.78}
        height={12.79}
        maskUnits="userSpaceOnUse"
      >
        <g id="mask-2">
          <path id="path-1" className="cls-1" d="M.61 0h12.78v12.79H.61V0z" />
        </g>
      </mask>
      <mask
        id="mask-2-2"
        x={0}
        y={11.89}
        width={18.61}
        height={19.13}
        maskUnits="userSpaceOnUse"
      >
        <g id="mask-4">
          <path
            id="path-3"
            className="cls-1"
            d="M0 11.89h18.61v19.13H0V11.89z"
          />
        </g>
      </mask>
      <style>
        {".cls-1,.cls-3{fill:#fff;fill-rule:evenodd}.cls-3{fill:#242328}"}
      </style>
    </defs>
    <g id="Layer_2" data-name="Layer 2">
      <g id="Layer_1-2" data-name="Layer 1">
        <g
          style={{
            mask: "url(#mask)",
          }}
          id="Group-20"
        >
          <path
            id="Fill-18"
            className="cls-3"
            d="M1.1 12.3a1.67 1.67 0 0 1 0-2.37L10.52.49a1.7 1.7 0 0 1 2.38 0 1.7 1.7 0 0 1 0 2.38L3.47 12.3a1.67 1.67 0 0 1-2.37 0"
          />
        </g>
        <g
          style={{
            mask: "url(#mask-2-2)",
          }}
          id="Group-23"
        >
          <path
            id="Fill-21"
            className="cls-3"
            d="M18.12 18.71a1.68 1.68 0 0 1 0 2.38L8.7 30.52a1.68 1.68 0 1 1-2.38-2.37l9.43-9.44a1.68 1.68 0 0 1 2.37 0m-17.63 2a1.7 1.7 0 0 1 0-2.38l6-6a1.67 1.67 0 0 1 2.37 0 1.7 1.7 0 0 1 0 2.38l-6 6a1.68 1.68 0 0 1-2.37 0"
          />
        </g>
        <path
          id="Fill-24"
          d="M18.73 10.29a1.68 1.68 0 0 1 0 2.37l-6 6a1.68 1.68 0 1 1-2.37-2.38l6-6a1.67 1.67 0 0 1 2.37 0"
          style={{
            fill: "#a573ff",
            fillRule: "evenodd",
          }}
        />
      </g>
    </g>
  </svg>
);

export default Suterusu;
