// Create a personAccount out function. It has firstname, lastname, incomes, expenses
// inner variables. It has totalIncome, totalExpense, accountInfo,addIncome, addExpense and
//  accountBalance inner functions. Incomes is a set of incomes and its description and
//  expenses is also a set of expenses and its description.


function personAccount(fname,lname){
    let firstName=fname
    let lastName=lname
    let incomes=new Map()
    let expenses=new Map()

    function addIncome(description,income){
        return incomes.set(description,income)
    }

    function addExpense(description,income){
        return expenses.set(description,income)
    }

    function totalExpense(){
        let sum=0;
        for(money of expenses.values()){
            sum+=money
        }
        return sum
    }
    function totalIncome(){
        let sum=0;
        for(money of incomes.values()){
            sum+=money
        }
        return sum
    }
    function accountBalance(){
        return totalIncome()-totalExpense();
    }

    function accountInfo(){
        console.log("Your Account Information:")
        console.log(`Name : ${firstName}${lastName} \n Total Income : ${totalIncome()}\n Total Expense : ${totalExpense()}\n Current Balance: ${accountBalance()}`)
        // console.log(totalIncome())
        // console.log(totalExpense())
        
    }

    return{
        addExpense:addExpense,
        addIncome:addIncome,
        accountInfo:accountInfo
    }
}

const p1= personAccount("Swaroop","Acharya")
p1.addIncome("Add sense",2000)
p1.addIncome("Salary",200000)
p1.addIncome("Rent",20000)


p1.addExpense("tea",200)
p1.addExpense("Watch",2000)
p1.accountInfo()


const p2=personAccount("Sudeep","Acharya")
p2.addIncome("Add sense",2000)
p2.addIncome("Rent",20000)


p2.addExpense("tea",200)

p2.accountInfo()


