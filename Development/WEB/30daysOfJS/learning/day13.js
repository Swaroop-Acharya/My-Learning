// console.log('%c30 Days Of JavaScript', 'color:green') // log output is green
// console.log(
//   '%c30 Days%c %cOf%c %cJavaScript%c',
//   'color:green',
//   '',
//   'color:red',
//   '',
//   'color:yellow'
// ) // log output green red and yellow text


// const arr=["swaroop","sudeep","anvith"]
// console.table(arr)

// console.warn("Hi")
// console.error("Hi")

// const ob={
//     name:"Swaroop",
//     age:18,
//     favcolor:"green",
//     data:function () {
//         console.log(this.name,this.age,this.favcolor)
//     }
// }

// console.log(ob.data())

// console.table(ob)

// // const countries = [
// //     ['Finland', 'Helsinki'],
// //     ['Sweden', 'Stockholm'],
// //     ['Norway', 'Oslo']
// //   ]
// //   console.table(countries)

//   const users = [
//     {
//       name: 'Asabeneh',
//       title: 'Programmer',
//       country: 'Finland',
//       city: 'Helsinki',
//       age: 250
//     },
//     {
//       name: 'Eyob',
//       title: 'Teacher',
//       country: 'Sweden',
//       city: 'London',
//       age: 25
//     },
//     {
//       name: 'Asab',
//       title: 'Instructor',
//       country: 'Norway',
//       city: 'Oslo',
//       age: 22
//     },
//     {
//       name: 'Matias',
//       title: 'Developer',
//       country: 'Denmark',
//       city: 'Copenhagen',
//       age: 28
//     }
//   ]
//   console.table(users)


  
//   console.time("Print")
//   setTimeout(()=>{
//       console.log("Hi")
//     },1000)
    

//   console.timeEnd("Print")
  
//   console.info("Hi iam swaoop")


  const names = ['Asabeneh', 'Brook', 'David', 'John']
  const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
  ]
  const user = {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
  }
  const users = [
    {
      name: 'Asabeneh',
      title: 'Programmer',
      country: 'Finland',
      city: 'Helsinki',
      age: 250
    },
    {
      name: 'Eyob',
      title: 'Teacher',
      country: 'Sweden',
      city: 'London',
      age: 25
    },
    {
      name: 'Asab',
      title: 'Instructor',
      country: 'Norway',
      city: 'Oslo',
      age: 22
    },
    {
      name: 'Matias',
      title: 'Developer',
      country: 'Denmark',
      city: 'Copenhagen',
      age: 28
    }
  ]
  
//   console.group('Names')
//   console.log(names)
//   console.groupEnd()
  
//   console.group('Countries')
//   console.log(countries)
//   console.groupEnd()
  
//   console.group('Users')
//   console.log(user)
//   console.log(users)
//   console.groupEnd()


  console.assert(3!=3,"Helow")



console.time("While loop")
let i=0
while(i<10){
    i++;
}
console.timeEnd("While loop")
console.time("for loop")
for(let i=0;i<10;i++){
    
}
console.timeEnd("for loop")
console.time("for each")
let ar=[1,2,3,4,5,6,7,8,9,10]
let sum=0
ar.forEach(el=>sum+=el)
console.timeEnd("for each")



