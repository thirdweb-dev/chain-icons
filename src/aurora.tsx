import * as React from "react";
import { SVGProps } from "react";

const Aurora = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 236 226" {...props}>
    <linearGradient
      id="a"
      x1={120.283}
      x2={229.325}
      y1={114.105}
      y2={114.105}
      gradientUnits="userSpaceOnUse"
    >
      <stop offset={0} stopColor="#3b8270" />
      <stop offset={1} stopColor="#305c6e" />
    </linearGradient>
    <linearGradient
      id="b"
      x1={6.442}
      x2={116.825}
      y1={114.105}
      y2={114.105}
      gradientUnits="userSpaceOnUse"
    >
      <stop offset={0} stopColor="#4e7f98" />
      <stop offset={1} stopColor="#3bc0b5" />
    </linearGradient>
    <linearGradient
      id="c"
      x1={6.442}
      x2={116.825}
      y1={177.791}
      y2={177.791}
      gradientUnits="userSpaceOnUse"
    >
      <stop offset={0} stopColor="#30435c" />
      <stop offset={1} stopColor="#299aa9" />
    </linearGradient>
    <linearGradient
      id="d"
      x1={121.123}
      x2={229.325}
      y1={176.984}
      y2={176.984}
      gradientUnits="userSpaceOnUse"
    >
      <stop offset={0} stopColor="#2e2c29" />
      <stop offset={1} stopColor="#323232" />
    </linearGradient>
    <path
      fill="#fff4fc"
      d="m235.4 141.5-113.2 83.7c-1.5 1.1-3.7 1.2-5.2.1L2 144c-2.2-1.6-2.7-4.8-.9-6.9L114.2 1.5c1.6-2 4.6-2 6.3 0L236 136.3c1.3 1.6 1.1 4-.6 5.2z"
    />
    <path
      fill="url(#a)"
      d="m229.3 138.7-107.6 79.5-.6-81-.8-127.2 106.5 125.7z"
    />
    <path fill="url(#b)" d="m6.4 140.4 110.4 77.8L114.3 10z" />
    <path fill="url(#c)" d="M115.9 137.4 7.2 139.5l-.8.9 110.4 77.8z" />
    <path fill="url(#d)" d="m121.1 137.2 105.7-1.5 2.5 3-107.6 79.5z" />
    <path
      fill="none"
      stroke="#98c9c0"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="m121.1 136.2 105.7-1.5m-110.9 1.7L7.2 138.5m108.2-37.6C92 83 82.1 80.2 78.4 83.2 68.2 91.7 106 147 90.9 160.9c-4.4 4-13.5 4.9-31 6.6-5.4.5-9.9.7-12.8.7m109.7-32.5-35.9-31.4M97.2 29.7c-.3 4.9-.1 14.6 4.9 25.3 4 8.6 9.5 14.2 13 17.3m85.8 86.4c.9-1.3 12.1-17.8 5.2-33.3-5.1-11.5-17.6-16.8-19.5-17.6-2.5-1.1-2.6-.8-14.3-4.6-7.1-2.4-10.7-3.5-13.8-4.7-4.8-1.8-14.1-5.4-24.7-12.2-3.5-2.2-8-5.4-13.1-9.6"
    />
  </svg>
);

export default Aurora;
