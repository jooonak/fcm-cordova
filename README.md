# FCM-cordova

Firebase의 FCM(Firebase Cloud Messeging)을 구현하기 위한 Client side의 코드

- https://console.firebase.google.com/ 프로젝트 선택 후
    Android 앱에 Firebase 추가 버튼 클릭,
    config.xml의 패키지명 작성하고 닉네임 선택한 후
    구성 파일 다운로드에서 google-services 파일 다운로드 받고
    해당 프로젝트에 추가한다 (뒤에 나오는 부분은 skip)

- index.js에 있는 기존 코드 삭제 후 현재 프로젝트의 코드를 붙여넣는다

- emulator 또는 Test phone과 chrome://inspect를 활용하여
    토큰 발행이 정상적으로 작동하면 client side의 코드는 완료 된다.