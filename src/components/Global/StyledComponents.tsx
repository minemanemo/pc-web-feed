import styled, { keyframes } from 'styled-components';

export const Black = styled.div`
  /* 레이아웃 - 화면 꽉 채움 */
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;

  /* 레이어 */
  z-index: 1100;

  /* 색상 */
  background: rgba(0, 0, 0, 0.3);

  display: flex;
  justify-content: center;
  align-items: center;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`;

export const Loading = styled.div`
  margin: 5% auto;
  height: 100px;
  width: 100px;
  border-width: 6px;
  border-style: solid;
  border-radius: 50%;
  border-color: ${({ theme }) => theme.mainColor}
    ${({ theme }) => theme.mainColor} #ffffff #ffffff;

  animation: spin 1000ms infinite linear;
  animation-name: ${rotate};
`;
