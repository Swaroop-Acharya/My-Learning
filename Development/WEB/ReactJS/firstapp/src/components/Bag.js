function Bag(props){
    const style={
        border: "2px solid black",
        background:"lightblue",
        padding:"10px",
        textAlign:"left"
    }
    return (

        <div style={style}>
            {props.children}
        </div>
    );
}

export default Bag;