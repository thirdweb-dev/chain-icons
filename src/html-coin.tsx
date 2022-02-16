import * as React from "react";
import { SVGProps } from "react";

const HtmlCoin = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
    <g fill="none" fillRule="evenodd">
      <circle cx={16} cy={16} r={16} fill="#cfa967" />
      <path
        fill="#fff"
        fillRule="nonzero"
        d="M16.02 16.945v7.993l5.947-1.602 1.397-15.39H16.02v6.532l.304-.947h.796zm-7.384 7.524L7 6.5h18l-1.636 17.969L15.98 26.5zm5.163-6.793v-.741l-2.469-.984 2.47-.99v-.742l-3.527 1.433v.592zm7.933-1.432-3.527 1.432v-.741l2.47-.987-2.47-.987v-.742l3.527 1.433zm-5.712.7v-2.466l-1.317 4.107h.788z"
      />
    </g>
  </svg>
);

export default HtmlCoin;
