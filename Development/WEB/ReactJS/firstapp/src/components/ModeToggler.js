function ModeToggler(){
    let darkMode = true;
    const messageDark=<h1>Dark mode is on</h1>
    const messageLight=<h1>Light mode is on</h1>

    function Toggler(){
        darkMode = !darkMode;
        if (darkMode===true){
            console.log("Dark mode is on")
        }else{
            console.log("Light mode is on")
        }
    }


    return (
        <div>
            {darkMode ? messageDark : messageLight}
            <button onClick={Toggler}>Click </button>
        </div>
        
        
        )
}

export default ModeToggler;