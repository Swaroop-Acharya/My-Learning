// Destructuring and Spread

// const a = [1, 2, 3];

// const [one, two, three] = a;
// console.log(one, two, three);

// const names = ["Swaroop", "Acharya", undefined];

// const [firstname, lastname, familyname = "Jain"] = names;
// console.log(firstname, lastname, familyname);

// const num = [1, 2, 3, 4, 5, 6, 7, 7, 8, 8, 9];

// const [one1, two2, ...otherNums] = num;
// console.log(one1, two2);
// console.log(otherNums);

// //Object destructing

// const obj = {
//   firstname: "Swaroop",
//   lastname: "Acharya",
//   age: 21,
// };

// const { firstname: fname, lastname: lname, age } = obj; //renameing the object properties
// console.log(fname);
// console.log(lname);
// console.log(age);

// //Destructuring during iteration
// const countries = [
//   ["Finland", "Helsinki"],
//   ["Sweden", "Stockholm"],
//   ["Norway", "Oslo"],
// ];
// for (const [country, city] of countries) {
//   console.log(country, city);
// }

// const fullStack = [
//   ["HTML", "CSS", "JS", "React"],
//   ["Node", "Express", "MongoDB"],
// ];

// for (const [...all] of fullStack) {
//   console.log(all);
// }
// for (const [first, second, third] of fullStack) {
//   console.log(first, second, third);
// }

// Object parameter without destructuring

// const person = {
//   firstName: "Asabeneh",
//   lastName: "Yetayeh",
//   age: 250,
//   country: "Finland",
//   job: "Instructor and Developer",
//   skills: [
//     "HTML",
//     "CSS",
//     "JavaScript",
//     "React",
//     "Redux",
//     "Node",
//     "MongoDB",
//     "Python",
//     "D3.js",
//   ],
//   languages: ["Amharic", "English", "Suomi(Finnish)"],
// };

// const getPersonInfor = (obj) => {
//   const skillsFirst = obj.skills.slice(0, -1).join(", ");
//   const lastSkill = obj.skills.slice(-1);
//   const langFirst = obj.languages.slice(0, -1).join(", ");
//   const lastLang = obj.languages.slice(-1);

//   personInfo = `Hello my name is ${obj.firstName} ${obj.lastName} and I'm ${obj.age}. Iam from ${obj.country}. Iam a ${obj.job}. My skills are ${skillsFirst} and ${lastSkill}. I speak ${langFirst} and little bit of ${lastLang}.`;

//   return personInfo;
// };

// const result = getPersonInfor(person);
// console.log(result);

//Object Parameter with destructuring

// const prop={
//     width:20,
//     height:10
// }

// const areaRec= ({width,heighh})=>{
//     return w*h;
// }
// const areaRec= ({width:w,height:h})=>{
//     return w*h;
// }

// const res=areaRec(prop)
// console.log(res)

// const todoList = [
//   {
//     task: "Prepare JS Test",
//     time: "4/1/2020 8:30",
//     completed: true,
//   },
//   {
//     task: "Give JS Test",
//     time: "4/1/2020 10:00",
//     completed: false,
//   },
//   {
//     task: "Assess Test Result",
//     time: "4/1/2020 1:00",
//     completed: false,
//   },
// ];

// for (const { task, time, completed } of todoList) {
//   console.log(task, time, completed);
// }

//Spread and Rest operator

// The spread operator (...) is used to expand elements (e.g., arrays, objects) into individual components.
// The rest operator (...) is used to collect multiple function arguments into an array.

const user = {
    name:'Asabeneh',
    title:'Programmer',
    country:'Finland',
    city:'Helsinki'
  }
  
  const copiedUser = {...user}
  console.log(copiedUser)
  const copiedUser1 = {...user,title:"Coder"}
  console.log(copiedUser1)
  const copiedUser2 = {...user,place:"Heaven"}
  console.log(copiedUser2)


//Rest operation

function sumAllNums(...arr){
    return arr.reduce((acc,cur)=>acc+cur,0)
}

console.log(sumAllNums(1,2,3,4,5))
console.log(sumAllNums(1,2))
