// defining class
class Person {
    constructor(firstName, lastName) {
      console.log(this) // Check the output from here
      this.firstName = firstName
      this.lastName = lastName
    }

    
  }

const p1 = new Person("Swaroop","Acharya")
