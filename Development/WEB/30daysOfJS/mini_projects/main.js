// Develop the following application, use the following HTML
// elements to get started with. You will get the same code on starter
// folder. Apply all the styles and functionality using JavaScript only.

// The year color is changing every 1 second
// The date and time background color is changing every on seconds
// Completed challenge has background green
// Ongoing challenge has background yellow
// Coming challenges have background red
// Get the year element
const year = document.querySelector("#year");
const p = document.querySelector("p");
const challenges = document.querySelector("ul").getElementsByTagName("li");

function randomColorGen() {
  const characters = "0123456789ABCDEF";
  const len = characters.length;
  let hexCode = "#";
  for (let i = 0; i < 6; i++) {
    hexCode += characters[Math.floor(Math.random() * len)];
  }
  return hexCode;
}

function changeYearColor() {
  setInterval(() => {
    year.style.color = `${randomColorGen()}`;
  }, 1000);
}
function changeDateColor() {
  setInterval(() => {
    p.style.backgroundColor = `${randomColorGen()}`;
  }, 1000);
}

function addDate() {
  const date = new Date().toLocaleString();
  p.innerHTML = date;
}

function changeTasksColor() {
  for (const challenge of challenges) {
    if (challenge.classList.contains("complete")) {
      challenge.style.backgroundColor = "green";
    } else if (challenge.classList.contains("Ongoing")) {
      challenge.style.backgroundColor = "yellow";
    } else if (challenge.classList.contains("commingsoon")) {
      challenge.style.backgroundColor = "red";
    }
  }
}

changeYearColor();
addDate();
changeDateColor();
changeTasksColor();
