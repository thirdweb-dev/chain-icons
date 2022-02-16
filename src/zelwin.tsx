import * as React from "react";
import { SVGProps } from "react";

const Zelwin = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    xmlSpace="preserve"
    id="Layer_1"
    x={0}
    y={0}
    viewBox="0 0 27 28"
    {...props}
  >
    <style>{".st2{fill:#f9c910}"}</style>
    <ellipse cx={13.9} cy={14} fill="#fff" rx={13.9} ry={14} />
    <defs>
      <path id="SVGID_1_" d="M0 0h27.9v28H0z" />
    </defs>
    <clipPath id="SVGID_2_">
      <use xlinkHref="#SVGID_1_" overflow="visible" />
    </clipPath>
    <g clipPath="url(#SVGID_2_)">
      <path
        d="M27.9 14c0 7.7-6.3 14-13.9 14-7.7 0-14-6.3-14-14C0 6.2 6.3 0 13.9 0c7.7 0 14 6.3 14 14zm-14-12.4C7.2 1.6 1.6 7.3 1.6 14s5.6 12.3 12.3 12.3c6.7 0 12.3-5.6 12.3-12.3.1-6.8-5.6-12.4-12.3-12.4z"
        className="st2"
      />
      <path
        d="M5 19c-1.8-3.1-1.8-7.5.3-10.7l3.5 3.5s-.6 1.4-.3 2.9l-1.2 1.4c-.7-1.9-.2-4-.2-4L5.8 11c-1.3 3.7.3 6.7.3 6.7L5 19zM22.9 8.8c1.8 3.1 1.8 7.5-.3 10.7L19.1 16s.6-1.4.3-2.9l1.2-1.4c.7 1.9.2 4 .2 4l1.3 1.3c1.3-3.7-.3-6.7-.3-6.7l1.1-1.5z"
        className="st2"
      />
      <path
        fill="#ed1c24"
        d="m22.1 7.5-9.6 11.8s3.3 1.2 5.9-2l3.3 3.3c-3 4-11 5.6-15.9-.3l9.6-11.8s-3.5-1.2-5.9 2L6.2 7.1c3.8-4.8 12.2-4.6 15.9.4zM8.4 7.2l1.1 1.1c4.3-3.2 8.3-.3 8.3-.3L7.9 20.2c3.5 3.3 8.6 3.1 11.6.4l-1.1-1.1c-4.6 3.3-8.4.4-8.4.4L20 7.7C17.4 5 12.3 4 8.4 7.2z"
      />
    </g>
  </svg>
);

export default Zelwin;
