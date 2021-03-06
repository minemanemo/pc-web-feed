import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

const ScrabEnableIcon: React.FC = () => {
  const theme = useContext(ThemeContext);

  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.9498 25.5283L14.5502 20.4932C14.2065 20.309 13.7935 20.309 13.4498 20.4932L4.05024 25.5283C3.88097 25.619 3.69197 25.6664 3.5 25.6664C2.85567 25.6664 2.33334 25.1433 2.33334 24.498V2.91937C2.33334 1.95137 3.11684 1.16666 4.08334 1.16666H23.9167C24.8832 1.16666 25.6667 1.95137 25.6667 2.91937V24.498C25.6667 24.6902 25.6193 24.8795 25.5288 25.049C25.2249 25.6181 24.5179 25.8327 23.9498 25.5283Z"
        fill={theme.mainColor || '#35C5F0'}
      />
    </svg>
  );
};

export default ScrabEnableIcon;
