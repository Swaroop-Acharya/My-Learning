const url = 'https://restcountries.com/v2/all'
// Read the countries API using fetch and print the name of country, capital, languages, population and area.
// fetch(url).then(res=>res.json()).then(data=>{
//     for(country of data){
//         console.log(country.name)
//         console.log(country.capital)
//         console.log(country.languages)
//         console.log(country.population)
//         console.log(country.area)
        
//     }
// })

async function fetchCountryData(){
    try{
        const response=await fetch(url)
        console.log("Processing the response")
        const data=await response.json()
        console.log(data)
    }catch(err){
        console.log(err)
    }
}

fetchCountryData()