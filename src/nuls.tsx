import * as React from "react";
import { SVGProps } from "react";

const Nuls = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
    <g fill="none" fillRule="evenodd">
      <circle cx={16} cy={16} r={16} fill="#82bd39" />
      <path
        fill="#fff"
        fillRule="nonzero"
        d="M14.403 19.36 16 21.464V26l-6-2.663V11.619c0-.173.077-.338.212-.453l.683-.585a.636.636 0 0 1 .923.097l5.465 7.164 3.019 1.846v-9.88l-2.668-1.331-.13 6.196-1.412-1.873-.064-6.8L22 8.779v11.664l-1.357 1.118-4.274-2.387-4.744-6.223-.065 9.454 2.825 1.447z"
      />
    </g>
  </svg>
);

export default Nuls;
