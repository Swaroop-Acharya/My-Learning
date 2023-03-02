import { useRef ,useState} from "react";

function UseRef(){
const inputEl = useRef(' ');
const [text,setText]=useState(0);

function focus(){
    inputEl.current.focus();
}

return(
    <div>
        <h4>Use Ref hook</h4>
        <input ref={inputEl} value={text} onChange={(e)=>setText(e.target.value)}/>
        <button onClick={focus}>Focus</button>
    </div>
)


}

export { UseRef};