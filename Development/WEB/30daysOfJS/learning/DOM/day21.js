
//getElementsByTagName,getElementsByClassName,getElementById

const allTitles=document.getElementsByTagName('h1')
console.log(allTitles)

for(const ele of allTitles){
    console.log(ele)
}

for(let i=0;i<allTitles.length;i++){
    console.log(allTitles[i])
}


const byClass=document.getElementsByClassName('title')
console.log(byClass)

let firstTitle = document.getElementById('first-title')
console.log(firstTitle)


//querySelector
let firstTitle1 = document.querySelector('h1') // select the first available h1 element
let firstTitle2 = document.querySelector('#first-title') // select id with first-title
let firstTitle3 = document.querySelector('.title') // select the first available element with class title


//querySelectorAll

let titleArr=document.querySelectorAll('.title')
console.log(titleArr)

console.log(allTitles.length) // 3
titleArr.forEach(elem=>console.log(elem))


// Adding attribute
const titles = document.querySelectorAll('h1')
console.log(titles)
titles[3].id='fourth-title'
titles[3].className='title'
console.log(titles)