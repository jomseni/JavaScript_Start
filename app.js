// if- else는 조건이 하나일 경우이고, 여러 조건을 따질땐 if-else if -else를 사용하여 조건문을 작성할 수 있다.
const age = parseInt(prompt("How old are you?"));

//  ||는 OR연산자로서 두 조건 중 하나만 true 값을 만족하면 if문을 수행한다!
if(isNaN(age) || age < 0 ){ 
    console.log("Please write a real positive number"); // 입력 값이 문자일 경우
}else if(age < 18){
    console.log("You are too young!");
}else if(age >= 18 && age <= 50){   // &&연산자는 AND 연산자로서 두 조건에 모두 true여야만 수행한다
    console.log("You can drink!");
}else if(age >= 50 && age <=80){
    console.log("You should exercise!");
}else if(age > 80){
    console.log("You can do whatever you want");
}

// 음주 가능 계산기!