import * as React from "react";
import { SVGProps } from "react";

const BasicAttentionToken = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 1719" {...props}>
    <path fill="#662d91" d="m2000 1716.64-995.21-569.86L0 1719l2000-2.36z" />
    <path fill="#9e1f63" d="m1005.11 0-.32 1146.78L2000 1716.64 1005.11 0z" />
    <path fill="#ff5000" d="m0 1719 1004.79-572.22L1005.11 0 0 1719z" />
    <path
      fill="#fff"
      stroke="#ff5000"
      strokeMiterlimit={10}
      strokeWidth={25}
      d="M1002.75 695.67 591.9 1381.92h823.54l-412.69-686.25z"
    />
  </svg>
);

export default BasicAttentionToken;
