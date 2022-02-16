import * as React from "react";
import { SVGProps } from "react";

const DigitalReserveCurrency = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <circle cx={256} cy={256} r={256} fill="#fff" />
    <path d="M174.1 95.9 189 78l66.9 80.5L322.7 78l14.9 17.9L203.8 257l52.1 62.7L308 257l-39.5-47.5 14.9-17.9 46.8 56.4c.3.4.6.7.8 1.1l6.6 8-66.9 80.5 66.9 80.5-14.9 17.9-148.6-178.9 2.7-3.3c.2-.3.3-.5.5-.8l63.6-76.6-66.8-80.5zm.1 322.2 55.9-67.3 14.9 17.9-56 67.3-14.8-17.9z" />
  </svg>
);

export default DigitalReserveCurrency;
