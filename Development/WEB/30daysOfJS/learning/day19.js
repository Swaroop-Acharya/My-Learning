// Closure

// JavaScript allows writing function inside an outer function. 
// We can write as many inner functions as we want. If inner function
// access the variables of outer function then it is called closure.

//Higher order function

function outerFn(){

    function innerFn(){
        console.log("hello")
    }
    return innerFn;
}

const innerFnCaller=outerFn()
innerFnCaller()



// This is called closure
function outerFunction(){
    let count=0
    function innerFunction(){
        count++
        return count
    }
    return innerFunction;
}

const innerFnc=outerFunction()
console.log(innerFnc())
console.log(innerFnc())
console.log(innerFnc())




function ofunction(){
    let count=0;

    function plusOne(){
        count++
        return count
    }
    function minusOne(){
        count--
        return count
    }
    return{
        plusOne:plusOne(),
        minusOne:minusOne()
    }
}

const innerFuns=ofunction()
console.log(innerFuns.plusOne)
console.log(innerFuns.plusOne)
console.log(innerFuns.plusOne)


console.log(innerFuns.minusOne)
console.log(innerFuns.minusOne)
console.log(innerFuns.minusOne)
console.log(innerFuns.minusOne)





function mainFunction(){
    console.log("object")
}

const caller=mainFunction;




