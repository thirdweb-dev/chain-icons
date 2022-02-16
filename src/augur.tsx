import * as React from "react";
import { SVGProps } from "react";

const Augur = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" {...props}>
    <circle cx={48} cy={48} r={48} fill="#0e0e21" />
    <path
      fill="#fff"
      d="m74.8 59.2-5.7-9.7c-.2-.4-.7-.5-1-.2l-3.7 2.4c-.3.2-.4.7-.2 1l3.3 5.5c.1.2 0 .4-.1.5L48.2 71.1c-.1.1-.3.1-.4 0l-19-12.4c-.2-.1-.2-.3-.1-.5l3.3-5.5c.2-.3.1-.8-.2-1l-3.7-2.4c-.4-.2-.8-.1-1 .2l-5.7 9.7c-.4.7-.2 1.6.5 2l25.5 16.6c.5.3 1.1.3 1.6 0l25.5-16.6c.5-.5.7-1.4.3-2z"
    />
    <path
      fill="#2ae7a8"
      d="m30.9 44.1 3.7 2.4c.4.2.8.1 1-.2l12-20.4c.1-.2.5-.2.6 0l12 20.4c.2.4.7.5 1 .2l3.7-2.4c.3-.2.4-.7.2-1L51 18.7c-.3-.5-.7-.7-1.3-.7h-3.4c-.5 0-1 .3-1.3.7L30.7 43.1c-.2.3-.1.8.2 1z"
    />
  </svg>
);

export default Augur;
