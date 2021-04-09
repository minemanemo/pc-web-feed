import React, { useCallback } from 'react';
import styled from 'styled-components';

import { ScrabEnableIcon, ScrabDisableIcon } from '@components/Icon';

interface ImagePanelProps {
  url: string;
  scrab: boolean;
  onClickScrab?: (value: boolean) => void;
}

const ImagePanel: React.FC<ImagePanelProps> = ({
  url = '',
  scrab = false,
  onClickScrab = (value) => console.log(value),
}: ImagePanelProps) => {
  const handleCickScrab = useCallback(() => onClickScrab(!scrab), [
    scrab,
    onClickScrab,
  ]);
  return (
    <Wrapper>
      <Image src={url} alt="" />
      <ScrapWrapper onClick={handleCickScrab}>
        {scrab ? <ScrabEnableIcon /> : <ScrabDisableIcon />}
      </ScrapWrapper>
    </Wrapper>
  );
};

export default ImagePanel;

const Wrapper = styled.div`
  width: 269px;
  height: 269px;

  position: relative;
  border-radius: 6px;
  overflow: hidden;
`;

const ScrapWrapper = styled.div`
  position: absolute;
  bottom: 12.33px;
  right: 12.33px;

  cursor: pointer;
`;

const Image = styled.img`
  position: absolute;
  width: 100%;
  min-height: 100%;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;
