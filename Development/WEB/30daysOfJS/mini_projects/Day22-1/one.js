const container = document.querySelector(".container");
container.style.display = "grid";
container.style.gridTemplateColumns = "repeat(6, auto)";
container.style.padding = "10px";
container.style.gap = "10px";

function insertElement() {
  for (let i = 0; i <= 101; i++) {
    const div = document.createElement("div");
    div.textContent = i;
    div.style.textAlign = "center";
    div.style.padding = "10px";

    if (i % 2 === 0) {
      div.style.backgroundColor = "green";
    } else {
      div.style.backgroundColor = "yellow";
    }

    if (isPrime(i)) {
      div.style.backgroundColor = "red";
    }

    container.appendChild(div);
  }
}

function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  if (number === 2) {
    return true;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i == 0) {
      return false;
    }
  }
  return true;
}

insertElement();
