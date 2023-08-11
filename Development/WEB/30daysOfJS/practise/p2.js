// const obj={
//     name:"Swaroop",
//     age:20,
//     skills:{
//         frontend:['HTML','CSS','JS'],
//         backend: ['PHP','SQL','XAMP']
//     }
// }

// const copyObj={...obj}

// copyObj.name="Sudeep"
// copyObj.skills.frontend.push("Tailwind")

// console.log(copyObj)
// console.log(obj)

// const obj1=[
//     {Apple:10,orange:4},
//     {orange:10,curyleaves:4},
//     {Oil:10,Apple:4},
//     {carrot:10,beans:4},
// ]

// const count={}
// obj1.forEach((ele)=>{
//     for(each in ele){
//         if(count[each]){
//             count[each]=count[each]+ele[each]

//         }else{
//             count[each]=ele[each]

//         }
//     }
// })
// console.log(count)

const arr = ["a", "b", "c", "c"];
const obj2 = {};
const obj3 = {};

arr.forEach((ele, i) => {
  obj2[ele] = ele;
  obj3[i] = ele;
});

console.log(obj2);
console.log(obj3);

//Same solution using reduce() method
const newObj = arr.reduce((acc, cur) => {
  return ({ ...acc, [cur]: cur });
}, {});
console.log(newObj);


console.log(Infinity && true)
