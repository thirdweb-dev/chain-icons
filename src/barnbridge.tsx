import * as React from "react";
import { SVGProps } from "react";

const Barnbridge = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    id="Layer_1"
    x={0}
    y={0}
    viewBox="0 0 28 27"
    {...props}
  >
    <style>{".st0{fill:#ff4339}"}</style>
    <path
      d="M14.2 12.3h-.1c-1.8 0-3.3 1.5-3.3 3.4v3.7l3.3-2.5 3.3 2.5v-3.7c.1-1.9-1.4-3.4-3.2-3.4z"
      className="st0"
    />
    <path
      d="M0 0v27.4l8.5-6.3v-7.2L7 12.6l7.2-5.5 7.2 5.5-1.6 1.2V21l8.5 6.3V0H0z"
      className="st0"
    />
  </svg>
);

export default Barnbridge;
