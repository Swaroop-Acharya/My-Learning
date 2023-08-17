const mainContainer=document.querySelector('.container')
const codeMessage=document.querySelector('.codeMessage')
const h1=document.querySelector('h1')
const h3=document.querySelector('h3')

document.body.addEventListener('keypress',e=>{
    h1.textContent="You Pressed "
    console.log(e)
    const span=document.createElement('span')
    span.textContent=e.key
    span.style.color='green'
    h1.appendChild(span)
    const div=document.createElement('div')
    h3.textContent=e.keyCode
    codeMessage.appendChild(h3)
})