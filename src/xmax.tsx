import * as React from "react";
import { SVGProps } from "react";

const Xmax = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 32" {...props}>
    <path
      fill="#f03"
      d="M15 19.64h.05l15.17-7.4v2.14L18 20.33l12.2 3v2l-14.89-3.68L.06 29.09V27Zm0-8.28 15.22-7.42v2.14L0 20.81v-2.14l12.28-6L0 9.68v-2ZM0 0l15.18 3.7v2L0 2Zm0 5.84v-2l15.2 3.72v2Zm0 17L30.22 8.09v2.14L0 24.94Zm30.2 6.31L15 25.43v-2l15.18 3.71Zm-15.2.11v-2L30.22 31v2Z"
    />
  </svg>
);

export default Xmax;
