const paras=document.querySelector('p')
console.log(paras)

const byId=document.querySelector('#second-para')
console.log(byId)

const allParas=document.querySelectorAll('p')
console.log(allParas)

// Loop through the nodeList and get the text content of each paragraph

allParas.forEach((tag,i)=>{
    console.log(tag.textContent)
})

allParas[3].textContent='Fourth Para'


// Change stye of each paragraph using JavaScript(eg. color, background, 
// border, font-size, font-family)

allParas.forEach((tag,i)=>{
    tag.style.color='white'
    tag.style.backgroundColor='black'
    tag.style.border='2px solid cyan'
    tag.style.fontSize='30px'
    tag.style.fontFamily='Sans-sereif'
})

// Select all paragraphs and loop through each elements and 
// give the first and third paragraph a color of green, and 
// the second and the fourth paragraph a red color

allParas.forEach((tag,i)=>{
    i%2===0 ? tag.style.color='green' : tag.style.color='red'
})