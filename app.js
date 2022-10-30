// JS를 통해서 HTML element를 가져와서 title 객체로 대입
const title = document.querySelector("div.hello:first-child h1");


//  click event 함수
function handleTitleClick(){
    title.style.color = "blue";
}


//마우스 올려놓으면 event 발생하는 함수
function handleMouseEnter(){
    title.innerText = "Mouse is here!";
}


//
function handleMouseLeave(){
    title.innerText = "Mouse is gone!";
}


// js가 listen하고 있는 event들
// 앞에 event 종류를 써주는 부분은 console.dir(title)에서 찾을 때 on- 으로 시작하는 것들이 event 종류들이다! 거기서 앞에 on을 빼고 적어주면 된다!

title.addEventListener("click",handleTitleClick);           // 누군가 title을 클릭하면 뒤에함수를 실행시켜~
title.addEventListener("mouseenter",handleMouseEnter);      // 누군가 title에 마우스를 올려놓으면 뒤에 함수를 실행시켜라~
title.addEventListener("mouseleave",handleMouseLeave);      // 누군가 title에서 마우스를 멀어지게하면 뒤에 함수를 실행시켜라~


// 전체적인 실행 순서 : JS로 HTML element를 가져오고 가져온 element에 event listener를 추가해줌! 그리고 event가 발생하면 어떤 function를 시켜주면 된다!
// 그리고 addEventListner함수 쪽엔 우리가 실행함수를 버튼을 눌러주지 않아도 된다 => 함수뒤에 ()붙이지않기! Js가 실행해주기 때문이다!
