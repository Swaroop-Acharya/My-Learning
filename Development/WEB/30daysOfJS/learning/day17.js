// Web Storages
// https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/17_Day_Web_storages/17_day_web_storages.md

//sessionStorage and localStorage both are same

//Everything is stored as string
//Web Storage data is, in both cases, not available between 
//different browsers. For example, storage objects created in Firefox cannot be accessed in Internet Explorer, exactly like cookies.

// There are five methods to work on local storage: setItem(), getItem(), removeItem(), clear(), key()

localStorage.setItem("firstName","Swaroop")
localStorage.setItem("lastName","Acharya")
localStorage.setItem("age",21)

const skills=['html','css','js']

//we have to stringfy before storing it in localstorage it may loose its format
const jsonSkills=JSON.stringify(skills)
localStorage.setItem("Skills",jsonSkills)

const obj={
    placeOfBirth:"BC Road",
    address:"Belthangady"
}

const jsonObj=JSON.stringify(obj,undefined,4)

localStorage.setItem("OtherInfo",jsonObj)

console.log(localStorage)

const fname=localStorage.getItem("firstName")
const lname=localStorage.getItem("lastName")
const age=localStorage.getItem("age")
const skillsArrStr=localStorage.getItem("Skills")
const skillsArr=JSON.parse(skillsArrStr)
const objStr=localStorage.getItem("OtherInfo")
const objData=JSON.parse(objStr)

console.log(fname)
console.log(lname)
console.log(age)
console.log(skillsArr)
console.log(objData)

localStorage.removeItem("age")
console.log(localStorage.getItem("age")) //null
localStorage.clear()
console.log(localStorage) //null

