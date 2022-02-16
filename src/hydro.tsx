import * as React from "react";
import { SVGProps } from "react";

const Hydro = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 61 61" {...props}>
    <circle cx={30.79} cy={30.79} r={28.17} fill="#fff" />
    <path
      fill="#168dff"
      d="M32.35 0a30.78 30.78 0 1 0 29.1 32 30.85 30.85 0 0 0-29.1-32Zm-1.7 50.9c-9.9 0-17.5-10-15-19.6a28.65 28.65 0 0 1 3.9-8.3 92.17 92.17 0 0 1 9.9-12.5c.9-1 1.6-1 2.5-.1a79.36 79.36 0 0 1 11.2 14.7c1.8 3.3 3.2 6.7 3.1 10.5a16 16 0 0 1-15.6 15.34Z"
    />
  </svg>
);

export default Hydro;
