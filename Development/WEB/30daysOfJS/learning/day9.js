//Higher order function
// Higher order functions are functions which take other function as a parameter or
// return a function as a value. The function passed as a parameter is called callback.

// const callback=(n)=>{
//     return n*n;
// }

// function square(func,n){
//     return func(n)/2;
// }

// console.log(square(callback,10))

// Higher order functions return function as a value​

// function higherOrderFunction(){
//     console.log("This is higher order function")
//     function innerFunction(){
//         console.log("This is inner function")

//     }
//     return innerFunction;
// }

// const invokerFunction=higherOrderFunction()

// invokerFunction()

// const arr = [1, 2, 3, 4, 5];

// function sumArry(arr) {
//   let sum = 0;

//   arr.forEach((ele) => {
//     return (sum += ele);
//   });
//   return sum;
// }

// console.log(sumArry(arr));

// Setting Interval using a setInterval function
// let seconds = 58;
// let minutes = 0;
// setInterval(() => {
//   if (seconds % 60 === 0) {
//     ++minutes;
//     seconds = 0;
//   }
//   console.log(`count: - ${minutes}:${++seconds}`);
// }, 1000);

//Setting a time using a setTimeout

// setTimeout(()=>{
//     console.log("Hi")
// },1000)

//Functional programming

// 1) ForEach loop
// const a=[1,2,3,4,5]

// //index,arr is optional parameters

// a.forEach((ele,index,arr)=>{
//     console.log(ele,index,arr)

// })

// 2)map
// map: Iterate an array elements and modify the array elements. It takes a callback
// function with elements, index , array parameter and return a new array.

// const modifiedArray = arr.map(function (element, index, arr) {
//     return element
//   })

// const arr=[1,2,3,4,5]
// const newArr = arr.map((ele)=> ele*2)
// console.log(newArr)

// 3) filter
// Filter: Filter out items which full fill filtering conditions and return a new array

// const names=["Swaroop","Roop","Sudeep","Kroop"]

// const filterArr=names.filter((name)=> name.includes("oo"))
// console.log(filterArr)

// const scores = [
//     { name: 'Asabeneh', score: 95 },
//      { name: 'Lidiya', score: 98 },
//     { name: 'Mathias', score: 80 },
//     { name: 'Elias', score: 50 },
//     { name: 'Martha', score: 85 },
//     { name: 'John', score: 100 },
//   ]
// const newScoreArr=scores.filter((s)=>{
//    return s.score >80
// })

// console.log(newScoreArr)

// 3) reduce
// reduce: Reduce takes a callback function. The call back function takes accumulator,
//  current, and optional initial value as a parameter and returns a single value.
//  It is a good practice to define an initial value for the accumulator value.
//  If we do not specify this parameter, by default accumulator will get array first
//   value. If our array is an empty array, then Javascript will throw an error

// arr.reduce((acc, cur) => {
//     // some operations goes here before returning a value
//    return
//   }, initialValue)


//sum of numbers
// const arr = [1, 2, 3, 4, 5];

// const sum = arr.reduce((acc, cur) => {
//   console.log(acc+ " "+ cur);
//   return acc + cur;
// });
// console.log(sum);



// //Max number finder
// const maxNum=arr.reduce((acc,cur)=>{
//     return Math.max(acc,cur)
// })

// console.log(maxNum)

// //Arr flatening

// const arr1=[[1,2],[2,3],[3,4]]

// const newARRAY=arr1.reduce((acc,curArr)=>{
//     return acc.concat(curArr);
// },[])

// console.log(newARRAY)


//4) Every
// every: Check if all the elements are similar in one aspect. It returns boolean



// const arr=[2,3,1,0,-1,3,-2]
// const arr2=[2,3,1]

// const newArr=arr.every((elem)=> elem>=0)
// const newArr1=arr2.every((elem)=> elem>=0)

// console.log(newArr) //false
// console.log(newArr1) //true


// 5) Some 
// some: Check if some of the elements are similar in one aspect. It returns boolean
// const arr=[2,3,1,0,-1,3,-2]
// const arr2=[2,3,1]

// const newArr=arr.some((elem)=> elem>=0)
// const newArr1=arr2.some((elem)=> elem>=0)

// console.log(newArr) //true
// console.log(newArr1) //true


// 6) find
// find: Return the first element which satisfies the condition

// const ages=[20,19,17,10]


// const lessAge=ages.find((age)=> age <=18)
// console.log(lessAge)


// 7) findIndex
// findIndex: Return the position of the first element which satisfies the condition


// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
// const ages = [24, 22, 25, 32, 35, 18]

// const result = names.findIndex((name) => name.length > 7)
// console.log(result) // 0

// const age = ages.findIndex((age) => age < 20)
// console.log(age) // 5



// 8) sort

// const products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot']
// console.log(products.sort()) // ['Apple', 'Carrot', 'Coffee', 'Honey', 'Milk', 'Sugar']
// //Now the original products array  is also sorted


// const people = [
//     { name: "Alice", age: 30 },
//     { name: "Bob", age: 25 },
//     { name: "Charlie", age: 35 },
//   ];
  
//   // Sorting the 'people' array based on the 'age' property
//   people.sort((a, b) => a.age - b.age);
  
//   console.log(people);
  