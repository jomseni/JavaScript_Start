const clock = document.querySelector("#clock");

function sayHello(){
    console.log("hello");
}

// setInterval 함수는 매 몇 초 마다 실행문을 실행 하게하는 함수이다.
// setInterval은 두 개의 인수를 받는다. 첫 번째 인수는 실행하고자 하는 function이며, 두 번째 인수는 호출되는 function 간격을 몇 ms로 할 지 작성
setInterval(sayHello, 5000);