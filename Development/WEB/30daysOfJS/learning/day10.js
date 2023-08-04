//Set- ut is iteratable
// Set is a collection of elements. Set can only contains unique elements.
// Let us see how to create a set in the section below.

// const companies=new Set()
// // console.log(companies)


// const a=[,61,2,1,34,56,6,6]

// const num= new Set(a)

// for(const n of num){
//     console.log(n)
// }
// a.sort()
// console.log(a)

// //adding ele


// companies.add("Ford")
// companies.add("Mustang")
// companies.add("tesla")
// companies.add("bentley")
// companies.add("bentley")
// console.log(companies)


// companies.delete("bentley")

// console.log(companies)
// console.log(companies.has("Ford")) //true
// console.log(companies.size) //true



// companies.clear()
// console.log(companies) //true



//Set usecase

// const languages = [
//     'English',
//     'Finnish',
//     'English',
//     'French',
//     'Spanish',
//     'English',
//     'French',
//   ]


// const langSet=new Set(languages)  

// const languageCountArr=[]



// for(const lan of langSet){
//     const filteredArr=languages.filter((lang)=> lang===lan)
//     console.log(filteredArr)
//     languageCountArr.push({language:lan,count:filteredArr.length})
// }

// console.log(languageCountArr)


// Union of sets 


// let a =[1,2,3,4,5]
// let b =[3,4,5,6,7,9,8,9,]
// let c=[...a,...b].sort()


// let C= new Set(c)
// console.log(C)


//Intersection of sets

// let a=[1,2,3,4,5,1,2,6,5]
// let b=[1,2,3,5]



// let B=new Set(b)

// let c = a.filter(ele=> B.has(ele))

// console.log(c)
// let C=new Set(c)
// console.log(C)


//Difference of sets

// let a=[1,2,3,4,5,1,2,6,5]
// let b=[1,2,3,5]



// let B=new Set(b)

// let c = a.filter(ele=> B.has(ele))

// console.log(c)
// let C=new Set(c)
// console.log(C)


//Map()




countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo'],
]
const newArr = new Map(countries)
console.log(newArr)


const map = new Map()
console.log(map)

map.set('Name','Swaroop')
map.set('Name','Sudeep')
map.set('Age',18)
map.set('Hobby','Coding')


console.log(map)
console.log(map.size)
console.log(map.get('Name'))
console.log(map.delete('Name'))
console.log(map.has("Age"))

for(const [key,value] of map){
    console.log(key,value)
}




map.clear()

console.log(map)