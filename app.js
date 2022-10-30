//  개체를 만들고 개체가 함수를 수행하는 것을 만들어 볼 것이다!
//  예를들면 console.log()와 동일한 모양의 코드!


// 개체만들기
const player = {
    name : "nico",
    // sayHello라는 player안의 함수를 부르기위해 개체 생성 안에 함수를 정의 및 생성해준다.
    sayHello : function(otherPersonName){ // 아래에서 보낸 데이터를 받아서 함수 실행문 실행!
        console.log("hello!" + otherPersonName + " nice to meet you");
    }
};

console.log(player.name);
player.sayHello("lynn");  //데이터(argument)를 보내서 함수가 매개변수(parameter)로 데이터로 받아 함수를 수행