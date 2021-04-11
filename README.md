# PC 사진 피드

과제 개요 ([바로가기](https://gist.github.com/KimJinsik/74ea2cb06c80e0139b6767207b473280))

## Usage

### `yarn start`

- 명령어 실행 시 Dev Server로 APP을 실행합니다. (http://localhost:3000)

### `yarn build`

- 명령어 실행 시 Webpack을 통한 빌드를 진행합니다. (`./build` 경로 확인)

### `yarn storybook`

- 명령어 실행 시 사용된 컴포넌트를 Storybook으로 확인 가능합니다. (http://localhost:6006)

## 요구사항

1. 디자인에 부합하는 웹 PC화면을 만들어주세요.
   - figma로 제공된 디자인 시안을 따라 구현 ([디자인 시안 바로가기](https://ozip.me/ankGeTe))
2. 사진 리스트는 다음과 같이 구현해주세요.
   1. 사진 리스트 정보는 다음 URL을 이용해서 얻을 수 있습니다.
      - 제공된 AWS S3 URL을 이용
   2. 사용자가 어느정도 스크롤을 진행함에 따라 지속적으로 다음 페이지 사진을 불러온다.
      - page_1.json 부터 1씩 증가하여 데이터를 호출
   3. 빈 값이 나올때까지 지속적으로 Ajax를 통해서 다음 페이지를 불러온다.
      - 호출한 데이터가 빈 데이터 또는 잘못된 경우 데이터 호출 차단
3. 스크랩 기능
   - 스크랩 된 사진 데이터는 id 값을 localStorage로 hash로 저장
   - 스크랩 enable, disable 시 localStorage에 저장
4. 필터 기능
   - 스크랩된 데이터만 보이도록 개발

## 선택구현 사항

- 스크랩/스크랩 취소할때 사용자와의 인터랙션
  - 로딩 추가

## 기타 사항

- 아이콘은 제공된 SVG 파일 사용
- CRA 이용
- ESLint & Prettier 사용
- 상태 관리 라이브러리 사용 (redux, redux-saga)
- TypeScript 사용
- CSS in JS 사용 (styled-component)
- Storybook 사용
