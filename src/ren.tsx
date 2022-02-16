import * as React from "react";
import { SVGProps } from "react";

const Ren = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
    <linearGradient
      id="a"
      x2={32}
      y1={16}
      y2={16}
      gradientUnits="userSpaceOnUse"
    >
      <stop offset={0} stopColor="#001c3a" />
      <stop offset={0.6} stopColor="#001e3d" />
      <stop offset={0.7} stopColor="#001f3f" />
      <stop offset={1} stopColor="#002042" />
    </linearGradient>
    <circle cx={16} cy={16} r={16} fill="url(#a)" />
    <path
      fill="#fff"
      d="m9 9.3 1.7-.9.2.4 6.2-3.6-.4-.3-.5-.3-.2-.1-10.2 5.9v.2L8.7 9zm0 3.8 4.9-2.9.2.4L20.4 7l-.5-.3-.5-.2-.2-.1-13.4 7.7v.2l2.9-1.6zm0 1.8 6.5-3.7.2.3L22 7.9l-.5-.2-.5-.3-.2-.1-15 8.6v.3l2.9-1.7zm0 1.8 8.1-4.6.2.3 6.3-3.5-.5-.3-.5-.3-.2-.1-16.6 9.6v.2l2.9-1.6zm0 1.9 9.7-5.6.2.4 6.3-3.6-.5-.3-.4-.2-.3-.2L5.8 19.6v.3l2.9-1.7zm16.8-8.4-.2-.2L5.8 21.5v.2l2.9-1.6.3.4 9.7-5.7.2.4 7.3-4.1v-.7zM7.1 22.9l1.6-1 .2.4 9.8-5.6.2.4 7.3-4.2v-1.3L6.8 22.7zm11.6-4.3.2.4 7.3-4.3v-1.3L8.4 23.7l.3.1 1.6-1 .3.4m-.3 1.5 1.7-.9.2.4 6.5-3.8.2.4 7.3-4.2v-1.3L10 24.6zm1.6.9 1.7-.9.2.4 4.9-2.8.2.4 7.3-4.2v-1.4l-14.6 8.4zm1.3.8.3.2 1.7-1 .2.4 3.3-1.9.2.4 7.3-4.2V19zm1.9 1.1 1.6-1 .3.4 1.7-.9.2.4 7.3-4.2v-1.4l-11.3 6.6zm3.7-21.4-.5-.3-.5-.2-.2-.2-11.8 6.8v.3l2.9-1.7.3.4 3.3-1.9.2.4z"
    />
  </svg>
);

export default Ren;
