// JS를 통해서 HTML element를 가져와서 h1 객체로 대입
const h1 = document.querySelector("div.hello:first-child h1");


//  click event 함수
function handleTitleClick(){
    h1.style.color = "blue";
}


//마우스 올려놓으면 event 발생하는 함수
function handleMouseEnter(){
    h1.innerText = "Mouse is here!";
}


//
function handleMouseLeave(){
    h1.innerText = "Mouse is gone!";
}

function handleWindowResize(){
    document.body.style.backgroundColor = "tomato"; // html = document
}

function handleWindowCopy(){
    alert("copier!");
}

function handleWindowOffLine(){
    alert("SOS no WIFI");
}

function handleWindowOnLine(){
    alert("ALL GOOD!")
}



// 이번엔 다른 방법으로 event를 실행시키는 코드이다!
// 그러나 전 addEventListener()방법을 더 선호한다. 왜냐하면 나중에 removeEventListener를 통해서 event listner를 제거할 수 있기 때문이다!

// h1.onclick = handleTitleClick;          // 누군가 h1을 클릭하면 뒤에함수를 실행시켜~
// h1.onmouseenter = handleMouseEnter;      // 누군가 h1에 마우스를 올려놓으면 뒤에 함수를 실행시켜라~
// h1.onmouseleave = handleMouseLeave;      // 누군가 h1에서 마우스를 멀어지게하면 뒤에 함수를 실행시켜라~

h1.addEventListener("click",handleTitleClick);
h1.addEventListener("mouseenter",handleMouseEnter);
h1.addEventListener("mouseleave",handleMouseLeave);

//  document 처럼 window도 기본적으로 지원해주는 객체이다
// window 함수도 어쨌든 이벤트함수를 만들어주는 방법은 똑같다!
window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy",handleWindowCopy);
window.addEventListener("offline", handleWindowOffLine);
window.addEventListener("online", handleWindowOnLine);

