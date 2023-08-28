// defining class
class Person {
    constructor(firstName, lastName) {
      console.log(this) // Check the output from here
      this.firstName = firstName
      this.lastName = lastName
    }

    
  }

const p1 = new Person("Swaroop","Acharya")


const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'


function largestCountry(data){
  const country=data.sort((a,b)=>{
    return b.area-a.area
  }).filter((ele,i)=>i<10)
  console.log(country)
}

async function doWork(){
  try {
    
    const response = await fetch(countriesAPI)
    const data = await response.json()
    largestCountry(data)
  } catch (error) {
    console.log(error.message)
  }
}
doWork()