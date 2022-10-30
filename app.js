const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    // classList.toggle() => toggle은 h1의 classList에 clicked class가 이미 있는지 확인해서 있다면 ,toggle이  clicked를 제거하고 만약 h1의 classList에 clicked가 존재하지 않다면 
    // toggle이 clicked를 classList에 추가해준다.
    h1.classList.toggle("clicked");  
} 
h1.addEventListener("click",handleTitleClick);

