import * as React from "react";
import { SVGProps } from "react";

const Beam = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47 47" {...props}>
    <defs>
      <linearGradient id="a" x2="69.924%" y1="50%" y2="50%">
        <stop offset={0} stopColor="#fff" stopOpacity={0} />
        <stop offset={1} stopColor="#fff" />
      </linearGradient>
      <linearGradient
        id="b"
        x1="96.834%"
        x2="32.057%"
        y1="31.578%"
        y2="34.803%"
      >
        <stop offset={0} stopColor="#FD76FD" stopOpacity={0} />
        <stop offset={1} stopColor="#FF51FF" />
      </linearGradient>
      <linearGradient
        id="c"
        x1="95.948%"
        x2="45.029%"
        y1="44.431%"
        y2="44.431%"
      >
        <stop offset={0} stopColor="#5300FF" stopOpacity={0} />
        <stop offset={1} stopColor="#9D6EFF" />
      </linearGradient>
      <linearGradient
        id="d"
        x1="96.966%"
        x2="44.149%"
        y1="35.409%"
        y2="42.312%"
      >
        <stop offset={0} stopColor="#AE60D6" stopOpacity={0} />
        <stop offset={1} stopColor="#AB38E6" />
      </linearGradient>
    </defs>
    <g fill="none" fillRule="evenodd">
      <circle cx={23.5} cy={23.5} r={23.5} fill="#000" />
      <circle cx={23.5} cy={23.5} r={21.439} fill="#000" stroke="#fff" />
      <path
        fill="#0B76FF"
        d="M23.39 28.287h7.87l-7.868-13.633v.002-8.263l15.42 26.281H23.39z"
      />
      <path
        fill="#24C1FF"
        d="M23.389 28.287v4.387H7.967l15.42-26.281.002 8.263-.001-.002-7.868 13.633z"
      />
      <path fill="#39FFF2" d="M23.39 18.038v8.647l-4.88.01z" />
      <path fill="#00E2C2" d="m23.39 18.038 4.878 8.656-4.878-.009z" />
      <path
        fill="url(#a)"
        d="m.224 9.179 19.043 7.869v1.101L.224 13.428z"
        transform="translate(4.123 6.184)"
      />
      <path
        fill="url(#b)"
        d="M38.309 5.879 19.267 17.048v.302l19.042-7.856z"
        transform="translate(4.123 6.184)"
      />
      <path
        fill="url(#c)"
        d="m38.294 16.733-19.027 1.415v-.313l19.027-4.722z"
        transform="translate(4.123 6.184)"
      />
      <path
        fill="url(#d)"
        d="m38.309 9.645-19.042 7.723v.467l19.042-4.879z"
        transform="translate(4.123 6.184)"
      />
    </g>
  </svg>
);

export default Beam;
