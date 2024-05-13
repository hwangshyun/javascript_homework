document.querySelector(".btn").addEventListener("click", function() {
    document.querySelector(".title").textContent = "제목아니다";
});


const num1 = 2;
const num2 = 4;

let sum = num1 + num2;

console.log(sum);



function isEvenOrOdd() {
    let num = 3;
    if (num%2 === 0) {
        return "짝수입니다"
    } else {
        return "홀수입니다"
    };
};

console.log(isEvenOrOdd())

let name = "승현";
let age = 3;

console.log("이름:",name)
console.log("나이:",age)