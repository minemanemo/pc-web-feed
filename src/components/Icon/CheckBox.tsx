import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

const CheckBoxIcon: React.FC = () => {
  const theme = useContext(ThemeContext);

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="24" height="24" rx="4" fill={theme.mainColor || '#35C5F0'} />
      <path
        d="M10.1852 14.2469L17.2636 6.95001L18.6991 8.34258L10.2565 17.0457L5.29999 12.4315L6.66275 10.9677L10.1852 14.2469Z"
        fill="white"
      />
    </svg>
  );
};

export default CheckBoxIcon;
