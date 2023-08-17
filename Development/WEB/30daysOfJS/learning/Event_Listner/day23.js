const button = document.querySelector("button");

button.addEventListener("click", (e) => {
  console.log("e is the event listner object", e);
  console.log("e.target is the selected item", e.target);

  console.log(
    "e.target.textContent is text content of the selected item",
    e.target.textContent
  );
});

const clickMe = () => {
  console.log("clicked annother buuton");
};

const dbClick = document.querySelector(".doubleClick");
dbClick.addEventListener("dblclick", (e) => {
  console.log("e gives the event listener object:", e);
  console.log("e.target gives the selected element: ", e.target);
  console.log(
    "e.target.textContent gives content of selected element: ",
    e.target.textContent
  );
});
const mouseEnter = document.querySelector("input");

const div = document.querySelector(".textDiv");
mouseEnter.addEventListener("blur", (e) => {
  console.log("e gives the event listener object:", e);
  console.log("e.target gives the selected element: ", e.keyCode);
  console.log(
    "e.target.textContent gives content of selected element: ",
    e.target.textContent
  );

  if (e.target.value.length < 10) {
    console.log("Entered string should be greater than 10");
  }
  div.textContent = e.target.value;
});

const keyDiv = document.querySelector(".keyDiv");

document.body.addEventListener("keypress", (e) => {
  keyDiv.textContent = e.key;
});

const height = document.querySelector("#height");
const width = document.querySelector("#width");
const calc = document.querySelector(".calc");

let area;
calc.addEventListener("click", (e) => {
  area = height.value * width.value;
  alert(area);
});

const passwords = document.querySelector(".inputPass")
console.log(passwords)
const p = document.querySelector("p");
console.log(p)
passwords.addEventListener("blur",e=>{

  if(e.target.value.length===0){

    p.textContent="This field is required"
    p.style.color='red'
  }else{
    p.textContent=""
  }
})