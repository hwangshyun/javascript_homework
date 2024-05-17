window.addEventListener("scroll", function () {
  console.log(scrollY);
});

for (let i = 1; i < 11; i++) {
  // console.log(i)
}

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

setTimeout(function () {
  console.log("3초 후에 출력되는 텍스트지롱");
}, 3000);
