// //scope.js
// if(true) {
//     var gravity = 9.81
//     console.log(gravity)
  
// }
  
// console.log(gravity) // s9.8

// function grav(){
//     var gravity=9.8
//     console.log(gravity)
// }

// console.log(gravity) //error


//Objects
// const person = {
//     firstName: 'Asabeneh',
//     lastName: 'Yetayeh',
//     age: 250,
//     country: 'Finland',
//     city: 'Helsinki',
//     skills: [
//       'HTML',
//       'CSS',
//       'JavaScript',
//       'React',
//       'Node',
//       'MongoDB',
//       'Python',
//       'D3.js'
//     ],
//     getFullName: function() {
//       return `${this.firstName}${this.lastName}`
//     },
//     'phone number': '+3584545454545'
//   }
  
//   // accessing values using .
//   console.log(person.firstName)
//   console.log(person.lastName)
//   console.log(person.age)
//   console.log(person.location) // undefined
  
//   // value can be accessed using square bracket and key name
//   console.log(person['firstName'])
//   console.log(person['lastName'])
//   console.log(person['age'])
//   console.log(person['age'])
//   console.log(person['location']) // undefined
  
//   // for instance to access the phone number we only use the square bracket method
//   console.log(person['phone number'])


// const person = {
//     firstName: 'Asabeneh',
//     lastName: 'Yetayeh',
//     age: 250,
//     country: 'Finland',
//     city: 'Helsinki',
//     skills: [
//       'HTML',
//       'CSS',
//       'JavaScript',
//       'React',
//       'Node',
//       'MongoDB',
//       'Python',
//       'D3.js'
//     ],
//     getFullName: function() {
//       return `${this.firstName} ${this.lastName}`
//     },

//     message: ()=>{
//         return (`Hello, I'm ${person.getFullName()}.`)
//     }
//   }
  
//   console.log(person.getFullName())
//   console.log(person.message())
  // Asabeneh Yetayeh

  const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    city: 'Helsinki',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Node',
      'MongoDB',
      'Python',
      'D3.js'
    ],
    getFullName: function() {
      return `${this.firstName} ${this.lastName}`
    }
  }
//modifying the object properties

person.age=21
person.place="Mangalore"
person.getPersonInfo= function(){
    let skillWithoutLastSkill=this.skills.splice(0,this.skills.length-1).join(', ')
    let lastSkill=this.skills.splice(this.skills.length-1)[0]
    let skills=`${skillWithoutLastSkill} and ${lastSkill}`
    let statement=`Hello, there my name is ${this.getFullName()}\n
                    I live in ${this.place}\n
                    I have a good knowledge and hands on experience in web development and my stacks are ${skills}`
    return statement
}

console.log(person)
console.log(person.getPersonInfo())

person.firstName="Swaroop"
person.lastName="Acharya"
const personCp={...person}
const copyPerson = Object.assign({}, person) /// copy object
console.log(personCp)

const keyArr=Object.keys(person)
console.log(keyArr)

const valuesArr=Object.values(person)
console.log(valuesArr)


console.log(person.hasOwnProperty('firstName'))
console.log(person.hasOwnProperty('caste'))