// 계산기 만들기! 개체 안에 함수를 추가해서 만들어보기!

const calculator = {
    name : "nico",
    add : function(a,b){
        console.log(a + b);
    },
    
    min : function(a,b){
        console.log(a-b);
    },

    mul : function(a,b){
        console.log(a *b);
    },

    pof : function(a,b){
        console.log(a**b);
    },

    div : function(a,b){
        console.log(a / b);
    }
};

calculator.add(5,1);  //6
calculator.min(4,1);  //3 
calculator.mul(3,2);  // 6
calculator.pof(2,5);  // 32
calculator.div(8,2);   //4