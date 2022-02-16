import * as React from "react";
import { SVGProps } from "react";

const Cindicator = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 98 98" {...props}>
    <path d="M49.45 98.91a49.45 49.45 0 1 1 49.46-49.46 49.45 49.45 0 0 1-49.46 49.46Zm0-3.86a45.59 45.59 0 1 0-45.59-45.6A45.6 45.6 0 0 0 49.45 95Z" />
    <circle cx={49.55} cy={49.55} r={4.25} />
  </svg>
);

export default Cindicator;
