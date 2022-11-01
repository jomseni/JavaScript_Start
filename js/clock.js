const clock = document.querySelector("#clock");

function getClock(){

    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours} : ${minutes} : ${seconds}`;
}

// 함수를 이렇게 바로 적어버리면 함수가 바로 실행되는 버튼을 설정해준것과 같다. 왜냐하면 ()이것을 사용하면 함수를 바로 실행하게 하기 때문이다!
// 이것을 적지 않으면 처음에 00:00 이었다가 1초 후에 setInterval함수가 실행된다.
getClock();
// 매 1초마다 getClock 함수 실행 이것만 적으면 1초 있다가 콘솔이 찍힘, 브라우저가 켜지자마자 시간이 바로 찍히게 하기위해 위에 코드를 작성해준다.
setInterval(getClock, 1000);

 