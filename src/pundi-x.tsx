import * as React from "react";
import { SVGProps } from "react";

const PundiX = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2500 2500" {...props}>
    <circle cx={1250} cy={1250} r={1250} fill="#181818" />
    <path
      fill="#f6d30c"
      d="m1307 1100 497-498 101 102-497 497zm-713 712 498-498 101 102-497 497zm713-396 101-102 498 498-102 101zM594 704l102-102 497 497-101 102zm554 553 102-102 102 102-102 102z"
    />
  </svg>
);

export default PundiX;
