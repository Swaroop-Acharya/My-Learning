const obj={
    firstName:"Swaroop",
    lastName:"Acharya",
    getFullName:function() {
        console.log(`${this.firstName} - ${this.lastName}`)

    }
}
obj.getFullName()



const obj1={
    firstName:"Sudeep",
    lastName:"Acharya",
}

//call() This method is used to call a function immediately, specifying the value of this and 
//passing any required arguments individually. 

obj.getFullName.call(obj1)

//bind() This method returns a new function with the specified value of this, but it doesn't 
// immediately invoke the function. Instead, it allows you to create a "bound" 
// function that can be called later. 

const newFuntion=obj.getFullName.bind(obj1)
newFuntion()

//apply()-This method is similar to .call(), but it accepts an array-like or iterable object as 
// its second argument to pass the function arguments. 
obj.getFullName.apply(obj1)



//Bind example
const multiply=(a,b)=>{
    return a*b;
}

const double = multiply.bind(null,2)
const triple = multiply.bind(null,3)

console.log(double(5))
console.log(triple(10))


//Apply Example

const arr=[1,2,3]

const sum=(a,b,c)=>{
    return a+b+c;
}

const res=sum.apply(null,[1,2,3])
console.log(res)
