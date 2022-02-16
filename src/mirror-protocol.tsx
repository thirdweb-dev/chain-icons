import * as React from "react";
import { SVGProps } from "react";

const MirrorProtocol = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 18" {...props}>
    <path
      fill="#232c45"
      d="M7.57 3.44V.54l-2.5-.5v2.9l-2.5-.6v2.9l-2.5-.6v9.3l2.5.6v2.9l2.5.6v-2.9l2.5.6v-2.9l2.5.6v-9.3l-2.5-.7zm-2 9.9-3.5-.8v-5.5l3.5.8v5.5z"
    />
  </svg>
);

export default MirrorProtocol;
