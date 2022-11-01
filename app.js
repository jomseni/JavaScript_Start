//만약 querySelector()을 사용 할 경우 querySelector("#login-form") 이렇게 상세하게 써줘야함 
// 그러나 getElementById는 Js에서 ID를 찾는 줄 알기 때문에 따로 #을 안써도 됨 . 그러나 하위 태그를 연결하여 사용하기 위해서 쿼리셀렉터를 많이 사용한다
// const loginForm = document.getElementById("login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");


const loginForm = document.querySelector("#login-form")  //HTML의 form 태그를 끌고와서 객체로 만듦
const loginInput = document.querySelector("#login-form input");               //괄호 안은  ID값의 (공백) 하위 선택자(input)로서 하위에 있는 것을 나타내는 것 : 결론적으로 input이 중요


// submit 이벤트를 감지하면 발생하는 행동의 함수이다. submit은 엔터를 누르거나 버튼을 클릭할 때 발생함
function onLoginSubmit(event){

    // preventDefault 함수는 어떤 event의 기본 행동이 발생하지 않도록 막는 것이다. 따라서 form input을 submit시에 브라우저의 기본 행동인 새로고침을 막을 수 있다.
    event.preventDefault();
    // 인수를 넣고 이 이벤트에 대한 정보들을 가져올 수 있다.
    console.log(loginInput.value);
}

// 누군가 form을 submit하면 JS가 이 함수를 호출 하도록 하고 있는 것! JS에게 이 정보를 넘기는 것과 같다
loginForm.addEventListener("submit",onLoginSubmit);


 