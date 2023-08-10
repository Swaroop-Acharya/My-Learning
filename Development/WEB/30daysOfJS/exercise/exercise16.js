// const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']
// let age = 250;
// let isMarried = true
// const student = {
//   firstName:'Asabeneh',
//   lastName:'Yetayehe',
//   age:250,
//   isMarried:true,
//   skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
// }
const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`

// const jsonSkills=JSON.stringify(skills)
// console.log(jsonSkills)
// console.log(typeof skills)

// const ageJson = JSON.stringify(age)
// console.log(ageJson)
// console.log(typeof ageJson)

// const mariedJson = JSON.stringify(isMarried)
// console.log(typeof mariedJson)


// const studentJson = JSON.stringify(student,undefined,5)
// console.log( studentJson)

// const jsonString = JSON.stringify(student, ['firstName', 'lastName', 'skills'], 2);
// console.log(jsonString);

// //Find the user who has many skills from the variable stored in txt.

const users = JSON.parse(txt,undefined,4)
// console.log(txtJson)
let maxCount=-1
let maxSkilledUser=null
for(username in users){
    const user = users[username];
    const count =user.skills.length;
   if(count > maxCount){
    maxCount=count
    maxSkilledUser=user
   }
}
console.log(maxSkilledUser)
console.log(maxCount)