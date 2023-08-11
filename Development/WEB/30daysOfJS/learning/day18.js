const obj = {
    firstName: "Swaroop",
    lastName: "Acharya",
    incomes: new Map(),
    expenses: new Map(),
    totalIncome: function () {
      let sum = 0;
      for (const money of this.incomes.values()) {
        sum += money;
      }
      return sum;
    },
    totalExpense: function () {
      let sum = 0;
      for (const money of this.expenses.values()) {
        sum += money;
      }
      return sum;
    },
    accountInfo: function () {
      console.log("YOUR ACCOUNT INFORMATION:");
      console.log(`Name: ${this.firstName} ${this.lastName}`);
      console.log(`Total Income: ${this.totalIncome()}`);
      console.log(`Total Expense: ${this.totalExpense()}`);
      console.log(`Current Balance: ${this.accountBalance()}`);
    },
    addIncome: function (description, money) {
      if (money <= 0) {
        console.log("Income should be greater than 0");
      } else {
        this.incomes.set(description, money);
      }
    },
    addExpense: function (description, money) {
      if (money <= 0) {
        console.log("Expense should be greater than 0");
      } else {
        this.expenses.set(description, money);
      }
    },
    accountBalance: function () {
      return this.totalIncome() - this.totalExpense();
    },
  };
  
  const jsonPersonAccountObj = JSON.stringify(
    obj,
    (key, value) => {
      if (typeof value === "function") {
        return value.toString();
      }
      return value;
    },
    4
  );
  localStorage.setItem("personAccountObj", jsonPersonAccountObj);
  
  const rJson = localStorage.getItem("personAccountObj");
  const rObj = JSON.parse(
    rJson,
    (key, value) => {
      if (
        key === "totalIncome" ||
        key === "totalExpense" ||
        key === "accountInfo" ||
        key === "addIncome" ||
        key === "addExpense" ||
        key === "accountBalance"
      ) {
        return eval("(" + value + ")");
      }
      return value;
    },
    4
  );
  
  rObj.accountInfo()
  
  
  