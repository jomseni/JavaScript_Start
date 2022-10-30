// 객체 document에서의 html 에서 hello의 이름을 가진 클래스의 h1태그 중 가장 첫 번째 요소를 변수 title이라 지정한다
const title = document.querySelector(".hello h1"); 

console.log(title); // h1태그를 출력한다

title.innerText = "Hello";  //title의 innerText를 수정한다.

console.dir(title); // dir을 통해서 이 h1객체가 사용할 수 있는 메서드들을 볼 수있다.

title.style.color = "blue";  // 객체의 경로를 통해 여러가지 변경을 할 수 있다. 





