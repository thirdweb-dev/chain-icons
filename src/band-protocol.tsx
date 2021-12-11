import * as React from "react";
import { SVGProps } from "react";

const BandProtocol = (props: SVGProps<SVGSVGElement>) => (
  <svg
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    x={0}
    y={0}
    viewBox="0 0 32 32"
    style={{
      enableBackground: "new 0 0 32 32",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <style>{".st1{fill:#fff}"}</style>
    <circle
      cx={16}
      cy={16}
      r={16}
      style={{
        fill: "#516aff",
      }}
    />
    <path
      className="st1"
      d="m18.8 11.6 2.8 1.6v-8L16 2.4 7.3 7.3v17.4l8.7 5 8.6-5.1V16l-8.3-5-2.8 1.4 8.3 4.9.1 5.9-5.9 3.3-6-3.4V8.7l6-3.3 2.8 1.5v4.7z"
    />
    <path className="st1" d="m15.7 16.4 1.9-1 2.1 1.3-6.2 3.5V13l2.2 1.3" />
  </svg>
);

export default BandProtocol;
