//Event handling and embeded expressions

//Handling events using inline anonymous ES5 functions

function Es5f(){
    return (
        <button onClick={function(){console.log("U cliked ES5 function")}}>Click</button>
    )
}

export {Es5f};

//Handling events using inline anonymous ES6 funtions(arrow funtion)

function Es6f(){
    return (
        <button onClick={()=>{console.log("U cliked ES6 function")}}>Submit</button>
    )
}

export {Es6f};

//Handling events using separate function declarations
function Fn1(){
    function Eventhandle(){
        console.log("U clicked function declaration");    
    }
    return(
    <button onClick={Eventhandle}>Commit</button>
    );
}
export {Fn1};

function Fn2(){
    const EventHandle=()=>console.log("U clicked function expression")
    return(
    <button onClick={EventHandle}>Done</button>
    )
}

export {Fn2};