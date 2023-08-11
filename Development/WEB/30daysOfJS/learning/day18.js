// // Promises

// //callback
// //promise constructor
// //async and await

// let userLeft=true
// let userWatchingOtherVideo=false

// // function watchTutCallback(sucessCallback,errorCallback)
// // {
// //     if(true){
// //         errorCallback({
// //             name:"User left",
// //             message:";-("
// //         })
// //     }else if(userWatchingOtherVideo){
// //         errorCallback({
// //             name:"Sorry",
// //             message:"User is watching other videos"
// //         })
// //     }else{
// //         sucessCallback("Congo user is watching your video and he subsribed")
// //     }
// // }

// // watchTutCallback((message)=>{
// //     console.log(message)
// // },(error)=>{
// //     console.log(error.name+"-----"+error.message)
// // })

// function watchTutPromise(){
//     return new Promise((resolve,reject)=>{
//         if(true){
//             reject({
//                 name:"User left",
//                 message:";-("
//             })
//         }else if(userWatchingOtherVideo){
//             reject({
//                 name:"Sorry",
//                 message:"User is watching other videos"
//             })
//         }else{
//             resolve("Congo user is watching your video and he subsribed")
//         }
//     })
// }

// watchTutPromise().then((message)=>{
//     console.log(message)
// }).catch((error)=>{
//     console.log(error.name,error.message)
// })

// function callbackExample(callback){
//     setTimeout(()=>{
//         const arr=["html",'css','js']
//         callback("",arr)  // string is true , empty string false
//     },2000)
// }

// function callback(message,error){
//     if(message){
//         console.log(message)
//     }else{
//         console.log(error)
//     }
// }
// callbackExample(callback)

// function PromiseExample(){
//     return new Promise((resolve,reject)=>{
//         const arr=["html",'css','js','nodejs']

//         if(arr.includes("nodejs")){
//             resolve("success node js found")
//         }else{
//             reject("Node js is not found")
//         }
//     })
// }

// PromiseExample().then((message)=>{
//     console.log(message)
// }).then(()=>{
//     console.log("hii")
// }).catch((message)=>{
//     console.log(message)
// })

// // Promise methods

// const p1=new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res("video 1 is recorded")
//     },3000)
// })
// const p2=new Promise((res,rej)=>{
//     res("video 2 is recorded")
// })
// const p3=new Promise((res,rej)=>{
//     res("video 3 is recorded")
// })

// Promise.all([p1,p2,p3]).then((mess)=>{
//     console.log(mess)
// })
// //mess is an array of results
// //all executes all the promises parallely
// //race executes
// Promise.race([p1,p2,p3]).then((mess)=>{
//     console.log(mess)
// })

// // Promise.all() is used when you need to wait for all promises
// //  to fulfill, while Promise.
// //  race() is used when you want to react as soon as any of the
// //  promises settle, regardless of fulfillment or rejection

function makeRequest(location) {
  return new Promise((res, rej) => {
    console.log(`Making request to ${location}`);
    if (location === "Google") {
      res("Gooogle says hi");
    } else {
      rej("we can only talk to google sorry");
    }
  });
}

function processRequrest(response) {
  return new Promise((res, rej) => {
    console.log("Processing the response");
    res("Extra information" + response);
  });
}

makeRequest("Facebook")
  .then((response) => {
    console.log(response);
    return processRequrest(response);
  })
  .then((message) => console.log(message))
  .catch((err) => console.log(err));

async function doWork() {
  try {
    const response = await makeRequest("meta");
    console.log("Processing the response");
    const message = await processRequrest(response);
    console.log(message);
  } catch (err) {
    console.log(err);
  }
}
doWork();

//Fetch API
fetch('https://fakestoreapi.com/products/',{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(
                {
                    title: 'test product',
                    price: 13.5,
                    description: 'lorem ipsum set',
                    image: 'https://i.pravatar.cc',
                    category: 'electronic'
                }
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
  .catch((error) => console.error(error)); // handling error if something wrong happens
