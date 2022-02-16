import * as React from "react";
import { SVGProps } from "react";

const Pascal = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
    <path
      fill="#f7931e"
      d="M256 128A128 128 0 1 1 128 0a128 128 0 0 1 128 128Zm-75.87-66 1.87-9a3.14 3.14 0 0 0-3.15-4h-6a5.21 5.21 0 0 0-4.85 4l-1.91 9h-14l1.91-9a3.14 3.14 0 0 0-3.15-4h-6a5.21 5.21 0 0 0-4.85 4l-1.91 9H60L40 86h132a12 12 0 0 1 12 12v12a12 12 0 0 1-12 12h-61.62l5.1-24h-32L60.1 208h32l13.18-62h15l-1.91 9a3.14 3.14 0 0 0 3.15 4h6a5.21 5.21 0 0 0 4.85-4l1.91-9h14l-1.91 9a3.14 3.14 0 0 0 3.15 4h6a5.21 5.21 0 0 0 4.85-4l1.91-9H192a24 24 0 0 0 24-24V86a24 24 0 0 0-24-24h-11.87Z"
    />
  </svg>
);

export default Pascal;
