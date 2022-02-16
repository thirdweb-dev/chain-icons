import * as React from "react";
import { SVGProps } from "react";

const Syntropy = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" {...props}>
    <path
      fill="#050505"
      fillRule="evenodd"
      d="M26 10c-1.5-.8-3.3-.8-4.7 0l-7.1 4.1 7.1 4.1c1.5.8 3.3.8 4.7 0 1.5-.8 2.4-2.4 2.4-4.1 0-1.7-.9-3.3-2.4-4.1zM2.4 10C.9 10.8 0 12.4 0 14.1c0 1.7.9 3.2 2.4 4.1 1.5.8 3.3.8 4.7 0l7.1-4.1L7.1 10c-1.5-.8-3.3-.8-4.7 0zm7.7 15.8c.8 1.5 2.4 2.3 4.1 2.3 1.7 0 3.3-.9 4.1-2.3.8-1.5.8-3.2 0-4.7l-4.1-7-4.1 7c-.8 1.5-.8 3.2 0 4.7zm8.2-23.5C17.5.9 15.9 0 14.2 0c-1.7 0-3.3.9-4.1 2.3-.8 1.5-.8 3.2 0 4.7l4.1 7 4.1-7c.8-1.4.8-3.2 0-4.7z"
      clipRule="evenodd"
    />
  </svg>
);

export default Syntropy;
