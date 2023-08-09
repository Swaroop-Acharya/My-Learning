// let string ="Swaroop"
// console.log(string.substr(3,4))
// console.log(string.slice())

const d=new Date()
console.log(d.toLocaleString()) // 9/8/2023, 11:56:56 am
console.log(d.getFullYear()) // 2023
console.log(d.getMonth()) // 7
console.log(d.getDate()) // 9
console.log(d.getHours()) // 11
console.log(d.getMinutes()) // 58
console.log(d.getTime()) // 58
console.log(d.getDay()) // 3 means wednesday

console.log(3 > 2)              // true, because 3 is greater than 2
console.log(3 >= 2)             // true, because 3 is greater than 2
console.log(3 < 2)              // false,  because 3 is greater than 2
console.log(2 < 3)              // true, because 2 is less than 3
console.log(2 <= 3)             // true, because 2 is less than 3
console.log(3 == 2)             // false, because 3 is not equal to 2
console.log(3 != 2)             // true, because 3 is not equal to 2
console.log(3 == '3')           // true, compare only value
console.log(3 === '3')          // false, compare both value and data type
console.log(3 !== '3')          // true, compare both value and data type
console.log(3 != 3)             // false, compare only value
console.log(3 !== 3)            // false, compare both value and data type
console.log(0 == false)         // true, equivalent
console.log(0 === false)        // false, not exactly the same
console.log(0 == '')            // true, equivalent
console.log(0 == ' ')           // true, equivalent
console.log(0 === '')           // false, not exactly the same
console.log(1 == true)          // true, equivalent
console.log(1 === true)         // false, not exactly the same
console.log(undefined == null)  // true
console.log(undefined === null) // false
console.log(NaN == NaN)         // false, not equal
console.log(NaN === NaN)        // false
console.log(typeof NaN)         // number

console.log('mango'.length == 'avocado'.length)  // false
console.log('mango'.length != 'avocado'.length)  // true
console.log('mango'.length < 'avocado'.length)   // true
console.log('milk'.length == 'meat'.length)      // true
console.log('milk'.length != 'meat'.length)      // false
console.log('tomato'.length == 'potato'.length)  // true
console.log('python'.length > 'dragon'.length)   // false


//string methods in Javascript
// 1. Returns the length of the string
str.length

// 2. Converts the string to uppercase
str.toUpperCase()

// 3. Extracts a substring from the given index with the specified number of characters
str.substr(index, numberCharacters)

// 4. Extracts a substring between the specified indices
str.substring(firstIndex, stoppingIndex)

// 5. Splits the string into an array of substrings based on a delimiter
str.split()

// 6. Checks if the string contains the specified substring
str.includes(substring)

// 7. Replaces occurrences of a substring with a replacing string
str.replace(substring, replacingString)

// 8. Returns the character at the specified index in the string
str.charAt(index)

// 9. Returns the ASCII value of the character at the specified index
str.charCodeAt(index)

// 10. Returns the index of the first occurrence of a substring in the string
str.indexOf(substring)

// 11. Returns the index of the last occurrence of a substring in the string
str.lastIndexOf(substring)

// 12. Concatenates multiple strings together
str.concat(string1, string2, string3, ...)

// 13. Checks if the string starts with the specified substring
str.startsWith(substring)

// 14. Checks if the string ends with the specified substring
str.endsWith(substring)

// 15. Searches for a substring and returns the index of the first match
str.search(substring)

// 16. Repeats the string a specified number of times
str.repeat(n)

// 17. Searches for a pattern in the string and returns an array of matches
str.match(pattern)

