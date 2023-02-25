function Orange(props){
    return (
        <div>
        <h3>I purchased Orange from Big centre,their details:</h3>
           <p>{props.quantity}</p>
           <p>{props.country}</p>
   </div>
    );
}
export default Orange;