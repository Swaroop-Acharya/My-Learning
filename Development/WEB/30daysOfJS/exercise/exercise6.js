// for(let i=1;i<=10;i++){
//     console.log(i)
//   } 

// let i=1
// while (i<=10) {
//     console.log(i)
//     i++;
// }

// do{
//     console.log(i)
//     i++;
// }while(i<=10);


// for(let i=1;i<=5;i++){
//     let line=''
//     for(let j=1;j<=i;j++){
//         line+='#'
//     }
//    console.log(line)

// }


// for(let i=0;i<=10;i++){
//     console.log(i+' x '+i+' = '+i*i)
// }


// for(let i=0;i<=10;i++){
//     console.log(i+' '+i**2+' '+i**3)
// }

// for(let i=0;i<=100;i++){
//     if(i%2===0){

//         console.log(i)
//     }
// }



// let sum=0
// for(let i=0;i<=100;i++){
//     sum+=i
// }
// console.log(sum)

// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
// let oddSum=0,evenSum=0
// for(let i=0;i<=100;i++){
//    if(i%2===0){
//     evenSum+=i
//    }else{
//     oddSum+=i
//    }
// }
// let result=[]
// result.push(evenSum)
// result.push(oddSum)

// console.log(result)

// Develop a small script which generate array of 5 random numbers

// const arr=[]


// while(arr.length <5){
//     const randNum=Math.floor(Math.random()*11)
//     if(!arr.includes(randNum)){
//         arr.push(randNum)

//     }
// }

// console.log(arr)

// function generateRandomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }
  
//   function generateUniqueRandomArray(length, min, max) {
//     const uniqueArray = [];
//     for (let i = 0; i < length; i++) {
//       let randomNum;
//       do {
//         randomNum = generateRandomNumber(min, max);
//       } while (uniqueArray.includes(randomNum));
//       uniqueArray.push(randomNum);
//     }
//     return uniqueArray;
//   }
  
//   const uniqueRandomNumbersArray = generateUniqueRandomArray(5, 1, 100);
//   console.log(uniqueRandomNumbersArray);
  

//Develop a small script which generate a six characters random id:

// const characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghiklmnopqrstuvwxyz0123456789"

// let id=''
// let index
// index=Math.floor(Math.random()*characters.length+1)
// for(let i=0;i<6;i++){
//     index=Math.floor(Math.random()*characters.length)
//     id+=characters[index]
// }

// console.log(id)


//Write a script which generates a random rgb color number.
// const red=Math.floor(Math.random()*256)
// const green=Math.floor(Math.random()*256)
// const blue=Math.floor(Math.random()*256)
// console.log(`rgb(${red},${green},${blue})`)


// const characters="0123456789ABCDEF"
// let index
// let hexId=''
// for(let i=0;i<6;i++){
//     index=Math.floor(Math.random()*characters.length)
//     hexId+=characters[index]
// }
// console.log(hexId)

// Use the countries array to create the following array of arrays:
// const countries = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya'
//   ]

// const mainArr=[]
// let countryInfo

// for(let i=0;i<countries.length;i++){
//     countryInfo=[]
//     countryInfo.push(countries[i])
//     countryInfo.push(countries[i].slice(0,3).toUpperCase())
//     countryInfo.push(countries[i].length)
//     mainArr.push(countryInfo)
    
// }

// console.log(mainArr)

//Print all the elements of array as shown below.
// HTML
// CSS
// JS
// REACT
// NODE
// EXPRESS
// MONGODB
// const fullStack = [
//     ['HTML', 'CSS', 'JS', 'React'],
//     ['Node', 'Express', 'MongoDB']
//   ]

// for(const arr of fullStack){
//     for(const a of arr){
//         console.log(a)
//     }
// }


// const countries = [
//     'Afghanistan',
//     'Albania',
//     'Algeria',
//     'Andorra',
//     'Angola',
//     'Antigua and Barbuda',
//     'Argentina',
//     'Armenia',
//     'Australia',
//     'Austria',
//     'Azerbaijan',
//     'Bahamas',
//     'Bahrain',
//     'Bangladesh',
//     'Barbados',
//     'Belarus',
//     'Belgium',
//     'Belize',
//     'Benin',
//     'Bhutan',
//     'Bolivia',
//     'Bosnia and Herzegovina',
//     'Botswana',
//     'Brazil',
//     'Brunei',
//     'Bulgaria',
//     'Burkina Faso',
//     'Burundi',
//     'Cambodia',
//     'Cameroon',
//     'Canada',
//     'Cape Verde',
//     'Central African Republic',
//     'Chad',
//     'Chile',
//     'China',
//     'Colombi',
//     'Comoros',
//     'Congo (Brazzaville)',
//     'Congo',
//     'Costa Rica',
//     "Cote d'Ivoire",
//     'Croatia',
//     'Cuba',
//     'Cyprus',
//     'Czech Republic',
//     'Denmark',
//     'Djibouti',
//     'Dominica',
//     'Dominican Republic',
//     'East Timor (Timor Timur)',
//     'Ecuador',
//     'Egypt',
//     'El Salvador',
//     'Equatorial Guinea',
//     'Eritrea',
//     'Estonia',
//     'Ethiopia',
//     'Fiji',
//     'Finland',
//     'France',
//     'Gabon',
//     'Gambia, The',
//     'Georgia',
//     'Germany',
//     'Ghana',
//     'Greece',
//     'Grenada',
//     'Guatemala',
//     'Guinea',
//     'Guinea-Bissau',
//     'Guyana',
//     'Haiti',
//     'Honduras',
//     'Hungary',
//     'Iceland',
//     'India',
//     'Indonesia',
//     'Iran',
//     'Iraq',
//     'Ireland',
//     'Israel',
//     'Italy',
//     'Jamaica',
//     'Japan',
//     'Jordan',
//     'Kazakhstan',
//     'Kenya',
//     'Kiribati',
//     'Korea, North',
//     'Korea, South',
//     'Kuwait',
//     'Kyrgyzstan',
//     'Laos',
//     'Latvia',
//     'Lebanon',
//     'Lesotho',
//     'Liberia',
//     'Libya',
//     'Liechtenstein',
//     'Lithuania',
//     'Luxembourg',
//     'Macedonia',
//     'Madagascar',
//     'Malawi',
//     'Malaysia',
//     'Maldives',
//     'Mali',
//     'Malta',
//     'Marshall Islands',
//     'Mauritania',
//     'Mauritius',
//     'Mexico',
//     'Micronesia',
//     'Moldova',
//     'Monaco',
//     'Mongolia',
//     'Morocco',
//     'Mozambique',
//     'Myanmar',
//     'Namibia',
//     'Nauru',
//     'Nepal',
//     'Netherlands',
//     'New Zealand',
//     'Nicaragua',
//     'Niger',
//     'Nigeria',
//     'Norway',
//     'Oman',
//     'Pakistan',
//     'Palau',
//     'Panama',
//     'Papua New Guinea',
//     'Paraguay',
//     'Peru',
//     'Philippines',
//     'Poland',
//     'Portugal',
//     'Qatar',
//     'Romania',
//     'Russia',
//     'Rwanda',
//     'Saint Kitts and Nevis',
//     'Saint Lucia',
//     'Saint Vincent',
//     'Samoa',
//     'San Marino',
//     'Sao Tome and Principe',
//     'Saudi Arabia',
//     'Senegal',
//     'Serbia and Montenegro',
//     'Seychelles',
//     'Sierra Leone',
//     'Singapore',
//     'Slovakia',
//     'Slovenia',
//     'Solomon Islands',
//     'Somalia',
//     'South Africa',
//     'Spain',
//     'Sri Lanka',
//     'Sudan',
//     'Suriname',
//     'Swaziland',
//     'Sweden',
//     'Switzerland',
//     'Syria',
//     'Taiwan',
//     'Tajikistan',
//     'Tanzania',
//     'Thailand',
//     'Togo',
//     'Tonga',
//     'Trinidad and Tobago',
//     'Tunisia',
//     'Turkey',
//     'Turkmenistan',
//     'Tuvalu',
//     'Uganda',
//     'Ukraine',
//     'United Arab Emirates',
//     'United Kingdom',
//     'United States',
//     'Uruguay',
//     'Uzbekistan',
//     'Vanuatu',
//     'Vatican City',
//     'Venezuela',
//     'Vietnam',
//     'Yemen',
//     'Zambia',
//     'Zimbabwe'
//   ]


//   function hasMoreWords(country){
//     let arr=country.split(" ");
//     if(arr.length>=2){
//         return true;
//     }
//     return false;
    
//   }



//   function countryExtracter(array){
//     let result=[]
//     for(let i=0;i<array.length;i++){
//         // console.log(array[i])
//         if(hasMoreWords(array[i])){
//             result.push(array[i])
//         }
//     }
//     return result
//   }

//   const solution=countryExtracter(countries)
//   console.log(solution)