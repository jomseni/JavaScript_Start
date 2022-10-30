const age = 96;
function calculatorKrAge(ageOfForeigner){
    
    // return을 사용해주면 이 함수를 실행 후  실행문의 값을 return하여 그 함수 결과값을 변수에 저장할 수 있다.
    return ageOfForeigner + 2;
}

const krAge = calculatorKrAge(age);  // 함수 호출 한 자리에 값이 대체되어진다 따라서 krAge = 98이 된다

console.log(krAge); //98 출력