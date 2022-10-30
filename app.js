// JS를 통해서 HTML element를 가져와서 h1 객체로 대입
const h1 = document.querySelector("div.hello:first-child h1");
//  click event 함수
function handleTitleClick(){
    const currentColor = h1.style.color;
    let newColor;
    if(currentColor === "blue"){  //if문의 조건에 들어가는거니깐 ===(3개) 일치연산자
        newColor = "tomato";  //대입연산자 = 하나
    }else{
        newColor = "blue";
    }
    h1.style.color = newColor;
}
h1.addEventListener("click",handleTitleClick);


