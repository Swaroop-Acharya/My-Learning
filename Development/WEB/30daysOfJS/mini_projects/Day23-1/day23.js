const input = document.querySelector(".numberInput");
const button = document.querySelector(".generateNum");
const containerDiv = document.querySelector(".container");
const numberContainer = document.querySelector(".numberContainer");
const p = document.querySelector("p");
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    if(num ===2){
        return true
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

const generateNum = (number) => {
  for (let i = 0; i < number; i++) {
    const div = document.createElement("div");
    div.textContent = i;
    div.style.padding='10px'
    if(i%2===0){
        div.style.backgroundColor='green'
    }else{
        div.style.backgroundColor='red'

    }
    if(isPrime(i)){
        div.style.backgroundColor='yellow'
    }
    numberContainer.append(div)
    
  }
};

button.addEventListener("click", (e) => {
  const inputValue = parseInt(input.value);
  if (isNaN(inputValue)) {
    p.textContent = "Enter the number value!!!";
    p.style.color = "red";
    console.log(typeof e.target.value);
  } else {
    p.textContent = "";
    numberContainer.innerHTML=''
    generateNum(input.value);
  }
});
