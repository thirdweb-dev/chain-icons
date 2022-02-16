import * as React from "react";
import { SVGProps } from "react";

const Safepal = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31 35" {...props}>
    <path
      fill="#050101"
      fillRule="evenodd"
      d="M31 20.5V23c0 7-10.2 11-13.3 12l-1.1.4v-4.3l.6-.2C22.1 29.1 27 26 27 23v-2.5h4zM15.5 0l4.2 1.3v4.4l-4.2-1.3-.3.1v9.9h4.4v4.1h-4.4v16.8l-1.2-.4c-.5-.2-1.4-.5-2.5-1l-.5-.2V1.3L15.5 0zM9.8 1.8v4.4L4.1 7.9v6.5h5.7v18.9l-1.3-.6c-3.9-2-8.5-5.3-8.5-10v-2.2h4.1v2.2c0 1 .5 2 1.5 3v-7.2H0V4.7l9.8-2.9zm11.1-.1 10 3.1v13.8H25v6s-1.3 1.7-4.1 3.1v-26zm4.2 5.6v7.1h1.8V7.9l-1.8-.6z"
      clipRule="evenodd"
    />
  </svg>
);

export default Safepal;
