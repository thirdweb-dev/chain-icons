import * as React from "react";
import { SVGProps } from "react";

const Faceter = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 41" {...props}>
    <path
      fill="#06142e"
      d="M45.7 0h-21c-1.4 0-2.5 1.1-2.5 2.5v21.6h-7.6c-1.4 0-2.6 1-2.6 2.3s1.2 2.3 2.6 2.3h10.2c1.4 0 2.5-1.1 2.5-2.5V15.1h12.4c1.3 0 2.3-1 2.3-2.3 0-1.3-1-2.3-2.3-2.3H27.2V4.6h18.5c1.3 0 2.3-1 2.3-2.3C48 1 47 0 45.7 0zM24.9 36.4H14.2c-1.3 0-2.3 1-2.3 2.3 0 1.3 1 2.3 2.3 2.3h10.7c1.3 0 2.3-1 2.3-2.3 0-1.3-1-2.3-2.3-2.3zM13 10.5H2.3c-1.3 0-2.3 1-2.3 2.3 0 1.3 1 2.3 2.3 2.3H13c1.3 0 2.3-1 2.3-2.3 0-1.2-1-2.3-2.3-2.3z"
    />
  </svg>
);

export default Faceter;
