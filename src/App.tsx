import React from 'react';
import styled from 'styled-components';

import MainRouter from '@router/MainRouter';

const App: React.FC = () => {
  return (
    <MainWrapper>
      <MainRouter />
    </MainWrapper>
  );
};

export default App;

const MainWrapper = styled.div`
  min-width: 1256px;
  min-height: 762px;
  background-color: ${(props) => props.theme.mainBackgroundColor};
`;
