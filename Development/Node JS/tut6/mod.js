function average(arr){
    sum=0;
    arr.forEach(element => {
        sum+=element;

    });
    return sum;
}

// module.exports= average;
// module.exports= {
//     average,
//     name:"swaroop",
//     repo:"Github"
// };

// module.exports is itself an object we can declare as follow

module.exports.name="Swroop acharya";