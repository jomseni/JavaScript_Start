// 배열 만들기(배열안의 객체들은 string으로 된 명언을 가지고 있음)
const quotes = [
    {
        quote : "No pain, No gain",
        author : "Benjamin Franklin",
    },
    {
        quote : "Don't dream, Be it",
        author : "Tim curry",
    },
    {
        quote : "Seeing is beliving",
        author : "Thomas Fuller",
    },
    {
        quote : "The will of man is his happiness",
        author : "Friedrich voon schiller",
    },
    {
        quote : "When in doubt, choose change",
        author : "Lily Leung",
    },
    {
        quote : "Life is unfair,get used to it",
        author : "Bill gatez",
    },
    {
        quote : "It is not length of life, But depth of life",
        author : "Ralph waldo Emerson",
    },
    {
        quote : "Time is flying never to return",
        quthor : "Virgil",
    },
    {
        qutoe : "I find the harder I work, the more luck I have",
        author : "Thomas Jefferson",
    },
    {
        quote : "United we stand, divided we fail",
        author : "John Dickinson",
    }
]

// id값이 quote인 태그 하위의 첫 번째 span태그 가져와서 quote 객체 만들기
const quote = document.querySelector("#quote span:first-child");
// id 값이 quote인 태그 하위의 두 번째 span 태그 가져와서 author 객체 만들기
const author = document.querySelector("#quote span:last-child");


// JS에 있는 숫자를 무작위로 가져오는 함수를 사용 Math.random()  => 이 함수는 0부터 1사이의 숫자를 무작위로 가져옴
// 그리고 그 값을 10을 곱해 1의 자리를 만들어 준 후 round()함수를 통해 정수부분만 가져온다(0부터 10사이의 숫자를 가져온다.)
// round()함수는 반올림, ceil()함수는 올림 , floor()함수는 내림

// console.log(quotes[Math.floor(Math.random() * 10)]);

// 10으로 넣으면 10개일 경우에만 우리가 원하는대로 적용 되므로 10 대신에 배열의 길이로 바꿔준다
// 그 후에 무작위로 나오는 명언들을 객체로 만들어 준다.
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

// span 태그 quote, author에 글자를 넣어주기 (.innerText)
// 랜덤으로 나오는 객체의 명언과, 작가 이름 출력
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

