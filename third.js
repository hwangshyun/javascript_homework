const counter = document.querySelector("#counter");

let count = Number(counter.textContent)

// console.log(count)
const intervalId = setInterval(()=>{
    console.log("실행중?")
    if (count <5 ) {
        count = count +1 ;
        counter.textContent = count;
    } else {
        counter.textContent = "종료"
        clearInterval(intervalId)
    }
},1000)