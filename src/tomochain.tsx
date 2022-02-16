import * as React from "react";
import { SVGProps } from "react";

const Tomochain = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 186 280" {...props}>
    <path
      fill="#242828"
      d="M46.7 0v93.3L0 140V46.7zm140 186.7c0 51.5-41.8 93.3-93.3 93.3C41.8 280 0 238.2 0 186.7V140h46.7v46.7c0 25.8 20.9 46.7 46.7 46.7s46.7-20.9 46.7-46.7h46.6z"
    />
    <path fill="#00e8b5" d="M186.7 93.3 140 140H0l46.7-46.7z" />
  </svg>
);

export default Tomochain;
