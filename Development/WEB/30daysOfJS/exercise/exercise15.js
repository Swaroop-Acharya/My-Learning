// Level 1 and level2
// Create an Animal class. The class will have name, age, color, legs properties
// and create different methods

class Animal {
  constructor(name, age, color, legs) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.legs = legs;
  }
  getInfo() {
    console.log(
      `Name: ${this.name} \n Age: ${this.age} \n Color: ${this.color}\n Legs: ${this.legs}`
    );
  }

  get getName() {
    return this.name;
  }
  get getAge() {
    return this.age;
  }
  get getColor() {
    return this.color;
  }
  get getLegs() {
    return this.legs;
  }

  set setName(name) {
    this.name = name;
  }
  set setAge(age) {
    this.age = age;
  }
  set setColor(color) {
    this.color = color;
  }
  set setLegs(legs) {
    this.legs = legs;
  }
}

class Dog extends Animal {
  constructor(name, age, color, legs, size) {
    super(name, age, color, legs);
    this.size = size;
  }

  get getSize() {
    return this.size;
  }

  set setSize(size) {
    this.size = size;
  }

  getInfo() {
    console.log(
      ` Name: ${this.name}\nAge: ${this.age}\nColor: ${this.color}\nLegs: ${this.legs}\nSize: ${this.size}`
    );
  }
}
class Cat extends Animal {
  constructor(name, age, color, legs, size) {
    super(name, age, color, legs);
    this.size = size;
  }
  get getSize() {
    return this.size;
  }

  set setSize(size) {
    this.size = size;
  }
  getInfo() {
    console.log(
      `Name: ${this.name} \n Age: ${this.age} \n Color: ${this.color}\n Legs: ${this.legs}\n Size: ${this.size}`
    );
  }
}

const animal = new Animal("lizard", 10, "green", 4);
console.log(animal);
animal.getInfo();
animal.setAge = 20;
console.log(animal);
console.log(animal.getName);
console.log("------------------------");

const dog = new Dog("Bulldog", 10, "brown", 4, "medium");
console.log(dog);
dog.getInfo();
console.log("------------------------");

const cat = new Cat("GermanCat", 5, "brown", 4, "small");
console.log(cat);
cat.getInfo();

//level 3

class Statistics {
  ages = [
    31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37,
    31, 34, 24, 33, 29, 26,
  ];

  count() {
    return this.ages.length;
  }

  sum() {
    return this.ages.reduce((acc, cur) => acc + cur, 0);
  }

  min() {
    return this.ages.reduce((acc, cur) => Math.min(acc, cur));
  }
  max() {
    return this.ages.reduce((acc, cur) => Math.max(acc, cur));
  }
}

const s = new Statistics();
console.log(s.ages);
console.log(s.count());
console.log(s.sum());
console.log(s.min());
console.log(s.max());

// Create a class called PersonAccount. It has firstname, lastname, incomes,
// expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome,
// addExpense and accountBalance methods. Incomes is a set of incomes and its
// description and expenses is also a set of expenses and its description.

// class PersonAccount {
//   constructor(fname, lname, incomes, expenses) {
//     this.fname = fname;
//     this.lname = lname;
//     this.incomes = [];
//     this.expenses = [];
//   }

//   set setAddIncome({ income, description }) {
//     this.incomes.push({ income, description });
//   }

//   set setAddExpense({ expense, description }) {
//     this.expenses.push({ expense, description });
//   }

//   accountInfo() {
//     console.log(" You account Information: ");
//     console.log(
//       `First Name: ${this.fname}\nLast Name: ${this.lname}\n Balance: ${
//         this.getTotalIncome - this.getTotalExpense
//       }`
//     );
//     console.log(`Total Income: ${this.getTotalIncome}`);
//     console.log(`Total Expense: ${this.getTotalExpense}`);
//   }

//   get getTotalIncome() {
//     return this.incomes
//       .map((ele) => ele.income)
//       .reduce((acc, cur) => acc + cur, 0);
//   }

//   get getTotalExpense() {
//     return this.expenses
//       .map((ele) => ele.expense)
//       .reduce((acc, cur) => acc + cur, 0);
//   }
// }

// const p = new PersonAccount("Swaroop", "Acharya");
// p.setAddIncome = { income: 12000, description: "From fiverr" };
// p.setAddIncome = { income: 120, description: "From Add revenue" };

// p.setAddExpense = { expense: 200, description: "Purchased burger" };
// p.setAddExpense = { expense: 20, description: "Purchased milk" };

// p.accountInfo();

//Chat gpt solution
class PersonAccount {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.incomes = new Map();
        this.expenses = new Map();
    }

    addIncome(description, amount) {
        if (amount > 0) {
            this.incomes.set(description, amount);
        } else {
            console.log("Income amount should be greater than 0");
        }
    }

    addExpense(description, amount) {
        if (amount > 0) {
            this.expenses.set(description, amount);
        } else {
            console.log("Expense amount should be greater than 0");
        }
    }

    calculateTotalIncome() {
        let totalIncome = 0;
        for (const amount of this.incomes.values()) {
            totalIncome += amount;
        }
        return totalIncome;
    }

    calculateTotalExpense() {
        let totalExpense = 0;
        for (const amount of this.expenses.values()) {
            totalExpense += amount;
        }
        return totalExpense;
    }

    accountInfo() {
        return `Account Information for ${this.firstname} ${this.lastname}:\n` +
            `Total Income: $${this.calculateTotalIncome()}\n` +
            `Total Expenses: $${this.calculateTotalExpense()}\n` +
            `Account Balance: $${this.calculateTotalIncome() - this.calculateTotalExpense()}`;
    }
}

// Usage
const person = new PersonAccount("John", "Doe");
person.addIncome("Salary", 3000);
person.addIncome("Freelance", 500);
person.addExpense("Rent", 1000);
person.addExpense("Groceries", 200);
console.log(person.accountInfo());
console.log(person.expenses.values());



