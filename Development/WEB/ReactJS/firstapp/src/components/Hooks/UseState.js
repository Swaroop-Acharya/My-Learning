import { useState } from 'react'

//Example 1:-
function UseState(){
    const [text,setText]=useState("");
    function handleChange(e){
        setText(e.target.value);
    }
    return(
        <div>
            <h2>Use State Hook</h2>
            <h4>Example 1 input display </h4>
            <input value ={text} onChange={handleChange}/>
            <p>You typed {text}</p>
            <button onClick={()=> setText("")}>Reset</button>
        </div>
    )
}

export default UseState;

//Example 2:- counter

function Counter(){
    const [count,setCount]=useState(0);
    
    function increementor(){
        //This below method of increementin is wrong because when u want to increment two time with same method it will just overide the state variable
        // setCount(count+1);
        // setCount(count+1);
        setCount(prevCount=>prevCount+1);
        
    }

    function decreementor(){
        // setCount(count-1);
        // setCount(count-1);
        setCount(prevCount=>prevCount-1);
    }

    return(
        <div>
            <h4>Example 2 counter application</h4>
            <button onClick={increementor}>+</button>
            <span>{count}</span>
            <button onClick={decreementor}>-</button>
        </div>
    )
}
export {Counter};


//Example 3:-
//merging update is not automatic when we working with object
//to update the changes we have to mention old values and the updated value in set method
function ObjectData(){
    const [form , setForm]=useState(
        {
            firstname:"John",
            lastname:"wick",
            email:"example@gmail.com"
        }
        
    )

    return (
        <div>

        <h4>Example 3 passing object as a state</h4>
        <label>
            First name:
            <input value={form.firstname}
                   onChange={e=>setForm({...form,firstname:e.target.value})}
            />
        </label>
        
        <label>
            Second name:
            <input value={form.lastname}
                   onChange={e=>setForm({...form,lastname:e.target.value})}
            />
        </label>
        <label>
             Email:
            <input value={form.email}
                   onChange={e=>setForm({...form,email:e.target.value})}
            />
        </label>

        <h5>Entered Details:</h5>
        <p>{form.firstname}{' '} {form.lastname}{' '} ({form.email})</p>
        
        </div>
    )
}

export {ObjectData};


//Example:-4 Passing funtion as a state
//In this passing function as a state will help when we have to do some calculation once the 
//component is rendered but this calculation must be done initially only once , we can achieve using as follows
function PassFunction(){
    const [count,setCount]=useState(()=>{
        console.log("It will display once after one render");
        return 0;
    });
    
    function increementor(){
        //This below method of increementin is wrong because when u want to increment two time with same method it will just overide the state variable
        // setCount(count+1);
        // setCount(count+1);
        setCount(prevCount=>prevCount+1);
        
    }

    function decreementor(){
        // setCount(count-1);
        // setCount(count-1);
        setCount(prevCount=>prevCount-1);
    }

    return(
        <div>
            <h4>Example 4 counter application which has state passed as an function (inspect to see)</h4>
            <button onClick={increementor}>+</button>
            <span>{count}</span>
            <button onClick={decreementor}>-</button>
        </div>
    )
}
export {PassFunction};

//Example 5:-
//Demonstation of the above example
function PassFunctionEx(){
    const [squareArea,increementArea]=useState(()=> calculation(width,height));
    let width=2,height=2;
    function calculation(a,b){
        let result=a*b;
        console.log(result);
        return result;
    
    }
    function areaInc(){
        increementArea(prevArea=>prevArea+1);
    }

    return(
        <div>
            <h4>Example 5 Demonstation of example 4</h4>
            <span>{squareArea}</span>
            <button onClick={areaInc}>Increement</button>
        </div>
    )

}

export {PassFunctionEx}