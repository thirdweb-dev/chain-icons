import * as React from "react";
import { SVGProps } from "react";

const AlphaFinanceLab = (props: SVGProps<SVGSVGElement>) => (
  <svg
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    x={0}
    y={0}
    viewBox="0 0 100 100"
    style={{
      enableBackground: "new 0 0 100 100",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <style>
      {
        ".st1{fill-rule:evenodd;clip-rule:evenodd;fill:#fff}.st3{fill:none;stroke:#fff;stroke-width:1.4925}"
      }
    </style>
    <g id="Page-1">
      <g id="Desktop_AlphaLandingpage" transform="translate(-144 -145)">
        <g id="Alpha_Logo_02" transform="translate(144 145)">
          <g id="Group-3">
            <defs>
              <filter
                id="Adobe_OpacityMaskFilter"
                filterUnits="userSpaceOnUse"
                x={0}
                y={0}
                width={100}
                height={100}
              >
                <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" />
              </filter>
            </defs>
            <mask
              maskUnits="userSpaceOnUse"
              x={0}
              y={0}
              width={100}
              height={100}
              id="mask-2_1_"
            >
              <g
                style={{
                  filter: "url(#Adobe_OpacityMaskFilter)",
                }}
              >
                <path id="path-1_1_" className="st1" d="M0 0h100v100H0z" />
              </g>
            </mask>
            <path
              id="Fill-1"
              d="M50 0C22.4 0 0 22.4 0 50s22.4 50 50 50 50-22.4 50-50S77.6 0 50 0"
              style={{
                mask: "url(#mask-2_1_)",
                fillRule: "evenodd",
                clipRule: "evenodd",
                fill: "#29b2ff",
              }}
            />
          </g>
          <path
            id="Fill-4"
            className="st1"
            d="m35.7 34.6-23 30.6h4.7l5-6.7h16v-3.8H25.2l15.1-20.1z"
          />
          <path
            id="Fill-6"
            className="st1"
            d="m87.3 65.2-23-30.6h-4.6l15.1 20.1H61.6v3.8h16l5 6.7z"
          />
          <path id="Fill-8" className="st1" d="M48.1 65.2h3.8V17.9h-3.8z" />
          <path id="Fill-15" className="st1" d="M22 57.7h15.7v-2.2H22z" />
          <path id="Stroke-16" className="st3" d="M22 57.7h15.7v-2.2H22z" />
          <path id="Fill-17" className="st1" d="M62.3 57.7H78v-2.2H62.3z" />
          <path id="Stroke-18" className="st3" d="M62.3 57.7H78v-2.2H62.3z" />
        </g>
      </g>
    </g>
  </svg>
);

export default AlphaFinanceLab;
