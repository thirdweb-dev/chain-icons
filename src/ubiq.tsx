import * as React from "react";
import { SVGProps } from "react";

const Ubiq = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1785 2000"
    width={2500}
    height={2500}
    {...props}
  >
    <path d="m1089.3 213 25.24 804.73L1785 594.08z" fill="#333" />
    <path d="M1780.27 1436.69V590.93L819.54 1200v800h32.34" fill="#494949" />
    <path d="m695.7 1787-25.24-804.75L0 1405.92z" fill="#0ca579" />
    <path d="M4.73 563.31v845.76l960.73-608.28V0h-32.34" fill="#00ea90" />
  </svg>
);

export default Ubiq;
