
////  HTML의 요소를 JavaScript로 가져오기!
const title = document.querySelector("div.hello:first-child h1");   // <h1>content</h1> 을 가져온다 

//envent를 listen하는 방법!



//누군가가 tite을 click 했을 때 수행할 행동을 정의하기 위한 함수 생성
function handleTitleClick(){
    title.style.color = "blue";
}

//js에서 title을 지켜보다가 누군가가 title을 click하는 것을 listen할 것이다
//event가 발생하면 실행 할 함수를 js가 실행 해준다
title.addEventListener("click",handleTitleClick);

//
// handleTitleClick();  () 괄호는 실행버튼을 누른다! 라고 해석하면 편한다! 여기선 내가 직접 실행버튼을 누르는게 아니라 click이 감지되면 js가 대신 클릭을 해주는 것을 원한다!
