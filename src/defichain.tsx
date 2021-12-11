import * as React from "react";
import { SVGProps } from "react";

const Defichain = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 72 72"
    style={{
      enableBackground: "new 0 0 72 72",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <path
      d="M36 0c19.9 0 36 16.1 36 36 0 19.7-15.8 35.7-35.4 36H36V41.7l-4.6 4.6-.6 11.4L35.6 72c-2.8 0-5.5-.4-8.2-1.1l-.7-.2-2.3-6.9-6.5 3.3c-2.4-1.4-4.6-3-6.6-4.9l-.5-.5 12.1-6.1.4-6.9-6.9.4-6.1 12.1c-1.9-2-3.6-4.2-5-6.5l-.4-.6 3.3-6.5-6.9-2.3C.6 42.6.2 39.9.1 37.2v-.7l14.4 4.8 11.4-.6 4.6-4.6-4.6-4.6-11.4-.6L0 35.6c0-2.8.4-5.6 1-8.2l.2-.7 6.9-2.3-3.3-6.5c1.4-2.4 3-4.6 4.9-6.6l.5-.5 6.1 12.1 6.9.4-.4-6.9-12.1-6.1c2-1.9 4.2-3.6 6.5-5l.6-.4 6.5 3.3 2.3-6.9C29.3.6 32 .2 34.7.1h.7l-4.8 14.3.6 11.4 4.6 4.6C36 30.3 36 0 36 0zm8 9.2v53.7C55.5 59.4 64 48.7 64 36c0-12.5-8.3-23.1-19.6-26.7l-.4-.1z"
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
        fill: "#ff00af",
      }}
    />
  </svg>
);

export default Defichain;