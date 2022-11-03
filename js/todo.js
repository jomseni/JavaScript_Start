const toDoForm = document.getElementById("todo-form");
// const toDoInput = document.querySelector("#todo-form input"); 아래 코드와 같다.
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

// 두 번 이상 사용되므로 const 변수로 바꾸어 오타를 줄여 준다.
const TODOS_KEY = "todos"

// 저장을 위해 배열을 만든다.
// 그리고 이제 newTodo가 그려질 때마다 그 텍스트를 array에 push 할 것이다! 따라서 toDos 배열을 가지고 와서 newTodo를 push 할 것이다.
let toDos = [];   // toDos를 실행할 때 마다 초기화하는게 아니라 입력한 값을 넣고 새로고침 하여도 누적이 되도록 const 에서 let으로 바꿔준다.

function saveToDos(){
    // 배열에 저장된 값을 그냥 저장하면 문자로 저장되지만 함수 JSON.stringify()를 이용하면 배열의 형태로 저장 된다.
    // setItem의 앞 인수는 저장소의 key값을 말하고 뒤 인수는 값이다!
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}


// element(요소) = 태그 


// form 태그는 전에도 했듯이 submit 이벤트를 가진다 따라서 기본 동작을 막아줘야한다.
//  아하 그래서 지금 여기까지 form과 list만 만들고 실행 해보면 todolist칸에 뭘 작성하고 엔터를 누르면 새로고침이 되는구나!!!!!(todolist부분에 작성한게 그냥 깜빡거리고 없어진다)

function handleToDoSubmit(event){  // 실질적으로 이 함수가 데이터 저장시켜 줌, paintToDo는 화면에 보여주기 위한 함수
    event.preventDefault(); // 이거까지만 작성하고 todolit부분에 문자를 작성하고 엔터를 누르면 새로고침이 되지않는다(깜빡거리지않아). 왜냐면 이 함수는 기본동작을 막아주고 있기 때문이다!
    // toDoInput.value 즉 입력값을 newTodo에 저장한 후 toDoInput.value 입력 값을 비워준다
    const newTodo = toDoInput.value; // 입력 값을 const newTodo 에 저장!
    // const 변수에 입력 값을 저장 해 놓았으므로 이 코드 다음엔 input의 value를 가지고 무얼 하든 newToDo에는 아무 영향이 없다.
    toDoInput.value = ""; //그리고 input 값을 빈 칸으로만들어
    // console.log(newTodo, toDoList.value);  //여기서 이걸 출력하면 newTodo는 const이므로 아까 입력 값이 그대로 출력되고, toDoList.value의 값은 위 코드에서 공백으로 대입해줬으니 공백이 출력 된다.
    // toDos.push(newTodo);  // toDos 배열을 가지고 와서 newTodo(text)를 push 할 것이다.

    // 이젠 text를 push 하는 것이 아니라 고유 ID와 text를 모두 필요로 하기 때문에(toDo를 하나하나 구분해서 찾기 위해) 객체를 이용하여 push할 것이다.
    const newTodoObj = {
        text : newTodo,
        id : Date.now(),
    };
    toDos.push(newTodoObj)
    paintToDo(newTodoObj);
    saveToDos(); //toDo리스트 만든 후 저장
}

// toDo를 그리는 역할을 해주는 함수를 만들어 준다.(HTML에 만들어 주기) 브라우저 화면 우리가 입력한 값들을 눈으로 보여주는 함수
function paintToDo(newTodo){
    // background 에서 JS로 HTML을 만들어 body에 넣어준 것처럼 li를 만들어 줄 것이다!
    // 앞 li는 변수 명, 뒤에 ""안에 있는 li는 태그 이다.
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    // span을 만들고 span에 쓰여질 입력 값 newTodo를 span.innertext에 넣어 줌!
    span.innerText = newTodo.text; // 입력 값이 저장된 newTodo가 이제 span의 innertext 가 된 것! 아그리고 span을 사용 이유는 이후에 옆에 버튼을 만들것이기 때문인다 div로 만들면 한 라인을 다차지하므로 인 라인 방식이 아닌 블럭 방식인 span을 사용한 것이다!
    const button = document.createElement("button");
    // 이렇게 변수 명만 만들었을땐 아직 이 요소들이 어디안에 위치 해있는지 알수 없고 변수만 만든 것!이제 아래코드를 추가해서 태그의 위치를 HTML에서 배치시켜보자
    button.innerText ="❌";
    
    // 버튼을 눌렀을 때 어떠한 반응을 만드는것? 바로 이벤트리스너!!!! 만들어준다. 지금은 버튼을 만들기만 해서 아무 반응이 없음
    button.addEventListener("click",delteToDo)
    
    // 항상 appendChild는 맨 마지막에 작성되어야한다! 과정을 생각해보면 당연하다! 변수 만들기 -> 이름 적어주기 -> 위치 배치 이 부분을 작성해야 HTML이 작성되면서 브라우저에 표시 된다.
    li.appendChild(span); // li는 이제 span이라는 자식을 가지게 되었다. HTML에 위치를 배치시킨다
    li.appendChild(button); //li는  button이라는 자식을 가짐. 이 코드를 작성해줘야 HTML에 위치 한다.그 전엔 변수만 생성 F12에도 element부분에 출력되지 않음
    toDoList.appendChild(li); //ul의 자식으로 li를 만들어 줆  이 코드를 작성해줘야 HTML에 위치에 맞게 들어간다.

}

// 버튼 이벤트리스너 인수에 들어 갈 delete 함수를 정의해준다.
// event가 addEventListener함수의 첫 번째 인수인 어떤 이벤트 인지 말해준다고 이해해도 괜찮을듯! 
// 여기선 따라서 event = click이 들어온다! 이렇게 생각!
// 버튼 클릭 이벤트에선 button이 가지고 있는 property , 즉 사용 가능한 함수 중에 parentElement나 parentNode 가 있고 이것의 뒤에 innertext를 추가하고 실행하여 , console 해보면 클릭 된게 어떠한 버튼인지 알 수 있다.  
function delteToDo(event){
    // console.log(event.target.parentElement.innerText); 눌린 버튼의 정확한 위치를 알 수 있는 코드
    // 매우중요한 개념!!!!! ==> target은 클릭 된 HTML element이며, 그리고 모든 HTML element에는 하나 이상의 property가 있다. parentElement는 클릭 된 element의 부모이다. 즉 여기서 button의 부모는 li를 지칭!
    const li  = event.target.parentElement;  // 삭제하고 싶은 li
    li.remove(); // li를 지운다
}

// 배열로 만들어진 parsedToDos의 각각 인덱스에 function을 각각 넣어준다. 아래 코드 parsedToDos.forEach((item) => console.log("this is the turn of ", item));과 동일하다. 난 후자의 방법을 선택
// function sayHello(item){       이 라인 코드에서 item은 리스너에서 event처럼 그냥 들어가면 되는 인수이다. item은 배열의 각각의 요소 이다
//     console.log(`this is the turn of ${item}`);
// }


// toDoForm 객체를 submit(엔터나 클릭(event)) 하면 handleToDoSubmit함수를 JS가 실행한다. 개발한 사용자가 실행시키는 것이 아니다!
toDoForm.addEventListener("submit",handleToDoSubmit);

// localStorage에 있는 key값이 "todos"인 string으로 된 값을 getItem함수를 통해  array로 가져와서 그 배열을 이름이 savedToDos인 객체로 만들어 준다!
const savedToDos = localStorage.getItem(TODOS_KEY);
// console.log(savedToDos);  여기서 로그 찍을 경우 string형태로 나옴. 아직 JSON.parse롤 배열로 안바꿔주었기 때문
if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;                        // 이전에 저장 되어 있던 데이터를 toDos로 대입하여 누적시킨다.
    
    // console.log(parsedToDos); 여기서 로그 찍으면 이젠 아까의 문자들이 배열로 찍힌다. 이제 배열의 각각 item으로 이용 가능하게 해준다. JS는 array에 있는 각각의 item에 대해 function을 실행할 수 있게 해준다.
    // forEach 함수는 그 array에 있는 각각의 item의 각각 function을 설명한다.
    parsedToDos.forEach(paintToDo); // 저장소에서 가져온 배열로 만들어진 parsedToDos의 각각 아이템에 대해 function을 넣어준다. HTML을 그려주게 됨 따라서 새로 고침을 해도 painToDo를 통해서 HTML이 localstorage에 있는 데이터와 같게 출력 된다.

}

 