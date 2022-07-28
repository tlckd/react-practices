# React Practices - Integration(개발통합환경)
## emaillist
    - 개발통합 환경 설정(with Spring Boot BE)
    - Backend: APIs (jar 배포 jar배포가 의미가 있음 그래야 클라우드에서 좋음 war로할거면 그냥 mysite05 정도가 좋음, 버추얼 머신 자동으로 동적으로 만들어짐 톰캣 설치할 시간 절약하는거 가능, war 배포는 온파리미스 같은데서 가능, 실제에는 도커에 jar하나해서 하나의 이미지로 만들어서 버추얼박스에 보내서 실행시키는 방식 ㅇㅇ 빌드가 도커이미지 만드는거 금방금방 올릴 수 있게) 
    - Frontend React(SPA)
    - AJAX: fetch API  
  
#### Configuration
1. Application(Product) 구조 
    <pre>
        /emaillist  프로젝트도 이런식으로 만들어야함 
        |---- /backend (이클립스)  최종 산출물 이메일리스트 jar 이부분   이거 빌드해서 만드는거 
                |---- src
                 |---- pom.xml 두개 설정만 다르지 구조는 동일함 그래들이랑 메이븐 ㅇㅇ 메이븐은 빌드해서 나오는거 이름 타겟 그래들은 빌드 설정파일은 다른데 소스는 같다 그래서 같이 써도됨 라이브러리 저장하는 위치도 같음 표현만 다른거  
        |---- /frontend (리액트) 리액트에서 최종산출물은 main.js 백엔드 src에 옮겨놔야함 이거는 웹팩이 만드니깐 웹팩에다가 설정해줘야함 main.js를 만드는데 아웃풋을 다른데로 하게 ㅇㅇ 기본 public으로 되어있음 path: path.resolve('public') 이거 메모장에 밑에 필기해둘게 
            -- 바벨 콘피그 json 
            -- 웹팩 콘피그 js  -> 예전에 했던거임 ㅇㅇ  
            -- 
            수업시간에 배운거랑 크리에이트 리액트 앱 두개다 사용가능 걍 수업시간에 배운거 ㄱ
            프로젝트는 gcp 셋팅다끝난다음에 html 만들어놓고 그 다음에 컴포넌트로 변환 관리자 페이지 이런거 만들어놓기 ㅇㅇ 그다음에 점진적 개발 
            라우터라는거 배워야함 우리조는 테스트 프로젝트 만들기 
            백엔드 채팅엔진 api 프론트는 간단하게 채팅화면 만들기 이메일리스트처럼 
            기술 만들고 작은 프로젝트에서 테스트하고 본 프로젝트에 적용 이런식으로 덩어리를 나눠서 해야함 
            작은 테스트 프로젝트에서 테스트한다음에 커다란데 적용 ㅇㅇ 꼭 해보기 

            /public 
                favicon.ico
                index.html 
            
            /src 
                assets   -> 모듈프로젝트 정형화한데로 ㄱㄱ 메이븐은 정형화되어 있는데 리액트는 자유긴한데 국룰대로 ㄱㄱ 
                    css 
                    scss
                    images 

                component
                store  -> state 가 스토어로 넘어옴 리덕스 쓸떄 ㅇㅇ 상태를 중앙으로 모아서 리덕스가 관리함 부모 상태컴포넌트에 다 올려서 하는게 아니라 
                util 
                npm 프로젝트라서 노드 모듈스 있음 ㅇㅇ 
            /node_modules 
            package.json
            package-lock.json 

       


            



    </pre>
2. webpack configuration 웹팩설정 전에꺼 참조 
3. babel 설정 이것도 전에꺼 ㅇㅇ 
4. package.json 에 배포를 위한 설정 debug start 이런거 ㅇㅇ 
5. concurrently 자바랑 노드 한쪽을 감시하고 있다가 한쪽이 바뀌면 다시실행하는거 웹팩을 고치면 자바쪽도 다시 실행하는거 ㅇㅇ 백엔드 고쳐지면 프론트엔드도 다시 시작 프론트 고쳐져도 백엔드 다시시작 ㅇㅇ (옵션느낌) 지금은 필요없다고함 부트도 라이브로딩 되니깐 ㅇㅇ 

