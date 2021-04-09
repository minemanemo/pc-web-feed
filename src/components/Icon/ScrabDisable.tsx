import React from 'react';

const ScrabDisableIcon: React.FC = () => (
  <svg
    width="30"
    height="31"
    viewBox="0 0 30 31"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_di)">
      <path
        d="M24.9498 27.5283L15.5502 22.4932C15.2065 22.309 14.7936 22.309 14.4498 22.4932L5.05025 27.5283C4.88097 27.619 4.69197 27.6664 4.50001 27.6664C3.85568 27.6664 3.33334 27.1433 3.33334 26.498V4.91938C3.33334 3.95138 4.11685 3.16666 5.08334 3.16666H24.9167C25.8832 3.16666 26.6667 3.95138 26.6667 4.91938V26.498C26.6667 26.6902 26.6193 26.8795 26.5288 27.049C26.2249 27.6181 25.5179 27.8327 24.9498 27.5283Z"
        fill="white"
        fillOpacity="0.6"
      />
      <path
        d="M25.1859 27.0876L15.7863 22.0524C15.2951 21.7892 14.7049 21.7892 14.2137 22.0524L4.81415 27.0876L5.05025 27.5283L4.81415 27.0876C4.71746 27.1394 4.60957 27.1664 4.50001 27.1664C4.13255 27.1664 3.83334 26.8679 3.83334 26.498V4.91938C3.83334 4.22679 4.39372 3.66666 5.08334 3.66666H24.9167C25.6063 3.66666 26.1667 4.22679 26.1667 4.91938V26.498C26.1667 26.6081 26.1395 26.7165 26.0877 26.8135C25.9138 27.1391 25.51 27.2612 25.1859 27.0876Z"
        stroke="white"
      />
    </g>
    <defs>
      <filter
        id="filter0_di"
        x="0.333344"
        y="0.166664"
        width="29.3333"
        height="30.5"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset />
        <feGaussianBlur stdDeviation="1.5" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset />
        <feGaussianBlur stdDeviation="1.5" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
        />
        <feBlend mode="normal" in2="shape" result="effect2_innerShadow" />
      </filter>
    </defs>
  </svg>
);

export default ScrabDisableIcon;
