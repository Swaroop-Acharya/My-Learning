
//creating the element this will only create the element
//Appending the created element to the document as the child 
let title
for (let i = 0; i < 3; i++) {
    title = document.createElement('h1')
    title.className = 'title'
    title.style.fontSize = '24px'
    title.textContent = i
    document.body.appendChild(title)
    console.log(title)
}

// removing the child

const ul=document.querySelector('ul')
const lists=document.querySelectorAll('li')
// ul.innerHTML=''

for(const list of lists){
    ul.removeChild(list)
}
