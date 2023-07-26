//Normal function
//Arrow function
//Anonymous function
//Self invoking funtion

// Unlimited number of parameters in regular function

// function sumAllArgs(){
//     console.log(arguments) // function scoped object
// }

// sumAllArgs(1,3,4,5)
// sumAllArgs(1,0,2,3,4,5,6,5,6)

// function sumAllArgs(){
//     let sum=0
//     for(let i=0;i<arguments.length;i++){
//         sum+=arguments[i]
//     }
//     console.log(sum)
// }

// sumAllArgs(1,3,4,5)
// sumAllArgs(1,0,2,3,4,5,6,5,6)

//Arrow function
// const sumAllArgs=(...args)=>{
//     console.log(args) //array
// }

// sumAllArgs(1,3,4,5)
// sumAllArgs(1,0,2,3,4,5,6,5,6)

//Anonymous Function

// const variable=function(){
//     console.log("Iam anonymous")
// }

// variable()

//Expression function

// Function expression
// const square = function(n) {
//     return n * n
//   }

//   console.log(square(2)) // -> 4

// Self Invoking Functions
// Self invoking functions are anonymous functions which do not need to be called to return a value

// (function () {
//   console.log("Hellw");
// })()

// (function (n) {
//   console.log(n * n);
// })(10);

// const variable = (function (n) {
//   return n ** n;
// })(10);
// console.log(variable);

// const changeToUpperCase = arr => {
//     const newArr = []
//     for (const element of arr) {
//       newArr.push(element.toUpperCase())
//     }
//     return newArr
//   }

//   const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
//   console.log(changeToUpperCase(countries))

// ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"]

// This is how we write normal or declaration function
// Let us change this declaration function to an arrow function
// function square(n) {
//     return n * n
//   }

//   console.log(square(2)) // 4

//   const square = n => {
//     return n * n
//   }

//   console.log(square(2))  // -> 4

// if we have only one line in the code block, it can be written as follows, explicit return
//   const square = n => n * n  // -> 4


// Function with default parameters

const message= (name="Swaroop",sur="Acharya")=>{
    console.log(`Hi iam ${name} ${sur}`)
}

message()
message("sudeep")
message("Sadanadha","gowda")