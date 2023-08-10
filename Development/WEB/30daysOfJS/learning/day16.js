const usersText = `{
    "users":[
      {
        "firstName":"Asabeneh",
        "lastName":"Yetayeh",
        "age":250,
        "email":"asab@asb.com"
      },
      {
        "firstName":"Alex",
        "lastName":"James",
        "age":25,
        "email":"alex@alex.com"
      },
      {
      "firstName":"Lidiya",
      "lastName":"Tekle",
      "age":28,
      "email":"lidiya@lidiya.com"
      }
    ]
    }`

// const usersObj=JSON.parse(usersText,undefined,4)
// console.log(usersObj)


const userobj1=JSON.parse(usersText,(key,value)=>{
    let newVal=
    typeof value==='string' && key!='email'?value.toUpperCase(): value
    return newVal
})

console.log(userobj1)

const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'Redux',
        'MongoDB',
        'Express',
        'React',
        'Node'
      ],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'MongoDB',
        'Express',
        'React',
        'Node'
      ],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }

  const replacer =(key,value)=>{
    if(key==='skills'){
        return value=undefined
    }
    return value
  }
  
  const jsonObj1=JSON.stringify(users,replacer,2)
  
  
  console.log(jsonObj1)
  
  const user1 = {
      firstName: 'Asabeneh',
      lastName: 'Yetayeh',
      country: 'Finland',
      city: 'Helsinki',
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Python'],
      age: 250,
      isLoggedIn: false,
      points: 30
  }
  
  const txt = JSON.stringify(user1,['firstName', 'lastName', 'country', 'city', 'age'],4)
  console.log(txt)
  

 