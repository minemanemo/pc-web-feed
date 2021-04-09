import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Apple SD Gothic Neo';
    font-style: normal;
    font-weight: 100;
    src: url("/fonts/AppleSDGothicNeoThin.ttf");
  }

  @font-face {
    font-family: 'Apple SD Gothic Neo';
    font-style: normal;
    font-weight: 200;
    src: url("/fonts/AppleSDGothicNeoUltraLight.ttf");
  }

  @font-face {
    font-family: 'Apple SD Gothic Neo';
    font-style: normal;
    font-weight: 300;
    src: url("/fonts/AppleSDGothicNeoLight.ttf");
  }

  @font-face {
    font-family: 'Apple SD Gothic Neo';
    font-style: normal;
    font-weight: 400;
    src: url("/fonts/AppleSDGothicNeoRegular.ttf");
  }

  @font-face {
    font-family: 'Apple SD Gothic Neo';
    font-style: normal;
    font-weight: 500;
    src: url("/fonts/AppleSDGothicNeoMedium.ttf");
  }

  @font-face {
    font-family: 'Apple SD Gothic Neo';
    font-style: normal;
    font-weight: 600;
    src: url("/fonts/AppleSDGothicNeoSemiBold.ttf");
  }

  @font-face {
    font-family: 'Apple SD Gothic Neo';
    font-style: normal;
    font-weight: 700;
    src: url("/fonts/AppleSDGothicNeoBold.ttf");
  }

  @font-face {
    font-family: 'Apple SD Gothic Neo';
    font-style: normal;
    font-weight: 800;
    src: url("/fonts/AppleSDGothicNeoExtraBold.ttf");
  }

  @font-face {
    font-family: 'Apple SD Gothic Neo';
    font-style: normal;
    font-weight: 900;
    src: url("/fonts/AppleSDGothicNeoHeavy.ttf");
  }

  * {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: Apple SD Gothic Neo, sans-serif;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #FFFFFF;
  }
`;

export default GlobalStyle;
