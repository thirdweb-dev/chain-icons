import * as React from "react";
import { SVGProps } from "react";

const Ramp = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 273 317" {...props}>
    <path fill="#00b5d1" d="m178 183.1-42 24.5-42-24.5V134l42-24.6 42 24.6z" />
    <path
      fill="#0d285a"
      d="M136.5 0 0 79.3v158.4L136.5 317 273 237.7V79.3L136.5 0zM70 196.9v-77.2l66-38.5 66 38.5v77.2l-66 38.5-66-38.5zm0 44.5v-26.8l89.3 52.2-22.8 13.3L70 241.4zm171-22.1L174.5 258l-23.6-13.8 66.2-38.7v-94.4l-81-47.3-81 47.3v121.6l-23-13.4V97.7L136.6 37 241 97.7v121.6z"
    />
  </svg>
);

export default Ramp;
