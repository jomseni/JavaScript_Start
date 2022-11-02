const images = ["0.jpeg","1.jpeg","2.jpeg"];

//  명언 만들기와 같은 코드
const chosenImage = images[Math.floor(Math.random()* images.length)];


// 여태까진 html에서 태그를 만들고 그것을  JS파일에서 끌어와서 객체로 만들어 사용만 해봤지 JS에서 만들고 HTML파일로 넣어 사용해 본 적이없다.
// 이번엔 JS에서 만들어 HTML에 넣어 주는 방법으로 해 볼 것이다.
//  우리의 목표는 JS에서 코드를 작성해 HTML에 images를 만드는 것이다. 왜냐하면 이미지를 랜덤으로 추가하기 위해선 JS가 필요하기 때문(HTML에선 정해진 이미지만 출력할 수 있는 코드를 작성할 수 있다.)
const bgImage = document.createElement("img");
// 문자열 만들기
bgImage.src = `img/${chosenImage}`;  //이건 HTML에서 <img src="img/파일"> 과 같은 코드이다.
//이렇게 작성후 F12 콘솔을 보면 HTML에서 img 태그가 만들어진걸 볼 수 있다.  HTML의 img를 JavaScript로 만들기! 여기 까지 작성한건 document에 아직 존재하지 않고 JS에만 존재하는것 이것을 document의 body에 넣어줘야한다!


//js에서 만든 img태그를 document의 body에 넣어주기!
document.body.appendChild(bgImage);




