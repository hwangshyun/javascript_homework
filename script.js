//1번

const containers = document.querySelectorAll("#container");
const boxs = document.querySelectorAll(".box");

for (let i = 0; i < boxs.length; i++) {
  boxs[i].addEventListener("click", function () {
    if (boxs[i].classList.contains("clicked")) {
      boxs[i].classList.remove("clicked");
    } else {
      boxs[i].classList.add("clicked");
    }
  });
}

//2번

function getSquare(number) {
  // number의 제곱을 계산하여 반환하는 함수를 작성하세요.
  return Math.pow(number, 2);
  // return number*number;
  // return number**2;
}

const result = getSquare(5);
console.log(result); // 25 출력 (5의 제곱)
