//  querySelector을 사용할 땐 CSS사용 방식이랑 같다  ex ) .클래스명 그 안의 태그  -> 이런모양으로 사용할 수 있다. 그러면 h1태그의 html 코드를 보여준다
//  또한 querySelector 는 조건에 맞는 태그들이 여러 개가 동시에 있을때 가장 첫 번째 요소만 가져온다!

const title = document.querySelector(".hello h1"); //hello클래스안에 h1태그를 가져오와서 title에 대입한다!

console.log(title);   //위에서 정의한 title에 대한 값을  출력한다(콘솔로)


// 클래스의 이름에 맞고 태그와 맞는 모두를 가져오고 싶으면 querySelectorAll을 사용해 모두 가져오면 된다 -> array방식으로 가져올것이다
// console.log(document.querySelectorAll(".hello h1"));

// console.log(title2);

title.innerText = "Hello";

