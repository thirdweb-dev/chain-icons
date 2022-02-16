import * as React from "react";
import { SVGProps } from "react";

const Ankr = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37 40" {...props}>
    <path
      fill="#245ae5"
      fillOpacity={0.9}
      fillRule="evenodd"
      d="m21.4.6 13.1 6.7c1.9 1 3.1 2.9 3.1 5.1v3.1h-4.8v-3.1c0-.3-.2-.6-.5-.8L19.2 4.9c-.2-.1-.5-.1-.8 0L5.3 11.6c-.3.1-.5.4-.5.8v3.1H0v-3.1c0-2.1 1.2-4.1 3.1-5.1L16.2.6c1.6-.8 3.5-.8 5.2 0zm1.5 19.2c0-2.3-1.9-4.1-4.1-4.1-2.3 0-4.1 1.8-4.1 4.1s1.9 4.1 4.1 4.1c2.2 0 4.1-1.8 4.1-4.1zm9.3 8.6c.3-.1.5-.4.5-.8v-3.1h4.8v3.1c0 2.1-1.2 4.1-3.1 5.1l-13.1 6.7c-.8.4-1.7.6-2.6.6s-1.8-.2-2.6-.6l-13-6.7c-1.9-1-3.1-2.9-3.1-5.1v-3.1h4.8v3.1c0 .3.2.6.5.8L16.4 34v-5.6c-3.8-1.1-6.5-4.5-6.5-8.6 0-4.9 4-9 9-9 4.9 0 9 4 9 9 0 4.1-2.8 7.6-6.5 8.6V34l10.8-5.6z"
      clipRule="evenodd"
    />
  </svg>
);

export default Ankr;
