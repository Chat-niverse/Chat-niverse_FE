# Chat-niverse_FE
Chat-niverse 프로젝트의 프론트엔드 레포지토리입니다.
텍스트를 기반으로 한, 유저가 만들어가는 세상에서의 게임을 제작했습니다.

## 프로젝트 구조

```
Chat-niverse_FE-develop/
│
├── .github/                # GitHub 워크플로우 및 설정 파일
├── public/                 # 로고 및 아이콘의 이전 위치 (현재는 사용되지 않음)
├── eslint.config.js        # ESLint 설정 파일
└── src/
    ├── assets/
    │   ├── icons/                    # 아이콘 파일 (UI, .svg)
    │   └── images/                   # 이미지 파일 (.jpg, .png, .svg)
    └── components/                   # 컴포넌트
        ├── FirstPage/                # 초기 페이지
        │   ├── FirstPage.jsx
        │   └── FirstPage.css
        ├── Header/                   # 헤더
        │   ├── Header.jsx
        │   └── Header.css
        ├── InitializePage/           # 세계관 설정 페이지
        │   ├── InitializeForm.jsx    # 세계관 설정 입력 받는 컴포넌트
        │   ├── InitializeForm.css
        │   ├── InitializePage.jsx    # 세계관 설정 전체 페이지
        │   └── InitializePage.css
        ├── MainPage/                 # 메인 게임 페이지
        │   ├── ChoicesBox.jsx        # 선택지 컴포넌트
        │   ├── ChoicesBox.css
        │   ├── DescriptionText.jsx   # 설명 글 (AI 생성) 컴포넌트
        │   └── DescriptionText.css
        │   ├── ImageComponent.jsx    # 이미지 컴포넌트
        │   ├── ImageComponent.css
        │   ├── InventoryModal.jsx    # 인벤토리를 보여줄 수 있는 모달 컴포넌트
        │   └── InventoryModal.css
        │   ├── MainPage.jsx          # 메인 게임 전체 페이지
        │   ├── MainPage.css
        │   ├── UIs.jsx               # UI (하트 및 인벤토리 아이콘) 컴포넌트
        │   └── UIs.css
        ├── contexts/                 # Context 저장용 폴더
        │   └── FormDataContext.jsx
        ├── App.jsx
        └── App.css
```

## 주요 기능

### 1. FirstPage
### 게임이 시작되면 유저에게 처음 보여지는 페이지입니다.

#### [react-type-animation](https://www.npmjs.com/package/react-type-animation)
* 글씨가 타이핑되는 애니메이션을 사용하여 디자인했습니다.

#### 배경의 이미지 전환
* React의 setInterval을 이용하여 타이핑 시간에 맞게 전환되도록 조정했습니다.

#### 버튼의 애니메이션 적용
* Hover 및 drop-shadow를 사용하여 외부의 퍼져나가는 빛 부분을 구현했습니다.

---

### 2. Header
### 게임의 시작부터 끝까지 상단부에 고정되어 있는 컴포넌트입니다.

#### Position 및 z-index
* Position : fixed 설정을 이용하여 상단에 고정했습니다.
* z-index를 큰 값으로 고정하여 다른 컴포넌트보다 위에 표시되도록 구현했습니다.

---

### 3. InitializePage
### 게임의 설정을 위해 유저에게 정보를 받는 페이지입니다.

#### [react-type-animation](https://www.npmjs.com/package/react-type-animation)
* 글씨가 타이핑되는 애니메이션을 사용하여 디자인했습니다.

#### BE에 통신
* POST 통신을 이용하여 BE에 유저가 입력한 정보를 제공합니다.
* Axios를 이용했습니다.
  ```
  const SendData = {
      isStart: 1,
      username: "Username_String",
      worldview: "Worldview_String",
      charsetting: "Charsetting_String",
      aim: "Aim_String",
  }
  ```
#### 버튼의 애니메이션 적용
* Hover 및 drop-shadow를 사용하여 외부의 퍼져나가는 빛 부분을 구현했습니다.

---

### 4. MainPage
### 게임의 진행이 이루어지는 페이지입니다.

#### 게임 진행 화면의 구성
* API에서 제공받은 이미지를 ImageComponent.jsx에 제공합니다.
* API에서 제공받은 상황 설명을 DescriptionText.jsx에 제공합니다.
* API에서 제공받은 선택지들을 Choicesbox.jsx에 제공합니다.
* 유저가 선택한 선택지는 Axios 통신을 통하여 BE에 통신합니다.

---

## 라이선스
이 프로젝트는 MIT 라이선스를 따릅니다.
