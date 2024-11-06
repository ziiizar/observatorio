import { cn } from "@/lib/utils";
import React from "react";

function WhiteCircle({className}:{className:string}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="53"
      height="52"
      fill="none"
      viewBox="0 0 53 52"
      className={cn('', className)}
    >
      <g filter="url(#filter0_d_430_448)">
        <circle cx="26.25" cy="26" r="16" fill="#fff"></circle>
      </g>
      <defs>
        <filter
          id="filter0_d_430_448"
          width="52"
          height="52"
          x="0.25"
          y="0"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset></feOffset>
          <feGaussianBlur stdDeviation="5"></feGaussianBlur>
          <feComposite in2="hardAlpha" operator="out"></feComposite>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_430_448"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_430_448"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

export default WhiteCircle;