// const dog={}
// console.log(dog)
// console.log(Object.keys(dog).length)

// dog.name="Jack"
// dog.legs=4
// dog.color="green"
// dog.age=5
// dog.bark = function(){
//     return "woof woof"
// }

// console.log(dog.name)
// console.log(dog.legs)
// console.log(dog.color)
// console.log(dog.age)
// console.log(dog.bark())

// dog.breed="bulldog"

//Exercises: Level 2

const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

//   1) Find the person who has many skills in the users object.

// console.log(users.Alex)

// let personWithMaxSkil;
// let maxSkill=0;
// let skillCount;
// for(const user in users){
//     skillCount=users[user].skills.length;
//     if(skillCount > maxSkill){
//         maxSkill=skillCount;
//         personWithMaxSkil=user
//     }
// }

// console.log(personWithMaxSkil)
// console.log(maxSkill)

// 2) Count logged in users, count users having greater than equal
// to 50 points from the following object.

// let loggedCount=0
// let greaterPointsCount=0

// for(const user in users){
//     if(users[user].isLoggedIn === true){
//         loggedCount++
//     }
//     if(users[user].points >= 50){
//         greaterPointsCount++
//     }

// }

// console.log(loggedCount)
// console.log(greaterPointsCount)

// 3)Find people who are MERN stack developer from the users object

// const mernStack=['MongoDB', 'Express', 'React', 'Node']
// let people=[]

// let count=0
// let skillsArr=[]
// for(const user in users){
//     count=0
//     skillsArr=users[user].skills;
//     for(let i=0;i<skillsArr.length;i++){

//         if(mernStack.includes(skillsArr[i])){
//             count++;
//         }
//     }
//     if(count===mernStack.length){
//         console.log(user)
//     }

// }

//optimized

// const mernStack=['MongoDB', 'Express', 'React', 'Node']
// let people=[]
// let skillsArr=[]
// for(const user in users){
//     skillsArr=users[user].skills
//     if(mernStack.every((skill)=>skillsArr.includes(skill))){
//         people.push(user)
//     }
// }

// console.log(people)

//Exercise level: 3

const usersData = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "08/01/2020 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2020 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "08/01/2020 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  },
];

//1 Imagine you are getting the above users collection from a
//  MongoDB database. a. Create a function called signUp which allows
//   user to add to the collection. If user exists, inform the user
//   that he has already an account.

// function userExists(username,email){
//    return usersData.some((user)=>{
//     return (user.username ===username || user.email === email)
//    });
// }

// function signUp(username,email,password){
//   if(userExists(username,email)){
//     console.log("Username or email already exists. Please signin")
//     return
//   }
//   const _id=Math.random().toString(36).slice(2,7);
//   const newUser={
//     _id,
//     username,
//     email,
//     password,
//     createdAt: new Date().toLocaleString(),
//     isLoggedIn:true
//   }

//   usersData.push(newUser)
//   console.log("SignUp successfull!!")
//   return newUser
// }

// function signIn(usernameOrEmail,password){
//     const user=usersData.find((user)=>{
//       return (user.username===usernameOrEmail || user.email=== usernameOrEmail)
//     })
//     if(!user){
//       console.log("user not found . please signup first")
//       return
//     }

//     if(user.password===password){
//       user.isLoggedIn=true
//       console.log("Done signin")
//       return user
//     }else{
//       console.log('Incorrect password. Please try again.');
//       return;
//     }
// }
// signIn('Alex', '123123');
// signIn('NonExistentUser', 'wrongpassword');

const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];

// 2 he products array has three elements and each of them has
// six properties.
// a. Create a function called rateProduct which rates the product
// b. Create a function called averageRating which calculate the average rating of a product

// 2)a

// function rateProduct(name, userId, rate) {
//   const product = products.find((p) => {
//     return p.name === name;
//   });
//   if (!product) {
//     console.log("Product doesnt exist");
//     return;
//   }

//   const existingUserRating = product.ratings.find((rating) => {
//     return rating.userId === userId;
//   });

//   if (existingUserRating) {
//     existingUserRating.rate = rate;
//   } else {
//     const newRating = {
//       userId,
//       rate,
//     };
//     product.ratings.push(newRating);
//     console.log("Rating submitted");
//     return newRating;
//   }
// }

// rateProduct("Laptop", "fg12cy", 5);
// rateProduct("Laptop", "fg12cy", 4.5);
// rateProduct("mobile phone", "fg12cy", 4.5);
// rateProduct("mobile phone", "fgf12cy", 4.5);
// console.log(products);


// 2) b 

// function averageRating(name){
//   const product= products.find((p)=> p.name===name)
//   if(!product){
//     console.log("Product doesnt exist")
//     return
//   }

//   let sum=0
//   const count=product.ratings.length
//   let r 
//   for(let i=0;i<count;i++){
//     r=product.ratings[i].rate
//     sum+=r
//   }
//   return sum/count
// }


// const avg=averageRating("TV")
// console.log(avg)


// 4) Create a function called likeProduct. This function will 
// helps to like to the product if it is not liked and remove like 
// if it was liked.

// function likeProduct(name,userId){
//   const product = products.find((p)=> p.name===name)
//   if(!product){
//     console.log("Product doesnt exist")
//     return 
//   }
//   if(product.likes.includes(userId)){
//     let index=product.likes.indexOf(userId)
//     product.likes.splice(index,1)
//     console.log("Liked withdrawn")
//   }else{
//     product.likes.push(userId)
//     console.log("Done liking")
//   }
// }

// likeProduct("Laptop","fg2cy")
// console.log(products)