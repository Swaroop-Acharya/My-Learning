//Regular expressions

// Two ways to create a pattern 
// 1 Using RegExp constructor
// 2 Using Regular Expression Literal


// 1)
const str="I love you, and you Love me"
const pattern="love"
const flag="gi"
const regEx=new RegExp(pattern,flag)
console.log(str.match(regEx))


// 2)

const str1="I love you, and you Love me"
const pattern1=/love/gi
console.log(str.match(pattern1))



//RegExp object methods

// 1) test() - returns true if the pattern exists else false
const pattern2=/hello/gi
console.log(pattern1.test(str1))
console.log(pattern2.test(str1))


//2) search()- returns the index of the pattern else returns -1

console.log(str1.search(pattern1))
console.log(str1.search(pattern2))

// 3) replace() 

const txt1='Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language'

const solutionTxt=txt1.replace(/python/gi,"Javascript")

console.log(solutionTxt)


const txt2 = '%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
p%e%o%ple.\
I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.'

const filteredTxt=txt2.replace(/%/gi,'')
console.log(filteredTxt)


const pattern3 = /[a].*/g  // this square bracket means a and . means any character except new line
const txt3 = 'Apple and banana are fruits'
const matches1 = txt3.match(pattern3)

console.log(matches1)  

const txt4 = 'This regular expression example was made in December 6,  2019.'
const pattern4 = /\\w{4}\b/g  //  exactly four character words
const matches2 = txt4.match(pattern4)
console.log(matches2) 