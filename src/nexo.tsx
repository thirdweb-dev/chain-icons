import * as React from "react";
import { SVGProps } from "react";

const Nexo = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49 42" {...props}>
    <path
      fill="#3ca9e5"
      d="m12.84.28 24.26 14v14.28L0 7.14 11.89.28a1 1 0 0 1 .95 0Z"
    />
    <path fill="#2853c3" d="M37.1 0 24.73 7.14l12.37 7.14V0z" />
    <path
      fill="#1a4199"
      d="M37.1 0 49 6.86a1 1 0 0 1 .48.83v28L37.1 28.56V0Z"
    />
    <path
      fill="#2853c3"
      d="m49.47 35.7-11.89 6.86a1 1 0 0 1-1 0l-24.25-14v-14.3Z"
    />
    <path fill="#60beff" d="M0 7.14v28a1 1 0 0 0 .48.86l11.89 6.86v-28.6Z" />
    <path fill="#3ca9e5" d="m12.37 42.84 12.36-7.14-12.36-7.14v14.28z" />
  </svg>
);

export default Nexo;
