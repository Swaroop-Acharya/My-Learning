// const dog={}
// console.log(dog)
// console.log(Object.keys(dog).length)


// dog.name="Jack"
// dog.legs=4
// dog.color="green"
// dog.age=5
// dog.bark = function(){
//     return "woof woof"
// }

// console.log(dog.name)
// console.log(dog.legs)
// console.log(dog.color)
// console.log(dog.age)
// console.log(dog.bark())


// dog.breed="bulldog"



//Exercises: Level 2

const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }

//   1) Find the person who has many skills in the users object.

// console.log(users.Alex)

// let personWithMaxSkil;
// let maxSkill=0;
// let skillCount;
// for(const user in users){
//     skillCount=users[user].skills.length;
//     if(skillCount > maxSkill){
//         maxSkill=skillCount;
//         personWithMaxSkil=user
//     }
// }

// console.log(personWithMaxSkil)
// console.log(maxSkill)
  

// 2) Count logged in users, count users having greater than equal 
// to 50 points from the following object.

// let loggedCount=0
// let greaterPointsCount=0

// for(const user in users){
//     if(users[user].isLoggedIn === true){
//         loggedCount++
//     }
//     if(users[user].points >= 50){
//         greaterPointsCount++
//     }
    
// }

// console.log(loggedCount)
// console.log(greaterPointsCount)

// 3)Find people who are MERN stack developer from the users object

// const mernStack=['MongoDB', 'Express', 'React', 'Node']
// let people=[]

// let count=0
// let skillsArr=[]
// for(const user in users){
//     count=0
//     skillsArr=users[user].skills;
//     for(let i=0;i<skillsArr.length;i++){

//         if(mernStack.includes(skillsArr[i])){
//             count++;
//         }
//     }
//     if(count===mernStack.length){
//         console.log(user)
//     }
    
// }


//optimized

// const mernStack=['MongoDB', 'Express', 'React', 'Node']
// let people=[]
// let skillsArr=[]
// for(const user in users){
//     skillsArr=users[user].skills
//     if(mernStack.every((skill)=>skillsArr.includes(skill))){
//         people.push(user)
//     }
// }

// console.log(people)


  