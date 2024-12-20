### 예산 계산기

React와 TypeScript를 사용하여 구현한 예산 계산기입니다.
지출 내역을 추가, 수정, 삭제할 수 있으며, Toast 알림을 직접 구현하여 사용했습니다.
Dark Mode기능을 지원합니다.

### 주요 기능

- **지출 내역 관리**

  - 지출 내역 추가: 새로운 지출 항목을 추가합니다.
  - 지출 내역 수정: 기존 지출 항목을 수정할 수 있습니다.
  - 지출 내역 삭제: 선택한 지출 항목을 삭제할 수 있습니다.

- **Toast 알림**

  - 모든 행위(추가, 수정, 삭제)에 대해 사용자에게 알림을 제공합니다.
  - Toast 알림은 기본적으로 3초 동안 화면에 표시됩니다.
  - 알림은 Context API를 통해 전역적으로 관리됩니다.

- **Dark Mode 지원**
  - **`useDarkMode` 커스텀 훅**을 통해 Dark Mode를 쉽게 토글할 수 있습니다.
  - Dark Mode 상태는 `localStorage`에 저장되어 새로고침 후에도 유지됩니다.
  - 초기 렌더링 시, 저장된 Dark Mode 설정에 따라 화면을 자동으로 구성합니다.

### 설치 방법

```
yarn 또는 npm install  의존성 패키지 설치 후,
```

```
yarn dev 또는 npm run dev 실행합니다.
```

### 영상

![GOMCAM20241206_0804410319-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/628e6174-0edb-4584-9f8b-d9031beb49bd)
