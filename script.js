const user = {
  이름: "병수",
  나이: 20,
  주소: "시골",
};

localStorage.setItem("user", JSON.stringify(user));

const userlocarStorage = localStorage.getItem("user");

console.log(userlocarStorage);

const userData = JSON.parse(userlocarStorage);

userData.나이 = 30;

localStorage.setItem("user", JSON.stringify(userData));

console.log(userData);

localStorage.removeItem("user");

const userDataremove = localStorage.getItem("user");
console.log(userDataremove);

const apiAdress = "https://jsonplaceholder.typicode.com/posts";

fetch(apiAdress)
  .then((response) => response.json())
  .then((posts) => {
    posts.forEach((post) => {
      console.log(
        `제목: ${post.title}, 작성자 ID: ${post.userId}, 내용: ${post.body}`
      );
    });
  });
