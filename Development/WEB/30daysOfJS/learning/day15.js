// //Classes and objects

// class Person{

// }

// const person1=new Person()
// console.log(person1)

// class Animal{
//     constructor(name,sound){
//         this.name=name
//         this.sound=sound
//     }

//     getInfo(){
//         console.log(`${this.name}-${this.sound}`)
//     }
// }

// const animal1=new Animal()
// const animal2=new Animal("Dog","Bow bow")
// console.log(animal1)
// console.log(animal2)
// animal1.getInfo()
// animal2.getInfo()

// class Car{
//     constructor(name="Mustang",company="Ford"){
//         this.name=name
//         this.company=company
//     }
//     getInfo(){
//         console.log(`${this.name}-${this.company}`)
//     }
// }

// const c1=new Car()
// console.log(c1)
// const c2=new Car("915 GT","Porche")
// console.log(c2)

// Getter and Setter , static method

// class Person {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.score = 0;
//     this.skills = [];
//   }
//   get getScore() {
//     return this.score;
//   }
//   get getSkills() {
//     return this.skills;
//   }

//   set setScore(score) {
//     this.score += score;
//   }
//   set setSkill(skill) {
//     this.skills.push(skill);
//   }

//   static Info(){
//     const skills = ['HTML', 'CSS', 'JS', 'React', 'Python', 'Node']
//     const index = Math.floor(Math.random() * skills.length)
//     return skills[index]
//   }
// }

// const person1 = new Person("Asabeneh", "Yetayeh", 250, "Finland", "Helsinki");

// //setter usage
// person1.setScore = 1
// person1.setSkill = 'HTML'
// person1.setSkill = 'CSS'
// person1.setSkill = 'JavaScript'

// //getter usage
// console.log(person1.getScore)
// console.log(person1.skills)

// // static method accessed using class name
// console.log(Person.Info())
// console.log(Person.Info())
// console.log(Person.Info())
// console.log(Person.Info())

// 
// Inheritence
// As you can see, we manage to access all the methods in the Person Class and we used it 
// in the Student child class. We can customize the parent methods, we can add additional 
// properties to a child class. If we want to customize, the methods and if we want to add 
// extra properties, we need to use the constructor function the child class too. Inside 
// the constructor function we call the super() function to access all the properties from 
// the parent class. The Person class didn't have gender but now let us give gender 
// property for the child class, Student. If the same method name used in the child class,
//  the parent method will be overridden.

class Person{
    constructor(firstName, lastName, age, country, city) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.country = country
        this.city = city
        this.score = 0
        this.skills = []
      }

    getInfo(){
        console.log("we are humans")
    }
}

class Student extends Person{
    constructor(firstName, lastName, age, country, city,gender) {
        super(firstName, lastName, age, country, city)
        this.gender=gender
    }
    getInfo(){
        console.log("we are students")
    }
}
const p1=new Person()
const s1 = new Student('Asabeneh', 'Yetayeh', 'Finland', 250, 'Helsinki',"male")
console.log(s1)
p1.getInfo()
s1.getInfo()
