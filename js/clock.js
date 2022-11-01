const clock = document.querySelector("#clock");

function sayHello(){
    console.log("hello");
}

//setTimeout 함수는 두 개의 인수를 받는다. 첫 번째 인수는 먼저 호출하려고 하는 function을 넣어주고, 두 번째 인수는 얼마나 기다릴지 ms단위로 넣어주면된다.

setTimeout(sayHello,5000);