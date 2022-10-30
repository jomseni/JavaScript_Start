//만약 querySelector()을 사용 할 경우 querySelector("#login-form") 이렇게 상세하게 써줘야함 
// 그러나 getElementById는 Js에서 ID를 찾는 줄 알기 때문에 따로 #을 안써도 됨
// const loginForm = document.getElementById("login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

const loginInput = document.querySelector("#login-form input");               //괄호 안은  ID값의 (공백) 하위 선택자(input)로서 하위에 있는 것을 나타내는 것 : 결론적으로 input이 중요
const loginButton = document.querySelector("#login-form button");               //loginInput과 loginButton도 object(객체)이다!

//클릭 이벤트 연결 (버튼을 누르면 칸에 작성한걸 추후엔 데이터 저장도 가능하게 하기 위해서!)
function onLoginBtnClick(){
    console.log("hello",loginInput.value);
}


loginButton.addEventListener("click",onLoginBtnClick);