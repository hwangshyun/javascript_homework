let 방범대 = [
  {
    이름: "철수",
    나이: 19,
    성별: "남자",
  },
  {
    이름: "짱구",
    나이: 24,
    성별: "남자",
  },
  {
    이름: "유리",
    나이: 21,
    성별: "여자",
  },
];

console.log([방범대]);

방범대.forEach((a) => {
  let html = `<div class="guys">
    <h3 class="name">이름: ${a.이름}</h3>
    <div class="age">나이: ${a.나이}</div>
    <div class="gender">성별: ${a.성별}</div>
</div>`;
  document.querySelector(".guys").insertAdjacentHTML("beforeend", html);
});

const 여자를찾아라 = 방범대.find((a) => {
  return a.성별 === "여자";
});

console.log(여자를찾아라);

const 남자를찾아라 = 방범대.filter((a) => {
  return a.성별 === "남자";
});

console.log(남자를찾아라);

const old방범대 = 방범대.map((a) => {
  return {
    이름: a.이름,
    나이: a.나이 + 10,
    성별: a.성별,
  };
});

console.log(old방범대);

const 나이순 = 방범대.sort((a,b)=>{
    return a.나이 - b.나이
})

console.log(나이순);

const user = {
	이름: "병수",
	나이: 20,
	주소: "시골",
};

const {이름,...나머지} = user;
console.log(나머지)