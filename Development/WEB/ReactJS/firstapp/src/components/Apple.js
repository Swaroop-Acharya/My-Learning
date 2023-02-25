function Apple(props){
    return(
        <div>
             <h3>I purchased Apples from Dmart,their details:</h3>
                <p>{props.quantity}</p>
                <p>{props.country}</p>
        </div>
    );
};
export default Apple;