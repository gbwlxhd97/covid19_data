# 코로나19 감염현황 차트 대쉬보드


## 기능 목록
1. 사이드 바 메뉴 클릭
    - 선택 된 Menu Item color 변경 - [O]  
    - 해당하는 페이지로 push 후 메인 섹션은 빈페이지로 라우팅 - [O] 
2. 차트구현
    - 코로나 일자 별 코로나 확진자 수 - [O] 
    - 코로나 일자 별 연령대 확진자 수 - [O] 
    - 코로나 일자 별 성별 확진자 수  - [O]
3. JSON 데이터 연동 - [O]

## 패키지 초기화 방법
1. 해당 프로젝트를 클론합니다.
2. 클론한 프로젝트 파일 중 package.json 파일이 있는 위치로 이동합니다.
3. package.json 파일이 있는경로에서 npm i (yarn의 경우 yarn install) 커맨드를 입력합니다.


## 서버 스타트 방법
1. 패키지 초기화 단계를 진행했다면, package.json 파일이 있는경로에서 npm run dev(yarn의 경우 yarn dev) 커맨드를 입력합니다.
2. 커맨드를 입력했다면, http://localhost:3000 주소로 서버가 오픈됩니다.
    > 만약 3000포트가 이미 사용중이라면, package.json 파일중 scripts 명령어를 아래와같이 수정합니다.
        "scripts": { 
            "dev": "next dev -p 변경하고싶은 포트번호",
            "start": "next start -p 변경하고싶은 포트번호",
        },
3. 파일을 빌드하고 실행결과를 보고 싶다면   
    - package.json 파일 경로에서 npm run build 커맨드입력
    - npm run start 커맨드입력하여 빌드파일 실행


## 디렉토리 구조 설명
```sh
📦src
 ┣ 📂assets (이미지,폰트 저장 폴더)
 ┣ 📂components (컴포넌트 폴더, 재사용컴포넌트 네이밍 CM컴포넌트명.tsx)
 ┣ 📂hooks (커스텀 훅 폴더)
 ┣ 📂interfaces (타입을 지정하는 인터페이스 폴더)
 ┣ 📂model (DB역할처럼 서버데이터를 저장 혹은 단순한 데이터를 파일단위로 저장하여 클라이언트에서 사용)
 ┃ ┣ 📂json (저장하여 보여줄 json 데이터)
 ┣ 📂pages (페이지를 담당하는 폴더)
 ┃ ┣ 📂api (model의 json파일을 연동하여 api로 작업하는 폴더)
 ┣ 📂services (page/api 에서 작성된 api를 연동하는 함수)
 ┣ 📂styles (global css를 담당)
 ┗ 📂utils (순수함수 혹은 fetch를 담당하는 함수를 작성하는 폴더)

```