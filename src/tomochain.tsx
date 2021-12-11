import * as React from "react";
import { SVGProps } from "react";

const Tomochain = (props: SVGProps<SVGSVGElement>) => (
  <svg
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    x={0}
    y={0}
    viewBox="0 0 186.7 280"
    style={{
      enableBackground: "new 0 0 186.7 280",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <style>{".st0{fill:#242828}"}</style>
    <path
      className="st0"
      d="M46.7 0v93.3L0 140V46.7zM186.7 186.7c0 51.5-41.8 93.3-93.3 93.3C41.8 280 0 238.2 0 186.7V140h46.7v46.7c0 25.8 20.9 46.7 46.7 46.7s46.7-20.9 46.7-46.7h46.6z"
    />
    <path
      style={{
        fill: "#00e8b5",
      }}
      d="M186.7 93.3 140 140H0l46.7-46.7z"
    />
  </svg>
);

export default Tomochain;
