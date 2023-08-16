//getElementsByTagName,getElementsByClassName,getElementById

const allTitles = document.getElementsByTagName("h1");
console.log(allTitles);

for (const ele of allTitles) {
  console.log(ele);
}

for (let i = 0; i < allTitles.length; i++) {
  console.log(allTitles[i]);
}

const byClass = document.getElementsByClassName("title");
console.log(byClass);

let firstTitle = document.getElementById("first-title");
console.log(firstTitle);

//querySelector
let firstTitle1 = document.querySelector("h1"); // select the first available h1 element
let firstTitle2 = document.querySelector("#first-title"); // select id with first-title
let firstTitle3 = document.querySelector(".title"); // select the first available element with class title

//querySelectorAll

let titleArr = document.querySelectorAll(".title");
console.log(titleArr);

console.log(allTitles.length); // 3
titleArr.forEach((elem) => console.log(elem));

// Adding attribute
const titles = document.querySelectorAll("h1");
console.log(titles);
titles[3].id = "fourth-title";
titles[3].className = "title";
console.log(titles);

//Adding classes
titles[3].classList.add("background-color", "header-title");
console.log(titles);

//removing classes
titles[3].classList.remove("background-color");
console.log(titles);

// Adding Text to HTML element
// An HTML is a build block of an opening tag, a closing tag and a text content.
//  We can add a text content using the property textContent or *innerHTML.

const titlesz = document.querySelectorAll("h1");
titlesz[3].textContent = "Fourth Title";
titlesz[3].innerHTML = "Fourth Titless";

// Inner HTML
// We use innerHTML property when we like to replace or a completely
// new children content to a parent element. It value we assign is going to be a string
//  of HTML elements.

const ul = document.querySelector("ul");
const lists = `<li>Home</li>
<li>About</li>
<li>Contactus</li>`;

ul.innerHTML = lists;

//remove child
// he innerHTML property can allow us also to remove all the children
//  of a parent element. Instead of using removeChild() I would recommend the following method.
ul.innerHTML = "";

titles.forEach((title, i) => {
  title.style.fontSize = "24px";
  if (i % 2 === 0) {
    title.style.color = "green";
    title.style.backgroundColor='cyan'
} else {
    title.style.color = "red";
    title.style.backgroundColor='black'
  }
});
