//  NaN (Not a Number) ==> 숫자가 아니다!

const age = parseInt(prompt("How old are you?"));


// 키보드의 입력 값을 age로 받아 이 입력 값이 NaN인지 판별할 수 있는 것을 배울 것이다!
// isNaN() 함수를 통해 그것을 판별할 수 있고 반환 값은 boolean값인 true 와 false로 반환 될 것이다
//  false = 숫자, true => 숫자가 아닌 다른 타입! 왜냐하면 NaN은 Not  a Number 이므로!


//15  입력 시에 false , '문자' 입력 시에 => true  출력!
console.log(isNaN(age));


// if 문의 조건은 boolean 형식으로 반환되어야 한다.
// isNaN()함수가 참이면 if 문 수행, false 이면 else 문 수행!
if(isNaN(age)){
//  condition == true
console.log("Please write a number!!!");
}else{
// condition == false
    console.log("Thank you for writing you age!");
}