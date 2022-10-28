//  개체 만들기(object)
//  단순하게 변수나 배열을 이용할 경우에 표현이 너무 복잡하거나 배열안의 요소에 대해 그 값이 무엇을 의미하는지
// 설명이필요할 경우가 있기 때문이다!

const player = {
    name : "park",
    points : 10,
    fat : true,
};

// console도 개체라는 것을 알 수 있고, 그 뒤의 log는 개체 안에 들어있는 값이라는 것을 알 수있다.
console.log(player);
console.log(player.name);

// 객체의 값을 바꿔줄 수 있다
player.fat = false;

console.log(player);

// const는 수정이 안된다 했었는데 왜 가능할까?
// const안의 값은 수정이가능하다! 그러나 const player의 player 전체의 의미를 바꾸는건 오류가 발생!
//  예를들면 player = false 이런식으로 수정을 하면 오류가 발생 한다!


// 개체안에 값을 추가하는 방법!
player.lastName = "potato";

// 값을 추가 하여 수정하는 것도 가능하다!
player.points = player.points + 15;

console.log(player);
