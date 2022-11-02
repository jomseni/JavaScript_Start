const toDoForm = document.getElementById("todo-form");
// const toDoInput = document.querySelector("#todo-form input"); 아래 코드와 같다.
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

// form 태그는 전에도 했듯이 submit 이벤트를 가진다 따라서 기본 동작을 막아줘야한다.
//  아하 그래서 지금 여기까지 form과 list만 만들고 실행 해보면 todolist칸에 뭘 작성하고 엔터를 누르면 새로고침이 되는구나!!!!!(todolist부분에 작성한게 그냥 깜빡거리고 없어진다)


function handleToDoSubmit(event){
    event.preventDefault(); // 이거까지만 작성하고 todolit부분에 문자를 작성하고 엔터를 누르면 새로고침이 되지않는다(깜빡거리지않아). 왜냐면 이함수는 기본동작을 막아주고 있기 때문이다!
    // toDoInput.value 즉 입력값을 newTodo에 저장한 후 toDoInput.value 입력 값을 비워준다
    const newTodo = toDoInput.value; // 입력 값을 const newTodo 에 저장!
    // const 변수에 입력 값을 저장 해 놓았으므로 이 코드 다음엔 input의 value를 가지고 무얼 하든 newToDo에는 아무 영향이 없다.
    toDoInput.value = ""; //그리고 input 값을 빈 칸으로만들어
    console.log(newTodo, toDoList.value);  //여기서 이걸 출력하면 newTodo는 const이므로 아까 입력 값이 그대로 출력되고, toDoList.value의 값은 위 코드에서 공백으로 대입해줬으니 공백이 출력 된다.
}

// toDoForm 객체를 submit(엔터나 클릭(event)) 하면 handleToDoSubmit함수를 JS가 실행한다. 개발한 사용자가 실행시키는 것이 아니다!
toDoForm.addEventListener("submit",handleToDoSubmit);