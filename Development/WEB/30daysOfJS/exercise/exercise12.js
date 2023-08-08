//level1
// Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’

// const str="He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month."
// const pattern=/\d+/gi
// const incomeArr=str.match(pattern)
// let sum=0
// incomeArr.forEach((i)=>{
//     sum+=parseInt(i)

// });
// console.log(sum)

// Write a pattern which identify if a string is a valid JavaScript variable

// is_valid_variable('first_name') # True
// is_valid_variable('first-name') # False
// is_valid_variable('1first_name') # False
// is_valid_variable('firstname') # True

// function isValidVariable(variableName) {
//     const pattern = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;
//     return pattern.test(variableName);
// }

// console.log(isValidVariable('first_name '));   // true
// console.log(isValidVariable('first-name'));   // false
// console.log(isValidVariable('1first_name'));  // false
// console.log(isValidVariable('firstname'));    // true

//Writ a function which cleans text. Clean the following text. After cleaning, count three most frequent words in the string.
// sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`
// console.log(cleanText(sentence)

function cleanText(sentence){
    const pattern=/[^\w\s]/g
    return sentence.replace(pattern,'')
}
sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`
const res=cleanText(sentence)
console.log(cleanText(sentence))



function tenMostFrequentWords(paragraph) {
    
    let arr = paragraph.split(/\W+/);
    let uniqueWordsArr = new Set(arr.slice(0,arr.length-1));
    let outArr = [];
   
    for (const word of uniqueWordsArr) {
        const pattern = new RegExp(`\\b${word}\\b`, "gi");
        const sameWordArr = paragraph.match(pattern);
        // console.log(sameWordArr)
        outArr.push({ word: word, count: sameWordArr.length });
    }
   return outArr.sort((a,b)=>{
    return b.count-a.count 
   }).filter((_,index)=>index<10)
}


let paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`;
console.log(tenMostFrequentWords(paragraph))
console.log(tenMostFrequentWords(res))

