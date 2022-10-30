// 키보드 값은 문자이다.
// 키보드 값 문자로 받은 후 parseInt()를 이용하여 정수형으로 변수를 바꿔준 호 age 변수에 대입
const age = parseInt( prompt("How old are you?") );
 

// 1. 숫자를 입력할 경우,숫자 정수가 출력 된다!
// 2. 문자를 입력할 경우, 첫번 째 출력에서 숫자가 아니다!(NaN) 나옴
console.log(age);

 
 


//  입력 값의 타입을 보는 방법! console.log(typeof 변수, typeof 변수)