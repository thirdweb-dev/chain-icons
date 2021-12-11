import * as React from "react";
import { SVGProps } from "react";

const Einsteinium = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 1362" {...props}>
    <path
      fill="#0175b0"
      d="M189 989 0 1362h440l189-373H189m251-495L251 867h440l189-373H440M691 0 502 373h439L1130 0H691"
    />
    <path
      fill="#00a2d0"
      d="m628 988-190 374h440l189-374H628m250-494L689 867h440l189-373H878M1129 0 940 372h440L1569 0h-440"
    />
    <path
      fill="#0cf"
      d="m1059 988-189 374h439l190-374h-440m251-494-189 373h440l188-373h-439M1560 0l-189 372h440L2000 0h-440"
    />
  </svg>
);

export default Einsteinium;
