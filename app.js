//만약 querySelector()을 사용 할 경우 querySelector("#login-form") 이렇게 상세하게 써줘야함 
// 그러나 getElementById는 Js에서 ID를 찾는 줄 알기 때문에 따로 #을 안써도 됨 . 그러나 하위 태그를 연결하여 사용하기 위해서 쿼리셀렉터를 많이 사용한다
// const loginForm = document.getElementById("login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");


const loginForm = document.querySelector("#login-form")  //HTML의 form 태그를 끌고와서 변수를 객체로 만듦
const loginInput = document.querySelector("#login-form input");               //괄호 안은  ID값의 (공백) 하위 선택자(input)로서 하위에 있는 것을 나타내는 것 : 결론적으로 input이 중요
const greeting = document.querySelector("#greeting");
const link = document.querySelector("a");  //HTML의 a태그를 가져와서 객체로 만듦
 
// hidden이라는 클래스명을 두 번이상 사용하기 때문에 작성 해 준다. 오타 방지용!
const HIDDEN_CLASSNAME = "hidden";

// submit 이벤트를 감지하면 발생하는 행동의 함수이다. submit은 엔터를 누르거나 버튼을 클릭할 때 발생함
function onLoginSubmit(event){

    // preventDefault 함수는 어떤 event의 기본 행동이 발생하지 않도록 막는 것이다. 따라서 form input을 submit시에 브라우저의 기본 행동인 새로고침을 막을 수 있다.
    event.preventDefault();
    // loginForm 객체에  없는 클래스라면 추가 해주라는 코드 이다!
    // loginInput의 값을 변수에 저장
    const username = loginInput.value;

    // 이벤트 함수 수행 시에 input에 입력되는 값을 DB에 저장한다.  
    // 매개변수 앞의 username은 저장될 아이템의 이름이고, 뒤의 username은 우리가  키보드 입력 값으로 받아 올 변수이다.
    localStorage.setItem("username", username);

    // classList를 통해서 클래스를 없으면 만들어주고, 이미 있는 것은 지워준다. 그러면 submit하면 HTML태그에 변화가 생긴다.
    loginForm.classList.add(HIDDEN_CLASSNAME);

    //greeting.innerText = "Hello " + username; 문자열 합치기엔 이 방법도 있지만
    // 이 방법이 조금 더 많이 사용되니깐 이 방법으로 사용하자 ,string과 변수를 합치는 방법!!! 변수를 String안에 포함시키는 방법이다
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    
}

// 누군가 form을 submit하면 JS가 이 함수를 호출 하도록 하고 있는 것! JS에게 이 정보를 넘기는 것과 같다
loginForm.addEventListener("submit",onLoginSubmit);



 