const fname = document.querySelector("#fname");
const lname = document.querySelector("#lname");
const country = document.querySelector("#country");
const score = document.querySelector("#score");
const btn = document.querySelector(".addBtn");
const p = document.querySelector("p");
const cardTemplate= document.querySelector("[card-template]");
const cardContainer= document.querySelector("section");
console.log(cardTemplate.content.cloneNode(true).children[0])

console.log("redered")
const arrObj = [];

function cardFiller(arr,newObj) {
    cardContainer.innerHTML = '';
    arr.forEach((user) => {
        const card = cardTemplate.content.cloneNode(true).children[0];
        const userName = card.querySelector("[user-name]");
        const userDate = card.querySelector("[date]");
        const userCountry = card.querySelector("[user-country]");
        const userScore = card.querySelector("[user-score]");
        const plusFiveBtn = card.querySelector(".plusFive");
        const minusFiveBtn = card.querySelector(".minusFive");
        const deleteBtn = card.querySelector(".deleteBtn");
        
        userName.textContent = user.name;
        userDate.textContent = user.dateTime;
        userCountry.textContent = user.country;
        userScore.textContent = user.score;

        plusFiveBtn.addEventListener("click", function () {
            user.plusFive();
            userScore.textContent = user.score;
        });

        minusFiveBtn.addEventListener("click", function () {
            user.minusFive();
            userScore.textContent = user.score;
        });

        deleteBtn.addEventListener("click",()=>{
            user.delete()
            cardFiller(arr)
        })

        cardContainer.appendChild(card);
    });
}

function inputValidation() {
    const fValue = fname.value;
    const lValue = lname.value;
    const countryValue = country.value;
    const scoreValue = score.value;
  
    if (fValue === "" || lValue === "" || countryValue === "" || scoreValue === "") {
      p.style.color = "red";
      p.textContent = "All fields are required";
    } else if (isNaN(scoreValue)) {
      p.style.color = "red";
      p.textContent = "Score should be a number";
    } else {
      const fullName = fValue + " " + lValue;
      const date = new Date()
      const newObj = {
        name: fullName,
        dateTime: date.toLocaleString(),
        country: countryValue.toUpperCase(),
        score: scoreValue,
        plusFive: function(){
            return this.score= parseInt(this.score)+5
        },
        minusFive: function(){
            return this.score=parseInt(this.score)-5
        },
        delete: function() {
            const index = arrObj.indexOf(this);
            if (index !== -1) {
                arrObj.splice(index, 1);
            }
        }
      };
      
      arrObj.push(newObj);
      arrObj.sort((a, b) => b.score - a.score);
      
      cardFiller(arrObj,newObj);
      
      p.style.color = "green";
      p.textContent = "Data added successfully";
      fname.value=""
      lname.value=""
      country.value=""
      score.value=""
    }
  }
  

btn.addEventListener("click", inputValidation);
