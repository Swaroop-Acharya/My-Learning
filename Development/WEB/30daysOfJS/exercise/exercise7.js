// function fullName(fname,lname){
//     console.log(`${fname} ${lname}`)
// }

// fullName("Swaroop","Acharay")


//Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

// console.log(findMax(0, 10, 5))
// 10
// console.log(findMax(0, -10, -2))
// 0

// function findMax(){
//     return Math.max(...arguments)
// }
// console.log(findMax(0, 10, 5))
// 10
// console.log(findMax(0, -10, -2))
// 0

// function findMax(a, b, c) {
//     if (a >= b && a >= c) {
//       return a;
//     } else if (b >= a && b >= c) {
//       return b;
//     } else {
//       return c;
//     }
//   }
  
//   // Test cases
//   console.log(findMax(0, 10, 5));   // Output: 10
//   console.log(findMax(0, -10, -2)); // Output: 0

// Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.

// function printArray(arr){
//     for(const num of arr){
//         console.log(num)

//     }
// }

// printArray([1,2,3,4,5])
// printArray([1,2,3])


// Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.

// showDateTime()
// 08/01/2020 04:08


// function showDateTime(){
//     const obj=new Date()
//     console.log(`${obj.getDate()}/${obj.getMonth()}/${obj.getFullYear()}  ${obj.getHours()}:${obj.getMinutes()}`)
// }
// showDateTime()

// function swapValues(val1,val2){
   
//     console.log(`x => ${val1+val2-val1} y => ${val2+val1-val2}`)
// }

// swapValues(1,2)


// let res=[]
// function addItem(item){
//     res.push(item)
//     return res
// }
// console.log(addItem(1))
// console.log(addItem(2))

//Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item


// function removeItem(arr, index) {
//   const res = arr.splice(index, 1);
//   return res;
// }

// const arr = [1, 2, 3, 4];
// console.log(removeItem(arr, 3)); //
// console.log(arr); // Output: [1, 2, 3]


// Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.

// evensAndOdds(100);
// The number of odds are 50.
// The number of evens are 51.


// function evensAndOdds(range){
//     let evenCount=0;
//     let oddCount=0;
//     for(let i=0;i<=range;i++){
//         if(i%2===0){
//             evenCount++;
//         }else{
//             oddCount++;
//         }
//     }
//     console.log(`The number of odds are ${oddCount}`)
//     console.log(`The number of even are ${evenCount}`)
// }

// evensAndOdds(100)

// randomHexaNumberGenerator

// function randomHexaNumberGenerator(){
//     const characters="1234567890ABCDEF"
//     let index 
//     let hexNum='#'
//     for(let i=0;i<6;i++){
//         index=Math.floor(Math.random()*characters.length)
//         hexNum+=characters[index]
//     }
//     console.log(hexNum)
// }
// randomHexaNumberGenerator()



// Modify the userIdGenerator function. Declare a function name 
// userIdGeneratedByUser. It doesn’t take any parameter but it takes two 
// inputs using prompt(). One of the input is the number of characters and
//  the second input is the number of ids which are supposed to be generated.

// function userIdGeneratedByUser(){
//     const noChar=prompt("Enter the number of characters:")
//     const noIds=prompt("Enter the number of ids:")
//     const characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghiklmnopqrstuvwxyz0123456789"

//     let userId=''
//     let index
//     for(let i=0;i<parseInt(noIds);i++){
//         for(let i=0;i<parseInt(noChar);i++){
//             index=Math.floor(Math.random()*characters.length)
//             userId+=characters[index]
//         }
//         console.log(userId)
//         userId=''
//     }
// }

// userIdGeneratedByUser()

// Write a function called average, it takes an array parameter and returns the sum and average of the items. Check 
// if all the array items are number types. If not give return reasonable feedback.


// function avgSum(arr){
    
//     let sum=0,avg=0
//     let length=arr.length
//     for(const n of arr){
//         if(typeof n!=="number"){
//             return "arr has non number elements"
//         }
//         sum+=n
//     }
//     avg=sum/length
//     return [sum,avg]
// }

// const [sum , avg]= avgSum([1,2,3,4,5])
// console.log(sum,avg)


// Write a function called isPrime, which checks if a number is prime number.


// function isPrime(n){
//     if(n<=0){
//         return "Number should be greater than 0"

//     }
//     if(n===1){
//         return "Not Prime"
//     }
//     for(i=2;i<=Math.sqrt(n);i++){
//         if(i%2===0){
//             return "Not a Prime"
//         }
//     }
//     return "Prime"
// }

// console.log(isPrime(4))

// Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.

// [(1, 4, 5, 7, 9, 8, 0)]
// function sevenRandomNumbers(){
//     let arr=[]
//     let num
//     for(let i=0;i<7;i++){

//         do{
//             num=Math.floor(Math.random()*10)
//         }while(arr.includes(num))
//         arr.push(num)
//     }
//     return arr
// }


// console.log(sevenRandomNumbers())